import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { getPlan, STUDIO } from '../src/lib/catalog'

test.beforeEach(async ({ page }) => {
  await page.clock.setFixedTime(new Date('2026-09-21T05:00:00Z')) // Monday 3pm AEST
  await page.goto('/')
})

test('the complete page loads with working images and no runtime errors', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
  await page.reload()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Transform.')
  for (const id of ['gym', 'classes', 'schedule', 'teachers', 'philosophy', 'membership', 'community']) {
    await expect(page.locator(`#${id}`)).toBeAttached()
  }
  await expect(page.locator('.practice-card')).toHaveCount(6)
  await expect(page.locator('.practice-card img')).toHaveCount(6)
  await expect(page.locator('.gym-photo img')).toHaveCount(3)
  await expect(page.locator('.teacher-card')).toHaveCount(3)
  await expect(page.locator('.pricing-card')).toHaveCount(3)
  await expect(page.locator('.testimonial-card')).toHaveCount(3)
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded()
    await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).complete && (element as HTMLImageElement).naturalWidth > 0)).toBe(true)
  }
  await page.evaluate(() => document.fonts.ready)
  await page.evaluate(() => window.scrollTo(0, 0))
  await expect(page.locator('.desktop-nav .is-active')).toHaveCount(0)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true)
  expect(errors).toEqual([])
  await page.screenshot({ path: testInfo.outputPath('homepage.png'), fullPage: true, animations: 'disabled' })
  await page.screenshot({ path: testInfo.outputPath('hero.png'), animations: 'disabled' })
})

test('the free trial dialog points to the studio\u2019s official form', async ({ page }) => {
  const trigger = page.getByRole('button', { name: 'Free Trial for Locals', exact: true }).first()
  await trigger.click()
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading')).toHaveText('A free trial, for locals.')
  const claim = dialog.getByRole('link', { name: 'Claim free trial' })
  await expect(claim).toHaveAttribute('href', STUDIO.trial)
  await expect(claim).toHaveAttribute('target', '_blank')
  await expect(claim).toHaveAttribute('rel', /noopener/)
  await expect(dialog.getByRole('link', { name: /0432 583 716/ })).toHaveAttribute('href', STUDIO.telephone)
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(trigger).toBeFocused()
})

