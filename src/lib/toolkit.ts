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
  {
    id: 'breakfast-burrito', name: 'Big Breakfast Burrito', type: 'Breakfast',
    focus: ['balanced', 'protein'], minutes: 12, serves: 1, kcal: 480, protein: 28,
    ingredients: ['2 eggs', '1 wholegrain wrap', '1/3 cup black beans', '30g cheese, grated', '2 tbsp salsa', '1 handful spinach'],
    method: ['Scramble eggs softly.', 'Warm beans and wrap.', 'Fill with eggs, beans, cheese, salsa and spinach. Toast seam-side down 2 min.'],
    tags: ['Vegetarian', 'High protein', 'Post-workout'],
  },
  {
    id: 'protein-pancakes', name: 'Banana Protein Pancakes', type: 'Breakfast',
    focus: ['protein', 'balanced'], minutes: 15, serves: 1, kcal: 450, protein: 30,
    ingredients: ['1 banana, mashed', '2 eggs', '1/2 cup oats', '1 scoop protein powder', '1/2 cup berries', '1 tsp honey'],
    method: ['Whisk banana, eggs, oats and protein powder into a batter.', 'Cook 2–3 min a side in a lightly oiled pan.', 'Stack and top with berries and honey.'],
    tags: ['High protein', 'Weekend win'],
  },
  {
    id: 'salmon-soba', name: 'Salmon & Soba Noodle Bowl', type: 'Lunch',
    focus: ['balanced', 'protein', 'light'], minutes: 20, serves: 1, kcal: 510, protein: 34,
    ingredients: ['1 salmon fillet', '90g soba noodles', '1/2 cup edamame', '1/4 cucumber, ribboned', '1 tbsp soy sauce', '1 tsp sesame seeds'],
    method: ['Pan-sear salmon 4 min a side.', 'Cook soba, rinse under cold water.', 'Bowl it up with edamame and cucumber, drizzle soy, scatter sesame.'],
    tags: ['High protein', 'Omega-3'],
  },
  {
    id: 'chicken-pesto-wrap', name: 'Chicken Pesto Wrap', type: 'Lunch',
    focus: ['balanced', 'protein'], minutes: 15, serves: 1, kcal: 490, protein: 38,
    ingredients: ['150g cooked chicken breast, sliced', '1 wholegrain wrap', '1 tbsp basil pesto', '1 tomato, sliced', '1 handful rocket', '30g mozzarella'],
    method: ['Spread pesto over the wrap.', 'Layer chicken, tomato, rocket and mozzarella.', 'Fold and toast 2 min a side until golden.'],
    tags: ['High protein', 'Uses leftovers'],
  },
  {
    id: 'teriyaki-salmon', name: 'Teriyaki Salmon Tray Bake', type: 'Dinner',
    focus: ['balanced', 'protein', 'light'], minutes: 25, serves: 2, kcal: 520, protein: 36,
    ingredients: ['2 salmon fillets', '1 bunch broccolini', '1 capsicum, in strips', '2 tbsp teriyaki sauce', '1.5 cups cooked rice', '1 tsp sesame seeds'],
    method: ['Bake salmon and veg at 200°C for 12–14 min, brushing teriyaki halfway.', 'Serve over rice, scatter sesame.'],
    tags: ['High protein', 'One tray'],
  },
  {
    id: 'lean-bolognese', name: 'Lean Beef Bolognese', type: 'Dinner',
    focus: ['balanced', 'protein'], minutes: 30, serves: 4, kcal: 540, protein: 38,
    ingredients: ['500g lean beef mince', '300g wholemeal pasta', '1 tin crushed tomatoes', '1 carrot, grated', '1 zucchini, grated', '2 cloves garlic', 'Parmesan'],
    method: ['Brown mince, add garlic, carrot and zucchini.', 'Add tomatoes, simmer 15 min.', 'Toss through cooked pasta, top with parmesan.'],
    tags: ['High protein', 'Meal prep friendly', 'Feeds a crowd'],
  },
  {
    id: 'cottage-plate', name: 'Cottage Cheese Crunch Plate', type: 'Snack',
    focus: ['protein', 'balanced', 'light'], minutes: 3, serves: 1, kcal: 210, protein: 18,
    ingredients: ['1/2 cup cottage cheese', '4 rice crackers', '1/2 cucumber, sliced', '6 cherry tomatoes'],
    method: ['Plate it, dip it, done.'],
    tags: ['High protein', 'No cooking', 'Vegetarian'],
  },
  {
    id: 'chia-pudding', name: 'Chocolate Chia Pudding', type: 'Snack',
    focus: ['plant', 'balanced', 'light'], minutes: 5, serves: 2, kcal: 230, protein: 7,
    ingredients: ['3 tbsp chia seeds', '1 cup milk or soy milk', '1 tbsp cocoa', '1 tsp honey', '1/2 cup berries'],
    method: ['Whisk chia, milk, cocoa and honey.', 'Rest 10 min (or overnight), stir once mid-way.', 'Top with berries.'],
    tags: ['Vegetarian', 'Make ahead', 'No cooking'],
  },
  {
    id: 'miso-oats', name: 'Savoury Miso Oats', type: 'Breakfast',
    focus: ['balanced', 'plant', 'light'], minutes: 8, serves: 1, kcal: 330, protein: 12,
    ingredients: ['1/2 cup rolled oats', '1 tsp white miso', '1 handful baby spinach', '1 egg', '1 tsp sesame seeds', 'Spring onion, sliced'],
    method: ['Simmer oats in 1 cup water until creamy.', 'Stir in miso and spinach until wilted.', 'Top with a fried egg, sesame and spring onion.'],
    tags: ['Vegetarian', 'Quick', 'Something different'],
  },
  {
    id: 'shakshuka', name: 'Two-Egg Shakshuka', type: 'Breakfast',
    focus: ['balanced', 'protein', 'plant'], minutes: 20, serves: 1, kcal: 390, protein: 20,
    ingredients: ['2 eggs', '1 cup passata', '1/2 capsicum, diced', '1 clove garlic', '1 tsp cumin', '30g feta', '1 slice sourdough'],
    method: ['Soften capsicum and garlic in olive oil.', 'Add passata and cumin, simmer 8 min.', 'Crack in eggs, cover until just set.', 'Top with feta and serve with sourdough.'],
    tags: ['Vegetarian', 'One pan'],
  },
  {
    id: 'avo-egg-toast', name: 'Smashed Avo & Jammy Eggs', type: 'Breakfast',
    focus: ['balanced', 'light'], minutes: 12, serves: 1, kcal: 420, protein: 16,
    ingredients: ['1/2 avocado', '2 slices sourdough', '2 eggs', '1 handful rocket', 'Chilli flakes', 'Lemon'],
    method: ['Boil eggs 6½ min, cool in cold water, peel.', 'Smash avocado on toast with lemon and salt.', 'Top with halved eggs, rocket and chilli.'],
    tags: ['Vegetarian', 'Café-style'],
  },
  {
    id: 'poke-bowl', name: 'Tuna Poke-Style Bowl', type: 'Lunch',
    focus: ['protein', 'balanced', 'light'], minutes: 15, serves: 1, kcal: 480, protein: 32,
    ingredients: ['1 tin tuna in springwater', '1 cup cooked sushi rice', '1/2 cucumber, diced', '1/2 avocado', '1 tbsp soy sauce', '1 tsp sesame seeds', '1 sheet nori, shredded'],
    method: ['Dress tuna with soy and a drizzle of sesame oil.', 'Build the bowl over rice with cucumber and avocado.', 'Finish with sesame and nori.'],
    tags: ['High protein', 'No cooking', 'Gluten-free'],
  },
  {
    id: 'minestrone', name: 'Quick Minestrone', type: 'Lunch',
    focus: ['plant', 'balanced'], minutes: 25, serves: 4, kcal: 340, protein: 13,
    ingredients: ['1 tin cannellini beans', '1 tin chopped tomatoes', '1 carrot, diced', '1 zucchini, diced', '80g small pasta', '1L vegetable stock', '1 handful spinach', 'Parmesan'],
    method: ['Simmer carrot in stock 5 min.', 'Add tomatoes, zucchini and pasta, cook 8 min.', 'Stir in beans and spinach until wilted.', 'Serve with parmesan and pepper.'],
    tags: ['Vegetarian', 'Meal prep friendly', 'Feeds four'],
  },
  {
    id: 'satay-chicken-salad', name: 'Satay Chicken Crunch Salad', type: 'Lunch',
    focus: ['protein', 'balanced'], minutes: 20, serves: 1, kcal: 510, protein: 38,
    ingredients: ['200g chicken breast, sliced', '1 tbsp peanut butter', '1 tbsp soy sauce', '1 lime, juiced', '2 handfuls cabbage slaw', '1/4 cucumber', '1 tbsp crushed peanuts'],
    method: ['Whisk peanut butter, soy, lime and a splash of warm water.', 'Sear chicken until golden, rest and slice.', 'Toss slaw and cucumber in the dressing, top with chicken and peanuts.'],
    tags: ['High protein', 'Gluten-free'],
  },
  {
    id: 'baked-salmon-tray', name: 'Lemon Herb Salmon Tray Bake', type: 'Dinner',
    focus: ['protein', 'balanced', 'light'], minutes: 25, serves: 2, kcal: 520, protein: 36,
    ingredients: ['2 salmon fillets', '2 potatoes, cubed', '150g green beans', '1 lemon, sliced', '2 tbsp olive oil', '1 tsp dried oregano', '2 cloves garlic'],
    method: ['Roast potato cubes at 200°C for 15 min.', 'Add salmon, beans, lemon and garlic to the tray.', 'Bake 10–12 min more until salmon flakes.'],
    tags: ['High protein', 'One tray', 'Gluten-free'],
  },
  {
    id: 'veggie-fried-rice', name: 'Egg-Fried Rice & Veg', type: 'Dinner',
    focus: ['plant', 'balanced'], minutes: 15, serves: 2, kcal: 460, protein: 16,
    ingredients: ['2 cups cooked rice (day-old)', '3 eggs', '1 cup frozen peas & corn', '1 carrot, grated', '2 tbsp soy sauce', '1 tsp sesame oil', 'Spring onion'],
    method: ['Scramble eggs in a hot wok, set aside.', 'Fry rice and veg until hot and a little crisp.', 'Return egg, add soy and sesame, toss through.'],
    tags: ['Vegetarian', 'Uses leftovers', 'Quick'],
  },
  {
    id: 'lentil-bolognese', name: 'Red Lentil Bolognese', type: 'Dinner',
    focus: ['plant', 'balanced'], minutes: 30, serves: 4, kcal: 430, protein: 20,
    ingredients: ['1 cup red lentils, rinsed', '1 tin chopped tomatoes', '1 onion, diced', '1 carrot, grated', '2 cloves garlic', '180g spaghetti', '1 tsp Italian herbs'],
    method: ['Soften onion, carrot and garlic.', 'Add lentils, tomatoes and 1½ cups water, simmer 20 min.', 'Toss through cooked spaghetti with a splash of pasta water.'],
    tags: ['Vegetarian', 'Meal prep friendly', 'Feeds four'],
  },
  {
    id: 'yoghurt-bark', name: 'Frozen Yoghurt Berry Bark', type: 'Snack',
    focus: ['light', 'plant'], minutes: 5, serves: 4, kcal: 110, protein: 5,
    ingredients: ['1 cup Greek yoghurt', '1/2 cup berries', '1 tbsp honey', '1 tbsp granola'],
    method: ['Spread yoghurt on a lined tray.', 'Scatter berries, granola and a honey drizzle.', 'Freeze 2 h, break into shards.'],
    tags: ['Vegetarian', 'Make ahead', 'Kid friendly'],
  },
  {
    id: 'edamame-cup', name: 'Salted Edamame Cup', type: 'Snack',
    focus: ['plant', 'protein', 'light'], minutes: 5, serves: 1, kcal: 120, protein: 11,
    ingredients: ['1 cup frozen edamame pods', 'Sea salt', 'Lemon wedge'],
    method: ['Boil or microwave edamame 3–4 min.', 'Drain, salt generously, squeeze lemon.'],
    tags: ['Vegan', 'High protein', 'Quick'],
  },
  {
    id: 'fritters', name: 'Zucchini Corn Fritters', type: 'Lunch',
    focus: ['plant', 'balanced'], minutes: 20, serves: 2, kcal: 420, protein: 15,
    ingredients: ['1 zucchini, grated & squeezed', '1 cup corn kernels', '2 eggs', '1/3 cup flour', '30g feta', '2 handfuls rocket', 'Yoghurt to serve'],
    method: ['Mix zucchini, corn, eggs, flour and feta into a batter.', 'Fry spoonfuls 3 min each side until golden.', 'Serve over rocket with a yoghurt dollop.'],
    tags: ['Vegetarian', 'Freezer friendly'],
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

// A handful of leafy greens ≈ 30g — converts to grams so leaves merge into
// buyable bag/bunch quantities instead of "7 handfuls spinach".
const LEAFY = /spinach|rocket|leaves|lettuce|kale|greens|herb|watercress/
const HANDFUL_GRAMS = 30

const NAME_ALIASES: Record<string, string> = { 'baby spinach': 'spinach' }

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
        let { qty, unit, name } = parseIngredient(ingredient)
        name = NAME_ALIASES[name.toLowerCase()] ?? name
        if (unit === 'handful' && qty !== null && LEAFY.test(name)) {
          qty *= HANDFUL_GRAMS
          unit = 'g'
        }
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
  { name: 'Couscous', kcal: 175, protein: 6 },
  { name: 'Sushi rice', kcal: 200, protein: 4 },
  { name: 'Rice noodles', kcal: 190, protein: 3 },
  { name: 'Roast potato', kcal: 160, protein: 4 },
  { name: 'Sourdough (2 slices)', kcal: 180, protein: 7 },
  { name: 'Cauliflower rice', kcal: 25, protein: 2 },
  { name: 'Freekeh', kcal: 170, protein: 7 },
  { name: 'Corn tortillas (3)', kcal: 150, protein: 4 },
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
  { name: 'Prawns', kcal: 110, protein: 24 },
  { name: 'Pork loin', kcal: 240, protein: 38 },
  { name: 'Lamb strips', kcal: 280, protein: 32 },
  { name: 'Tempeh', kcal: 190, protein: 19 },
  { name: 'Edamame', kcal: 120, protein: 11 },
  { name: 'Cottage cheese', kcal: 110, protein: 14 },
]

