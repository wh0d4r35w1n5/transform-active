// Active Life Toolkit — free public tools that supplement the gym membership.
// Everything runs on-device; nothing entered here is sent or stored.
// Nutrition values are estimates for general education, not medical advice.

export type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack'
export type DietFocus = 'balanced' | 'protein' | 'plant' | 'light'

export const dietFocuses: { id: DietFocus; name: string; hint: string }[] = [
  { id: 'balanced', name: 'Balanced', hint: 'A bit of everything, done well' },
  { id: 'protein', name: 'Higher protein', hint: 'For training weeks and appetite' },
  { id: 'plant', name: 'Plant-leaning', hint: 'Vegetarian-friendly picks' },
  { id: 'light', name: 'Lighter', hint: 'Lower-energy meals for quieter days' },
]

export interface Recipe {
  id: string
  name: string
  type: MealType
  focus: DietFocus[]
  minutes: number
  serves: number
  kcal: number
  protein: number
  ingredients: string[]
  method: string[]
  tags: string[]
}

export const recipes: Recipe[] = [
  {
    id: 'overnight-oats', name: 'Overnight Oats & Berries', type: 'Breakfast',
    focus: ['balanced', 'plant', 'light'], minutes: 5, serves: 1, kcal: 380, protein: 14,
    ingredients: ['1/2 cup rolled oats', '1/2 cup milk or soy milk', '1/4 cup Greek yoghurt', '1 tsp chia seeds', '1/2 cup frozen berries', '1 tsp honey'],
    method: ['Combine oats, milk, yoghurt and chia in a jar.', 'Refrigerate overnight.', 'Top with berries and honey.'],
    tags: ['Vegetarian', 'Make ahead', 'Gluten-free option'],
  },
  {
    id: 'veggie-scramble', name: 'Gym-Floor Veggie Scramble', type: 'Breakfast',
    focus: ['balanced', 'protein', 'plant'], minutes: 10, serves: 1, kcal: 420, protein: 26,
    ingredients: ['3 eggs', '1 handful baby spinach', '6 cherry tomatoes, halved', '30g feta', '1 slice sourdough', 'Olive oil'],
    method: ['Whisk eggs with a pinch of salt.', 'Soften tomatoes and spinach in a pan.', 'Add eggs, fold gently until just set.', 'Serve on sourdough with crumbled feta.'],
    tags: ['Vegetarian', 'High protein'],
  },
  {
    id: 'smoothie-bowl', name: 'Green Smoothie Bowl', type: 'Breakfast',
    focus: ['balanced', 'plant', 'light'], minutes: 8, serves: 1, kcal: 390, protein: 15,
    ingredients: ['1 frozen banana', '1/2 cup mango', '1 handful spinach', '1/2 cup Greek yoghurt', '1/4 cup granola', 'Splash of milk'],
    method: ['Blend banana, mango, spinach, yoghurt and milk until thick.', 'Pour into a bowl and top with granola.'],
    tags: ['Vegetarian', 'Quick'],
  },
  {
    id: 'yoghurt-parfait', name: 'Yoghurt, Granola & Nut Parfait', type: 'Breakfast',
    focus: ['balanced', 'protein', 'light'], minutes: 5, serves: 1, kcal: 350, protein: 21,
    ingredients: ['3/4 cup Greek yoghurt', '1/3 cup granola', '1/2 cup berries', '10 almonds, chopped', '1 tsp honey'],
    method: ['Layer yoghurt, granola and berries in a glass.', 'Top with almonds and honey.'],
    tags: ['Vegetarian', 'High protein', 'No cooking'],
  },
  {
    id: 'chicken-quinoa-bowl', name: 'Chicken & Quinoa Power Bowl', type: 'Lunch',
    focus: ['balanced', 'protein'], minutes: 25, serves: 2, kcal: 540, protein: 40,
    ingredients: ['250g chicken breast', '1 cup cooked quinoa', '1 cup roast pumpkin', '2 handfuls mixed leaves', '1 tbsp tahini', 'Lemon juice', 'Olive oil'],
    method: ['Season and grill chicken, rest 5 min, then slice.', 'Whisk tahini, lemon and a splash of water.', 'Build bowls with quinoa, pumpkin and leaves. Top with chicken and drizzle.'],
    tags: ['High protein', 'Meal prep friendly', 'Gluten-free'],
  },
  {
    id: 'tuna-bean-salad', name: 'Tuna & White Bean Salad', type: 'Lunch',
    focus: ['balanced', 'protein', 'light'], minutes: 10, serves: 1, kcal: 430, protein: 35,
    ingredients: ['1 tin tuna in springwater', '1/2 cup cannellini beans', '6 cherry tomatoes', '1/4 cucumber, sliced', '1 handful rocket', '1 tbsp olive oil', 'Red wine vinegar'],
    method: ['Drain tuna and beans.', 'Toss everything with oil, vinegar, salt and pepper.'],
    tags: ['High protein', 'No cooking', 'Gluten-free'],
  },
  {
    id: 'haloumi-wrap', name: 'Roast Veggie & Haloumi Wrap', type: 'Lunch',
    focus: ['balanced', 'plant'], minutes: 15, serves: 1, kcal: 520, protein: 22,
    ingredients: ['1 wholegrain wrap', '80g haloumi', '1 cup leftover roast vegetables', '2 tbsp hummus', '1 handful spinach'],
    method: ['Pan-fry haloumi until golden both sides.', 'Spread hummus on the wrap, add veg, haloumi and spinach.', 'Fold and toast seam-side down 2 min.'],
    tags: ['Vegetarian', 'Uses leftovers'],
  },
  {
    id: 'lentil-pumpkin-salad', name: 'Lentil & Roast Pumpkin Salad', type: 'Lunch',
    focus: ['balanced', 'plant', 'light'], minutes: 15, serves: 2, kcal: 410, protein: 18,
    ingredients: ['1 tin lentils, rinsed', '2 cups roast pumpkin', '50g feta', '2 handfuls rocket', '1 tbsp pepitas', 'Balsamic & olive oil'],
    method: ['Toss lentils, pumpkin and rocket.', 'Top with feta and pepitas, dress with balsamic and oil.'],
    tags: ['Vegetarian', 'High fibre', 'Gluten-free'],
  },
  {
    id: 'garlic-salmon', name: 'Garlic-Butter Salmon & Greens', type: 'Dinner',
    focus: ['balanced', 'protein'], minutes: 20, serves: 2, kcal: 560, protein: 38,
    ingredients: ['2 salmon fillets', '1 bunch broccolini', '2 potatoes, cubed', '2 cloves garlic', '20g butter', 'Lemon'],
    method: ['Roast potato at 200°C for 15 min.', 'Sear salmon skin-side down 4 min, flip, add butter and garlic.', 'Steam broccolini 3 min. Serve with lemon.'],
    tags: ['High protein', 'Gluten-free'],
  },
  {
    id: 'chicken-stirfry', name: 'Chicken & Veggie Stir-Fry', type: 'Dinner',
    focus: ['balanced', 'protein', 'light'], minutes: 20, serves: 2, kcal: 500, protein: 36,
    ingredients: ['250g chicken breast, sliced', '1 capsicum, sliced', '1 carrot, julienned', '1 cup broccoli florets', '2 tbsp soy sauce', '1 tsp grated ginger', '1 cup cooked rice'],
    method: ['Sear chicken in a hot pan, set aside.', 'Stir-fry veg 3–4 min, keeping crunch.', 'Return chicken with soy, ginger and a splash of water. Serve over rice.'],
    tags: ['High protein', 'Quick'],
  },
  {
    id: 'beef-tacos', name: 'Beef & Black Bean Tacos', type: 'Dinner',
    focus: ['balanced', 'protein'], minutes: 25, serves: 3, kcal: 580, protein: 34,
    ingredients: ['400g beef mince', '1 tin black beans', '6 corn tortillas', '1 cup corn kernels', '1 tomato, diced', '1/2 avocado', 'Lime, cumin, smoked paprika'],
    method: ['Brown mince with cumin and paprika, add beans.', 'Warm tortillas, fill with mince, corn, tomato and avocado.', 'Finish with lime.'],
    tags: ['High protein', 'Feeds a crowd'],
  },
  {
    id: 'mushroom-pasta', name: 'Mushroom & Spinach Pasta', type: 'Dinner',
    focus: ['balanced', 'plant'], minutes: 20, serves: 2, kcal: 540, protein: 20,
    ingredients: ['180g wholemeal pasta', '300g mushrooms, sliced', '2 handfuls spinach', '2 cloves garlic', '1/2 cup ricotta', 'Parmesan', 'Lemon zest'],
    method: ['Cook pasta, reserve a cup of water.', 'Brown mushrooms hard, add garlic and spinach.', 'Toss with pasta, ricotta and a splash of pasta water. Top with parmesan and zest.'],
    tags: ['Vegetarian', 'Comfort'],
  },
  {
    id: 'chickpea-curry', name: 'Chickpea & Sweet Potato Curry', type: 'Dinner',
    focus: ['balanced', 'plant', 'light'], minutes: 30, serves: 3, kcal: 550, protein: 16,
    ingredients: ['1 tin chickpeas', '1 sweet potato, cubed', '1 tin coconut milk (light)', '2 tbsp red curry paste', '1 handful spinach', '1.5 cups cooked rice'],
    method: ['Simmer curry paste in a little coconut milk 2 min.', 'Add sweet potato, coconut milk and chickpeas; simmer 15 min.', 'Wilt spinach through. Serve over rice.'],
    tags: ['Vegan', 'Meal prep friendly'],
  },
  {
    id: 'bliss-balls', name: 'Peanut Protein Bliss Balls', type: 'Snack',
    focus: ['balanced', 'protein', 'plant'], minutes: 15, serves: 6, kcal: 180, protein: 6,
    ingredients: ['1 cup dates, pitted', '1 cup oats', '1/2 cup peanut butter', '2 tbsp cocoa', 'Pinch of salt'],
    method: ['Blitz dates in a processor.', 'Add oats, peanut butter, cocoa and salt; blend to a dough.', 'Roll into 12 balls, chill 30 min.'],
    tags: ['Vegetarian', 'No cooking', 'Freezer friendly'],
  },
  {
    id: 'apple-pb', name: 'Apple & Peanut Butter', type: 'Snack',
    focus: ['balanced', 'plant', 'light'], minutes: 2, serves: 1, kcal: 220, protein: 7,
    ingredients: ['1 apple, sliced', '2 tbsp peanut butter'],
    method: ['Slice, dip, done.'],
    tags: ['Vegetarian', 'No cooking'],
  },
  {
    id: 'hummus-sticks', name: 'Hummus & Crunchy Veg', type: 'Snack',
    focus: ['balanced', 'plant', 'light'], minutes: 5, serves: 1, kcal: 200, protein: 6,
    ingredients: ['1/3 cup hummus', '1 carrot, in sticks', '1/2 capsicum, in strips', '1/2 cucumber, in sticks'],
    method: ['Chop, dip, crunch.'],
    tags: ['Vegan', 'No cooking'],
  },
]

