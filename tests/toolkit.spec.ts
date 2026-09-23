import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import {
  activityLevels, bmiCategory, bmiFor, books, buildMealPlan, buildRoutine, dailyNeeds,
  defaultShowId, gymPlaylistMoods, planNutrition, radioShows, recipes, restSeconds,
  shoppingListSections, spotifySearch, videos, yogaPlaylistMoods,
} from '../src/lib/toolkit'

test('the meal planner builds a seven-day plan that respects the chosen focus', () => {
  const plan = buildMealPlan('protein', true)
  expect(plan).toHaveLength(7)
  for (const day of plan) {
    expect(day.meals.map((meal) => meal.type)).toEqual(['Breakfast', 'Lunch', 'Dinner', 'Snack'])
    for (const meal of day.meals) {
      expect(meal.recipe.focus).toContain('protein')
      expect(meal.recipe.type).toBe(meal.type)
    }
  }
  expect(planNutrition(plan, 'Monday').kcal).toBeGreaterThan(0)
  const withoutSnacks = buildMealPlan('balanced', false)
  expect(withoutSnacks[0].meals).toHaveLength(3)
  const sections = shoppingListSections(plan)
  expect(sections.length).toBeGreaterThanOrEqual(4)
  const items = sections.flatMap((section) => section.items.map((item) => item.text))
  expect(items.length).toBeGreaterThan(15)
  expect(new Set(items).size).toBe(items.length)
  // Quantities are merged into buyable amounts, not repeated per recipe.
  expect(items.some((item) => item.includes('×'))).toBe(false)
  // Aggregation happened: a week of meals always shares ingredients, so some
  // item must carry a merged quantity above a single recipe's amount.
  expect(items.some((item) => /^(\d{2,}|\d[¼½¾]|[2-9]) /.test(item))).toBe(true)
  // Every item lands in a real store section.
  expect(sections.every((section) => section.items.length > 0)).toBe(true)
})

test('handfuls of leafy greens convert to grams for buying', () => {
  const leafy = recipes.find((recipe) => recipe.ingredients.some((i) => i.includes('handful spinach')))!
  const sections = shoppingListSections([{ day: 'Monday', meals: [{ type: 'Lunch' as const, recipe: leafy }] }])
  const items = sections.flatMap((section) => section.items.map((item) => item.text))
  expect(items).toContain('30 g spinach')
  expect(items.every((item) => !item.includes('handful'))).toBe(true)
})

test('BMI maths and categories match the standard adult bands', () => {
  expect(bmiFor(172, 68)).toBeCloseTo(23.0, 1)
  expect(bmiCategory(17)).toBe('underweight')
  expect(bmiCategory(22)).toBe('healthy')
  expect(bmiCategory(27)).toBe('overweight')
  expect(bmiCategory(33)).toBe('obese')
})

test('daily energy needs follow Mifflin–St Jeor with activity scaling', () => {
  const active = activityLevels.find((level) => level.id === 'active')!
  const needs = dailyNeeds('male', 30, 180, 80, active.factor)
  expect(needs.bmr).toBe(1780)
  expect(needs.kcal).toBe(3030)
  expect(needs.proteinMin).toBe(96)
  expect(needs.proteinMax).toBe(128)
  const female = dailyNeeds('female', 45, 165, 65, 1.4)
  expect(female.bmr).toBe(Math.round(10 * 65 + 6.25 * 165 - 5 * 45 - 161))
  expect(female.kcal).toBeLessThan(needs.kcal)
})

test('rest parsing pulls the upper bound in seconds for the timer', () => {
  expect(restSeconds('90s')).toBe(90)
  expect(restSeconds('75–90s')).toBe(90)
  expect(restSeconds('60s between rounds')).toBe(60)
  expect(restSeconds('as needed')).toBe(90)
  expect(restSeconds('')).toBe(90)
})

test('routine builder returns the requested days with real exercises', () => {
  for (const days of [2, 3, 4] as const) {
    const plan = buildRoutine('strength', 'new', days)
    expect(plan.days).toHaveLength(days)
    for (const day of plan.days) {
      expect(day.warmup.length).toBeGreaterThan(0)
      expect(day.exercises.length).toBeGreaterThanOrEqual(3)
      expect(day.cooldown.length).toBeGreaterThan(0)
      for (const item of day.exercises) expect(item.dose).toContain('×')
    }
  }
})

test('transform radio channels are all embeddable live streams', () => {
  expect(radioShows.length).toBeGreaterThanOrEqual(5)
  for (const show of radioShows) {
    expect(show.videoId).toMatch(/^[A-Za-z0-9_-]{11}$/)
    expect(show.name.length).toBeGreaterThan(2)
  }
  const ids = radioShows.map((show) => show.id)
  expect(defaultShowId(new Date('2026-09-21T08:00:00'))).toBe('floor')
  expect(defaultShowId(new Date('2026-09-21T23:00:00'))).toBe('wind')
  expect(ids).toContain(defaultShowId(new Date('2026-09-21T15:00:00')))
})