export const mealVeg: MealComponent[] = [
  { name: 'Roast pumpkin', kcal: 60, protein: 1 },
  { name: 'Steamed greens', kcal: 35, protein: 3 },
  { name: 'Cherry tomatoes', kcal: 25, protein: 1 },
  { name: 'Shredded carrot & beetroot', kcal: 50, protein: 2 },
  { name: 'Capsicum & corn salsa', kcal: 70, protein: 2 },
  { name: 'Avocado (half)', kcal: 160, protein: 2 },
  { name: 'Cucumber & radish', kcal: 20, protein: 1 },
  { name: 'Roast zucchini', kcal: 30, protein: 2 },
  { name: 'Cabbage slaw', kcal: 35, protein: 1 },
  { name: 'Steamed broccoli', kcal: 35, protein: 3 },
  { name: 'Roast beetroot', kcal: 45, protein: 2 },
  { name: 'Green beans', kcal: 30, protein: 2 },
  { name: 'Charred corn', kcal: 80, protein: 3 },
]

export const mealSauces: MealComponent[] = [
  { name: 'Tahini lemon drizzle', kcal: 90, protein: 3 },
  { name: 'Soy + ginger', kcal: 30, protein: 1 },
  { name: 'Yoghurt herb', kcal: 45, protein: 3 },
  { name: 'Pesto', kcal: 120, protein: 3 },
  { name: 'Chilli lime', kcal: 25, protein: 0 },
  { name: 'Satay peanut', kcal: 110, protein: 4 },
  { name: 'Sweet chilli', kcal: 60, protein: 0 },
  { name: 'Balsamic glaze', kcal: 40, protein: 0 },
  { name: 'Miso sesame', kcal: 70, protein: 2 },
]

