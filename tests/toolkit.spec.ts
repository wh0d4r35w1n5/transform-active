import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import {
  bmiCategory, bmiFor, books, buildMealPlan, buildRoutine, gymPlaylistMoods,
  planNutrition, recipes, shoppingList, spotifySearch, videos, yogaPlaylistMoods,
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
  const list = shoppingList(plan)
  expect(list.length).toBeGreaterThan(10)
  expect(new Set(list.map(([item]) => item)).size).toBe(list.length)
})

test('BMI maths and categories match the standard adult bands', () => {
  expect(bmiFor(172, 68)).toBeCloseTo(23.0, 1)
  expect(bmiCategory(17)).toBe('underweight')
  expect(bmiCategory(22)).toBe('healthy')
  expect(bmiCategory(27)).toBe('overweight')
  expect(bmiCategory(33)).toBe('obese')
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

  test('all ten public tools are listed and switchable', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await expect(toolkit.getByRole('heading', { name: /Active Life/ })).toBeVisible()
    const picker = toolkit.getByRole('group', { name: 'Choose a tool' })
    await expect(picker.getByRole('button')).toHaveCount(10)
    await expect(toolkit.locator('.planner-day')).toHaveCount(8) // 7 days + shopping list
    await picker.getByRole('button', { name: /BMI Calculator/ }).click()
    await expect(toolkit.locator('.bmi-tool')).toBeVisible()
    await picker.getByRole('button', { name: /Books/ }).click()
    await expect(toolkit.locator('.book-card')).toHaveCount(6)
  })

  test('the meal planner reshuffles and produces a shopping list', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await toolkit.getByRole('button', { name: 'Reshuffle week' }).click()
    await expect(toolkit.locator('.shop-list li').first()).toBeVisible()
    await toolkit.getByRole('button', { name: '+ Snacks' }).click()
    await expect(toolkit.locator('.planner-day').first().locator('.planner-meal')).toHaveCount(4)
    await toolkit.getByRole('button', { name: 'Higher protein' }).click()
    expect(await toolkit.locator('.planner-day').first().textContent()).not.toBeNull()
  })

  test('the BMI calculator validates input and shows an honest result', async ({ page }) => {
    const toolkit = page.locator('#toolkit')
    await toolkit.getByRole('button', { name: /BMI Calculator/ }).click()
    await toolkit.getByLabel('Height cm').fill('172')
    await toolkit.getByLabel('Weight kg').fill('68')
    await expect(toolkit.locator('.bmi-result')).toContainText('23.0')
    await expect(toolkit.locator('.bmi-result')).toContainText('Healthy range')
    await expect(toolkit.locator('.tool-disclaimer')).toContainText('screening tool')
    await toolkit.getByLabel('Weight kg').fill('0')
    await expect(toolkit.locator('.bmi-result')).toContainText('never leaves this page')
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

  test('the toolkit passes automated accessibility checks', async ({ page }) => {
    const results = await new AxeBuilder({ page }).include('#toolkit').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()
    expect(results.violations.map((violation) => ({ id: violation.id, nodes: violation.nodes.map((node) => node.target) }))).toEqual([])
  })
})