export interface PlannedDay {
  day: string
  meals: { type: MealType; recipe: Recipe }[]
}

export const plannerDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const

export function buildMealPlan(focus: DietFocus, withSnacks: boolean): PlannedDay[] {
  const pool = recipes.filter((recipe) => recipe.focus.includes(focus))
  const types: MealType[] = withSnacks ? ['Breakfast', 'Lunch', 'Dinner', 'Snack'] : ['Breakfast', 'Lunch', 'Dinner']
  return plannerDays.map((day, index) => ({
    day,
    meals: types.map((type, slot) => {
      const options = pool.filter((recipe) => recipe.type === type)
      return { type, recipe: options[(index * 2 + slot) % options.length] }
    }),
  }))
}

// Shopping list — aggregates real quantities per item and groups by store
// section, so "1/2 cup oats" in four recipes becomes "2 cups rolled oats".

const SHOP_UNITS = /^(cup|cups|tin|tins|can|cans|tbsp|tsp|g|kg|ml|l|clove|cloves|slice|slices|bunch|bunches|handful|handfuls|fillet|fillets|packet|packets|scoop|scoops)\b/i
const UNIT_SINGULAR: Record<string, string> = { cups: 'cup', tins: 'tin', cans: 'can', cloves: 'clove', slices: 'slice', bunches: 'bunch', handfuls: 'handful', fillets: 'fillet', packets: 'packet', scoops: 'scoop' }
const UNIT_PLURAL: Record<string, string> = { cup: 'cups', tin: 'tins', can: 'cans', clove: 'cloves', slice: 'slices', bunch: 'bunches', handful: 'handfuls', fillet: 'fillets', packet: 'packets', scoop: 'scoops' }