export const mealExtras: MealComponent[] = [
  { name: 'Feta', kcal: 75, protein: 4 },
  { name: 'Toasted seeds', kcal: 90, protein: 4 },
  { name: 'Hummus', kcal: 80, protein: 3 },
  { name: 'Olives', kcal: 60, protein: 0 },
  { name: 'Parmesan', kcal: 85, protein: 7 },
  { name: 'Walnuts', kcal: 100, protein: 2 },
  { name: 'Avocado (extra half)', kcal: 160, protein: 2 },
  { name: 'Boiled egg', kcal: 78, protein: 6 },
]

// ---- Smoothie creator -----------------------------------------------------

export const smoothieBases: MealComponent[] = [
  { name: 'Milk', kcal: 150, protein: 8 },
  { name: 'Soy milk', kcal: 100, protein: 7 },
  { name: 'Almond milk', kcal: 60, protein: 2 },
  { name: 'Coconut water', kcal: 45, protein: 0 },
  { name: 'Water', kcal: 0, protein: 0 },
  { name: 'Oat milk', kcal: 90, protein: 2 },
  { name: 'Kefir', kcal: 110, protein: 9 },
  { name: 'Orange juice', kcal: 110, protein: 2 },
]

export const smoothieFruits: MealComponent[] = [
  { name: 'Banana', kcal: 105, protein: 1 },
  { name: 'Frozen berries', kcal: 70, protein: 1 },
  { name: 'Mango', kcal: 100, protein: 1 },
  { name: 'Pineapple', kcal: 80, protein: 1 },
  { name: 'Apple', kcal: 95, protein: 0 },
  { name: 'Avocado (half)', kcal: 160, protein: 2 },
  { name: 'Peach', kcal: 60, protein: 1 },
  { name: 'Kiwi', kcal: 45, protein: 1 },
  { name: 'Frozen cherries', kcal: 90, protein: 2 },
  { name: 'Dragonfruit', kcal: 60, protein: 1 },
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
  { name: 'Hemp seeds', kcal: 90, protein: 5 },
  { name: 'Flaxseed', kcal: 55, protein: 2 },
  { name: 'Matcha', kcal: 5, protein: 0 },
  { name: 'Ginger + turmeric', kcal: 10, protein: 0 },
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

export function shufflePick<T>(items: T[], count = items.length): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, count)
}

// Deals `count` items preferring ones not yet seen; recycles only when the
// pool runs dry, so reshuffles surface new options for as long as possible.
export function dealFresh<T>(pool: T[], count: number, seen: T[]): { pick: T[]; seen: T[] } {
  const fresh = shufflePick(pool.filter((item) => !seen.includes(item)))
  const pick = fresh.slice(0, count)
  if (pick.length < count) pick.push(...shufflePick(pool.filter((item) => !pick.includes(item)), count - pick.length))
  const nextSeen = [...seen, ...pick].slice(-pool.length)
  return { pick, seen: nextSeen }
}

// Days are generated from movement-pattern slots, not fixed exercise lists —
// every build samples fresh picks, so generated programs never repeat.
type SlotName = 'squat' | 'hinge' | 'push' | 'pull' | 'core' | 'carry' | 'conditioning' | 'machine' | 'gentle' | 'cardio' | 'mobility' | 'accessory'

interface SlotOption { name: string; reps?: string; sets?: number; rest?: string; extra?: string }