test('practice cards open real booking details for that class', async ({ page }) => {
  await page.getByRole('button', { name: 'Yin Yoga — booking details' }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading')).toHaveText('Yin Yoga')
  await expect(dialog.locator('.upcoming-list')).toContainText('with Ella')
  const book = dialog.getByRole('link', { name: 'Book on MyClub Fitness' })
  await expect(book).toHaveAttribute('href', STUDIO.bookClasses)
  await page.getByRole('button', { name: 'Close dialog' }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
})

test('the timetable filters the studio\u2019s real classes and opens booking details', async ({ page }) => {
  const schedule = page.locator('#schedule')
  await schedule.getByRole('group', { name: 'Filter classes' }).getByRole('button', { name: 'Yoga & mindful', exact: true }).click()
  const names = await schedule.locator('.class-title').allTextContents()
  expect(names.sort()).toEqual(['Barre Align', 'Gentle Flow Yoga', 'Primal Flow', 'Vinyasa Yoga', 'Vinyasa Yoga', 'Yin Yoga'].sort())
  await expect(schedule.getByRole('button', { name: 'Previous week' })).toBeDisabled()
  await schedule.getByRole('button', { name: 'Next week' }).click()
  await expect(schedule.locator('.week-control')).toContainText('28 Sept — 4 Oct 2026')
  await schedule.getByRole('button', { name: 'Previous week' }).click()
  await schedule.getByRole('group', { name: 'Filter classes' }).getByRole('button', { name: 'All classes', exact: true }).click()
  await schedule.getByRole('button', { name: 'Pilates Sculpt, Monday 5:30pm, with Jenna, booking details', exact: true }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading')).toHaveText('Pilates Sculpt')
  await expect(dialog.getByRole('link', { name: 'Book on MyClub Fitness' })).toHaveAttribute('href', STUDIO.bookClasses)
})

test('past classes today are disabled while upcoming ones remain bookable', async ({ page }) => {
  const schedule = page.locator('#schedule')
  await expect(schedule.getByRole('button', { name: /Sweat \+ Lift, Monday 8am/ })).toBeDisabled()
  await expect(schedule.getByRole('button', { name: /Pilates Sculpt, Monday 5:30pm/ })).toBeEnabled()
})

test('membership cards show the real AUD plans and official sign-up links', async ({ page }) => {
  await page.getByRole('button', { name: 'Choose Ongoing Plus', exact: true }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog.getByRole('heading')).toHaveText('The Ongoing Plus')
  await expect(dialog.locator('.booking-price')).toContainText('A$29.95')
  await expect(dialog.getByRole('link', { name: 'Join on MyClub Fitness' })).toHaveAttribute('href', getPlan('ongoing-plus')!.signupUrl)
  await expect(dialog.locator('.membership-terms')).toContainText('30 days')
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: 'Choose Lifestyle', exact: true }).click()
  await expect(page.getByRole('dialog').locator('.booking-price')).toContainText('A$24.95')
  await expect(page.getByRole('dialog').locator('.membership-terms')).toContainText('A$150')
})

test('newsletter validation and signup go through the studio\u2019s own API', async ({ page }) => {
  const community = page.locator('#community')
  const input = community.getByRole('textbox', { name: 'Your email address' })
  await input.fill('invalid-address')
  await community.getByRole('button', { name: 'Join the Community' }).click()
  expect(await input.evaluate((element) => (element as HTMLInputElement).validity.valid)).toBe(false)

  const requests: string[] = []
  await page.route('**/api/newsletter', async (route) => {
    requests.push(route.request().postData() ?? '')
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' })
  })
  await input.fill('community@example.test')
  await community.getByRole('button', { name: 'Join the Community' }).click()
  await expect(community.getByRole('status')).toContainText('on the list')
  expect(requests).toEqual(['{"email":"community@example.test"}'])
})

test('newsletter failures are honest and recoverable', async ({ page }) => {
  const community = page.locator('#community')
  await page.route('**/api/newsletter', (route) => route.abort())
  await community.getByRole('textbox', { name: 'Your email address' }).fill('community@example.test')
  await community.getByRole('button', { name: 'Join the Community' }).click()
  await expect(community.getByRole('alert')).toContainText('reach the community list')
  await page.unroute('**/api/newsletter')
  await page.route('**/api/newsletter', (route) => route.fulfill({ status: 409, contentType: 'application/json', body: '{"error":"already subscribed"}' }))
  await community.getByRole('button', { name: 'Join the Community' }).click()
  await expect(community.getByRole('status')).toContainText('already on the list')
})

test('footer links are real: socials, contact details and info dialogs', async ({ page }) => {
  const footer = page.locator('.site-footer')
  await expect(footer.getByRole('link', { name: 'Transform Active on Instagram' })).toHaveAttribute('href', STUDIO.instagram)
  await expect(footer.getByRole('link', { name: 'Transform Active on Facebook' })).toHaveAttribute('href', STUDIO.facebook)
  await expect(footer.locator('address')).toContainText('4/4 Towers Dr')
  await expect(footer.locator('address')).toContainText('Mullumbimby NSW 2482')
  await footer.getByRole('button', { name: 'Class FAQs', exact: true }).click()
  await expect(page.getByRole('dialog').getByRole('heading', { name: 'Good to know.' })).toBeVisible()
  await expect(page.getByRole('dialog')).toContainText('MyClub Fitness')
  await page.getByRole('button', { name: 'Close dialog' }).click()
  await footer.getByRole('button', { name: 'Privacy', exact: true }).click()
  await expect(page.getByRole('dialog')).toContainText('Cloudflare')
  await page.getByRole('button', { name: 'Close dialog' }).click()
  await footer.getByRole('button', { name: 'Yin Yoga', exact: true }).click()
  await expect(page.getByRole('dialog').getByRole('heading')).toHaveText('Yin Yoga')
})

test('dialogs trap keyboard focus and restore it when dismissed', async ({ page }) => {
  const trigger = page.getByRole('button', { name: 'Free Trial for Locals', exact: true }).first()
  await trigger.click()
  for (let index = 0; index < 9; index++) {
    await page.keyboard.press('Tab')
    expect(await page.getByRole('dialog').evaluate((dialog) => dialog.contains(document.activeElement))).toBe(true)
  }
  await page.keyboard.press('Escape')
  await expect(trigger).toBeFocused()
})

test('the mobile menu navigates and closes correctly', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile navigation is only displayed below the desktop breakpoint.')
  await page.getByRole('button', { name: 'Open navigation menu' }).click()
  const menu = page.getByRole('dialog')
  await expect(menu.getByRole('navigation')).toBeVisible()
  await menu.getByRole('link', { name: /Timetable/ }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page).toHaveURL(/#schedule$/)
  await page.getByRole('button', { name: 'Open navigation menu' }).click()
  await page.getByRole('dialog').getByRole('button', { name: 'Free Trial for Locals' }).click()
  await expect(page.getByRole('dialog').getByRole('heading')).toHaveText('A free trial, for locals.')
  await page.keyboard.press('Escape')
  await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeFocused()
  await page.getByRole('button', { name: 'Open navigation menu' }).click()
  await page.getByRole('dialog').getByRole('link', { name: 'Transform Active Mullumbimby home' }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page).toHaveURL(/#home$/)
})

test('all common viewport widths remain free of horizontal page overflow', async ({ page, isMobile }) => {
  test.skip(isMobile, 'The desktop project exercises the complete breakpoint range.')
  for (const width of [320, 390, 640, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 })
    expect(await page.evaluate(() => ({ actual: document.documentElement.scrollWidth, expected: window.innerWidth }))).toEqual({ actual: width, expected: width })
  }
})

test('reduced-motion preferences stop the breathing animation', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Pause breathing animation' })).toBeDisabled()
  expect(await page.locator('.breathing-ring').count()).toBe(3)
  expect(await page.locator('.breathing-circles').evaluate((element) => element.getAnimations({ subtree: true }).some((animation) => animation.effect?.getTiming().iterations === Infinity))).toBe(false)
})

