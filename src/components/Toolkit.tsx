import { useState, type ReactNode } from 'react'
import { ArrowUpRight, Blend, BookOpen, Calculator, CalendarRange, Check, ChefHat, Copy, CupSoda, Dumbbell, ListMusic, MonitorPlay, Music2, RefreshCw, Salad, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from './brand'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { cn } from '../lib/utils'
import {
  bmiCategory, bmiFor, bmiLabels, books, buildMealPlan, buildRoutine, dietFocuses,
  gymPlaylistMoods, mealBase, mealExtras, mealProteins, mealSauces, mealVeg,
  planNutrition, recipes, routineGoals, routineLevels, shoppingList,
  smoothieBases, smoothieBoosts, smoothieFruits, spotifySearch, trackList, videos,
  yogaPlaylistMoods, type DietFocus, type MealType, type PlaylistMood,
  type Recipe, type RoutineGoal, type RoutineLevel,
} from '../lib/toolkit'

type ToolId = 'planner' | 'recipes' | 'meal' | 'smoothie' | 'bmi' | 'routine' | 'gym-music' | 'yoga-music' | 'books' | 'videos'

const tools: { id: ToolId; name: string; icon: typeof Salad; hint: string }[] = [
  { id: 'planner', name: 'Meal Planner', icon: CalendarRange, hint: 'A full week, mapped out' },
  { id: 'recipes', name: 'Recipes', icon: ChefHat, hint: 'Quick, real-food cooking' },
  { id: 'meal', name: 'Meal Creator', icon: Salad, hint: 'Build a bowl that works' },
  { id: 'smoothie', name: 'Smoothie Creator', icon: CupSoda, hint: 'Blend your own' },
  { id: 'bmi', name: 'BMI Calculator', icon: Calculator, hint: 'A rough health marker' },
  { id: 'routine', name: 'Gym Routine', icon: Dumbbell, hint: 'A plan for the floor' },
  { id: 'gym-music', name: 'Gym Playlist', icon: ListMusic, hint: 'Session soundtracks' },
  { id: 'yoga-music', name: 'Yoga Playlist', icon: Music2, hint: 'Practice soundscapes' },
  { id: 'books', name: 'Books', icon: BookOpen, hint: 'Reading worth your time' },
  { id: 'videos', name: 'Video Library', icon: MonitorPlay, hint: 'Follow-along sessions' },
]

function Panel({ children, labelledBy }: { children: ReactNode; labelledBy: string }) {
  return <div className="tool-panel" role="region" aria-labelledby={labelledBy}>{children}</div>
}

function ToolHeading({ icon: Icon, title, note }: { icon: typeof Salad; title: string; note: string }) {
  return (
    <div className="tool-heading">
      <span className="tool-icon"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span>
      <div><h3>{title}</h3><p>{note}</p></div>
    </div>
  )
}

function useCopied() {
  const [copied, setCopied] = useState(false)
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard unavailable — button simply doesn't confirm */ }
  }
  return { copied, copy }
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const { copied, copy } = useCopied()
  return (
    <Button variant="outline" size="sm" onClick={() => copy(text)}>
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />} {copied ? 'Copied' : label}
    </Button>
  )
}

function EstimateNote() {
  return <p className="tool-estimate"><Sparkles size={13} aria-hidden="true" /> Nutrition figures are estimates for general education — not medical or dietary advice.</p>
}

// ---- Meal planner -----------------------------------------------------------