function parseQty(raw: string): number | null {
  const parts = raw.split('/').map(Number)
  if (parts.length === 2) return parts[1] ? parts[0] / parts[1] : null
  return Number.isFinite(parts[0]) ? parts[0] : null
}

interface ParsedIngredient { qty: number | null; unit: string | null; name: string }

function parseIngredient(raw: string): ParsedIngredient {
  const qtyMatch = raw.trim().match(/^(\d+(?:[./\s]+\d+)*)\s*(.*)$/)
  if (!qtyMatch || qtyMatch[1].trim() === '') return { qty: null, unit: null, name: raw.trim() }
  const qty = parseQty(qtyMatch[1].replace(/\s+/g, ''))
  if (qty === null) return { qty: null, unit: null, name: raw.trim() }
  const rest = qtyMatch[2].split(',')[0].trim()
  const unitMatch = rest.match(/^([a-zA-Z]+)\s+(.+)$/)
  if (unitMatch && SHOP_UNITS.test(unitMatch[1])) {
    return { qty, unit: UNIT_SINGULAR[unitMatch[1].toLowerCase()] ?? unitMatch[1].toLowerCase(), name: unitMatch[2] }
  }
  return { qty, unit: null, name: rest }
}

interface ShopItem { name: string; qty: number | null; unit: string | null; recipes: number }

const SECTIONS: { name: string; match: RegExp }[] = [
  { name: 'Frozen', match: /frozen|ice cream/ },
  { name: 'Produce', match: /spinach|rocket|leaves|lettuce|tomato|cucumber|carrot|capsicum|pumpkin|potato|avocado|lemon|lime|ginger|garlic|banana|berries|broccoli|broccolini|corn|mushroom|onion|apple|mango|zucchini|kale|beetroot|radish|herb|chilli/ },
  { name: 'Dairy & eggs', match: /milk|yoghurt|yogurt|feta|haloumi|ricotta|butter|egg|parmesan|cheese|cream/ },
  { name: 'Meat & seafood', match: /chicken|salmon|beef|mince|tuna|fish|prawn|bacon|turkey|lamb|pork/ },
  { name: 'Bakery & wraps', match: /tortilla|wrap|sourdough|bread|roll|bun|pita/ },
]

const PANTRY_FIRST = /peanut butter|almond butter|coconut milk|rice|oats|pasta|noodle|quinoa|flour|honey|syrup|oil|vinegar|sauce|paste|cocoa|cacao|seed|nut\b|protein powder|tahini|miso|stock|yeast|sugar|spice|cumin|paprika|turmeric|cinnamon|salt|pepper/

const OES_PLURALS = /(potato|tomato)$/

export interface ShopSection { name: string; items: { text: string; detail?: string }[] }

function fmtQty(qty: number): string {
  const whole = Math.floor(qty)
  const frac = qty - whole
  const glyph = Math.abs(frac - 0.25) < 0.01 ? '¼' : Math.abs(frac - 0.5) < 0.01 ? '½' : Math.abs(frac - 0.75) < 0.01 ? '¾' : null
  if (glyph) return whole ? `${whole}${glyph}` : glyph
  return `${Math.round(qty * 10) / 10}`
}