const exercisePools: Record<SlotName, SlotOption[]> = {
  squat: [
    { name: 'Goblet squat', extra: 'hold a dumbbell or kettlebell' },
    { name: 'Leg press' },
    { name: 'Hack squat' },
    { name: 'Bulgarian split squat', reps: '8–10 each leg', extra: 'rear foot on bench' },
    { name: 'Front squat', reps: '5–6', extra: 'light bar — elbows high' },
    { name: 'Belt squat' },
    { name: 'Smith machine squat', reps: '8–10' },
    { name: 'High step-up to box', reps: '8 each leg', extra: 'controlled, full foot on box' },
    { name: 'Spanish squat', reps: '10–12', extra: 'band behind knees — quad burn' },
  ],
  hinge: [
    { name: 'Romanian deadlift', reps: '6–8', extra: 'light bar or dumbbells' },
    { name: 'Trap-bar deadlift', reps: '5', extra: 'deadlift platform — film your form' },
    { name: 'Hip thrust', reps: '8–10', extra: 'bench + barbell or machine' },
    { name: 'Kettlebell swings', reps: '12–15' },
    { name: 'Good mornings', reps: '8–10', extra: 'very light bar' },
    { name: 'Glute bridge', reps: '10–12' },
    { name: 'Cable pull-through', reps: '10–12', extra: 'rope attachment, soft knees' },
    { name: 'Single-leg RDL', reps: '8 each leg', extra: 'light dumbbells — hips square' },
    { name: 'Back extension', reps: '10–12', extra: '45° bench — slow tempo' },
  ],
  push: [
    { name: 'Technogym chest press' },
    { name: 'Push-ups', reps: '8–15' },
    { name: 'Incline dumbbell press' },
    { name: 'Flat dumbbell bench press' },
    { name: 'Dumbbell shoulder press', reps: '8–10' },
    { name: 'Landmine press', reps: '8–10 each', extra: 'barbell in the corner rig' },
    { name: 'Assisted dip machine', reps: '8–10' },
    { name: 'Cable fly', reps: '10–12', extra: 'soft elbows, wide stretch' },
    { name: 'Arnold press', reps: '8–10', extra: 'rotate as you press' },
    { name: 'Machine incline press', reps: '8–12' },
  ],
  pull: [
    { name: 'Seated cable row' },
    { name: 'Lat pulldown' },
    { name: 'Assisted pull-up' },
    { name: 'Single-arm dumbbell row', reps: '10–12 each' },
    { name: 'Face pull', reps: '12–15', extra: 'cable, rope attachment' },
    { name: 'Chest-supported row' },
    { name: 'Straight-arm pulldown', reps: '10–12', extra: 'rope or bar — lats only' },
    { name: 'Inverted row', reps: '8–12', extra: 'smith bar or TRX at hip height' },
    { name: 'Cable pullover', reps: '10–12', extra: 'bench across, long stretch' },
  ],
  core: [
    { name: 'Plank', sets: 3, reps: '20–40s', rest: '60s' },
    { name: 'Dead bug', sets: 3, reps: '8 per side', rest: '60s' },
    { name: 'Side plank', sets: 3, reps: '15–30s each', rest: '60s' },
    { name: 'Hollow hold', sets: 3, reps: '15–30s', rest: '60s' },
    { name: 'Pallof press', sets: 3, reps: '10 each side', rest: '60s', extra: 'band or cable' },
    { name: 'Hanging knee raise', sets: 3, reps: '8–12', rest: '60s' },
    { name: 'Cable crunch', sets: 3, reps: '10–12', rest: '60s', extra: 'kneeling at the stack' },
    { name: 'Russian twist', sets: 3, reps: '10 each side', rest: '60s', extra: 'light plate, heels down' },
    { name: 'Bird-dog', sets: 3, reps: '6 each side', rest: '45s', extra: 'slow and level' },
  ],
  carry: [
    { name: 'Farmer carry on the turf', sets: 3, reps: '20–30m', rest: '90s' },
    { name: 'Suitcase carry', sets: 3, reps: '20m each side', rest: '75s', extra: 'single heavy dumbbell' },
    { name: 'Sled or prowler push', sets: 4, reps: '15–20m', rest: '75s' },
    { name: 'Overhead carry', sets: 3, reps: '15–20m', rest: '75s', extra: 'light plates — ribs down' },
    { name: 'Waiter walk', sets: 3, reps: '20m each side', rest: '75s', extra: 'dumbbell overhead, tall walk' },
    { name: 'Sled drag backwards', sets: 3, reps: '15m', rest: '90s' },
    { name: 'Double rack carry', sets: 3, reps: '20m', rest: '90s', extra: 'kettlebells at chest' },
  ],
  conditioning: [
    { name: 'Bike or rower intervals', sets: 6, reps: '40s hard / 80s easy', rest: '' },
    { name: 'Assault bike or ski erg', sets: 5, reps: '30s hard / 60s easy', rest: '' },
    { name: 'Medicine ball slams', reps: '10', rest: '60s' },
    { name: 'Incline treadmill walk', sets: 1, reps: '8–10 min steady', rest: '' },
    { name: 'Battle ropes', sets: 6, reps: '20s hard / 40s easy', rest: '' },
    { name: 'Rowing steady piece', sets: 1, reps: '6–8 min', rest: '' },
    { name: 'Stair climber intervals', sets: 5, reps: '45s hard / 90s easy', rest: '' },
    { name: 'Skipping rope', sets: 8, reps: '30s on / 30s off', rest: '' },
    { name: 'Fast box step-ups', sets: 5, reps: '40s', rest: '60s' },
  ],
  machine: [
    { name: 'Leg press', reps: '10–12', extra: 'light and controlled' },
    { name: 'Chest press', reps: '10–12' },
    { name: 'Seated row', reps: '10–12' },
    { name: 'Lat pulldown', reps: '10–12', extra: 'light weight' },
    { name: 'Machine leg curl', reps: '10–12' },
    { name: 'Standing shoulder press', reps: '8–10', extra: 'light dumbbells' },
    { name: 'Seated leg extension', reps: '10–12', extra: 'easy load' },
    { name: 'Cable or band woodchop', reps: '10 each side', extra: 'slow and controlled' },
    { name: 'Machine hip abductor', reps: '12–15', extra: 'gentle squeeze out' },
    { name: 'Machine fly', reps: '10–12', extra: 'smooth, no slam' },
    { name: 'Assisted chin-up machine', reps: '8–10', extra: 'heavy assist — full range' },
  ],
  gentle: [
    { name: 'Sit-to-stand from a bench', reps: '8–10' },
    { name: 'Wall push-ups', reps: '8–12' },
    { name: 'Step-ups', reps: '8 each leg' },
    { name: 'Supported single-leg balance', reps: '20s each side' },
    { name: 'Goblet squat to a bench', reps: '8–10', extra: 'light dumbbell' },
    { name: 'Glute bridge', reps: '10–12' },
    { name: 'Incline push-ups on a bench', reps: '8–12' },
    { name: 'Seated band row', reps: '10–12', extra: 'light band around feet' },
    { name: 'Supported standing march', reps: '20 steps', extra: 'hold the rail, tall posture' },
  ],
  cardio: [
    { name: 'Easy treadmill walk', sets: 1, reps: '5–10 min', rest: '' },
    { name: 'Recumbent bike', sets: 1, reps: '10 min easy', rest: '' },
    { name: 'Bike or cross-trainer', sets: 1, reps: '8–12 min easy', rest: '' },
    { name: 'Rower, easy pace', sets: 1, reps: '6–8 min', rest: '' },
    { name: 'Cross-trainer steady', sets: 1, reps: '8–10 min', rest: '' },
    { name: 'Treadmill incline stroll', sets: 1, reps: '8 min gentle', rest: '' },
  ],
  mobility: [
    { name: 'Gentle stretch circuit', sets: 2, reps: '30s per stretch', rest: '' },
    { name: 'Cat-cow and child’s pose flow', sets: 2, reps: '6 slow rounds', rest: '' },
    { name: 'Supported bird-dog', sets: 2, reps: '6 each side' },
    { name: 'Hip opener sequence', sets: 2, reps: '30s each side', rest: '' },
    { name: 'Band pull-aparts and thoracic rotations', sets: 2, reps: '10 each', rest: '' },
    { name: '90/90 hip switches', sets: 2, reps: '6 each side', rest: '' },
    { name: 'Couch stretch', sets: 2, reps: '30s each leg', rest: '' },
    { name: 'Foam roll sequence', sets: 1, reps: '45s per area', rest: '' },
  ],
  accessory: [
    { name: 'Lateral raises', sets: 3, reps: '12–15', rest: '60s', extra: 'light dumbbells, slow lower' },
    { name: 'Cable triceps press', sets: 3, reps: '10–12', rest: '60s' },
    { name: 'Dumbbell curls', sets: 3, reps: '10–12', rest: '60s' },
    { name: 'Seated calf raise', sets: 3, reps: '12–15', rest: '60s' },
    { name: 'Rear-delt fly', sets: 3, reps: '12–15', rest: '60s', extra: 'light — feel the back of the shoulders' },
    { name: 'Hammer curls', sets: 3, reps: '10–12', rest: '60s' },
    { name: 'Dumbbell shrugs', sets: 3, reps: '10–12', rest: '60s', extra: 'squeeze at the top' },
    { name: 'Overhead triceps extension', sets: 3, reps: '10–12', rest: '60s', extra: 'single dumbbell, elbows in' },
  ],
}