function MealPlanner() {
  const [focus, setFocus] = useState<DietFocus>('balanced')
  const [withSnacks, setWithSnacks] = useState(false)
  const [seed, setSeed] = useState(0)
  const plan = buildMealPlan(focus, withSnacks)
  // Reshuffle: regenerate with a rotated pool by cycling the starting index.
  const display = seed === 0 ? plan : plan.map((day, index) => ({
    ...day,
    meals: day.meals.map((meal) => {
      const pool = recipes.filter((recipe) => recipe.type === meal.type && recipe.focus.includes(focus))
      return { ...meal, recipe: pool[(pool.indexOf(meal.recipe) + seed + index) % pool.length] }
    }),
  }))
  const list = shoppingList(display)
  const planText = display.map((day) => `${day.day}\n${day.meals.map((meal) => `  ${meal.type}: ${meal.recipe.name}`).join('\n')}`).join('\n\n')
  const listText = `Shopping list\n${list.map(([item, count]) => `${item}${count > 1 ? ` ×${count}` : ''}`).join('\n')}`

  return (
    <div>
      <div className="tool-controls" role="group" aria-label="Meal plan focus">
        {dietFocuses.map((option) => (
          <button key={option.id} type="button" className={cn('filter-pill', focus === option.id && 'is-active')} aria-pressed={focus === option.id} onClick={() => { setFocus(option.id); setSeed(0) }} title={option.hint}>{option.name}</button>
        ))}
        <button type="button" className={cn('filter-pill', withSnacks && 'is-active')} aria-pressed={withSnacks} onClick={() => setWithSnacks((value) => !value)}>+ Snacks</button>
        <Button variant="outline" size="sm" onClick={() => setSeed((value) => value + 1)}><RefreshCw aria-hidden="true" /> Reshuffle week</Button>
        <CopyButton label="Copy plan" text={planText} />
        <CopyButton label="Copy shopping list" text={listText} />
      </div>
      <div className="planner-grid">
        {display.map((day) => {
          const totals = planNutrition(display, day.day)
          return (
            <div key={day.day} className="planner-day">
              <h4>{day.day}</h4>
              {day.meals.map((meal) => (
                <div key={meal.type} className="planner-meal">
                  <span className="planner-slot">{meal.type}</span>
                  <span className="planner-name">{meal.recipe.name}</span>
                </div>
              ))}
              <p className="planner-total">≈ {totals.kcal} kcal · {totals.protein}g protein</p>
            </div>
          )
        })}
        <div className="planner-day planner-shop">
          <h4>Shopping list</h4>
          <ul className="shop-list">{list.map(([item, count]) => <li key={item}>{item}{count > 1 && <span> ×{count}</span>}</li>)}</ul>
        </div>
      </div>
      <EstimateNote />
    </div>
  )
}

// ---- Recipe catalogue -------------------------------------------------------

const mealTypes: (MealType | 'All')[] = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack']

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <div className="recipe-top">
        <div>
          <h4>{recipe.name}</h4>
          <p className="recipe-meta">{recipe.type} · {recipe.minutes} min · serves {recipe.serves} · ≈{recipe.kcal} kcal · {recipe.protein}g protein</p>
        </div>
      </div>
      <div className="recipe-tags">{recipe.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <details className="recipe-details">
        <summary>Ingredients &amp; method</summary>
        <div className="recipe-body">
          <ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
          <ol>{recipe.method.map((step) => <li key={step}>{step}</li>)}</ol>
        </div>
      </details>
    </article>
  )
}