export function shoppingListSections(plan: PlannedDay[]): ShopSection[] {
  const merged = new Map<string, ShopItem>()
  for (const day of plan) {
    for (const meal of day.meals) {
      for (const ingredient of meal.recipe.ingredients) {
        const { qty, unit, name } = parseIngredient(ingredient)
        const key = `${name.toLowerCase()}|${unit ?? ''}`
        const existing = merged.get(key)
        if (existing) {
          if (qty !== null) existing.qty = (existing.qty ?? 0) + qty
          existing.recipes += 1
        } else {
          merged.set(key, { name, qty, unit, recipes: 1 })
        }
      }
    }
  }
  const grouped = new Map<string, { text: string; detail?: string }[]>()
  for (const item of merged.values()) {
    const name = item.name.toLowerCase()
    const section = PANTRY_FIRST.test(name) ? 'Tins, jars & pantry' : (SECTIONS.find((s) => s.match.test(name))?.name ?? 'Tins, jars & pantry')
    let text = item.name.charAt(0).toUpperCase() + item.name.slice(1)
    let detail: string | undefined
    if (item.qty !== null) {
      const unit = item.unit && item.qty > 1 ? (UNIT_PLURAL[item.unit] ?? item.unit) : item.unit
      let label = item.name
      if (!item.unit && item.qty > 1 && !name.endsWith('s')) label = OES_PLURALS.test(name) ? `${item.name}es` : `${item.name}s`
      text = `${fmtQty(item.qty)}${unit ? ` ${unit}` : ''} ${label}`
    } else if (item.recipes > 1) {
      detail = `used in ${item.recipes} recipes`
    }
    grouped.set(section, [...(grouped.get(section) ?? []), { text, detail }])
  }
  const order = ['Produce', 'Meat & seafood', 'Dairy & eggs', 'Bakery & wraps', 'Frozen', 'Tins, jars & pantry']
  return order
    .filter((name) => grouped.has(name))
    .map((name) => ({ name, items: grouped.get(name)!.sort((a, b) => a.text.localeCompare(b.text)) }))
}

export function planNutrition(plan: PlannedDay[], day: string) {
  const target = plan.find((entry) => entry.day === day)
  if (!target) return { kcal: 0, protein: 0 }
  return {
    kcal: target.meals.reduce((total, meal) => total + meal.recipe.kcal, 0),
    protein: target.meals.reduce((total, meal) => total + meal.recipe.protein, 0),
  }
}

// ---- Meal creator ---------------------------------------------------------

export interface MealComponent {
  name: string
  kcal: number
  protein: number
}

export const mealBase: MealComponent[] = [
  { name: 'Brown rice', kcal: 215, protein: 5 },
  { name: 'Quinoa', kcal: 220, protein: 8 },
  { name: 'Soba noodles', kcal: 190, protein: 7 },
  { name: 'Roast sweet potato', kcal: 180, protein: 3 },
  { name: 'Wholegrain wrap', kcal: 170, protein: 5 },
  { name: 'Mixed leaves', kcal: 30, protein: 2 },
]

export const mealProteins: MealComponent[] = [
  { name: 'Grilled chicken', kcal: 230, protein: 42 },
  { name: 'Baked salmon', kcal: 280, protein: 34 },
  { name: 'Beef strips', kcal: 260, protein: 36 },
  { name: 'Tofu', kcal: 180, protein: 20 },
  { name: 'Two eggs', kcal: 155, protein: 13 },
  { name: 'Tinned tuna', kcal: 120, protein: 27 },
  { name: 'Chickpeas', kcal: 165, protein: 9 },
  { name: 'Haloumi', kcal: 250, protein: 19 },
]

export const mealVeg: MealComponent[] = [
  { name: 'Roast pumpkin', kcal: 60, protein: 1 },
  { name: 'Steamed greens', kcal: 35, protein: 3 },
  { name: 'Cherry tomatoes', kcal: 25, protein: 1 },
  { name: 'Shredded carrot & beetroot', kcal: 50, protein: 2 },
  { name: 'Capsicum & corn salsa', kcal: 70, protein: 2 },
  { name: 'Avocado (half)', kcal: 160, protein: 2 },
  { name: 'Cucumber & radish', kcal: 20, protein: 1 },
]

export const mealSauces: MealComponent[] = [
  { name: 'Tahini lemon drizzle', kcal: 90, protein: 3 },
  { name: 'Soy + ginger', kcal: 30, protein: 1 },
  { name: 'Yoghurt herb', kcal: 45, protein: 3 },
  { name: 'Pesto', kcal: 120, protein: 3 },
  { name: 'Chilli lime', kcal: 25, protein: 0 },
]

export const mealExtras: MealComponent[] = [
  { name: 'Feta', kcal: 75, protein: 4 },
  { name: 'Toasted seeds', kcal: 90, protein: 4 },
  { name: 'Hummus', kcal: 80, protein: 3 },
  { name: 'Olives', kcal: 60, protein: 0 },
]

// ---- Smoothie creator -----------------------------------------------------

export const smoothieBases: MealComponent[] = [
  { name: 'Milk', kcal: 150, protein: 8 },
  { name: 'Soy milk', kcal: 100, protein: 7 },
  { name: 'Almond milk', kcal: 60, protein: 2 },
  { name: 'Coconut water', kcal: 45, protein: 0 },
  { name: 'Water', kcal: 0, protein: 0 },
]

export const smoothieFruits: MealComponent[] = [
  { name: 'Banana', kcal: 105, protein: 1 },
  { name: 'Frozen berries', kcal: 70, protein: 1 },
  { name: 'Mango', kcal: 100, protein: 1 },
  { name: 'Pineapple', kcal: 80, protein: 1 },
  { name: 'Apple', kcal: 95, protein: 0 },
  { name: 'Avocado (half)', kcal: 160, protein: 2 },
]