test('the breathing animation can be paused and resumed', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  const pause = page.getByRole('button', { name: 'Pause breathing animation' })
  const scale = () => page.locator('.breathing-ring-1').evaluate((ring) => {
    const transform = getComputedStyle(ring).transform
    return transform === 'none' ? 1 : new DOMMatrixReadOnly(transform).a
  })
  await expect(pause).toBeEnabled()
  await expect.poll(scale).toBeGreaterThan(1)
  await pause.click()
  await expect(page.getByRole('button', { name: 'Resume breathing animation' })).toHaveAttribute('aria-pressed', 'true')
  await expect.poll(scale).toBe(1)
  await page.getByRole('button', { name: 'Resume breathing animation' }).click()
  await expect(page.getByRole('button', { name: 'Pause breathing animation' })).toHaveAttribute('aria-pressed', 'false')
  await expect.poll(scale).toBeGreaterThan(1)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await expect(pause).toBeDisabled()
  await expect.poll(scale).toBe(1)
})

test('the page and dialogs pass automated accessibility checks', async ({ page }) => {
  test.setTimeout(60000)
  const audit = async () => {
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()
    return results.violations.map((violation) => ({ id: violation.id, nodes: violation.nodes.map((node) => ({ target: node.target, issue: node.failureSummary })) }))
  }
  expect(await audit()).toEqual([])
  await page.getByRole('button', { name: 'Free Trial for Locals', exact: true }).first().click()
  expect(await audit()).toEqual([])
})