function RecipeCatalogue() {
  const [type, setType] = useState<(typeof mealTypes)[number]>('All')
  const shown = recipes.filter((recipe) => type === 'All' || recipe.type === type)
  return (
    <div>
      <div className="tool-controls" role="group" aria-label="Filter recipes">
        {mealTypes.map((name) => (
          <button key={name} type="button" className={cn('filter-pill', type === name && 'is-active')} aria-pressed={type === name} onClick={() => setType(name)}>{name}</button>
        ))}
      </div>
      <div className="recipe-grid">{shown.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</div>
      <EstimateNote />
    </div>
  )
}

// ---- Meal creator -----------------------------------------------------------

function MealCreator() {
  const [base, setBase] = useState(0)
  const [protein, setProtein] = useState(0)
  const [veg, setVeg] = useState(0)
  const [sauce, setSauce] = useState(0)
  const [extras, setExtras] = useState<string[]>([])
  const parts = [mealBase[base], mealProteins[protein], mealVeg[veg], mealSauces[sauce], ...mealExtras.filter((item) => extras.includes(item.name))]
  const kcal = parts.reduce((total, part) => total + part.kcal, 0)
  const proteinTotal = parts.reduce((total, part) => total + part.protein, 0)

  const pick = (label: string, options: { name: string }[], value: number, set: (index: number) => void, hint: string) => (
    <fieldset className="builder-field">
      <legend>{label}</legend>
      <div className="builder-options" role="group" aria-label={hint}>
        {options.map((option, index) => (
          <button key={option.name} type="button" className={cn('builder-chip', value === index && 'is-active')} aria-pressed={value === index} onClick={() => set(index)}>{option.name}</button>
        ))}
      </div>
    </fieldset>
  )

  return (
    <div className="builder">
      <div className="builder-fields">
        {pick('1 · Pick a base', mealBase, base, setBase, 'Base options')}
        {pick('2 · Add a protein', mealProteins, protein, setProtein, 'Protein options')}
        {pick('3 · Choose veg', mealVeg, veg, setVeg, 'Vegetable options')}
        {pick('4 · Finish with a sauce', mealSauces, sauce, setSauce, 'Sauce options')}
        <fieldset className="builder-field">
          <legend>5 · Extras <span className="legend-note">optional, pick any</span></legend>
          <div className="builder-options" role="group" aria-label="Extra options">
            {mealExtras.map((option) => (
              <button key={option.name} type="button" className={cn('builder-chip', extras.includes(option.name) && 'is-active')} aria-pressed={extras.includes(option.name)}
                onClick={() => setExtras((list) => list.includes(option.name) ? list.filter((item) => item !== option.name) : [...list, option.name])}>{option.name}</button>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="builder-result" aria-live="polite">
        <span className="tiny-label">Your bowl</span>
        <h4>{mealProteins[protein].name} {mealBase[base].name === 'Wholegrain wrap' ? 'wrap' : 'bowl'}</h4>
        <p className="builder-recipe">{parts.map((part) => part.name).join(' + ')}</p>
        <div className="builder-stats">
          <div><strong>≈{kcal}</strong><span>est. kcal</span></div>
          <div><strong>≈{proteinTotal}g</strong><span>est. protein</span></div>
        </div>
        <CopyButton label="Copy my bowl" text={`${mealProteins[protein].name} bowl\n${parts.map((part) => `- ${part.name}`).join('\n')}\n≈${kcal} kcal · ≈${proteinTotal}g protein (estimates)`} />
      </div>
    </div>
  )
}

// ---- Smoothie creator -------------------------------------------------------

function SmoothieCreator() {
  const [base, setBase] = useState(0)
  const [fruits, setFruits] = useState<string[]>(['Banana'])
  const [boosts, setBoosts] = useState<string[]>([])
  const parts = [
    smoothieBases[base],
    ...smoothieFruits.filter((item) => fruits.includes(item.name)),
    ...smoothieBoosts.filter((item) => boosts.includes(item.name)),
  ]
  const kcal = parts.reduce((total, part) => total + part.kcal, 0)
  const protein = parts.reduce((total, part) => total + part.protein, 0)
  const toggle = (name: string, list: string[], set: (value: string[]) => void) => () =>
    set(list.includes(name) ? list.filter((item) => item !== name) : [...list, name])

  return (
    <div className="builder">
      <div className="builder-fields">
        <fieldset className="builder-field">
          <legend>1 · Liquid base</legend>
          <div className="builder-options" role="group" aria-label="Smoothie base">
            {smoothieBases.map((option, index) => (
              <button key={option.name} type="button" className={cn('builder-chip', base === index && 'is-active')} aria-pressed={base === index} onClick={() => setBase(index)}>{option.name}</button>
            ))}
          </div>
        </fieldset>
        <fieldset className="builder-field">
          <legend>2 · Fruit &amp; creaminess <span className="legend-note">pick 1–3</span></legend>
          <div className="builder-options" role="group" aria-label="Smoothie fruits">
            {smoothieFruits.map((option) => (
              <button key={option.name} type="button" className={cn('builder-chip', fruits.includes(option.name) && 'is-active')} aria-pressed={fruits.includes(option.name)}
                onClick={toggle(option.name, fruits, (value) => setFruits(value.slice(-3)))}>{option.name}</button>
            ))}
          </div>
        </fieldset>
        <fieldset className="builder-field">
          <legend>3 · Boosts <span className="legend-note">optional</span></legend>
          <div className="builder-options" role="group" aria-label="Smoothie boosts">
            {smoothieBoosts.map((option) => (
              <button key={option.name} type="button" className={cn('builder-chip', boosts.includes(option.name) && 'is-active')} aria-pressed={boosts.includes(option.name)} onClick={toggle(option.name, boosts, setBoosts)}>{option.name}</button>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="builder-result" aria-live="polite">
        <span className="tool-icon"><Blend size={22} strokeWidth={1.5} aria-hidden="true" /></span>
        <h4>{fruits.length ? `${fruits[fruits.length - 1]} smoothie` : 'Your smoothie'}</h4>
        <p className="builder-recipe">{parts.length ? parts.map((part) => part.name).join(' + ') : 'Pick a fruit to get started'}</p>
        <p className="builder-method">Blend everything with a handful of ice for 45–60 seconds until smooth.</p>
        <div className="builder-stats">
          <div><strong>≈{kcal}</strong><span>est. kcal</span></div>
          <div><strong>≈{protein}g</strong><span>est. protein</span></div>
        </div>
        <CopyButton label="Copy recipe" text={`Smoothie\n${parts.map((part) => `- ${part.name}`).join('\n')}\nBlend with ice 45–60s. ≈${kcal} kcal · ≈${protein}g protein (estimates)`} />
      </div>
    </div>
  )
}

// ---- BMI calculator ---------------------------------------------------------

function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const h = Number(height)
  const w = Number(weight)
  const valid = h >= 100 && h <= 250 && w >= 25 && w <= 400
  const bmi = valid ? bmiFor(h, w) : null
  const category = bmi !== null ? bmiLabels[bmiCategory(bmi)] : null

  return (
    <div className="bmi-tool">
      <div className="bmi-inputs">
        <label>Height <span className="legend-note">cm</span>
          <Input type="number" inputMode="decimal" min={100} max={250} placeholder="e.g. 172" value={height} onChange={(event) => setHeight(event.target.value)} />
        </label>
        <label>Weight <span className="legend-note">kg</span>
          <Input type="number" inputMode="decimal" min={25} max={400} placeholder="e.g. 68" value={weight} onChange={(event) => setWeight(event.target.value)} />
        </label>
      </div>
      <div className="bmi-result" aria-live="polite">
        {bmi !== null && category ? (
          <>
            <div className="bmi-score"><strong>{bmi.toFixed(1)}</strong><span>BMI</span></div>
            <div className="bmi-scale" aria-hidden="true">
              <span className="bmi-marker" style={{ left: `${Math.min(97, Math.max(2, ((bmi - 14) / (40 - 14)) * 100))}%` }} />
            </div>
            <p className="bmi-category">{category.name} <span>({category.range})</span></p>
            <p className="bmi-note">{category.note}</p>
          </>
        ) : <p className="bmi-note">Enter your height and weight — your result appears here instantly and never leaves this page.</p>}
      </div>
      <div className="tool-disclaimer">
        <p><strong>Read this first.</strong> BMI is a rough population screening tool for adults 18+. It can't tell muscle from fat — so muscular people often read "overweight" — and it isn't designed for pregnancy, under-18s, eating disorders, or some health conditions. For a real picture, talk to your GP.</p>
      </div>
    </div>
  )
}

// ---- Gym routine creator ----------------------------------------------------

function RoutineCreator() {
  const [goal, setGoal] = useState<RoutineGoal>('strength')
  const [level, setLevel] = useState<RoutineLevel>('new')
  const [days, setDays] = useState<2 | 3 | 4>(3)
  const plan = buildRoutine(goal, level, days)

  return (
    <div>
      <div className="tool-controls tool-controls-stacked">
        <div className="control-row" role="group" aria-label="Training goal">
          <span className="control-label">Goal</span>
          {routineGoals.map((option) => (
            <button key={option.id} type="button" className={cn('filter-pill', goal === option.id && 'is-active')} aria-pressed={goal === option.id} onClick={() => setGoal(option.id)} title={option.hint}>{option.name}</button>
          ))}
        </div>
        <div className="control-row" role="group" aria-label="Experience level">
          <span className="control-label">Level</span>
          {routineLevels.map((option) => (
            <button key={option.id} type="button" className={cn('filter-pill', level === option.id && 'is-active')} aria-pressed={level === option.id} onClick={() => setLevel(option.id)}>{option.name}</button>
          ))}
        </div>
        <div className="control-row" role="group" aria-label="Days per week">
          <span className="control-label">Days</span>
          {([2, 3, 4] as const).map((count) => (
            <button key={count} type="button" className={cn('filter-pill', days === count && 'is-active')} aria-pressed={days === count} onClick={() => setDays(count)}>{count} days</button>
          ))}
        </div>
      </div>
      <div className="routine-plan" aria-live="polite">
        <div className="routine-head">
          <h4>{plan.title}</h4>
          <p>{plan.note}</p>
        </div>
        <div className="routine-grid">
          {plan.days.map((day) => (
            <article key={day.name} className="routine-day">
              <span className="tiny-label">{day.focus}</span>
              <h5>{day.name}</h5>
              <div className="routine-block"><span>Warm-up</span><ul>{day.warmup.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="routine-block"><span>Main set</span><ul>{day.exercises.map((item) => <li key={item.name}><strong>{item.name}</strong><em>{item.dose}</em></li>)}</ul></div>
              <div className="routine-block"><span>Cool-down</span><ul>{day.cooldown.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </div>
        <CopyButton label="Copy routine" text={`${plan.title}\n${plan.note}\n\n${plan.days.map((day) => `${day.name} (${day.focus})\nWarm-up: ${day.warmup.join('; ')}\n${day.exercises.map((item) => `- ${item.name}: ${item.dose}`).join('\n')}\nCool-down: ${day.cooldown.join('; ')}`).join('\n\n')}`} />
      </div>
      <p className="tool-estimate"><Sparkles size={13} aria-hidden="true" /> General guidance for healthy adults — not a personal program. New to lifting or managing an injury? Our trainers can tailor this on the gym floor.</p>
    </div>
  )
}

// ---- Playlist builders ------------------------------------------------------

function PlaylistBuilder({ moods, playlistName }: { moods: PlaylistMood[]; playlistName: string }) {
  const [mood, setMood] = useState(0)
  const current = moods[mood]
  return (
    <div>
      <div className="tool-controls" role="group" aria-label="Playlist mood">
        {moods.map((option, index) => (
          <button key={option.id} type="button" className={cn('filter-pill', mood === index && 'is-active')} aria-pressed={mood === index} onClick={() => setMood(index)} title={option.hint}>{option.name}</button>
        ))}
      </div>
      <div className="playlist" aria-live="polite">
        <div className="playlist-head">
          <div><h4>{playlistName} · {current.name}</h4><p>{current.hint} — {current.tracks.length} tracks</p></div>
          <CopyButton label="Copy track list" text={trackList(current, playlistName)} />
        </div>
        <ol className="track-list">
          {current.tracks.map((track) => (
            <li key={`${track.title}-${track.artist}`}>
              <span className="track-name">{track.title}</span>
              <span className="track-artist">{track.artist}</span>
              <a className="track-link" href={spotifySearch(track)} target="_blank" rel="noopener noreferrer" aria-label={`Find ${track.title} by ${track.artist} on Spotify`}>Spotify <ArrowUpRight size={12} aria-hidden="true" /></a>
            </li>
          ))}
        </ol>
        <p className="playlist-note">No account needed to preview — each Spotify link opens a search you can listen from. Copy the list to rebuild the playlist in any app.</p>
      </div>
    </div>
  )
}

// ---- Books & videos ---------------------------------------------------------

function BookShelf() {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <article key={book.title} className="book-card">
          <div className="book-cover" aria-hidden="true"><span>{book.title}</span><em>{book.author}</em></div>
          <div className="book-info">
            <span className="tiny-label">{book.category} · {book.year}</span>
            <h4>{book.title}</h4>
            <p className="book-author">{book.author}</p>
            <p>{book.blurb}</p>
            <a className="text-link" href={book.url} target="_blank" rel="noopener noreferrer">Publisher site <ArrowUpRight size={12} aria-hidden="true" /></a>
          </div>
        </article>
      ))}
    </div>
  )
}

function VideoLibrary() {
  return (
    <div>
      <div className="video-grid">
        {videos.map((video) => (
          <a key={video.title} className="video-card" href={video.url} target="_blank" rel="noopener noreferrer">
            <span className="video-play" aria-hidden="true"><MonitorPlay size={20} strokeWidth={1.5} /></span>
            <div className="video-info">
              <span className="tiny-label">{video.category} · {video.minutes} min</span>
              <h4>{video.title}</h4>
              <p>{video.source} · {video.level}</p>
            </div>
            <ArrowUpRight className="video-arrow" size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="tool-estimate"><Sparkles size={13} aria-hidden="true" /> Free, reputable follow-along sessions — great between gym days. Videos open on the provider's site; their terms apply there.</p>
    </div>
  )
}

// ---- Toolkit section --------------------------------------------------------

export function Toolkit() {
  const [tool, setTool] = useState<ToolId>('planner')
  const active = tools.find((item) => item.id === tool)!

  return (
    <section id="toolkit" className="section toolkit-section">
      <div className="container">
        <SectionHeading eyebrow="Free for everyone" title={<>The Active Life<br className="desktop-break" /> Toolkit</>}>
          Ten free tools to back up your training — meal planning, recipes, routines, playlists and more. No account, no sign-up, and nothing you enter leaves this page.
        </SectionHeading>
        <Reveal>
          <div className="tool-picker" role="group" aria-label="Choose a tool">
            {tools.map((item) => (
              <button key={item.id} type="button" id={`tool-tab-${item.id}`} className={cn('tool-card', tool === item.id && 'is-active')} aria-pressed={tool === item.id} onClick={() => setTool(item.id)}>
                <item.icon size={21} strokeWidth={1.4} aria-hidden="true" />
                <span className="tool-name">{item.name}</span>
                <span className="tool-hint">{item.hint}</span>
              </button>
            ))}
          </div>
          <Panel labelledBy={`tool-tab-${tool}`}>
            <ToolHeading icon={active.icon} title={active.name} note={active.hint} />
            {tool === 'planner' && <MealPlanner />}
            {tool === 'recipes' && <RecipeCatalogue />}
            {tool === 'meal' && <MealCreator />}
            {tool === 'smoothie' && <SmoothieCreator />}
            {tool === 'bmi' && <BmiCalculator />}
            {tool === 'routine' && <RoutineCreator />}
            {tool === 'gym-music' && <PlaylistBuilder moods={gymPlaylistMoods} playlistName="Transform Active Gym" />}
            {tool === 'yoga-music' && <PlaylistBuilder moods={yogaPlaylistMoods} playlistName="Transform Active Yoga" />}
            {tool === 'books' && <BookShelf />}
            {tool === 'videos' && <VideoLibrary />}
          </Panel>
        </Reveal>
      </div>
    </section>
  )
}
