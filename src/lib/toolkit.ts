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
  {
    id: 'baked-oats', name: 'Baked Oats & Banana', type: 'Breakfast',
    focus: ['balanced', 'light'], minutes: 25, serves: 2, kcal: 310, protein: 11,
    ingredients: ['1 cup rolled oats', '1 banana, mashed', '1 egg', '1/2 cup milk', '1 tsp cinnamon', '1 tsp honey', '1/2 cup blueberries'],
    method: ['Mix everything, pour into a lined dish.', 'Bake at 180°C for 18–20 min until set.', 'Serve warm with extra berries.'],
    tags: ['Vegetarian', 'Meal prep friendly'],
  },
  {
    id: 'omelette-veg', name: 'Three-Egg Garden Omelette', type: 'Breakfast',
    focus: ['protein', 'balanced', 'light'], minutes: 10, serves: 1, kcal: 340, protein: 24,
    ingredients: ['3 eggs', '1/2 capsicum, diced', '1 handful baby spinach', '30g tasty cheese', '1 tbsp milk', 'Butter for the pan'],
    method: ['Whisk eggs and milk with a pinch of salt.', 'Soften capsicum in butter.', 'Add eggs, fold in spinach and cheese, cook until just set.'],
    tags: ['Vegetarian', 'High protein', 'Quick'],
  },
  {
    id: 'overnight-bircher', name: 'Apple Cinnamon Bircher', type: 'Breakfast',
    focus: ['balanced', 'plant', 'light'], minutes: 5, serves: 2, kcal: 340, protein: 10,
    ingredients: ['1 cup rolled oats', '1 apple, grated', '3/4 cup apple juice', '1/2 cup Greek yoghurt', '1 tsp cinnamon', '10 almonds, chopped'],
    method: ['Combine oats, apple and juice; refrigerate overnight.', 'Fold in yoghurt, top with almonds and cinnamon.'],
    tags: ['Vegetarian', 'Make ahead', 'No cooking'],
  },
  {
    id: 'beans-toast', name: 'BBQ Beans & Eggs on Toast', type: 'Breakfast',
    focus: ['balanced', 'protein'], minutes: 12, serves: 1, kcal: 430, protein: 22,
    ingredients: ['1/2 tin baked beans', '2 eggs', '2 slices wholegrain toast', '1 tsp butter', 'Chopped parsley'],
    method: ['Heat beans in a small pan.', 'Fry eggs to your liking.', 'Serve beans and eggs over toast with parsley.'],
    tags: ['Vegetarian', 'Pantry staples'],
  },
  {
    id: 'green-breakfast-bowl', name: 'Savoury Greens & Egg Bowl', type: 'Breakfast',
    focus: ['protein', 'light', 'balanced'], minutes: 12, serves: 1, kcal: 350, protein: 21,
    ingredients: ['2 eggs', '1 cup steamed greens', '1/2 avocado', '1 tbsp hummus', '1 tsp seeds', 'Lemon wedge'],
    method: ['Poach or boil eggs.', 'Build bowl: greens, hummus, avocado.', 'Top with eggs, seeds and lemon.'],
    tags: ['High protein', 'Gluten-free', 'Quick'],
  },
  {
    id: 'banana-weatbix', name: 'Wheat Biscuit Berry Stack', type: 'Breakfast',
    focus: ['light', 'balanced', 'plant'], minutes: 3, serves: 1, kcal: 290, protein: 9,
    ingredients: ['2 wheat biscuits', '1/2 cup milk or soy milk', '1/2 banana, sliced', '1/2 cup strawberries', '1 tsp honey'],
    method: ['Layer biscuits with milk in a bowl.', 'Top with banana, strawberries and honey.'],
    tags: ['Vegetarian', 'Kid friendly', 'No cooking'],
  },
  {
    id: 'corn-fritter-brekky', name: 'Cheesy Corn Scramble', type: 'Breakfast',
    focus: ['balanced', 'protein'], minutes: 10, serves: 1, kcal: 410, protein: 23,
    ingredients: ['3 eggs', '1/3 cup corn kernels', '30g tasty cheese, grated', '1 spring onion', '1 slice sourdough'],
    method: ['Scramble eggs with corn over medium heat.', 'Fold in cheese and spring onion at the end.', 'Serve on toast.'],
    tags: ['Vegetarian', 'High protein', 'Quick'],
  },
  {
    id: 'mango-coconut-oats', name: 'Mango Coconut Overnight Oats', type: 'Breakfast',
    focus: ['plant', 'balanced'], minutes: 5, serves: 1, kcal: 390, protein: 11,
    ingredients: ['1/2 cup rolled oats', '1/2 cup coconut milk (light)', '1/2 cup mango', '1 tbsp coconut flakes', '1 tsp chia seeds', 'Lime zest'],
    method: ['Combine oats, coconut milk and chia; refrigerate overnight.', 'Top with mango, coconut flakes and lime zest.'],
    tags: ['Vegan option', 'Make ahead', 'No cooking'],
  },
  {
    id: 'ricotta-toast', name: 'Ricotta, Tomato & Basil Toast', type: 'Breakfast',
    focus: ['light', 'balanced'], minutes: 8, serves: 1, kcal: 320, protein: 15,
    ingredients: ['1/3 cup ricotta', '2 slices sourdough', '6 cherry tomatoes, halved', 'Basil leaves', 'Balsamic glaze', 'Olive oil'],
    method: ['Toast sourdough.', 'Spread ricotta, top with tomatoes and basil.', 'Drizzle balsamic and olive oil.'],
    tags: ['Vegetarian', 'Café-style'],
  },
  {
    id: 'chicken-soup', name: 'Chicken & Veggie Soup', type: 'Lunch',
    focus: ['protein', 'balanced', 'light'], minutes: 30, serves: 4, kcal: 320, protein: 28,
    ingredients: ['300g chicken breast', '1.5L chicken stock', '2 carrots, sliced', '2 celery stalks', '1 onion', '1 cup pearl barley', 'Parsley'],
    method: ['Simmer barley in stock 20 min.', 'Add chicken and veg, simmer 15 min until chicken is cooked.', 'Shred chicken, return to pot, season and top with parsley.'],
    tags: ['High protein', 'Meal prep friendly', 'Feeds four'],
  },
  {
    id: 'pumpkin-soup', name: 'Roast Pumpkin Soup', type: 'Lunch',
    focus: ['plant', 'light'], minutes: 35, serves: 4, kcal: 240, protein: 6,
    ingredients: ['1kg pumpkin, cubed', '1 onion', '2 cloves garlic', '1L vegetable stock', '1 tsp cumin', 'Greek yoghurt to serve', 'Pepitas'],
    method: ['Roast pumpkin at 200°C for 20 min.', 'Soften onion and garlic, add pumpkin, stock and cumin.', 'Simmer 10 min, blend until smooth.', 'Serve with yoghurt and pepitas.'],
    tags: ['Vegetarian', 'Freezer friendly', 'Feeds four'],
  },
  {
    id: 'nourish-bowl', name: 'Rainbow Nourish Bowl', type: 'Lunch',
    focus: ['plant', 'balanced'], minutes: 20, serves: 1, kcal: 460, protein: 16,
    ingredients: ['1 cup cooked brown rice', '1/2 cup chickpeas', '1/2 cup roast pumpkin', '1 handful spinach', '1/4 avocado', '1 tbsp tahini', 'Lemon juice'],
    method: ['Whisk tahini with lemon and warm water.', 'Arrange rice, chickpeas, pumpkin, spinach and avocado.', 'Drizzle dressing over the top.'],
    tags: ['Vegan', 'Gluten-free'],
  },
  {
    id: 'egg-fried-wrap', name: 'Crispy Egg & Veg Wrap', type: 'Lunch',
    focus: ['balanced', 'light'], minutes: 10, serves: 1, kcal: 390, protein: 17,
    ingredients: ['1 wholegrain wrap', '2 eggs', '1 handful spinach', '1/4 capsicum, sliced', '1 tbsp hummus', '30g tasty cheese'],
    method: ['Scramble eggs with capsicum.', 'Spread hummus on wrap, add eggs, spinach and cheese.', 'Toast seam-side down in a dry pan 2 min per side.'],
    tags: ['Vegetarian', 'Quick'],
  },
  {
    id: 'salmon-rice-plate', name: 'Salmon, Rice & Greens Plate', type: 'Lunch',
    focus: ['protein', 'balanced'], minutes: 20, serves: 1, kcal: 540, protein: 34,
    ingredients: ['1 salmon fillet', '1 cup cooked rice', '1 cup steamed greens', '1 tbsp soy sauce', '1 tsp sesame oil', 'Lemon'],
    method: ['Pan-fry salmon 4 min each side.', 'Dress rice with soy and sesame.', 'Plate with greens and a lemon wedge.'],
    tags: ['High protein', 'Gluten-free'],
  },
  {
    id: 'bean-nachos', name: 'Loaded Bean Nachos', type: 'Lunch',
    focus: ['plant', 'balanced'], minutes: 20, serves: 2, kcal: 560, protein: 19,
    ingredients: ['1 tin black beans', '1 tin chopped tomatoes', '1 cup corn kernels', '100g corn chips', '50g tasty cheese', '1/2 avocado', 'Greek yoghurt'],
    method: ['Simmer beans with tomatoes and spices 10 min.', 'Layer corn chips, beans and cheese; grill until melted.', 'Top with avocado and yoghurt.'],
    tags: ['Vegetarian', 'Crowd pleaser'],
  },
  {
    id: 'tuna-pasta-salad', name: 'Tuna & Corn Pasta Salad', type: 'Lunch',
    focus: ['protein', 'balanced'], minutes: 20, serves: 2, kcal: 490, protein: 32,
    ingredients: ['180g pasta spirals', '1 tin tuna in springwater', '1 cup corn kernels', '1/4 cucumber', '1/4 cup Greek yoghurt', '1 tsp dijon', 'Lemon juice'],
    method: ['Cook pasta, rinse under cold water.', 'Whisk yoghurt, dijon and lemon.', 'Toss everything together, season well.'],
    tags: ['High protein', 'Meal prep friendly'],
  },
  {
    id: 'veggie-slice', name: 'Baked Veggie & Egg Slice', type: 'Lunch',
    focus: ['protein', 'balanced'], minutes: 35, serves: 6, kcal: 210, protein: 14,
    ingredients: ['8 eggs', '1 zucchini, grated', '1 carrot, grated', '1/2 cup peas', '60g tasty cheese', '1 onion, diced'],
    method: ['Whisk eggs with grated veg, peas, cheese and onion.', 'Pour into a lined tin, bake at 180°C for 25 min.', 'Slice into six — great cold for lunchboxes.'],
    tags: ['Vegetarian', 'Meal prep friendly', 'Freezer friendly'],
  },
  {
    id: 'chicken-noodle-soup', name: 'Ginger Chicken Noodle Soup', type: 'Dinner',
    focus: ['protein', 'balanced', 'light'], minutes: 25, serves: 2, kcal: 420, protein: 33,
    ingredients: ['250g chicken breast, sliced', '1L chicken stock', '180g rice noodles', '1 tbsp grated ginger', '2 handfuls baby spinach', '2 spring onions', '1 tbsp soy sauce'],
    method: ['Simmer stock with ginger and soy.', 'Add chicken, poach 6–8 min.', 'Add noodles and spinach until just wilted.', 'Top with spring onions.'],
    tags: ['High protein', 'Comfort food', 'Dairy-free'],
  },
  {
    id: 'lamb-pita', name: 'Lamb & Hummus Flatbread Plate', type: 'Dinner',
    focus: ['protein', 'balanced'], minutes: 20, serves: 2, kcal: 590, protein: 36,
    ingredients: ['300g lamb strips', '2 pita breads', '4 tbsp hummus', '1 tomato, diced', '1/4 red onion', '1 handful rocket', 'Yoghurt drizzle'],
    method: ['Sear lamb in a hot pan with cumin and salt.', 'Warm pita, spread with hummus.', 'Pile on lamb, tomato, onion and rocket; drizzle yoghurt.'],
    tags: ['High protein', 'Weeknight fast'],
  },
  {
    id: 'veggie-laksa', name: 'Veggie Laksa-Style Noodle Soup', type: 'Dinner',
    focus: ['plant', 'balanced'], minutes: 25, serves: 2, kcal: 480, protein: 14,
    ingredients: ['1 tin coconut milk (light)', '2 tbsp red curry paste', '1L vegetable stock', '180g rice noodles', '1 cup broccoli florets', '150g tofu, cubed', 'Lime, coriander'],
    method: ['Fry curry paste 1 min, add coconut milk and stock.', 'Add broccoli and tofu, simmer 6 min.', 'Add noodles until soft, finish with lime and coriander.'],
    tags: ['Vegan', 'Comfort food'],
  },
  {
    id: 'pork-stirfry', name: 'Sticky Pork & Broccoli Stir-Fry', type: 'Dinner',
    focus: ['protein', 'balanced'], minutes: 20, serves: 2, kcal: 530, protein: 38,
    ingredients: ['300g pork loin, sliced', '1 cup broccoli florets', '1 carrot, julienned', '2 tbsp honey', '2 tbsp soy sauce', '1 tsp grated ginger', '1.5 cups cooked rice'],
    method: ['Sear pork until golden, set aside.', 'Stir-fry broccoli and carrot 3–4 min.', 'Return pork with honey, soy and ginger; glaze 1 min.', 'Serve over rice.'],
    tags: ['High protein', 'Quick'],
  },
  {
    id: 'crispy-tofu-bowl', name: 'Crispy Tofu & Sesame Bowl', type: 'Dinner',
    focus: ['plant', 'protein'], minutes: 25, serves: 2, kcal: 510, protein: 26,
    ingredients: ['300g firm tofu, cubed', '2 tbsp cornflour', '1 cup broccoli florets', '1 carrot, ribboned', '2 tbsp soy sauce', '1 tbsp sesame seeds', '1.5 cups cooked rice'],
    method: ['Toss tofu in cornflour, shallow-fry until crisp.', 'Steam broccoli.', 'Glaze tofu with soy, pile over rice with veg and sesame.'],
    tags: ['Vegan', 'High protein'],
  },
  {
    id: 'barramundi-tray', name: 'Herb Fish & Veggie Tray Bake', type: 'Dinner',
    focus: ['protein', 'light', 'balanced'], minutes: 30, serves: 2, kcal: 450, protein: 34,
    ingredients: ['2 white fish fillets', '2 potatoes, sliced thin', '1 zucchini, sliced', '1 lemon', '2 tbsp olive oil', '1 tsp dried herbs', 'Cherry tomatoes'],
    method: ['Layer potato on a tray, drizzle oil, roast 15 min.', 'Add fish, zucchini, tomatoes, herbs and lemon.', 'Bake 12–15 min until fish flakes.'],
    tags: ['High protein', 'One tray', 'Gluten-free'],
  },
  {
    id: 'shepherds-pie', name: 'Lentil Shepherd\'s Pie', type: 'Dinner',
    focus: ['plant', 'balanced'], minutes: 45, serves: 4, kcal: 460, protein: 19,
    ingredients: ['1 tin lentils, rinsed', '1 tin chopped tomatoes', '1 onion', '2 carrots, diced', '4 potatoes', '20g butter', 'Splash of milk', '1 cup peas'],
    method: ['Simmer lentils with tomato, onion, carrot and peas 15 min.', 'Boil and mash potatoes with butter and milk.', 'Layer lentil mix, top with mash, bake at 200°C for 20 min.'],
    tags: ['Vegetarian', 'Comfort food', 'Feeds four', 'Freezer friendly'],
  },
  {
    id: 'chicken-parmigiana-bowl', name: 'Chicken Parmi Bowl (Lighter)', type: 'Dinner',
    focus: ['protein', 'balanced'], minutes: 30, serves: 2, kcal: 560, protein: 45,
    ingredients: ['2 chicken breast schnitzels', '1 cup passata', '40g mozzarella', '2 cups steamed greens', '1 potato, cubed', 'Italian herbs'],
    method: ['Bake chicken at 200°C for 15 min.', 'Top with passata and mozzarella, grill until bubbling.', 'Serve over greens and roast potato.'],
    tags: ['High protein', 'Pub classic, lightened'],
  },
  {
    id: 'capsicum-stuffed', name: 'Stuffed Capsicums', type: 'Dinner',
    focus: ['balanced', 'plant'], minutes: 40, serves: 4, kcal: 380, protein: 14,
    ingredients: ['4 capsicums, halved', '1.5 cups cooked rice', '1 tin lentils', '1 cup corn kernels', '1 tin chopped tomatoes', '60g tasty cheese', '1 tsp smoked paprika'],
    method: ['Roast capsicum halves 10 min.', 'Mix rice, lentils, corn and tomato; season with paprika.', 'Fill capsicums, top with cheese, bake 15 min.'],
    tags: ['Vegetarian', 'Meal prep friendly'],
  },
  {
    id: 'salmon-cakes', name: 'Salmon & Potato Patties', type: 'Dinner',
    focus: ['protein', 'balanced'], minutes: 30, serves: 2, kcal: 470, protein: 31,
    ingredients: ['1 tin salmon', '2 potatoes, boiled & mashed', '1 egg', '2 spring onions', '1 tbsp flour', '1 handful rocket', 'Yoghurt tartare: yoghurt + capers + lemon'],
    method: ['Mix salmon, mash, egg and onion; form patties.', 'Chill 10 min, dust in flour.', 'Fry 3–4 min each side; serve with rocket and yoghurt tartare.'],
    tags: ['High protein', 'Budget friendly'],
  },
  {
    id: 'protein-balls-choc', name: 'Choc Peanut Protein Balls', type: 'Snack',
    focus: ['protein', 'balanced'], minutes: 15, serves: 8, kcal: 140, protein: 6,
    ingredients: ['1 cup rolled oats', '1/2 cup peanut butter', '2 tbsp honey', '2 tbsp cocoa', '2 tbsp protein powder', '1 tbsp chia seeds'],
    method: ['Mix everything until it holds together.', 'Roll into 8 balls, chill 30 min.'],
    tags: ['Vegetarian', 'Make ahead', 'No cooking'],
  },
  {
    id: 'roast-chickpeas-paprika', name: 'Smoky Roasted Chickpeas', type: 'Snack',
    focus: ['plant', 'light'], minutes: 30, serves: 4, kcal: 160, protein: 7,
    ingredients: ['1 tin chickpeas, rinsed & dried', '1 tbsp olive oil', '1 tsp smoked paprika', '1/2 tsp garlic powder', 'Sea salt'],
    method: ['Toss chickpeas in oil and spices.', 'Roast at 200°C for 25 min until crisp.'],
    tags: ['Vegan', 'Crunchy'],
  },
  {
    id: 'apple-sandwich', name: 'Apple & Cheese Sandwich Rounds', type: 'Snack',
    focus: ['light', 'balanced'], minutes: 3, serves: 1, kcal: 180, protein: 7,
    ingredients: ['1 apple, sliced into rounds', '30g cheddar', '1 tsp peanut butter'],
    method: ['Spread peanut butter on apple rounds.', 'Add cheddar slices, sandwich together.'],
    tags: ['Vegetarian', 'No cooking', 'Kid friendly'],
  },
  {
    id: 'banana-sushi', name: 'Banana Sushi', type: 'Snack',
    focus: ['balanced', 'light'], minutes: 5, serves: 1, kcal: 210, protein: 6,
    ingredients: ['1 banana', '1 tbsp peanut butter', '1 tbsp desiccated coconut', '1 tbsp crushed peanuts'],
    method: ['Coat banana in peanut butter.', 'Roll in coconut and peanuts, slice into rounds.'],
    tags: ['Vegetarian', 'Kid friendly', 'No cooking'],
  },
  {
    id: 'veggie-muffins', name: 'Savoury Zucchini Muffins', type: 'Snack',
    focus: ['balanced', 'light'], minutes: 30, serves: 8, kcal: 150, protein: 6,
    ingredients: ['1 zucchini, grated', '1 carrot, grated', '2 eggs', '1 cup self-raising flour', '50g tasty cheese', '2 tbsp olive oil'],
    method: ['Mix everything into a batter.', 'Divide into a muffin tin.', 'Bake at 180°C for 20 min.'],
    tags: ['Vegetarian', 'Freezer friendly', 'Lunchbox'],
  },
  {
    id: 'coconut-rice-pudding', name: 'Coconut Rice Pudding Cups', type: 'Snack',
    focus: ['balanced', 'plant'], minutes: 25, serves: 4, kcal: 220, protein: 4,
    ingredients: ['1 cup cooked rice', '1 cup coconut milk (light)', '1 tbsp honey', '1/2 tsp vanilla', 'Cinnamon', 'Mango to top'],
    method: ['Simmer rice in coconut milk 15 min until creamy.', 'Stir in honey and vanilla.', 'Serve warm or chilled with mango and cinnamon.'],
    tags: ['Vegetarian', 'Gluten-free'],
  },
  {
    id: 'tuna-crackers', name: 'Tuna & Avo Crackers', type: 'Snack',
    focus: ['protein', 'light'], minutes: 5, serves: 1, kcal: 190, protein: 16,
    ingredients: ['1/2 tin tuna', '1/4 avocado', '4 rice crackers', 'Lemon juice', 'Black pepper'],
    method: ['Mash avocado with lemon.', 'Top crackers with avo, tuna and pepper.'],
    tags: ['High protein', 'No cooking'],
  },
  {
    id: 'frozen-banana-bites', name: 'Choc-Dipped Banana Bites', type: 'Snack',
    focus: ['light', 'plant'], minutes: 10, serves: 4, kcal: 130, protein: 2,
    ingredients: ['2 bananas', '50g dark chocolate', '1 tsp coconut oil', 'Crushed nuts or coconut'],
    method: ['Slice bananas, freeze 1 h.', 'Melt chocolate with coconut oil.', 'Dip banana rounds, sprinkle, re-freeze 20 min.'],
    tags: ['Vegetarian', 'Make ahead', 'Kid friendly'],
  },
  {
    id: 'veggie-soup-mug', name: 'Cup-a-Soup Veggie Pot', type: 'Snack',
    focus: ['light', 'plant'], minutes: 8, serves: 1, kcal: 120, protein: 4,
    ingredients: ['1/2 cup frozen veg', '1/2 tin chickpeas', '300ml vegetable stock', '1 tsp miso', 'Soy sauce'],
    method: ['Simmer veg and chickpeas in stock 5 min.', 'Stir in miso off the heat, splash of soy.'],
    tags: ['Vegan', 'Quick', 'Pantry staples'],
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

export interface ShopSection { name: string; items: { text: string; detail?: string; name?: string }[] }

// ---- Woolworths guide ------------------------------------------------------
// Every ingredient used across the toolkit is a standard Woolworths line —
// the Mullumbimby store stocks them all. Live shelf pricing isn't publicly
// available, so these are typical Woolworths guide prices (AUD) to sanity-
// check the basket; confirm in store or in the Woolworths app.

export const WW_GUIDE_DATE = 'September 2026'
export const WW_STORE_NOTE = 'Every item below is a standard line at Woolworths Mullumbimby.'

export interface WwPrice { product: string; price: number }

const WW_PRICES: [RegExp, string, number][] = [
  // Produce
  [/rolled oats|^oats$/, 'Woolworths Rolled Oats 750g', 2.4],
  [/banana/, 'Bananas, per kg', 4.5],
  [/apple(?! juice)/, 'Pink Lady apples, per kg', 4.9],
  [/apple juice/, 'Woolworths Apple Juice 2L', 2.8],
  [/strawberries|berries|blueberr/, 'Frozen Mixed Berries 500g', 5.0],
  [/mango/, 'Frozen Mango Chunks 500g', 4.6],
  [/avocado/, 'Hass avocado, each', 2.5],
  [/lemon/, 'Lemons, each', 1.0],
  [/lime/, 'Limes, each', 1.0],
  [/cherry tomato/, 'Cherry tomatoes 250g punnet', 4.0],
  [/tomato/, 'Tomatoes, per kg', 5.9],
  [/cucumber/, 'Continental cucumber, each', 3.5],
  [/capsicum/, 'Capsicums, each', 2.5],
  [/carrot/, 'Carrots, per kg', 2.2],
  [/zucchini/, 'Zucchini, per kg', 6.9],
  [/pumpkin/, 'Jap pumpkin, per kg', 3.5],
  [/potato/, 'Washed potatoes 2kg bag', 4.0],
  [/sweet potato/, 'Sweet potatoes, per kg', 4.9],
  [/broccoli|broccolini/, 'Broccoli, each', 3.9],
  [/green beans/, 'Green beans, per kg', 6.9],
  [/mushroom/, 'Mushrooms 375g', 4.5],
  [/spinach|rocket|mixed leaves|kale|greens|slaw|lettuce/, 'Baby leaf mix 120g', 3.5],
  [/corn kernels/, 'Frozen corn kernels 500g', 2.8],
  [/peas|frozen veg/, 'Frozen peas 500g', 2.4],
  [/edamame/, 'Frozen edamame 400g', 6.0],
  [/corn on|charred corn/, 'Corn cobs 4pk', 4.5],
  [/beetroot/, 'Beetroot, per kg', 4.5],
  [/onion|spring onion/, 'Brown onions, per kg', 3.0],
  [/garlic/, 'Garlic bulbs, each', 0.8],
  [/ginger|turmeric/, 'Fresh ginger, per kg', 25.0],
  [/cauliflower/, 'Cauliflower, each', 4.9],
  [/pear|peach|kiwi/, 'Seasonal fruit, per kg', 4.9],
  [/basil|coriander|parsley|herb/, 'Fresh herb bunch', 3.0],
  [/celery/, 'Celery half bunch', 3.5],
  [/nori/, 'Nori sheets 10pk', 4.0],
  // Meat & seafood
  [/chicken breast schnitzel|chicken schnitzel/, 'Chicken schnitzels 4pk', 8.5],
  [/chicken/, 'RSPCA chicken breast, per kg', 12.0],
  [/salmon fillet|salmon/, 'Salmon fillets, per kg', 29.0],
  [/tuna/, 'Canned tuna in springwater 95g', 1.3],
  [/fish|barramundi/, 'Frozen white fish fillets 500g', 8.0],
  [/prawn/, 'Frozen cooked prawns 500g', 15.0],
  [/beef|mince/, 'Beef mince 500g', 7.0],
  [/lamb/, 'Lamb strips/stir-fry, per kg', 16.0],
  [/pork/, 'Pork loin, per kg', 12.0],
  // Dairy & eggs
  [/egg/, 'Woolworths eggs 12pk', 6.5],
  [/greek yoghurt|yoghurt/, 'Greek yoghurt 1kg', 5.5],
  [/milk(?!.*(soy|almond|oat|coconut))/, 'Woolworths full cream milk 3L', 4.5],
  [/soy milk/, 'Vitasoy soy milk 1L', 2.7],
  [/almond milk/, 'Almond milk 1L', 2.5],
  [/oat milk/, 'Oat milk 1L', 2.5],
  [/coconut water/, 'Coconut water 1L', 3.5],
  [/coconut milk/, 'Light coconut milk 400ml', 1.6],
  [/kefir/, 'Kefir 500ml', 4.5],
  [/orange juice/, 'Orange juice 2L', 5.0],
  [/tasty cheese|cheddar|cheese/, 'Tasty cheese block 500g', 7.5],
  [/mozzarella/, 'Mozzarella 500g', 7.0],
  [/feta/, 'Danish feta 200g', 5.5],
  [/haloumi/, 'Haloumi 180g', 7.5],
  [/ricotta/, 'Ricotta 375g', 4.5],
  [/cottage cheese/, 'Cottage cheese 500g', 4.5],
  [/butter/, 'Salted butter 250g', 5.5],
  [/parmesan/, 'Parmesan 200g', 6.5],
  [/tofu/, 'Firm tofu 300g', 4.5],
  [/tempeh/, 'Tempeh 300g', 6.5],
  // Bakery & wraps
  [/sourdough|bread|toast/, 'Sourdough loaf', 4.5],
  [/wrap|tortilla|pita/, 'Wholegrain wraps 8pk', 4.0],
  [/rice cracker/, 'Rice crackers 100g', 2.5],
  // Frozen & pantry
  [/rice noodles/, 'Rice noodles 200g', 2.5],
  [/soba/, 'Soba noodles 270g', 4.0],
  [/pasta|spaghetti/, 'Pasta 500g', 1.3],
  [/sushi rice|^rice|cooked rice/, 'Long-grain rice 1kg', 2.0],
  [/quinoa/, 'Quinoa 500g', 5.5],
  [/couscous/, 'Couscous 500g', 2.5],
  [/pearl barley/, 'Pearl barley 500g', 2.0],
  [/flour|cornflour|self-raising/, 'Plain flour 1kg', 1.8],
  [/lentil/, 'Canned lentils 400g', 1.2],
  [/chickpea/, 'Canned chickpeas 400g', 1.1],
  [/black beans/, 'Canned black beans 400g', 1.2],
  [/cannellini|baked beans|beans/, 'Canned beans 400g', 1.1],
  [/chopped tomatoes|crushed tomatoes/, 'Canned diced tomatoes 400g', 1.1],
  [/passata/, 'Passata 700g', 3.0],
  [/stock/, 'Liquid stock 1L', 2.5],
  [/olive oil/, 'Extra virgin olive oil 750ml', 12.0],
  [/sesame oil/, 'Sesame oil 250ml', 4.5],
  [/soy sauce/, 'Soy sauce 250ml', 3.5],
  [/teriyaki/, 'Teriyaki sauce 250ml', 3.5],
  [/vinegar|balsamic/, 'Vinegar 500ml', 3.0],
  [/dijon/, 'Dijon mustard 200g', 3.5],
  [/honey/, 'Woolworths honey 500g', 5.5],
  [/peanut butter/, 'Peanut butter 375g', 3.5],
  [/tahini/, 'Tahini 350g', 5.5],
  [/miso/, 'Miso paste 100g', 5.0],
  [/curry paste/, 'Red curry paste 200g', 2.5],
  [/hummus/, 'Hummus 200g', 4.0],
  [/salsa/, 'Salsa 300g', 4.0],
  [/pesto/, 'Basil pesto 190g', 4.5],
  [/corn chips/, 'Corn chips 230g', 3.5],
  [/granola/, 'Granola 500g', 6.0],
  [/wheat biscuit/, 'Wheat biscuits 575g', 5.0],
  [/cocoa/, 'Cocoa powder 250g', 4.5],
  [/dark chocolate/, 'Dark chocolate 180g block', 4.0],
  [/protein powder/, 'Macro protein powder 500g', 22.0],
  [/chia/, 'Chia seeds 200g', 5.0],
  [/pepitas|seeds|sunflower/, 'Pepita/seed mix 200g', 5.0],
  [/almond/, 'Raw almonds 350g', 8.0],
  [/walnut|nuts|peanut/, 'Mixed nuts 200g', 5.5],
  [/coconut flakes|desiccated coconut/, 'Desiccated coconut 250g', 2.5],
  [/coconut oil/, 'Coconut oil 300ml', 5.5],
  [/cinnamon|cumin|paprika|oregano|herbs|garlic powder|smoked/, 'Dried herbs & spices', 2.5],
  [/vanilla/, 'Vanilla extract 50ml', 5.0],
  [/dates/, 'Pitted dates 250g', 4.5],
  [/salt|pepper/, 'Salt & pepper pantry staples', 2.0],
]

export function wwPriceFor(itemName: string): WwPrice | null {
  const name = itemName.toLowerCase()
  for (const [match, product, price] of WW_PRICES) {
    if (match.test(name)) return { product, price }
  }
  return null
}

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
  const grouped = new Map<string, { text: string; detail?: string; name?: string }[]>()
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
    grouped.set(section, [...(grouped.get(section) ?? []), { text, detail, name: item.name }])
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
  { name: 'Pearl barley', kcal: 175, protein: 5 },
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
  { name: 'Pear', kcal: 85, protein: 0 },
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
      { title: 'Sail', artist: 'AWOLNATION' },
      { title: 'Way Down We Go', artist: 'Kaleo' },
      { title: 'Believer', artist: 'Imagine Dragons' },
      { title: 'Thunder', artist: 'Imagine Dragons' },
      { title: 'Whatever It Takes', artist: 'Imagine Dragons' },
      { title: 'Numb', artist: 'Linkin Park' },
      { title: 'Faint', artist: 'Linkin Park' },
      { title: 'In the End', artist: 'Linkin Park' },
      { title: 'Given Up', artist: 'Linkin Park' },
      { title: 'Basket Case', artist: 'Green Day' },
      { title: 'American Idiot', artist: 'Green Day' },
      { title: 'Holiday', artist: 'Green Day' },
      { title: 'Aerials', artist: 'System of a Down' },
      { title: 'Toxicity', artist: 'System of a Down' },
      { title: 'The Only', artist: 'Static-X' },
      { title: 'Prayer of the Refugee', artist: 'Rise Against' },
      { title: 'Savior', artist: 'Rise Against' },
      { title: 'Satellite', artist: 'Rise Against' },
      { title: 'Gold on the Ceiling', artist: 'The Black Keys' },
      { title: 'Lonely Boy', artist: 'The Black Keys' },
      { title: 'Howlin\' for You', artist: 'The Black Keys' },
      { title: 'Renegade', artist: 'Styx' },
      { title: 'The Stroke', artist: 'Billy Squier' },
      { title: 'Barracuda', artist: 'Heart' },
      { title: 'Crazy Train', artist: 'Ozzy Osbourne' },
      { title: 'Holy Diver', artist: 'Dio' },
      { title: 'Painkiller', artist: 'Judas Priest' },
      { title: 'The Trooper', artist: 'Iron Maiden' },
      { title: 'Run to the Hills', artist: 'Iron Maiden' },
      { title: 'For Whom the Bell Tolls', artist: 'Metallica' },
      { title: 'Seek & Destroy', artist: 'Metallica' },
      { title: 'Master of Puppets', artist: 'Metallica' },
      { title: 'Smooth Criminal', artist: 'Alien Ant Farm' },
      { title: 'Last Resort', artist: 'Papa Roach' },
      { title: 'Move Along', artist: 'The All-American Rejects' },
      { title: 'Bleed American', artist: 'Jimmy Eat World' },
      { title: 'The Middle', artist: 'Jimmy Eat World' },
      { title: 'My Own Worst Enemy', artist: 'Lit' },
      { title: 'All the Small Things', artist: 'blink-182' },
      { title: 'What\'s My Age Again?', artist: 'blink-182' },
      { title: 'Anthem Part Two', artist: 'blink-182' },
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
      { title: 'Till the World Ends', artist: 'Britney Spears' },
      { title: 'Work Bitch', artist: 'Britney Spears' },
      { title: 'Stronger (What Doesn\'t Kill You)', artist: 'Kelly Clarkson' },
      { title: 'Since U Been Gone', artist: 'Kelly Clarkson' },
      { title: 'Confident', artist: 'Demi Lovato' },
      { title: 'Cool for the Summer', artist: 'Demi Lovato' },
      { title: 'New Rules', artist: 'Dua Lipa' },
      { title: 'Houdini', artist: 'Dua Lipa' },
      { title: 'Training Season', artist: 'Dua Lipa' },
      { title: 'Espresso', artist: 'Sabrina Carpenter' },
      { title: 'Please Please Please', artist: 'Sabrina Carpenter' },
      { title: 'greedy', artist: 'Tate McRae' },
      { title: 'exes', artist: 'Tate McRae' },
      { title: 'Paint the Town Red', artist: 'Doja Cat' },
      { title: 'Woman', artist: 'Doja Cat' },
      { title: 'Say So', artist: 'Doja Cat' },
      { title: 'About Damn Time', artist: 'Lizzo' },
      { title: 'Juice', artist: 'Lizzo' },
      { title: 'Good as Hell', artist: 'Lizzo' },
      { title: 'Truth Hurts', artist: 'Lizzo' },
      { title: 'Flowers', artist: 'Miley Cyrus' },
      { title: 'Midnight Sky', artist: 'Miley Cyrus' },
      { title: 'Wrecking Ball', artist: 'Miley Cyrus' },
      { title: 'Bad Romance', artist: 'Lady Gaga' },
      { title: 'Just Dance', artist: 'Lady Gaga' },
      { title: 'Born This Way', artist: 'Lady Gaga' },
      { title: 'Poker Face', artist: 'Lady Gaga' },
      { title: 'Judas', artist: 'Lady Gaga' },
      { title: 'Stupid Love', artist: 'Lady Gaga' },
      { title: 'Firework', artist: 'Katy Perry' },
      { title: 'Roar', artist: 'Katy Perry' },
      { title: 'Dark Horse', artist: 'Katy Perry' },
      { title: 'California Gurls', artist: 'Katy Perry ft. Snoop Dogg' },
      { title: 'Last Friday Night', artist: 'Katy Perry' },
      { title: 'Teenage Dream', artist: 'Katy Perry' },
      { title: 'Wide Awake', artist: 'Katy Perry' },
      { title: 'Hot N Cold', artist: 'Katy Perry' },
      { title: 'Chained to the Rhythm', artist: 'Katy Perry ft. Skip Marley' },
      { title: 'When I Grow Up', artist: 'The Pussycat Dolls' },
      { title: 'Don\'t Cha', artist: 'The Pussycat Dolls' },
      { title: 'Buttons', artist: 'The Pussycat Dolls' },
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
      { title: 'Crystalised', artist: 'The xx' },
      { title: 'A Moment Apart', artist: 'ODESZA' },
      { title: 'Wide Awake', artist: 'ODESZA ft. Bettye LaVette' },
      { title: 'Nightingale', artist: 'Bonobo' },
      { title: 'Black Sands', artist: 'Bonobo' },
      { title: 'First Fires', artist: 'Bonobo ft. Erykah Badu' },
      { title: 'Bambro Koyo Ganda', artist: 'Bonobo ft. Innov Gnawa' },
      { title: 'Otter Creek', artist: 'Of Porches' },
      { title: 'Flashed Junk Mind', artist: 'Milky Chance' },
      { title: 'Stolen Dance', artist: 'Milky Chance' },
      { title: 'Down by the River', artist: 'Milky Chance' },
      { title: 'Troubled Thoughts', artist: 'Wens' },
      { title: 'Trojans', artist: 'Atlas Genius' },
      { title: 'If So', artist: 'Atlas Genius' },
      { title: 'Young Blood', artist: 'The Naked and Famous' },
      { title: 'Punching in a Dream', artist: 'The Naked and Famous' },
      { title: 'Gold', artist: 'Chet Faker' },
      { title: 'Talk Is Cheap', artist: 'Chet Faker' },
      { title: '1998', artist: 'Chet Faker' },
      { title: 'Drop the Game', artist: 'Flume & Chet Faker' },
      { title: 'The Buzz', artist: 'Hermitude ft. Mataya & Young Tapz' },
      { title: 'HyperParadise', artist: 'Hermitude' },
      { title: 'Through the Roof', artist: 'Hermitude ft. Young Tapz' },
      { title: 'Innerbloom', artist: 'Rüfüs Du Sol' },
      { title: 'Underwater', artist: 'Rüfüs Du Sol' },
      { title: 'You Were Right', artist: 'Rüfüs Du Sol' },
      { title: 'Treat You Better', artist: 'Rüfüs Du Sol' },
      { title: 'On My Knees', artist: 'Rüfüs Du Sol' },
      { title: 'Bloom', artist: 'ODESZA' },
      { title: 'It\'s Only', artist: 'ODESZA ft. Zyra' },
      { title: 'Falls', artist: 'ODESZA ft. Sasha Sloan' },
      { title: 'Divide', artist: 'ODESZA ft. Kelsey Bulkin' },
      { title: 'Across the Room', artist: 'ODESZA ft. Leon Bridges' },
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
      { title: 'Sitting, Waiting, Wishing', artist: 'Jack Johnson' },
      { title: 'Upside Down', artist: 'Jack Johnson' },
      { title: 'Bubble Toes', artist: 'Jack Johnson' },
      { title: 'Talk of the Town', artist: 'Jack Johnson' },
      { title: 'Wasting Time', artist: 'Jack Johnson' },
      { title: 'The News', artist: 'Jack Johnson' },
      { title: 'I Got You', artist: 'Jack Johnson' },
      { title: 'You and Your Heart', artist: 'Jack Johnson' },
      { title: 'From the Clouds', artist: 'Jack Johnson' },
      { title: 'Fragments', artist: 'Jack Johnson' },
      { title: 'Shotgun', artist: 'George Ezra' },
      { title: 'Paradise', artist: 'George Ezra' },
      { title: 'Blame It on Me', artist: 'George Ezra' },
      { title: 'Listen to the Man', artist: 'George Ezra' },
      { title: 'Green Green Grass', artist: 'George Ezra' },
      { title: 'Anyone for You', artist: 'George Ezra' },
      { title: 'Mess Around', artist: 'Cage the Elephant' },
      { title: 'Ain\'t No Rest for the Wicked', artist: 'Cage the Elephant' },
      { title: 'Come a Little Closer', artist: 'Cage the Elephant' },
      { title: 'Trouble', artist: 'Cage the Elephant' },
      { title: 'Ready to Let Go', artist: 'Cage the Elephant' },
      { title: 'Take It or Leave It', artist: 'Cage the Elephant' },
      { title: 'Sit Next to Me', artist: 'Foster the People' },
      { title: 'Pumped Up Kicks', artist: 'Foster the People' },
      { title: 'Houdini', artist: 'Foster the People' },
      { title: 'Don\'t Stop', artist: 'Foster the People' },
      { title: 'Are You What You Want to Be?', artist: 'Foster the People' },
      { title: 'Coming of Age', artist: 'Foster the People' },
      { title: 'Tightrope', artist: 'Janelle Monáe ft. Big Boi' },
      { title: 'Make Me Feel', artist: 'Janelle Monáe' },
      { title: 'Q.U.E.E.N.', artist: 'Janelle Monáe ft. Erykah Badu' },
      { title: 'Yoga', artist: 'Janelle Monáe ft. Jidenna' },
      { title: 'Electric Lady', artist: 'Janelle Monáe' },
      { title: 'Primetime', artist: 'Janelle Monáe ft. Miguel' },
      { title: 'Happy', artist: 'Pharrell Williams' },
      { title: 'Freedom', artist: 'Pharrell Williams' },
      { title: 'Feels', artist: 'Calvin Harris ft. Pharrell, Katy Perry & Big Sean' },
      { title: 'Cash Out', artist: 'Calvin Harris ft. ScHoolboy Q' },
      { title: 'Slide', artist: 'Calvin Harris ft. Frank Ocean & Migos' },
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
      { title: 'Sunsetz', artist: 'Cigarettes After Sex' },
      { title: 'Sweet', artist: 'Cigarettes After Sex' },
      { title: 'K.', artist: 'Cigarettes After Sex' },
      { title: 'Nothing\'s Gonna Hurt You Baby', artist: 'Cigarettes After Sex' },
      { title: 'Smoke Signals', artist: 'Phoebe Bridgers' },
      { title: 'I Know the End', artist: 'Phoebe Bridgers' },
      { title: 'Chinese Satellite', artist: 'Phoebe Bridgers' },
      { title: 'Kyoto', artist: 'Phoebe Bridgers' },
      { title: 'Nights', artist: 'Frank Ocean' },
      { title: 'Thinkin Bout You', artist: 'Frank Ocean' },
      { title: 'Lost', artist: 'Frank Ocean' },
      { title: 'Sweet Life', artist: 'Frank Ocean' },
      { title: 'Solo', artist: 'Frank Ocean' },
      { title: 'Pyramids', artist: 'Frank Ocean' },
      { title: 'Redbone', artist: 'Childish Gambino' },
      { title: 'Feels Like Summer', artist: 'Childish Gambino' },
      { title: 'Summertime Magic', artist: 'Childish Gambino' },
      { title: 'Location', artist: 'Khalid' },
      { title: 'Better', artist: 'Khalid' },
      { title: 'Talk', artist: 'Khalid' },
      { title: 'Vertigo', artist: 'Khalid' },
      { title: 'Come Through and Chill', artist: 'Miguel ft. J. Cole & Salaam Remi' },
      { title: 'Sky Walker', artist: 'Miguel ft. Travis Scott' },
      { title: 'Coffee', artist: 'Miguel' },
      { title: 'Adorn', artist: 'Miguel' },
      { title: 'How Many Drinks?', artist: 'Miguel ft. Kendrick Lamar' },
      { title: 'Girl with the Tattoo Enter.lewd', artist: 'Miguel' },
      { title: 'The Weekend', artist: 'SZA' },
      { title: 'Love Galore', artist: 'SZA ft. Travis Scott' },
      { title: 'Broken Clocks', artist: 'SZA' },
      { title: 'Normal Girl', artist: 'SZA' },
      { title: 'Garden (Say It Like Dat)', artist: 'SZA' },
      { title: 'Supermodel', artist: 'SZA' },
      { title: 'Cranes in the Sky', artist: 'Solange' },
      { title: 'Don\'t Touch My Hair', artist: 'Solange ft. Sampha' },
      { title: 'Binz', artist: 'Solange' },
      { title: 'Stay Flo', artist: 'Solange' },
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
      { title: 'They Move on Tracks of Never-Ending Light', artist: 'This Will Destroy You' },
      { title: 'The Mighty Rio Grande', artist: 'This Will Destroy You' },
      { title: 'Quiet', artist: 'This Will Destroy You' },
      { title: 'S/T', artist: 'This Will Destroy You' },
      { title: 'Your Hand in Mine', artist: 'Explosions in the Sky' },
      { title: 'First Breath After Coma', artist: 'Explosions in the Sky' },
      { title: 'The Birth and Death of the Day', artist: 'Explosions in the Sky' },
      { title: 'So Long, Lonesome', artist: 'Explosions in the Sky' },
      { title: 'An Ending (Ascent)', artist: 'Brian Eno' },
      { title: 'Ambient 1: Music for Airports', artist: 'Brian Eno' },
      { title: 'Deep Blue Day', artist: 'Brian Eno' },
      { title: 'Thursday Afternoon', artist: 'Brian Eno' },
      { title: 'By This River', artist: 'Brian Eno' },
      { title: 'Emerald and Stone', artist: 'Brian Eno, Jon Hopkins & Leo Abrahams' },
      { title: 'Abandon Window', artist: 'Jon Hopkins' },
      { title: 'Immunity', artist: 'Jon Hopkins' },
      { title: 'Cold Out There', artist: 'Jon Hopkins' },
      { title: 'Breathe This Air', artist: 'Jon Hopkins ft. Purity Ring' },
      { title: 'Vessel', artist: 'Jon Hopkins' },
      { title: 'Everloving', artist: 'Moby' },
      { title: 'Natural Blues', artist: 'Moby' },
      { title: 'Why Does My Heart Feel So Bad?', artist: 'Moby' },
      { title: 'In This World', artist: 'Moby' },
      { title: 'God Moving Over the Face of the Waters', artist: 'Moby' },
      { title: 'Teardrop', artist: 'Massive Attack' },
      { title: 'Angel', artist: 'Massive Attack' },
      { title: 'Paradise Circus', artist: 'Massive Attack' },
      { title: 'Unfinished Sympathy', artist: 'Massive Attack' },
      { title: 'Protection', artist: 'Massive Attack & Tracey Thorn' },
      { title: 'Roads', artist: 'Portishead' },
      { title: 'Glory Box', artist: 'Portishead' },
      { title: 'Sour Times', artist: 'Portishead' },
      { title: 'Wandering Star', artist: 'Portishead' },
      { title: 'Into Dust', artist: 'Mazzy Star' },
      { title: 'Fade into You', artist: 'Mazzy Star' },
      { title: 'Halah', artist: 'Mazzy Star' },
      { title: 'Sea Green, See Blue', artist: 'Jaymay' },
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

export type RadioGroup = 'Train' | 'Focus & unwind' | 'Rest & recover'

export interface RadioShow { id: string; name: string; hint: string; channelId: string; group: RadioGroup }

// Channels embed via /embed/live_stream?channel=… — YouTube resolves that to
// whatever the channel is streaming right now, so a stream restart can never
// leave a dead link behind. All verified rendering a live player.
export const radioShows: RadioShow[] = [
  { id: 'floor', name: 'Gym Floor', hint: 'The Good Life Radio — upbeat EDM & pop remixes', channelId: 'UChs0pSaEoNLV4mevBFGaoKA', group: 'Train' },
  { id: 'beast', name: 'Beast Mode', hint: 'New Retro Wave — darksynth & heavy electronic', channelId: 'UCD-4g5w1h8xQpLaNS_ghU4g', group: 'Train' },
  { id: 'spin', name: 'Spin City', hint: 'Spinnin\' Records — mainstage dance anthems', channelId: 'UCpDJl2EmP7Oh90Vylx0dZtA', group: 'Train' },
  { id: 'steady', name: 'Steady State', hint: 'Chill Music Lab — smooth electronic for cardio', channelId: 'UCkcJ1EQilM6LGDKmqlTq83A', group: 'Train' },
  { id: 'melodic', name: 'Melodic House', hint: 'Monstercat Silk — deep, driving house 24/7', channelId: 'UCX4sShAQf01LYjYQhG2ZgKg', group: 'Train' },
  { id: 'synth', name: 'Night Drive', hint: 'Nightride FM — synthwave for after dark', channelId: 'UCJ80_CMnIOrKtMyFbIFIQ7A', group: 'Train' },
  { id: 'focus', name: 'Deep Focus', hint: 'Lofi Girl — the classic study beats radio', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', group: 'Focus & unwind' },
  { id: 'essentials', name: 'Chillhop', hint: 'Chillhop Music — seasonal jazzy beats', channelId: 'UCOxqgCwgOqC2lMqC5PYz_Dg', group: 'Focus & unwind' },
  { id: 'dream', name: 'Dreamhop', hint: 'Dreamhop Music — lofi with a hazy edge', channelId: 'UCBw8DzJjDU4qVT9JUdDhfaQ', group: 'Focus & unwind' },
  { id: 'owl', name: 'Night Owl', hint: 'College Music — late-night lofi radio', channelId: 'UC7tdoGx0eQfRJm9Qj6GCs0A', group: 'Focus & unwind' },
  { id: 'cafe', name: 'Studio Café', hint: 'Cafe Music BGM — jazz café ambience', channelId: 'UCJhjE7wbdYAae1G25m0tHAA', group: 'Focus & unwind' },
  { id: 'lounge', name: 'Recovery Lounge', hint: 'Ambient Worlds — film-score calm for rest days', channelId: 'UCfR8HhkbpDAwvYxrecNg4Mg', group: 'Focus & unwind' },
  { id: 'piano', name: 'Piano Drift', hint: 'Soothing Relaxation — Peder B. Helland piano', channelId: 'UCjzHeG1KWoonmf9d5KBvSiw', group: 'Rest & recover' },
  { id: 'classic', name: 'Classic Calm', hint: 'Yellow Brick Cinema — relaxing classical mix', channelId: 'UCwobzUc3z-0PrFpoRxNszXQ', group: 'Rest & recover' },
  { id: 'zen', name: 'Meditation', hint: 'Meditative Mind — chanting & healing tones', channelId: 'UCM0YvsRfYfsniGAhjvYFOSA', group: 'Rest & recover' },
  { id: 'nature', name: 'Nature Walk', hint: 'Nomadic Ambience — forest & trail soundscapes', channelId: 'UCm_4JHHDUlmgpeI7w7-LMyA', group: 'Rest & recover' },
  { id: 'rain', name: 'Rain Window', hint: 'Calmed By Nature — rain on the glass', channelId: 'UCJuMbdKSMThk2RpALASyXVQ', group: 'Rest & recover' },
  { id: 'wild', name: 'Wild Earth', hint: 'Nature Relaxation — 4K nature scenes & music', channelId: 'UCz6V71ybMCcJ0-zRuN8JE5w', group: 'Rest & recover' },
  { id: 'cloud', name: 'Cloud Rest', hint: 'Relaxing White Noise — sleep & breathwork', channelId: 'UCbunYN0o9Yaid7zHaor_UHA', group: 'Rest & recover' },
  { id: 'deepsleep', name: 'Deep Sleep', hint: 'SleepTube — hypnotic visuals & slow ambient', channelId: 'UCJkWqlhR1-tJpygPdylMl8A', group: 'Rest & recover' },
]

export function defaultShowId(date = new Date()): string {
  const hour = date.getHours()
  if (hour < 10) return 'floor'
  if (hour < 14) return 'steady'
  if (hour < 17) return 'cafe'
  if (hour < 21) return 'floor'
  return 'cloud'
}

// ---- Recommended books ----------------------------------------------------

export interface Book { title: string; author: string; year: number; category: string; blurb: string; url: string; isbn: string }

export const bookCover = (isbn: string) => `${import.meta.env.BASE_URL}books/${isbn}.webp`

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
  {
    title: 'Can\'t Hurt Me', author: 'David Goggins', year: 2018, category: 'Mindset',
    blurb: 'Navy SEAL to ultrarunner — the accountability-mirror playbook for outworking your own limits.',
    url: 'https://openlibrary.org/isbn/9781471703904', isbn: '9781471703904',
  },
  {
    title: 'The Talent Code', author: 'Daniel Coyle', year: 2009, category: 'Skill',
    blurb: 'Deep practice and myelin — why reps done slowly and properly beat reps done fast.',
    url: 'https://openlibrary.org/isbn/9780553806847', isbn: '9780553806847',
  },
  {
    title: 'Peak', author: 'Anders Ericsson', year: 2016, category: 'Skill',
    blurb: 'The deliberate-practice bible from the researcher behind the "10,000 hours" idea.',
    url: 'https://openlibrary.org/isbn/9780544947221', isbn: '9780544947221',
  },
  {
    title: 'The Champion\'s Mind', author: 'Jim Afremow, PhD', year: 2014, category: 'Mindset',
    blurb: 'Sports psychology for mortals — routines, self-talk and confidence that transfer to the gym floor.',
    url: 'https://openlibrary.org/isbn/9781623365622', isbn: '9781623365622',
  },
  {
    title: 'Becoming a Supple Leopard', author: 'Kelly Starrett', year: 2013, category: 'Mobility',
    blurb: 'The movement-and-maintenance manual — fix positions before you load them.',
    url: 'https://openlibrary.org/isbn/9781628600834', isbn: '9781628600834',
  },
  {
    title: 'Roar', author: 'Stacy Sims, PhD', year: 2016, category: 'Nutrition',
    blurb: 'Training, fuelling and recovery written for women\'s physiology — not shrunk-down men\'s advice.',
    url: 'https://openlibrary.org/isbn/9781623366865', isbn: '9781623366865',
  },
  {
    title: 'In Defense of Food', author: 'Michael Pollan', year: 2008, category: 'Nutrition',
    blurb: '"Eat food. Not too much. Mostly plants." — the seven-word diet that outlived a thousand fads.',
    url: 'https://openlibrary.org/isbn/9781594201455', isbn: '9781594201455',
  },
  {
    title: 'Food Rules', author: 'Michael Pollan', year: 2009, category: 'Nutrition',
    blurb: 'Sixty-four one-line rules for eating well — the easiest nutrition book you\'ll ever finish.',
    url: 'https://openlibrary.org/isbn/9780143116387', isbn: '9780143116387',
  },
  {
    title: 'The Blue Zones', author: 'Dan Buettner', year: 2008, category: 'Longevity',
    blurb: 'What the world\'s longest-lived communities actually do — movement baked into ordinary days.',
    url: 'https://openlibrary.org/isbn/9781426203411', isbn: '9781426203411',
  },
  {
    title: 'Ikigai', author: 'Héctor García & Francesc Miralles', year: 2016, category: 'Mind',
    blurb: 'The Japanese art of purpose — small daily reasons to get up and move.',
    url: 'https://openlibrary.org/isbn/9780143130727', isbn: '9780143130727',
  },
  {
    title: 'Man\'s Search for Meaning', author: 'Viktor E. Frankl', year: 1946, category: 'Mind',
    blurb: 'Logotherapy from a Holocaust survivor — why meaning outlasts comfort.',
    url: 'https://openlibrary.org/isbn/9788425411014', isbn: '9788425411014',
  },
  {
    title: 'Meditations', author: 'Marcus Aurelius (Gregory Hays trans.)', year: 2002, category: 'Mind',
    blurb: 'A Roman emperor\'s private notes on discipline — still the best stoic starting point.',
    url: 'https://openlibrary.org/isbn/9780812968255', isbn: '9780812968255',
  },
  {
    title: 'The Daily Stoic', author: 'Ryan Holiday', year: 2016, category: 'Mind',
    blurb: 'One page a day of ancient wisdom — pairs well with a morning stretch.',
    url: 'https://openlibrary.org/isbn/9780735211735', isbn: '9780735211735',
  },
  {
    title: 'Stillness Is the Key', author: 'Ryan Holiday', year: 2019, category: 'Mind',
    blurb: 'The case for slowing down — recovery as a skill, not a reward.',
    url: 'https://openlibrary.org/isbn/9780525538585', isbn: '9780525538585',
  },
  {
    title: 'Dopamine Nation', author: 'Anna Lembke, MD', year: 2021, category: 'Mind',
    blurb: 'Pain-pleasure balance explained — why hard effort resets a burnt-out reward system.',
    url: 'https://openlibrary.org/isbn/9791387662455', isbn: '9791387662455',
  },
  {
    title: 'Move Your DNA', author: 'Katy Bowman', year: 2017, category: 'Movement',
    blurb: 'Biomechanics of everyday movement — beyond exercise into how you live in your body.',
    url: 'https://openlibrary.org/isbn/9781943370108', isbn: '9781943370108',
  },
  {
    title: 'The Practice of Groundedness', author: 'Brad Stulberg', year: 2021, category: 'Mindset',
    blurb: 'Sustainable striving — how to chase goals without burning out on them.',
    url: 'https://openlibrary.org/isbn/9780593329894', isbn: '9780593329894',
  },
  {
    title: 'Peak Performance', author: 'Brad Stulberg & Steve Magness', year: 2017, category: 'Performance',
    blurb: 'Stress + rest = growth — the growth equation applied to training and work.',
    url: 'https://openlibrary.org/isbn/9781536675092', isbn: '9781536675092',
  },
  {
    title: 'Endure', author: 'Alex Hutchinson', year: 2018, category: 'Endurance',
    blurb: 'The science of limits — mind vs muscle in the last kilometre.',
    url: 'https://openlibrary.org/isbn/9781538502020', isbn: '9781538502020',
  },
  {
    title: 'Ultramarathon Man', author: 'Dean Karnazes', year: 2005, category: 'Endurance',
    blurb: 'Running 200 miles and other unreasonable things — pure inspiration fuel.',
    url: 'https://openlibrary.org/isbn/9781585422784', isbn: '9781585422784',
  },
  {
    title: 'Finding Ultra', author: 'Rich Roll', year: 2012, category: 'Endurance',
    blurb: 'Overweight at 40 to ultraman — the plant-fuelled comeback story.',
    url: 'https://openlibrary.org/isbn/9781538554623', isbn: '9781538554623',
  },
  {
    title: 'What I Talk About When I Talk About Running', author: 'Haruki Murakami', year: 2007, category: 'Movement',
    blurb: 'A novelist\'s quiet meditation on kilometres and craft — for the contemplative runner.',
    url: 'https://openlibrary.org/isbn/9782714445087', isbn: '9782714445087',
  },
  {
    title: 'Yoga Anatomy', author: 'Leslie Kaminoff & Amy Matthews', year: 2011, category: 'Yoga',
    blurb: 'The pose-by-pose anatomy reference every serious practitioner owns.',
    url: 'https://openlibrary.org/isbn/9780736062787', isbn: '9780736062787',
  },
  {
    title: 'The Heart of Yoga', author: 'T.K.V. Desikachar', year: 1995, category: 'Yoga',
    blurb: 'Viniyoga from the source — adapting practice to the person, not the reverse.',
    url: 'https://openlibrary.org/isbn/9780892815937', isbn: '9780892815937',
  },
  {
    title: 'Meditations from the Mat', author: 'Rolf Gates & Katrina Kenison', year: 2002, category: 'Yoga',
    blurb: '365 short reflections linking the mat to the rest of your life.',
    url: 'https://openlibrary.org/isbn/9781504632287', isbn: '9781504632287',
  },
  {
    title: 'Natural Born Heroes', author: 'Christopher McDougall', year: 2015, category: 'Movement',
    blurb: 'Parkour, natural movement and Greek resistance fighters — fitness as survival skill.',
    url: 'https://openlibrary.org/isbn/9780307594969', isbn: '9780307594969',
  },
  {
    title: 'The Wim Hof Method', author: 'Wim Hof', year: 2020, category: 'Breath',
    blurb: 'Cold, breath and commitment — the Iceman\'s protocol in his own words.',
    url: 'https://openlibrary.org/isbn/9781683646105', isbn: '9781683646105',
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
  {
    title: '20-Minute Full Body Stretch for Stress Relief', source: 'MadFit', minutes: 20, level: 'All levels', category: 'Mobility',
    url: 'https://www.youtube.com/watch?v=sTANio_2E0Q',
  },
  {
    title: 'Morning Yoga Workout — Better Than the Gym', source: 'Boho Beautiful Yoga', minutes: 15, level: 'Intermediate', category: 'Yoga',
    url: 'https://www.youtube.com/watch?v=oX6I6vs1EFs',
  },
  {
    title: 'Abs Workout Challenge', source: 'Chloe Ting', minutes: 11, level: 'Intermediate', category: 'Strength',
    url: 'https://www.youtube.com/watch?v=2pLT-olgUJs',
  },
  {
    title: '6-Pack Abs for Beginners', source: 'THENX', minutes: 10, level: 'Beginner', category: 'Strength',
    url: 'https://www.youtube.com/watch?v=3p8EBPVZ2Iw',
  },
  {
    title: '15-Minute Full Body Stretch — Daily Routine', source: 'Mady Morrison', minutes: 15, level: 'All levels', category: 'Mobility',
    url: 'https://www.youtube.com/watch?v=g_tea8ZNk5A',
  },
  {
    title: '10-Minute Beginner Ab Workout — No Equipment', source: 'Pamela Reif', minutes: 10, level: 'Beginner', category: 'Strength',
    url: 'https://www.youtube.com/watch?v=1f8yoFFdkcY',
  },
  {
    title: '15-Minute HIIT — No Equipment', source: 'FitnessBlender', minutes: 15, level: 'Intermediate', category: 'Cardio',
    url: 'https://www.youtube.com/watch?v=0DSrudz6IVY',
  },
  {
    title: 'The Minimalist Workout Plan (Science-Based)', source: 'Jeff Nippard', minutes: 14, level: 'All levels', category: 'Strength',
    url: 'https://www.youtube.com/watch?v=eMjyvIQbn9M',
  },
  {
    title: 'Balance Exercises', source: 'NHS', minutes: 10, level: 'Beginner', category: 'Mobility',
    url: 'https://www.nhs.uk/live-well/exercise/balance-exercises/',
  },
  {
    title: 'Gym-Free Home Workouts', source: 'NHS', minutes: 20, level: 'Beginner', category: 'Strength',
    url: 'https://www.nhs.uk/live-well/exercise/gym-free-workouts/',
  },
  {
    title: 'Walking for Health', source: 'NHS', minutes: 10, level: 'All levels', category: 'Cardio',
    url: 'https://www.nhs.uk/live-well/exercise/walking-for-health/',
  },
  {
    title: 'Sitting Exercises', source: 'NHS', minutes: 10, level: 'Beginner', category: 'Mobility',
    url: 'https://www.nhs.uk/live-well/exercise/sitting-exercises/',
  },
  {
    title: 'Body Blast Legs', source: 'NHS Fitness Studio', minutes: 10, level: 'Beginner+', category: 'Strength',
    url: 'https://www.nhs.uk/live-well/exercise/strength-and-resistance/body-blast-legs/',
  },
  {
    title: 'Body Blast Abs', source: 'NHS Fitness Studio', minutes: 10, level: 'Beginner+', category: 'Strength',
    url: 'https://www.nhs.uk/live-well/exercise/strength-and-resistance/body-blast-abs/',
  },
]

// ---- Warm-up Builder --------------------------------------------------------
// Procedural: every build samples fresh picks per phase, so warm-ups rarely repeat.

export interface WarmupActivity { id: string; name: string; hint: string }

export const warmupActivities: WarmupActivity[] = [
  { id: 'strength', name: 'Weights session', hint: 'Barbell, dumbbell or machine work' },
  { id: 'cardio', name: 'Cardio session', hint: 'Intervals, circuits or a hard effort' },
  { id: 'run', name: 'Run or walk', hint: 'Road, trail or treadmill' },
  { id: 'class', name: 'Group class', hint: 'Primal Flow, Lift, Sculpt and friends' },
  { id: 'yoga', name: 'Yoga practice', hint: 'Flow, yin or mobility work' },
  { id: 'sport', name: 'Sport & surf', hint: 'Ball sport, surf, swim or ride' },
]

export interface WarmupStep { phase: string; move: string; dose: string }

const pulseRaisers = [
  { move: 'Easy bike', dose: 'steady spin' },
  { move: 'Brisk treadmill walk', dose: 'incline optional' },
  { move: 'Rowing machine', dose: 'easy pressure' },
  { move: 'Marching on the spot', dose: 'tall posture' },
  { move: 'Skipping rope', dose: 'light bounces' },
  { move: 'Star jumps — low impact option: step jacks', dose: 'comfortable pace' },
  { move: 'Shadow boxing', dose: 'loose shoulders' },
  { move: 'Dance it out', dose: 'pick a track and move' },
  { move: 'Step-ups on a low box', dose: 'alternate feet' },
  { move: 'Cross-trainer', dose: 'easy-moderate' },
]

const jointPrep = [
  { move: 'Neck half-circles', dose: '5 each way — slow' },
  { move: 'Shoulder rolls', dose: '10 back, 10 forward' },
  { move: 'Arm circles', dose: '10 small to big' },
  { move: 'Wrist circles', dose: '8 each way' },
  { move: 'Hip circles', dose: '8 each way — hands on hips' },
  { move: 'Standing hip openers', dose: '6 each side' },
  { move: 'Knee hugs to chest', dose: '6 each side' },
  { move: 'Leg swings — front to back', dose: '10 each leg' },
  { move: 'Leg swings — side to side', dose: '10 each leg' },
  { move: 'Ankle rolls', dose: '8 each way, each foot' },
  { move: 'Cat-cow', dose: '8 slow breaths' },
  { move: 'Thoracic rotations on all fours', dose: '6 each side' },
  { move: 'World\'s greatest stretch', dose: '4 each side' },
  { move: 'Deep squat hold with reaches', dose: '30 seconds' },
]

const activators: Record<string, { move: string; dose: string }[]> = {
  strength: [
    { move: 'Glute bridges', dose: '12 reps — squeeze at the top' },
    { move: 'Band pull-aparts', dose: '15 reps' },
    { move: 'Bodyweight squats', dose: '10 reps' },
    { move: 'Inchworms', dose: '5 reps' },
    { move: 'Dead hangs or scap pulls', dose: '20 seconds' },
    { move: 'Push-up plus', dose: '8 reps' },
    { move: 'Empty-bar reps of your first lift', dose: '2 sets of 8' },
    { move: 'Side-lying clam shells', dose: '12 each side' },
    { move: 'Bird-dogs', dose: '6 each side' },
    { move: 'Banded lateral walks', dose: '10 steps each way' },
  ],
  cardio: [
    { move: 'High knees', dose: '20 seconds' },
    { move: 'Butt kicks', dose: '20 seconds' },
    { move: 'Skater hops', dose: '8 each side' },
    { move: 'Mountain climbers', dose: '20 seconds' },
    { move: 'Jumping jacks', dose: '30 seconds' },
    { move: 'Lunge with rotation', dose: '5 each side' },
    { move: 'Bear crawls', dose: '10 metres' },
    { move: 'Fast feet', dose: '3 × 10 seconds' },
    { move: 'Skipping — single bounce', dose: '30 seconds' },
    { move: 'A-skips', dose: '2 × 10 metres' },
  ],
  run: [
    { move: 'Walking lunges', dose: '8 each side' },
    { move: 'Calf raises', dose: '15 reps' },
    { move: 'Leg swings — front to back', dose: '10 each leg' },
    { move: 'Ankle hops', dose: '20 seconds' },
    { move: 'A-skips', dose: '2 × 15 metres' },
    { move: 'Strides — build to 80%', dose: '3 × 60 metres' },
    { move: 'Single-leg balance', dose: '20 seconds each side' },
    { move: 'Side shuffles', dose: '10 metres each way' },
    { move: 'Donkey kicks', dose: '8 each side' },
    { move: 'Easy jog', dose: 'first 3–5 min of the run' },
  ],
  class: [
    { move: 'Easy jog on the spot', dose: '60 seconds' },
    { move: 'Squat to reach', dose: '10 reps' },
    { move: 'Reverse lunges', dose: '6 each side' },
    { move: 'Torso rotations', dose: '10 slow' },
    { move: 'Jumping jacks', dose: '20 seconds' },
    { move: 'Band rows', dose: '12 reps' },
    { move: 'Hip hinges with a dowel', dose: '10 reps' },
    { move: 'Plank shoulder taps', dose: '10 each side' },
    { move: 'Side lunges', dose: '6 each side' },
    { move: 'Wall slides', dose: '8 reps' },
  ],
  yoga: [
    { move: 'Cat-cow', dose: '8 breaths' },
    { move: 'Downward dog pedal', dose: '10 slow pedals' },
    { move: 'Low lunge sway', dose: '30 seconds each side' },
    { move: 'Seated side bends', dose: '3 breaths each side' },
    { move: 'Thread the needle', dose: '5 each side' },
    { move: 'Sun salutation A — half pace', dose: '2 rounds' },
    { move: 'Child\'s pose with side reach', dose: '3 breaths each side' },
    { move: 'Supine twist', dose: '3 breaths each side' },
    { move: 'Wrist and finger stretches', dose: '30 seconds' },
    { move: 'Standing forward fold sway', dose: '30 seconds' },
  ],
  sport: [
    { move: 'Carioca steps', dose: '10 metres each way' },
    { move: 'Side shuffles', dose: '10 metres each way' },
    { move: 'Backpedal to jog', dose: '4 × 10 metres' },
    { move: 'Arm swings and throws motion', dose: '10 reps' },
    { move: 'Lunge with reach overhead', dose: '6 each side' },
    { move: 'Pogo hops', dose: '2 × 10' },
    { move: 'Shoulder pass-throughs with a band or towel', dose: '10 reps' },
    { move: 'Rotational med-ball throws or shadow throws', dose: '6 each side' },
    { move: 'Pop-ups on the sand or mat', dose: '8 reps' },
    { move: 'Build-up sprints', dose: '3 × 40 metres at 60/70/80%' },
  ],
}

const ramps: Record<string, { move: string; dose: string }[]> = {
  strength: [
    { move: 'First lift at ~50% working weight', dose: '1 × 5' },
    { move: 'First lift at ~70% working weight', dose: '1 × 3' },
    { move: 'Practise your first movement pattern unloaded', dose: '8 reps' },
  ],
  cardio: [
    { move: '60 seconds at target pace', dose: 'then easy 60s' },
    { move: '2 short pickups at session pace', dose: '15 seconds each' },
  ],
  run: [
    { move: 'Strides — build to 85%', dose: '2 × 60 metres' },
    { move: 'Easy jog into pace', dose: '2 minutes' },
  ],
  class: [
    { move: 'Rehearse the class\'s main move slowly', dose: '8 reps' },
    { move: 'One round of the circuit at half speed', dose: 'as preview' },
  ],
  yoga: [
    { move: 'Three slow breaths in stillness', dose: 'set your intention' },
    { move: 'One full sun salutation', dose: 'at practice pace' },
  ],
  sport: [
    { move: 'Sport-specific drill at half speed', dose: '2 × 30 seconds' },
    { move: 'Build-up effort', dose: '1 × 20 metres at 90%' },
  ],
}

export function buildWarmup(activityId: string, minutes: number): WarmupStep[] {
  const steps: WarmupStep[] = []
  const pulse = minutes >= 10 ? 2 : 1
  const prep = minutes >= 15 ? 4 : minutes >= 10 ? 3 : 2
  const act = minutes >= 15 ? 3 : minutes >= 10 ? 2 : 1
  shufflePick(pulseRaisers, pulse).forEach((p) => steps.push({ phase: 'Raise', move: p.move, dose: p.dose }))
  shufflePick(jointPrep, prep).forEach((p) => steps.push({ phase: 'Mobilise', move: p.move, dose: p.dose }))
  shufflePick(activators[activityId] ?? activators.strength, act).forEach((p) => steps.push({ phase: 'Activate', move: p.move, dose: p.dose }))
  shufflePick(ramps[activityId] ?? ramps.strength, 1).forEach((p) => steps.push({ phase: 'Ramp up', move: p.move, dose: p.dose }))
  return steps
}

// ---- Habit Tracker ----------------------------------------------------------
// Opt-in only: completion data is stored on-device solely after the user
// chooses "Keep my habits on this device" (same pattern as Body Metrics).

export interface Habit { id: string; name: string; hint: string }

export const habits: Habit[] = [
  { id: 'move', name: 'Moved for 20+ minutes', hint: 'Any movement counts — a walk does' },
  { id: 'protein', name: 'Protein at each meal', hint: 'Palm-size serve, three times' },
  { id: 'plants', name: '5+ serves of plants', hint: 'Fruit and veg across the day' },
  { id: 'water', name: 'Drank mostly water', hint: 'Around 2 litres' },
  { id: 'sleep', name: 'In bed by a set time', hint: 'Protect the wind-down' },
  { id: 'screens', name: 'Screens off 30 min before bed', hint: 'Book or stretch instead' },
  { id: 'steps', name: '7,000+ steps', hint: 'Everyday steps count double' },
  { id: 'moment', name: 'One quiet moment', hint: 'Breathwork, stretch or sit' },
]

export function dayKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function lastNDays(n: number): { key: string; label: string; weekday: string; isToday: boolean }[] {
  const out: { key: string; label: string; weekday: string; isToday: boolean }[] = []
  const today = new Date()
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    out.push({ key: dayKey(d), label: `${d.getDate()}`, weekday: d.toLocaleDateString('en-AU', { weekday: 'narrow' }), isToday: i === 0 })
  }
  return out
}

export function habitStreak(done: Record<string, boolean>, habitId: string): number {
  let streak = 0
  const d = new Date()
  for (;;) {
    if (done[`${habitId}:${dayKey(d)}`]) { streak++; d.setDate(d.getDate() - 1) } else break
  }
  return streak
}