export const smoothieBoosts: MealComponent[] = [
  { name: 'Greek yoghurt', kcal: 100, protein: 17 },
  { name: 'Protein powder', kcal: 120, protein: 24 },
  { name: 'Peanut butter', kcal: 190, protein: 8 },
  { name: 'Rolled oats', kcal: 150, protein: 5 },
  { name: 'Chia seeds', kcal: 60, protein: 2 },
  { name: 'Baby spinach', kcal: 7, protein: 1 },
  { name: 'Cocoa', kcal: 25, protein: 2 },
  { name: 'Honey', kcal: 60, protein: 0 },
]

// ---- BMI ------------------------------------------------------------------

export function bmiFor(heightCm: number, weightKg: number) {
  const metres = heightCm / 100
  return weightKg / (metres * metres)
}

export type BmiCategory = 'underweight' | 'healthy' | 'overweight' | 'obese'

export function bmiCategory(bmi: number): BmiCategory {
  if (bmi < 18.5) return 'underweight'
  if (bmi < 25) return 'healthy'
  if (bmi < 30) return 'overweight'
  return 'obese'
}

export const bmiLabels: Record<BmiCategory, { name: string; range: string; note: string }> = {
  underweight: { name: 'Underweight', range: 'Below 18.5', note: 'Being underweight can come with its own health considerations. A GP or dietitian can help you explore why.' },
  healthy: { name: 'Healthy range', range: '18.5 – 24.9', note: 'Your result sits in the range associated with the lowest health risk for most adults.' },
  overweight: { name: 'Overweight', range: '25 – 29.9', note: 'This is a population-level estimate, not a diagnosis — muscle mass, build and background all shift what it means.' },
  obese: { name: 'Obese', range: '30 and above', note: 'This is a screening estimate only. A GP can give a much fuller picture than any calculator.' },
}

// ---- Daily energy needs (Mifflin–St Jeor) ----------------------------------

export type Sex = 'female' | 'male'

export const activityLevels: { id: string; name: string; factor: number; hint: string }[] = [
  { id: 'desk', name: 'Mostly sitting', factor: 1.4, hint: 'Desk work, little structured exercise' },
  { id: 'light', name: 'On your feet', factor: 1.55, hint: 'Walking, classes or training 1–3× a week' },
  { id: 'active', name: 'Training regular', factor: 1.7, hint: 'Gym or sport 3–5× a week' },
  { id: 'very', name: 'Physical days', factor: 1.9, hint: 'Physical job or training most days' },
]

export interface DailyNeeds { bmr: number; kcal: number; proteinMin: number; proteinMax: number }

export function dailyNeeds(sex: Sex, age: number, heightCm: number, weightKg: number, activityFactor: number): DailyNeeds {
  const bmr = Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + (sex === 'male' ? 5 : -161))
  return {
    bmr,
    kcal: Math.round(bmr * activityFactor / 10) * 10,
    proteinMin: Math.round(1.2 * weightKg),
    proteinMax: Math.round(1.6 * weightKg),
  }
}

// ---- On-device saved profile -------------------------------------------------
// Only written when the visitor explicitly asks to keep their numbers.

export interface SavedBody extends DailyNeeds { height: number; weight: number; age: number; sex: Sex; activity: string }

const BODY_KEY = 'ta-body'

export function loadSavedBody(): SavedBody | null {
  try {
    const raw = window.localStorage.getItem(BODY_KEY)
    return raw ? (JSON.parse(raw) as SavedBody) : null
  } catch { return null }
}

export function saveBody(body: SavedBody) {
  try { window.localStorage.setItem(BODY_KEY, JSON.stringify(body)) } catch { /* storage unavailable */ }
}

export function clearSavedBody() {
  try { window.localStorage.removeItem(BODY_KEY) } catch { /* storage unavailable */ }
}

// ---- Gym routine creator --------------------------------------------------

export type RoutineGoal = 'strength' | 'fitness' | 'foundations'
export type RoutineLevel = 'new' | 'returning' | 'regular'

export const routineGoals: { id: RoutineGoal; name: string; hint: string }[] = [
  { id: 'strength', name: 'Build strength', hint: 'Progressive lifting on the gym floor' },
  { id: 'fitness', name: 'General fitness', hint: 'Strength plus engine work' },
  { id: 'foundations', name: 'Move more', hint: 'Build the habit, gently' },
]

export const routineLevels: { id: RoutineLevel; name: string }[] = [
  { id: 'new', name: 'New to the gym' },
  { id: 'returning', name: 'Getting back into it' },
  { id: 'regular', name: 'Training regularly' },
]

export interface RoutineExercise { name: string; dose: string; sets: number; restSec: number }
export interface RoutineDay { name: string; focus: string; warmup: string[]; exercises: RoutineExercise[]; cooldown: string[] }
export interface RoutinePlan { title: string; note: string; days: RoutineDay[] }

const warmups = {
  strength: ['5 min easy bike or treadmill', '2 rounds: 10 band pull-aparts, 10 bodyweight squats, 30s plank'],
  fitness: ['5 min rower or incline walk', '2 rounds: 10 jumping jacks, 10 hip hinges, 10 glute bridges'],
  foundations: ['5–8 min easy walk on the treadmill', 'Gentle arm circles, hip openers and ankle rolls'],
}

const cooldowns = {
  strength: ['Slow walk until breathing settles', 'Stretch the muscles you trained — 30s each'],
  fitness: ['3 min easy pace on any machine', 'Full-body stretch, long slow exhales'],
  foundations: ['Easy walk until your heart rate settles', 'A few gentle stretches — nothing forced'],
}

const setsReps: Record<RoutineLevel, { sets: number; rest: string }> = {
  new: { sets: 2, rest: '90s' },
  returning: { sets: 3, rest: '75–90s' },
  regular: { sets: 4, rest: '60–90s' },
}