const dayTemplates: Record<RoutineGoal, { name: string; focus: string; warmup: string[]; cooldown: string[]; slots: SlotName[] }[]> = {
  strength: [
    { name: 'Full-body A', focus: 'Squat + push + pull', warmup: warmups.strength, cooldown: cooldowns.strength, slots: ['squat', 'push', 'pull', 'hinge', 'core'] },
    { name: 'Full-body B', focus: 'Hinge + vertical pull + press', warmup: warmups.strength, cooldown: cooldowns.strength, slots: ['squat', 'pull', 'push', 'hinge', 'core'] },
    { name: 'Full-body C', focus: 'Posterior chain + carries', warmup: warmups.strength, cooldown: cooldowns.strength, slots: ['hinge', 'push', 'pull', 'carry', 'core'] },
    { name: 'Full-body D', focus: 'Volume + accessories', warmup: warmups.strength, cooldown: cooldowns.strength, slots: ['squat', 'push', 'pull', 'accessory', 'core'] },
  ],
  fitness: [
    { name: 'Strength + engine A', focus: 'Lower body + intervals', warmup: warmups.fitness, cooldown: cooldowns.fitness, slots: ['squat', 'hinge', 'conditioning', 'core'] },
    { name: 'Strength + engine B', focus: 'Upper body + core', warmup: warmups.fitness, cooldown: cooldowns.fitness, slots: ['push', 'pull', 'push', 'core', 'conditioning'] },
    { name: 'Turf conditioning', focus: 'Cardio capacity', warmup: warmups.fitness, cooldown: cooldowns.fitness, slots: ['conditioning', 'carry', 'conditioning', 'conditioning'] },
    { name: 'Mixed circuit day', focus: 'Everything at once', warmup: warmups.fitness, cooldown: cooldowns.fitness, slots: ['squat', 'conditioning', 'pull', 'push', 'conditioning'] },
  ],
  foundations: [
    { name: 'Gentle full-body A', focus: 'Learn the machines', warmup: warmups.foundations, cooldown: cooldowns.foundations, slots: ['machine', 'machine', 'machine', 'cardio'] },
    { name: 'Gentle full-body B', focus: 'Balance + posture', warmup: warmups.foundations, cooldown: cooldowns.foundations, slots: ['gentle', 'machine', 'machine', 'gentle'] },
    { name: 'Move + mobilise', focus: 'Joints and confidence', warmup: warmups.foundations, cooldown: cooldowns.foundations, slots: ['cardio', 'gentle', 'gentle', 'mobility'] },
    { name: 'Confidence builder', focus: 'Machines + easy cardio', warmup: warmups.foundations, cooldown: cooldowns.foundations, slots: ['cardio', 'machine', 'machine', 'gentle', 'mobility'] },
  ],
}