test('playlists, books and videos are fully populated with real links', () => {
  for (const mood of [...gymPlaylistMoods, ...yogaPlaylistMoods]) {
    expect(mood.tracks.length).toBeGreaterThanOrEqual(8)
    for (const track of mood.tracks) {
      expect(spotifySearch(track)).toMatch(/^https:\/\/open\.spotify\.com\/search\//)
    }
  }
  expect(books).toHaveLength(6)
  for (const book of books) expect(book.url).toMatch(/^https:\/\//)
  expect(videos).toHaveLength(6)
  for (const video of videos) expect(video.url).toMatch(/^https:\/\//)
  expect(recipes.length).toBeGreaterThanOrEqual(12)
})

test.describe('toolkit UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-09-21T05:00:00Z'))
    await page.goto('/')
    await page.locator('#toolkit').scrollIntoViewIfNeeded()
  })

  test('all eleven public tools are listed and switchable', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await expect(toolkit.getByRole('heading', { name: /Active Life/ })).toBeVisible()
    const picker = toolkit.getByRole('group', { name: 'Choose a tool' })
    await expect(picker.getByRole('button')).toHaveCount(11)
    await expect(toolkit.locator('.planner-day')).toHaveCount(8) // 7 days + shopping list
    await picker.getByRole('button', { name: /Body Metrics/ }).click()
    await expect(toolkit.locator('.bmi-tool')).toBeVisible()
    await picker.getByRole('button', { name: /Books/ }).click()
    await expect(toolkit.locator('.book-card')).toHaveCount(6)
  })

  test('transform radio plays free live channels inside the YouTube player', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await toolkit.getByRole('button', { name: /Transform Radio/ }).click()
    const channels = toolkit.getByRole('group', { name: 'Choose a radio channel' })
    await expect(channels.getByRole('button')).toHaveCount(radioShows.length)
    const frame = toolkit.locator('.radio-frame iframe')
    await expect(frame).toHaveAttribute('src', /youtube-nocookie\.com\/embed\//)
    await expect(frame).toHaveAttribute('title', /Transform Radio/)
    await expect(toolkit.locator('.radio-live')).toContainText('Live now')
    await expect(toolkit.locator('.radio-note')).toContainText('YouTube')
    const firstSrc = await frame.getAttribute('src')
    await channels.getByRole('button', { name: 'Beast Mode' }).click()
    await expect(toolkit.locator('.radio-frame iframe')).not.toHaveAttribute('src', firstSrc!)
    await expect(channels.getByRole('button', { name: 'Beast Mode' })).toHaveAttribute('aria-pressed', 'true')
  })

  test('the meal planner reshuffles and produces a shopping list', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await toolkit.getByRole('button', { name: 'Reshuffle week' }).click()
    await expect(toolkit.locator('.shop-list li').first()).toBeVisible()
    await expect(toolkit.locator('.shop-section h5').first()).toBeVisible()
    await toolkit.getByRole('button', { name: '+ Snacks' }).click()
    await expect(toolkit.locator('.planner-day').first().locator('.planner-meal')).toHaveCount(4)
    await toolkit.getByRole('button', { name: 'Higher protein' }).click()
    expect(await toolkit.locator('.planner-day').first().textContent()).not.toBeNull()
  })

  test('the body metrics tool shows BMI, energy needs and saves only on request', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await toolkit.getByRole('button', { name: /Body Metrics/ }).click()
    await toolkit.getByLabel('Height cm').fill('172')
    await toolkit.getByLabel('Weight kg').fill('68')
    await expect(toolkit.locator('.bmi-result')).toContainText('23.0')
    await expect(toolkit.locator('.bmi-result')).toContainText('Healthy range')
    await expect(toolkit.locator('.tool-disclaimer')).toContainText('screening tool')
    await toolkit.getByLabel('Weight kg').fill('0')
    await expect(toolkit.locator('.bmi-result')).toContainText('never leave this page')
    // Age unlocks the energy needs panel; nothing is stored until the visitor asks.
    await toolkit.getByLabel('Weight kg').fill('68')
    await toolkit.getByLabel('Age years').fill('34')
    await expect(toolkit.locator('.needs-block')).toContainText('kcal / day')
    await expect(toolkit.locator('.needs-block')).toContainText('protein / day')
    expect(await page.evaluate(() => localStorage.getItem('ta-body'))).toBeNull()
    await toolkit.getByRole('checkbox').check()
    await page.waitForFunction(() => localStorage.getItem('ta-body') !== null)
    await page.reload()
    await page.locator('#toolkit').scrollIntoViewIfNeeded()
    await page.locator('#toolkit').getByRole('button', { name: /Body Metrics/ }).click()
    await expect(page.locator('#toolkit').getByLabel('Height cm')).toHaveValue('172')
    await page.locator('#toolkit').getByRole('button', { name: /Meal Planner/ }).click()
    await expect(page.locator('#toolkit').locator('.target-chip')).toContainText('kcal')
  })

  test('the meal and smoothie creators produce estimates and copyable output', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await toolkit.getByRole('button', { name: /Meal Creator/ }).click()
    await toolkit.locator('.builder-result').waitFor()
    await toolkit.getByRole('group', { name: 'Protein options' }).getByRole('button', { name: 'Tofu' }).click()
    await expect(toolkit.locator('.builder-result h4')).toContainText('Tofu')
    await expect(toolkit.locator('.builder-result')).toContainText('est. protein')
    await toolkit.getByRole('button', { name: /Smoothie Creator/ }).click()
    await toolkit.getByRole('group', { name: 'Smoothie fruits' }).getByRole('button', { name: 'Mango' }).click()
    await toolkit.getByRole('group', { name: 'Smoothie boosts' }).getByRole('button', { name: 'Chia seeds' }).click()
    await expect(toolkit.locator('.builder-result h4')).toContainText('smoothie')
    await expect(toolkit.locator('.builder-result')).toContainText('est. kcal')
  })

  test('the routine creator, playlists, books and videos render real content', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await toolkit.getByRole('button', { name: /Gym Routine/ }).click()
    await expect(toolkit.locator('.routine-day')).toHaveCount(3)
    await toolkit.getByRole('group', { name: 'Days per week' }).getByRole('button', { name: '4 days' }).click()
    await expect(toolkit.locator('.routine-day')).toHaveCount(4)
    await toolkit.getByRole('button', { name: /Gym Playlist/ }).click()
    await expect(toolkit.locator('.track-list li')).toHaveCount(10)
    await expect(toolkit.locator('.track-link').first()).toHaveAttribute('href', /open\.spotify\.com/)
    await toolkit.getByRole('button', { name: /Yoga Playlist/ }).click()
    await expect(toolkit.locator('.track-list li').first()).toContainText('Here Comes the Sun')
    await toolkit.getByRole('button', { name: /Books/ }).click()
    await expect(toolkit.getByRole('link', { name: /Publisher site/ })).toHaveCount(6)
    await toolkit.getByRole('button', { name: /Video Library/ }).click()
    await expect(toolkit.locator('.video-card')).toHaveCount(6)
    await expect(toolkit.getByRole('link', { name: /Pilates for Beginners/ })).toHaveAttribute('href', /nhs\.uk/)
  })

  test('the meal planner swaps individual meals and remembers the pick', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await expect(toolkit.getByRole('button', { name: 'Print' })).toBeVisible()
    const monday = toolkit.locator('.planner-day').first()
    const firstMeal = monday.locator('.planner-meal').first()
    const original = await firstMeal.locator('.planner-name').textContent()
    await monday.getByRole('button', { name: 'Swap Breakfast on Monday' }).click()
    const swapped = await firstMeal.locator('.planner-name').textContent()
    expect(swapped).not.toBe(original)
    await page.reload()
    await page.locator('#toolkit').scrollIntoViewIfNeeded()
    await expect(page.locator('#toolkit .planner-day').first().locator('.planner-meal').first().locator('.planner-name')).toHaveText(swapped!)
  })

  test('session mode tracks sets and drives the rest timer', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await toolkit.getByRole('button', { name: /Gym Routine/ }).click()
    await toolkit.getByRole('button', { name: 'Start session' }).first().click()
    const session = toolkit.locator('.session-view')
    await expect(session).toBeVisible()
    await expect(session.locator('.session-count')).toContainText('of')
    const firstSet = session.getByRole('button', { name: 'Goblet squat set 1' })
    await firstSet.click()
    await expect(firstSet).toHaveClass(/is-done/)
    const timer = toolkit.locator('.rest-timer')
    await expect(timer).toBeVisible()
    await expect(timer).toContainText('Goblet squat')
    await timer.getByRole('button', { name: 'Skip rest' }).click()
    await expect(timer).toBeHidden()
    await session.getByRole('button', { name: 'Finish session' }).click()
    await expect(toolkit.locator('.done-badge').first()).toBeVisible()
  })

  test('the toolkit passes automated accessibility checks', async ({ page }) => {
    const results = await new AxeBuilder({ page }).include('#toolkit').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()
    expect(results.violations.map((violation) => ({ id: violation.id, nodes: violation.nodes.map((node) => node.target) }))).toEqual([])
  })
})