export function restSeconds(rest: string): number {
  const match = rest.match(/(\d+)(?:\s*[–-]\s*(\d+))?\s*s/)
  if (!match) return 90
  return Number(match[2] ?? match[1])
}

function ex(name: string, sets: number, reps: string, rest: string, extra = ''): RoutineExercise {
  return { name, dose: `${sets} × ${reps}${rest ? ` · rest ${rest}` : ''}${extra ? ` · ${extra}` : ''}`, sets, restSec: restSeconds(rest) }
}

export function buildRoutine(goal: RoutineGoal, level: RoutineLevel, daysPerWeek: 2 | 3 | 4): RoutinePlan {
  const { sets, rest } = setsReps[level]
  const reps = goal === 'strength' ? '5–8' : goal === 'fitness' ? '8–12' : '10–12'
  const push = goal === 'strength' ? 'Technogym chest press' : 'Push-ups or chest press'
  const plans: Record<RoutineGoal, RoutineDay[]> = {
    strength: [
      { name: 'Full-body A', focus: 'Squat + push + pull', warmup: warmups.strength, cooldown: cooldowns.strength, exercises: [
        ex('Goblet squat', sets, reps, rest, 'hold a dumbbell or kettlebell'),
        ex(push, sets, reps, rest),
        ex('Seated cable row', sets, reps, rest),
        ex('Romanian deadlift', sets, '6–8', rest, 'light bar or dumbbells'),
        ex('Plank', 3, '20–40s', '60s'),
      ] },
      { name: 'Full-body B', focus: 'Hinge + vertical pull + press', warmup: warmups.strength, cooldown: cooldowns.strength, exercises: [
        ex('Leg press', sets, reps, rest),
        ex('Lat pulldown', sets, reps, rest),
        ex('Dumbbell shoulder press', sets, '8–10', rest),
        ex('Hip thrust', sets, '8–10', rest, 'bench + barbell or machine'),
        ex('Dead bug', 3, '8 per side', '60s'),
      ] },
      { name: 'Full-body C', focus: 'Posterior chain + carries', warmup: warmups.strength, cooldown: cooldowns.strength, exercises: [
        ex('Trap-bar or conventional deadlift', sets, '5', rest, 'deadlift platform — film your form'),
        ex('Incline dumbbell press', sets, reps, rest),
        ex('Assisted pull-up or pulldown', sets, reps, rest),
        ex('Farmer carry on the turf', 3, '20–30m', '90s'),
        ex('Side plank', 3, '15–30s each', '60s'),
      ] },
    ],
    fitness: [
      { name: 'Strength + engine A', focus: 'Lower body + intervals', warmup: warmups.fitness, cooldown: cooldowns.fitness, exercises: [
        ex('Goblet squat', sets, reps, rest),
        ex('Romanian deadlift', sets, reps, rest),
        ex('Glute bridge or hip thrust', sets, reps, rest),
        ex('Bike or rower intervals', 6, '40s hard / 80s easy', ''),
      ] },
      { name: 'Strength + engine B', focus: 'Upper body + core', warmup: warmups.fitness, cooldown: cooldowns.fitness, exercises: [
        ex('Chest press or push-ups', sets, reps, rest),
        ex('Seated row', sets, reps, rest),
        ex('Shoulder press', sets, reps, rest),
        ex('Core circuit: plank, dead bug, bird-dog', 3, '30s each', '60s between rounds'),
      ] },
      { name: 'Turf conditioning', focus: 'Cardio capacity', warmup: warmups.fitness, cooldown: cooldowns.fitness, exercises: [
        ex('Kettlebell swings', sets, '12–15', '60s'),
        ex('Farmer carries', 4, '20–30m', '75s'),
        ex('Medicine ball slams', sets, '10', '60s'),
        ex('Incline treadmill walk', 1, '8–10 min steady', ''),
      ] },
    ],
    foundations: [
      { name: 'Gentle full-body A', focus: 'Learn the machines', warmup: warmups.foundations, cooldown: cooldowns.foundations, exercises: [
        ex('Leg press', 2, '10–12', 'as needed', 'light and controlled'),
        ex('Chest press', 2, '10–12', 'as needed'),
        ex('Seated row', 2, '10–12', 'as needed'),
        ex('Easy treadmill walk', 1, '5–10 min', ''),
      ] },
      { name: 'Gentle full-body B', focus: 'Balance + posture', warmup: warmups.foundations, cooldown: cooldowns.foundations, exercises: [
        ex('Sit-to-stand from a bench', 2, '8–10', 'as needed'),
        ex('Lat pulldown', 2, '10–12', 'as needed', 'light weight'),
        ex('Standing shoulder press', 2, '8–10', 'as needed', 'light dumbbells'),
        ex('Supported single-leg balance', 2, '20s each side', 'as needed'),
      ] },
      { name: 'Move + mobilise', focus: 'Joints and confidence', warmup: warmups.foundations, cooldown: cooldowns.foundations, exercises: [
        ex('Bike or cross-trainer', 1, '8–12 min easy', ''),
        ex('Step-ups', 2, '8 each leg', 'as needed'),
        ex('Wall push-ups', 2, '8–12', 'as needed'),
        ex('Gentle stretch circuit', 2, '30s per stretch', ''),
      ] },
    ],
  }
  const selected = plans[goal].slice(0, Math.min(daysPerWeek, 3))
  if (daysPerWeek === 4) selected.push(plans[goal][0])
  return {
    title: `${routineGoals.find((g) => g.id === goal)?.name} — ${daysPerWeek} days a week`,
    note: goal === 'strength'
      ? 'Add a little weight or a rep when a session feels comfortably solid — small jumps win.'
      : goal === 'fitness'
        ? 'Keep the intervals honest: hard means you can just hold a conversation, no more.'
        : 'Finish every session feeling like you could do a little more. Consistency is the whole program.',
    days: selected,
  }
}