export function buildRoutine(goal: RoutineGoal, level: RoutineLevel, daysPerWeek: 2 | 3 | 4, variant = 0): RoutinePlan {
  const { sets, rest } = goal === 'foundations' ? { sets: 2, rest: 'as needed' } : setsReps[level]
  const reps = goal === 'strength' ? '5–8' : goal === 'fitness' ? '8–12' : '10–12'
  const templates = dayTemplates[goal]
  const rotated = [...templates.slice(variant % templates.length), ...templates.slice(0, variant % templates.length)]
  const shapes = rotated.slice(0, Math.min(daysPerWeek, 3))
  if (daysPerWeek === 4) shapes.push(rotated[3])
  const selected: RoutineDay[] = shapes.map((shape) => {
    const used = new Set<string>()
    const exercises = shape.slots.map((slot) => {
      const pool = exercisePools[slot]
      const fresh = pool.filter((option) => !used.has(option.name))
      const source = fresh.length ? fresh : pool
      const option = source[Math.floor(Math.random() * source.length)]
      used.add(option.name)
      return ex(option.name, option.sets ?? sets, option.reps ?? reps, option.rest ?? rest, option.extra)
    })
    return { name: shape.name, focus: shape.focus, warmup: shape.warmup, cooldown: shape.cooldown, exercises }
  })
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
      { title: 'Bleed It Out', artist: 'Linkin Park' },
      { title: 'Remember the Name', artist: 'Fort Minor' },
      { title: 'All I Do Is Win', artist: 'DJ Khaled ft. T-Pain' },
      { title: 'Run This Town', artist: 'JAY-Z ft. Rihanna & Kanye West' },
      { title: 'Smells Like Teen Spirit', artist: 'Nirvana' },
      { title: 'Killing in the Name', artist: 'Rage Against the Machine' },
      { title: 'Shoot to Thrill', artist: 'AC/DC' },
      { title: 'Sicko Mode', artist: 'Travis Scott' },
      { title: 'HUMBLE.', artist: 'Kendrick Lamar' },
      { title: 'The Last Resort', artist: 'Papa Roach' },
      { title: 'Walk', artist: 'Pantera' },
      { title: 'Eye of the Tiger', artist: 'Survivor' },
      { title: 'Ace of Spades', artist: 'Motörhead' },
      { title: 'Monster', artist: 'Skillet' },
      { title: 'Down with the Sickness', artist: 'Disturbed' },
      { title: 'Freak on a Leash', artist: 'Korn' },
      { title: 'Chop Suey!', artist: 'System of a Down' },
      { title: 'Du Hast', artist: 'Rammstein' },
      { title: 'Bodies', artist: 'Drowning Pool' },
      { title: 'One Step Closer', artist: 'Linkin Park' },
      { title: 'X Gon\' Give It to Ya', artist: 'DMX' },
      { title: 'In Da Club', artist: '50 Cent' },
      { title: 'Forgot About Dre', artist: 'Dr. Dre ft. Eminem' },
      { title: 'Legend Has It', artist: 'Run the Jewels' },
      { title: 'DNA.', artist: 'Kendrick Lamar' },
      { title: 'Fuel', artist: 'Metallica' },
      { title: 'The Pretender', artist: 'Foo Fighters' },
      { title: 'Radioactive', artist: 'Imagine Dragons' },
      { title: 'Centuries', artist: 'Fall Out Boy' },
      { title: 'Till I Collapse (Nate Dogg)', artist: 'Eminem' },
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
      { title: 'Turn Down for What', artist: 'DJ Snake & Lil Jon' },
      { title: 'I Gotta Feeling', artist: 'Black Eyed Peas' },
      { title: 'Mr. Brightside', artist: 'The Killers' },
      { title: 'Wake Me Up', artist: 'Avicii' },
      { title: 'Shake It Off', artist: 'Taylor Swift' },
      { title: 'Can\'t Stop the Feeling!', artist: 'Justin Timberlake' },
      { title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars' },
      { title: 'Rain on Me', artist: 'Lady Gaga & Ariana Grande' },
      { title: 'Levitating', artist: 'Dua Lipa' },
      { title: 'Dance Monkey', artist: 'Tones and I' },
      { title: 'Rather Be', artist: 'Clean Bandit ft. Jess Glynne' },
      { title: 'Stronger', artist: 'Kanye West' },
      { title: 'Heat Waves', artist: 'Glass Animals' },
      { title: 'Blinding Lights', artist: 'The Weeknd' },
      { title: 'We Found Love', artist: 'Rihanna ft. Calvin Harris' },
      { title: 'This Is What You Came For', artist: 'Calvin Harris ft. Rihanna' },
      { title: 'One Kiss', artist: 'Calvin Harris & Dua Lipa' },
      { title: 'Don\'t Start Now', artist: 'Dua Lipa' },
      { title: 'Physical', artist: 'Dua Lipa' },
      { title: 'Break Free', artist: 'Ariana Grande ft. Zedd' },
      { title: 'Side to Side', artist: 'Ariana Grande ft. Nicki Minaj' },
      { title: 'Cheap Thrills', artist: 'Sia' },
      { title: 'The Greatest', artist: 'Sia ft. Kendrick Lamar' },
      { title: 'Run the World (Girls)', artist: 'Beyoncé' },
      { title: 'Sorry', artist: 'Justin Bieber' },
      { title: 'Starships', artist: 'Nicki Minaj' },
      { title: 'Where Have You Been', artist: 'Rihanna' },
      { title: 'Scream & Shout', artist: 'will.i.am ft. Britney Spears' },
      { title: 'Hey Mama', artist: 'David Guetta ft. Nicki Minaj' },
      { title: 'Bang Bang', artist: 'Jessie J, Ariana Grande & Nicki Minaj' },
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
      { title: 'Something About Us', artist: 'Daft Punk' },
      { title: 'Sunset Lover', artist: 'Petit Biscuit' },
      { title: 'Late Night', artist: 'ODESZA' },
      { title: 'Oblivion', artist: 'Grimes' },
      { title: 'Lost in Yesterday', artist: 'Tame Impala' },
      { title: 'Retrograde', artist: 'James Blake' },
      { title: 'Kiara', artist: 'Bonobo' },
      { title: 'Nights', artist: 'Frank Ocean' },
      { title: 'Sunset', artist: 'The xx' },
      { title: 'The Mother We Share', artist: 'CHVRCHES' },
      { title: 'Ribs', artist: 'Lorde' },
      { title: 'A Walk', artist: 'Tycho' },
      { title: 'Gooey', artist: 'Glass Animals' },
      { title: 'Left Hand Free', artist: 'alt-J' },
      { title: 'Tessellate', artist: 'alt-J' },
      { title: 'What You Know', artist: 'Two Door Cinema Club' },
      { title: 'Pumped Up Kicks', artist: 'Foster the People' },
      { title: 'Sit Next to Me', artist: 'Foster the People' },
      { title: 'Line of Sight', artist: 'ODESZA ft. WYNNE & Mansionair' },
      { title: 'Higher Ground', artist: 'ODESZA ft. Naomi Wild' },
      { title: 'Feel It Still', artist: 'Portugal. The Man' },
      { title: 'Electric Love', artist: 'BØRNS' },
      { title: 'Little Talks', artist: 'Of Monsters and Men' },
      { title: 'Never Be Like You', artist: 'Flume ft. Kai' },
      { title: 'Say It', artist: 'Flume ft. Tove Lo' },
      { title: 'Cirrus', artist: 'Bonobo' },
      { title: 'Kerala', artist: 'Bonobo' },
      { title: 'Epoch', artist: 'Tycho' },
      { title: 'Awake', artist: 'Tycho' },
      { title: 'Dive', artist: 'Tycho' },
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
      { title: 'I\'m Yours', artist: 'Jason Mraz' },
      { title: 'Sunflower', artist: 'Post Malone & Swae Lee' },
      { title: 'Flightless Bird, American Mouth', artist: 'Iron & Wine' },
      { title: 'Ho Hey', artist: 'The Lumineers' },
      { title: 'Island in the Sun', artist: 'Weezer' },
      { title: 'Send Me on My Way', artist: 'Rusted Root' },
      { title: 'Count on Me', artist: 'Bruno Mars' },
      { title: 'Ophelia', artist: 'The Lumineers' },
      { title: 'Rivers and Roads', artist: 'The Head and the Heart' },
      { title: 'Walking on Sunshine', artist: 'Katrina and the Waves' },
      { title: 'Accidentally in Love', artist: 'Counting Crows' },
      { title: 'Steal My Sunshine', artist: 'Len' },
      { title: 'Flake', artist: 'Jack Johnson' },
      { title: 'I Lived', artist: 'OneRepublic' },
      { title: 'Adventure of a Lifetime', artist: 'Coldplay' },
      { title: 'Best Day of My Life', artist: 'American Authors' },
      { title: 'Unwritten', artist: 'Natasha Bedingfield' },
      { title: 'Pocketful of Sunshine', artist: 'Natasha Bedingfield' },
      { title: 'Brave', artist: 'Sara Bareilles' },
      { title: 'New Soul', artist: 'Yael Naïm' },
      { title: '1234', artist: 'Feist' },
      { title: 'Little Lion Man', artist: 'Mumford & Sons' },
      { title: 'I Will Wait', artist: 'Mumford & Sons' },
      { title: 'Stubborn Love', artist: 'The Lumineers' },
      { title: 'Down Under', artist: 'Men at Work' },
      { title: 'Don\'t Dream It\'s Over', artist: 'Crowded House' },
      { title: 'The Horses', artist: 'Daryl Braithwaite' },
      { title: 'Cosby Sweater', artist: 'Hilltop Hoods' },
      { title: 'Good Day Sunshine', artist: 'The Beatles' },
      { title: 'Beautiful Day', artist: 'U2' },
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
      { title: 'The Night We Met', artist: 'Lord Huron' },
      { title: 'Mystery of Love', artist: 'Sufjan Stevens' },
      { title: 'All My Days', artist: 'Alexi Murdoch' },
      { title: 'Heartbeats', artist: 'José González' },
      { title: 'Cherry Wine', artist: 'Hozier' },
      { title: 'Sea of Love', artist: 'Cat Power' },
      { title: 'First Day of My Life', artist: 'Bright Eyes' },
      { title: 'Naked as We Came', artist: 'Iron & Wine' },
      { title: 'Breathe Me', artist: 'Sia' },
      { title: 'Youth', artist: 'Daughter' },
      { title: 'Anchor', artist: 'Novo Amor' },
      { title: 'Hallelujah', artist: 'Jeff Buckley' },
      { title: 'Let It Be', artist: 'The Beatles' },
      { title: 'Between the Bars', artist: 'Elliott Smith' },
      { title: 'Skinny Love', artist: 'Bon Iver' },
      { title: 'Blood Bank', artist: 'Bon Iver' },
      { title: 'Work Song', artist: 'Hozier' },
      { title: 'Like Real People Do', artist: 'Hozier' },
      { title: 'From Eden', artist: 'Hozier' },
      { title: 'Motion Sickness', artist: 'Phoebe Bridgers' },
      { title: 'Scott Street', artist: 'Phoebe Bridgers' },
      { title: 'Pink + White', artist: 'Frank Ocean' },
      { title: 'Ivy', artist: 'Frank Ocean' },
      { title: 'Self Control', artist: 'Frank Ocean' },
      { title: 'White Ferrari', artist: 'Frank Ocean' },
      { title: 'Slow Dancing in a Burning Room', artist: 'John Mayer' },
      { title: 'Gravity', artist: 'John Mayer' },
      { title: 'Free Fallin\'', artist: 'John Mayer' },
      { title: 'Realiti', artist: 'Grimes' },
      { title: 'Apocalypse', artist: 'Cigarettes After Sex' },
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
      { title: 'Ambre', artist: 'Nils Frahm' },
      { title: 'We Move Lightly', artist: 'Dustin O\'Halloran' },
      { title: 'Nocturne No. 2 in E-flat Major', artist: 'Frédéric Chopin' },
      { title: 'In a Sentimental Mood', artist: 'John Coltrane & Duke Ellington' },
      { title: 'On the Nature of Daylight', artist: 'Max Richter' },
      { title: 'Time', artist: 'Hans Zimmer' },
      { title: 'Comptine d\'un autre été', artist: 'Yann Tiersen' },
      { title: 'River Flows in You', artist: 'Yiruma' },
      { title: 'Moonlight Sonata', artist: 'Ludwig van Beethoven' },
      { title: 'Clair de Lune', artist: 'Claude Debussy' },
      { title: 'The Blue Notebooks', artist: 'Max Richter' },
      { title: 'Says', artist: 'Nils Frahm' },
      { title: 'Avril 14th', artist: 'Aphex Twin' },
      { title: 'Porcelain', artist: 'Moby' },
      { title: 'Arrival of the Birds', artist: 'The Cinematic Orchestra' },
      { title: 'Merry Christmas Mr. Lawrence', artist: 'Ryuichi Sakamoto' },
      { title: 'Energy Flow', artist: 'Ryuichi Sakamoto' },
      { title: 'Opus', artist: 'Ryuichi Sakamoto' },
      { title: 're:member', artist: 'Ólafur Arnalds' },
      { title: 'Only the Winds', artist: 'Ólafur Arnalds' },
      { title: 'Particles', artist: 'Ólafur Arnalds' },
      { title: 'Fyrsta', artist: 'Ólafur Arnalds' },
      { title: 'All Melody', artist: 'Nils Frahm' },
      { title: 'Familiar', artist: 'Nils Frahm' },
      { title: 'Hammers', artist: 'Nils Frahm' },
      { title: 'Dream 3', artist: 'Max Richter' },
      { title: 'November', artist: 'Max Richter' },
      { title: 'Spring 1', artist: 'Max Richter' },
      { title: 'A Catalogue of Afternoons', artist: 'Max Richter' },
      { title: 'Sleepwalking', artist: 'This Will Destroy You' },
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
  { id: 'lounge', name: 'Recovery Lounge', hint: 'Coffee-shop jazz for rest days', videoId: 'fEvM-OUbaKs' },
  { id: 'focus', name: 'Deep Focus', hint: 'The classic lofi study radio', videoId: 'jfKfPfyJRdk' },
  { id: 'owl', name: 'Night Owl', hint: 'Late-night lofi study session', videoId: 'lTRiuFIWV54' },
  { id: 'essentials', name: 'Essentials', hint: 'Chillhop seasonal beats — mellow movement', videoId: 'jiua2V9q9V0' },
  { id: 'cafe', name: 'Studio Café', hint: 'Live jazz café — smoothie-bar energy', videoId: 'jRfwYdHDvEw' },
  { id: 'cloud', name: 'Cloud Rest', hint: 'White noise for sleep & breathwork', videoId: 'm7AFT-dCmTE' },
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

export interface Book { title: string; author: string; year: number; category: string; blurb: string; url: string; isbn: string }

export const bookCover = (isbn: string) => `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`

export const books: Book[] = [
  {
    title: 'Atomic Habits', author: 'James Clear', year: 2018, category: 'Habits',
    blurb: 'The practical classic on building routines that stick — perfect for turning gym visits into a rhythm.',
    url: 'https://jamesclear.com/atomic-habits', isbn: '9786067891744',
  },
  {
    title: 'Science of Yoga', author: 'Ann Swanson', year: 2019, category: 'Yoga',
    blurb: 'Anatomy-first yoga: what each pose is actually doing to your muscles, joints and breath.',
    url: 'https://dk.com/en-us/products/9780593844335-science-of-yoga', isbn: '9781465479358',
  },
  {
    title: 'Science and Development of Muscle Hypertrophy', author: 'Brad Schoenfeld, PhD', year: 2024, category: 'Strength',
    blurb: 'The definitive evidence base on how muscle actually grows — the 3rd edition packs 2,000+ references.',
    url: 'https://us.humankinetics.com/products/science-and-development-of-muscle-hypertrophy-3rd-edition', isbn: '9781492519607',
  },
  {
    title: 'Intuitive Eating', author: 'Evelyn Tribole & Elyse Resch', year: 2020, category: 'Nutrition',
    blurb: 'The original anti-diet framework — rebuilding a calm, workable relationship with food.',
    url: 'https://read.macmillan.com/lp/intuitive-eating-4th-edition/', isbn: '9780312321239',
  },
  {
    title: 'Breath', author: 'James Nestor', year: 2020, category: 'Breath',
    blurb: 'Why how you breathe changes sleep, stress and performance — pairs beautifully with practice.',
    url: 'https://www.mrjamesnestor.com/breath-book', isbn: '9780735213616',
  },
  {
    title: 'Good to Go', author: 'Christie Aschwanden', year: 2019, category: 'Recovery',
    blurb: 'The strange science of recovery — what works, what doesn\'t, and what to actually do after training.',
    url: 'https://wwnorton.com/books/Good-to-Go', isbn: '9780393254334',
  },
  {
    title: 'Outlive', author: 'Peter Attia, MD', year: 2023, category: 'Longevity',
    blurb: 'Strength, stability and zone 2 as the pillars of a long, capable life — the training-case for decades ahead.',
    url: 'https://peterattiamd.com/outlive/', isbn: '9780593236598',
  },
  {
    title: 'How Not to Die', author: 'Michael Greger, MD', year: 2015, category: 'Nutrition',
    blurb: 'Evidence-based eating across the fifteen biggest killers — plus the Daily Dozen checklist worth stealing.',
    url: 'https://nutritionfacts.org/book/', isbn: '9781509852505',
  },
  {
    title: 'Born to Run', author: 'Christopher McDougall', year: 2009, category: 'Movement',
    blurb: 'The cult classic on why humans are built to run — a tribe, a race, and the joy of moving far.',
    url: 'https://www.penguinrandomhouse.com/books/176416/born-to-run-by-christopher-mcdougall/', isbn: '9787544260336',
  },
  {
    title: 'The Comfort Crisis', author: 'Michael Easter', year: 2021, category: 'Resilience',
    blurb: 'Why doing hard things on purpose rewires you — rucking, discomfort and the case against too much ease.',
    url: 'https://openlibrary.org/isbn/9780593138762', isbn: '9780593138762',
  },
  {
    title: 'Spark', author: 'John J. Ratey, MD', year: 2008, category: 'Mind',
    blurb: 'The landmark book on how exercise remodels the brain — for mood, focus and learning.',
    url: 'https://www.hachettebookgroup.com/titles/john-j-ratey-md/spark/9780316113502/', isbn: '9780316113502',
  },
  {
    title: 'Why We Sleep', author: 'Matthew Walker, PhD', year: 2017, category: 'Sleep',
    blurb: 'The science of sleep — the cheapest performance enhancer you are probably not using enough of.',
    url: 'https://openlibrary.org/isbn/9780141983776', isbn: '9780141983776',
  },
  {
    title: 'The Oxygen Advantage', author: 'Patrick McKeown', year: 2015, category: 'Breath',
    blurb: 'Nasal breathing, CO₂ tolerance and lighter breaths — practical protocols for cardio efficiency.',
    url: 'https://oxygenadvantage.com/the-oxygen-advantage-book/', isbn: '9780062349477',
  },
  {
    title: 'Glucose Revolution', author: 'Jessie Inchauspé', year: 2022, category: 'Nutrition',
    blurb: 'Simple, non-restrictive hacks for steadier energy — order, timing and small swaps over dieting.',
    url: 'https://openlibrary.org/isbn/9781982179410', isbn: '9781982179410',
  },
  {
    title: 'The Body Keeps the Score', author: 'Bessel van der Kolk, MD', year: 2014, category: 'Mind',
    blurb: 'How stress and trauma live in the body — and why movement practices are part of the way back.',
    url: 'https://www.penguinrandomhouse.com/books/206380/the-body-keeps-the-score-by-bessel-van-der-kolk-md/', isbn: '9780141978611',
  },
  {
    title: 'Exercised', author: 'Daniel Lieberman', year: 2020, category: 'Movement',
    blurb: 'An evolutionary biologist explains why exercise is weird, wonderful and worth rethinking.',
    url: 'https://www.penguinrandomhouse.com/books/206675/exercised-by-daniel-e-lieberman/', isbn: '9780141986364',
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
  {
    title: 'Fat-Burning Home Workout', source: 'Body Project', minutes: 30, level: 'Beginner', category: 'Cardio',
    url: 'https://www.youtube.com/watch?v=gC_L9qAHVJ8',
  },
  {
    title: 'Yoga for Anxiety and Stress', source: 'Yoga With Adriene', minutes: 33, level: 'All levels', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=hJbRpHZr_d0',
  },
  {
    title: 'Full Body Yoga for Strength & Flexibility', source: 'growingannanas', minutes: 25, level: 'Intermediate', category: 'Mobility',
    url: 'https://www.youtube.com/watch?v=Eml2xnoLpYE',
  },
  {
    title: 'Full Body Workout — No Equipment', source: 'Pamela Reif', minutes: 20, level: 'Intermediate', category: 'Strength',
    url: 'https://www.youtube.com/watch?v=UBMk30rjy0o',
  },
  {
    title: 'Full Body Workout for Beginners', source: 'Fit Tuber', minutes: 20, level: 'Beginner', category: 'Strength',
    url: 'https://www.youtube.com/watch?v=AzV3EA-1-yM',
  },
  {
    title: '5-Minute Meditation You Can Do Anywhere', source: 'Goodful', minutes: 5, level: 'All levels', category: 'Mind',
    url: 'https://www.youtube.com/watch?v=inpok4MKVLM',
  },
  {
    title: '10-Minute Yoga for Beginners', source: 'Yoga With Adriene', minutes: 10, level: 'First time', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=j7rKKpwdXNE',
  },
  {
    title: 'Day 1 — Ease Into It · 30 Days of Yoga', source: 'Yoga With Adriene', minutes: 24, level: 'First time', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=oBu-pQG6sTY',
  },
  {
    title: '15-Minute Calming Yoga for Stress Relief', source: 'SarahBethYoga', minutes: 15, level: 'All levels', category: 'Mind',
    url: 'https://www.youtube.com/watch?v=Nw2oBIrQGLo',
  },
  {
    title: '10-Minute Morning Yoga for Beginners', source: 'SarahBethYoga', minutes: 10, level: 'Beginner', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=VaoV1PrYft4',
  },
  {
    title: '30-Minute Daily Yoga Routine', source: 'Fit Tuber', minutes: 30, level: 'Beginner', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=dAqQqmaI9vY',
  },
  {
    title: '15-Minute Daily Yoga Routine', source: 'Fit Tuber', minutes: 15, level: 'Beginner', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=s2NQhpFGIOg',
  },
  {
    title: '30-Minute HIIT Cardio — No Equipment', source: 'SELF', minutes: 30, level: 'Intermediate', category: 'Cardio',
    url: 'https://www.youtube.com/watch?v=ml6cT4AZdqI',
  },
  {
    title: '10-Minute High Intensity Workout', source: 'Pamela Reif', minutes: 10, level: 'Intermediate+', category: 'Cardio',
    url: 'https://www.youtube.com/watch?v=zr08J6wB53Y',
  },
  {
    title: 'Low-Impact 30-Minute Cardio', source: 'Body Project', minutes: 30, level: 'Beginner', category: 'Cardio',
    url: 'https://www.youtube.com/watch?v=50kH47ZztHs',
  },
  {
    title: 'Couch to 5K · Week-by-Week Plan', source: 'NHS', minutes: 30, level: 'Beginner', category: 'Cardio',
    url: 'https://www.nhs.uk/live-well/exercise/couch-to-5k-week-by-week/',
  },
  {
    title: 'Flexibility & Stretching Guide', source: 'NHS', minutes: 15, level: 'All levels', category: 'Mobility',
    url: 'https://www.nhs.uk/live-well/exercise/flexibility-exercises/',
  },
]