// ---- Playlists ------------------------------------------------------------

export interface PlaylistMood { id: string; name: string; hint: string; tracks: { title: string; artist: string }[] }

export const gymPlaylistMoods: PlaylistMood[] = [
  {
    id: 'lift', name: 'Lift Heavy', hint: 'For platform days and big sets',
    tracks: [
      { title: 'Thunderstruck', artist: 'AC/DC' },
      { title: 'Lose Yourself', artist: 'Eminem' },
      { title: 'POWER', artist: 'Kanye West' },
      { title: 'Seven Nation Army', artist: 'The White Stripes' },
      { title: 'Sabotage', artist: 'Beastie Boys' },
      { title: 'Enter Sandman', artist: 'Metallica' },
      { title: 'Back in Black', artist: 'AC/DC' },
      { title: 'Bulls on Parade', artist: 'Rage Against the Machine' },
      { title: '\'Till I Collapse', artist: 'Eminem' },
      { title: 'Welcome to the Jungle', artist: 'Guns N\' Roses' },
    ],
  },
  {
    id: 'energy', name: 'High Energy', hint: 'Cardio, circuits and dance-floor pace',
    tracks: [
      { title: 'Levels', artist: 'Avicii' },
      { title: 'Can\'t Hold Us', artist: 'Macklemore & Ryan Lewis' },
      { title: 'Titanium', artist: 'David Guetta ft. Sia' },
      { title: 'Pump It', artist: 'Black Eyed Peas' },
      { title: 'Run Boy Run', artist: 'Woodkid' },
      { title: 'Feel So Close', artist: 'Calvin Harris' },
      { title: 'Dog Days Are Over', artist: 'Florence + The Machine' },
      { title: 'Don\'t Stop the Music', artist: 'Rihanna' },
      { title: 'Tongue Tied', artist: 'Grouplove' },
      { title: 'On Top of the World', artist: 'Imagine Dragons' },
    ],
  },
  {
    id: 'steady', name: 'Steady Burn', hint: 'Zone 2, long walks, easy miles',
    tracks: [
      { title: 'Innerbloom', artist: 'RÜFÜS DU SOL' },
      { title: 'Midnight City', artist: 'M83' },
      { title: 'Breezeblocks', artist: 'alt-J' },
      { title: 'Electric Feel', artist: 'MGMT' },
      { title: 'Sun Models', artist: 'ODESZA ft. Madelyn Grant' },
      { title: 'Intro', artist: 'The xx' },
      { title: 'Kids', artist: 'MGMT' },
      { title: 'Say My Name', artist: 'ODESZA ft. Zyra' },
      { title: 'Sweet Disposition', artist: 'The Temper Trap' },
      { title: 'Younger', artist: 'RÜFÜS DU SOL' },
    ],
  },
]

export const yogaPlaylistMoods: PlaylistMood[] = [
  {
    id: 'flow', name: 'Morning Flow', hint: 'Sun salutations and an easy start',
    tracks: [
      { title: 'Here Comes the Sun', artist: 'The Beatles' },
      { title: 'Better Together', artist: 'Jack Johnson' },
      { title: 'Banana Pancakes', artist: 'Jack Johnson' },
      { title: 'Put Your Records On', artist: 'Corinne Bailey Rae' },
      { title: 'Sunday Morning', artist: 'Maroon 5' },
      { title: 'Riptide', artist: 'Vance Joy' },
      { title: 'Budapest', artist: 'George Ezra' },
      { title: 'Lovely Day', artist: 'Bill Withers' },
      { title: 'Three Little Birds', artist: 'Bob Marley' },
      { title: 'Home', artist: 'Edward Sharpe & The Magnetic Zeros' },
    ],
  },
  {
    id: 'ground', name: 'Slow Grounding', hint: 'Hatha pace, long holds, breath-led',
    tracks: [
      { title: 'Holocene', artist: 'Bon Iver' },
      { title: 'Big Jet Plane', artist: 'Angus & Julia Stone' },
      { title: 'Bloom', artist: 'The Paper Kites' },
      { title: 'Saturn', artist: 'Sleeping At Last' },
      { title: 'River', artist: 'Leon Bridges' },
      { title: 'Re: Stacks', artist: 'Bon Iver' },
      { title: 'Lost in the Light', artist: 'Bahamas' },
      { title: 'Nude', artist: 'Radiohead' },
      { title: 'Open', artist: 'Rhye' },
      { title: 'To Build a Home', artist: 'The Cinematic Orchestra' },
    ],
  },
  {
    id: 'rest', name: 'Deep Rest', hint: 'Yin, savasana and evening wind-down',
    tracks: [
      { title: 'Weightless', artist: 'Marconi Union' },
      { title: 'Nuvole Bianche', artist: 'Ludovico Einaudi' },
      { title: 'Gymnopédie No. 1', artist: 'Erik Satie' },
      { title: 'Spiegel im Spiegel', artist: 'Arvo Pärt' },
      { title: 'Divenire', artist: 'Ludovico Einaudi' },
      { title: 'Saman', artist: 'Ólafur Arnalds' },
      { title: 'Experience', artist: 'Ludovico Einaudi' },
      { title: 'Sleep', artist: 'Max Richter' },
      { title: 'Written on the Sky', artist: 'Max Richter' },
      { title: 'Near Light', artist: 'Ólafur Arnalds' },
    ],
  },
]

export function spotifySearch(track: { title: string; artist: string }) {
  return `https://open.spotify.com/search/${encodeURIComponent(`${track.title} ${track.artist}`)}`
}

export function trackList(mood: PlaylistMood, playlistName: string) {
  return `${playlistName} — ${mood.name}\n${mood.tracks.map((track, index) => `${index + 1}. ${track.title} — ${track.artist}`).join('\n')}`
}

// ---- Transform Radio ----------------------------------------------------------
// Free 24/7 live streams played inside YouTube's own embedded player — nothing
// is re-streamed or hosted here, so licensing stays with YouTube and each
// channel's owners. Verified live & embeddable via oEmbed.

export interface RadioShow { id: string; name: string; hint: string; videoId: string }

export const radioShows: RadioShow[] = [
  { id: 'floor', name: 'Gym Floor', hint: 'High-energy EDM built for big sessions', videoId: 'y_rgrhvjuUM' },
  { id: 'beast', name: 'Beast Mode', hint: 'Dubstep, hardstyle & trap — no mercy', videoId: 'G2OoIofTOm0' },
  { id: 'steady', name: 'Steady State', hint: 'House & chillout for long cardio', videoId: '36YnV9STBqc' },
  { id: 'stretch', name: 'Stretch & Flow', hint: 'Jazzy lofi for Pilates and mobility', videoId: '5yx6BWlEVcY' },
  { id: 'synth', name: 'Night Drive', hint: 'Synthwave for late-night sessions', videoId: '4xDzrJKXOOY' },
  { id: 'wind', name: 'Wind Down', hint: 'Sleepy lofi for savasana & evenings', videoId: 'rUxyKA_-grg' },
]

export function defaultShowId(date = new Date()): string {
  const hour = date.getHours()
  if (hour < 10) return 'floor'
  if (hour < 14) return 'steady'
  if (hour < 17) return 'stretch'
  if (hour < 21) return 'floor'
  return 'wind'
}

// ---- Recommended books ----------------------------------------------------

export interface Book { title: string; author: string; year: number; category: string; blurb: string; url: string }

export const books: Book[] = [
  {
    title: 'Atomic Habits', author: 'James Clear', year: 2018, category: 'Habits',
    blurb: 'The practical classic on building routines that stick — perfect for turning gym visits into a rhythm.',
    url: 'https://jamesclear.com/atomic-habits',
  },
  {
    title: 'Science of Yoga', author: 'Ann Swanson', year: 2019, category: 'Yoga',
    blurb: 'Anatomy-first yoga: what each pose is actually doing to your muscles, joints and breath.',
    url: 'https://dk.com/en-us/products/9780593844335-science-of-yoga',
  },
  {
    title: 'Science and Development of Muscle Hypertrophy', author: 'Brad Schoenfeld, PhD', year: 2024, category: 'Strength',
    blurb: 'The definitive evidence base on how muscle actually grows — the 3rd edition packs 2,000+ references.',
    url: 'https://us.humankinetics.com/products/science-and-development-of-muscle-hypertrophy-3rd-edition',
  },
  {
    title: 'Intuitive Eating', author: 'Evelyn Tribole & Elyse Resch', year: 2020, category: 'Nutrition',
    blurb: 'The original anti-diet framework — rebuilding a calm, workable relationship with food.',
    url: 'https://read.macmillan.com/lp/intuitive-eating-4th-edition/',
  },
  {
    title: 'Breath', author: 'James Nestor', year: 2020, category: 'Breath',
    blurb: 'Why how you breathe changes sleep, stress and performance — pairs beautifully with practice.',
    url: 'https://www.mrjamesnestor.com/breath-book',
  },
  {
    title: 'Good to Go', author: 'Christie Aschwanden', year: 2019, category: 'Recovery',
    blurb: 'The strange science of recovery — what works, what doesn\'t, and what to actually do after training.',
    url: 'https://wwnorton.com/books/Good-to-Go',
  },
]

// ---- Video library --------------------------------------------------------

export interface Video { title: string; source: string; minutes: number; level: string; category: string; url: string }

export const videos: Video[] = [
  {
    title: 'Yoga for Complete Beginners', source: 'Yoga With Adriene', minutes: 20, level: 'First time', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=v7AYKMP6rOE',
  },
  {
    title: '20-Minute Yoga for Beginners', source: 'Yoga With Adriene', minutes: 20, level: 'Beginner', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=vNyJuQuuMC8',
  },
  {
    title: 'Bedtime Yoga', source: 'Yoga With Adriene', minutes: 20, level: 'All levels', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=v7SN-d4qXx0',
  },
  {
    title: 'Pilates for Beginners', source: 'NHS Fitness Studio', minutes: 45, level: 'Beginner', category: 'Pilates',
    url: 'https://www.nhs.uk/live-well/exercise/pilates-and-yoga/pilates-for-beginners/',
  },
  {
    title: 'Strength & Resistance Series', source: 'NHS Fitness Studio', minutes: 10, level: 'Beginner+', category: 'Strength',
    url: 'https://www.nhs.uk/live-well/exercise/strength-and-resistance/',
  },
  {
    title: 'Toning Arms Workout', source: 'NHS Fitness Studio', minutes: 10, level: 'Beginner+', category: 'Strength',
    url: 'https://www.nhs.uk/live-well/exercise/strength-and-resistance/body-blast-arms/',
  },
]
