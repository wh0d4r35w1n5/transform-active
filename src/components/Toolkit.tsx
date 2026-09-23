import { useCallback, useEffect, useRef, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'
import { ArrowUpRight, Blend, BookOpen, Calculator, CalendarRange, Check, CheckCircle2, ChefHat, Circle, Copy, CupSoda, Dices, Dumbbell, ListMusic, MonitorPlay, Music2, Pause, Play, Printer, Radio, RefreshCw, RotateCcw, Salad, ShieldCheck, Shuffle, Sparkles, Timer, X } from 'lucide-react'
import { Reveal, SectionHeading } from './brand'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { cn } from '../lib/utils'
import {
  activityLevels, bmiCategory, bmiFor, bmiLabels, books, buildMealPlan, buildRoutine,
  clearSavedBody, dailyNeeds, dietFocuses, gymPlaylistMoods, loadSavedBody, mealBase,
  mealExtras, mealProteins, mealSauces, mealVeg, planNutrition, recipes, routineGoals,
  routineLevels, saveBody, shoppingListSections, shufflePick, smoothieBases, smoothieBoosts, smoothieFruits,
  spotifySearch, trackList, videos, yogaPlaylistMoods, defaultShowId, radioShows,
  type DietFocus, type MealType, type PlaylistMood, type Recipe, type RoutineExercise,
  type RoutineGoal, type RoutineLevel, type SavedBody, type Sex,
} from '../lib/toolkit'

type ToolId = 'planner' | 'recipes' | 'meal' | 'smoothie' | 'bmi' | 'routine' | 'radio' | 'gym-music' | 'yoga-music' | 'books' | 'videos'

const tools: { id: ToolId; name: string; icon: typeof Salad; hint: string }[] = [
  { id: 'planner', name: 'Meal Planner', icon: CalendarRange, hint: 'A full week, mapped out' },
  { id: 'recipes', name: 'Recipes', icon: ChefHat, hint: 'Quick, real-food cooking' },
  { id: 'meal', name: 'Meal Creator', icon: Salad, hint: 'Build a bowl that works' },
  { id: 'smoothie', name: 'Smoothie Creator', icon: CupSoda, hint: 'Blend your own' },
  { id: 'bmi', name: 'Body Metrics', icon: Calculator, hint: 'BMI + daily energy needs' },
  { id: 'routine', name: 'Gym Routine', icon: Dumbbell, hint: 'A plan for the floor' },
  { id: 'radio', name: 'Transform Radio', icon: Radio, hint: 'Free 24/7 live channels' },
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
    <Button variant="outline" size="sm" className="no-print" onClick={() => copy(text)}>
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />} {copied ? 'Copied' : label}
    </Button>
  )
}

function PrintButton({ label }: { label: string }) {
  return <Button variant="outline" size="sm" className="no-print" onClick={() => window.print()}><Printer aria-hidden="true" /> {label}</Button>
}

// Remembers UI state in localStorage — on-device only, never transmitted.
function usePersistentState<T>(key: string, initial: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key)
      return raw != null ? (JSON.parse(raw) as T) : initial
    } catch { return initial }
  })
  const set = useCallback((next: SetStateAction<T>) => {
    setValue((prev) => {
      const resolved = typeof next === 'function' ? (next as (p: T) => T)(prev) : next
      try { window.localStorage.setItem(key, JSON.stringify(resolved)) } catch { /* storage unavailable */ }
      return resolved
    })
  }, [key])
  return [value, set]
}

function formatClock(total: number) {
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
}

function useBeeper() {
  const ctxRef = useRef<AudioContext | null>(null)
  return useCallback(() => {
    try {
      const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      ctxRef.current ??= new Ctx()
      const ctx = ctxRef.current
      const beep = (at: number) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.value = 880
        gain.gain.setValueAtTime(0.001, at)
        gain.gain.exponentialRampToValueAtTime(0.25, at + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.001, at + 0.18)
        osc.connect(gain).connect(ctx.destination)
        osc.start(at)
        osc.stop(at + 0.2)
      }
      beep(ctx.currentTime)
      beep(ctx.currentTime + 0.25)
      navigator.vibrate?.(150)
    } catch { /* no audio output — the countdown still shows */ }
  }, [])
}

interface RestState { label: string; total: number; left: number; paused: boolean }

function useRestTimer(onDone: () => void) {
  const [rest, setRest] = useState<RestState | null>(null)
  const intervalRef = useRef<number | null>(null)
  const stopTick = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }
  const start = useCallback((label: string, seconds: number) => {
    stopTick()
    setRest({ label, total: seconds, left: seconds, paused: false })
    intervalRef.current = window.setInterval(() => {
      setRest((current) => (current && !current.paused && current.left > 0 ? { ...current, left: current.left - 1 } : current))
    }, 1000)
  }, [])
  const stop = useCallback(() => { stopTick(); setRest(null) }, [])
  const adjust = (delta: number) => setRest((current) => (current && current.left > 0 ? { ...current, left: Math.max(5, current.left + delta) } : current))
  const togglePause = () => setRest((current) => (current ? { ...current, paused: !current.paused } : current))
  useEffect(() => {
    if (rest?.left === 0) { stopTick(); onDone() }
  }, [rest?.left, onDone])
  useEffect(() => stopTick, [])
  return { rest, start, stop, adjust, togglePause }
}

function EstimateNote() {
  return <p className="tool-estimate"><Sparkles size={13} aria-hidden="true" /> Nutrition figures are estimates for general education — not medical or dietary advice.</p>
}

// ---- Meal planner -----------------------------------------------------------

function MealPlanner() {
  const [focus, setFocus] = usePersistentState<DietFocus>('ta-plan-focus', 'balanced')
  const [withSnacks, setWithSnacks] = usePersistentState('ta-plan-snacks', false)
  const [seed, setSeed] = useState(0)
  const [picks, setPicks] = usePersistentState<Record<string, string>>('ta-plan-picks', {})
  const [doneDays, setDoneDays] = usePersistentState<string[]>('ta-plan-done', [])
  const saved = loadSavedBody()
  const plan = buildMealPlan(focus, withSnacks)
  // A slot's recipe = the visitor's own swap if one exists, otherwise the
  // generated (or reshuffled) pick. Swaps persist and survive reshuffles.
  const display = plan.map((day, index) => ({
    ...day,
    meals: day.meals.map((meal) => {
      const pool = recipes.filter((recipe) => recipe.type === meal.type && recipe.focus.includes(focus))
      const picked = pool.find((recipe) => recipe.id === picks[`${day.day}-${meal.type}`])
      const rotated = seed === 0 ? meal.recipe : pool[(pool.indexOf(meal.recipe) + seed + index) % pool.length]
      return { ...meal, recipe: picked ?? rotated }
    }),
  }))
  const list = shoppingListSections(display)
  const planText = display.map((day) => `${day.day}\n${day.meals.map((meal) => `  ${meal.type}: ${meal.recipe.name}`).join('\n')}`).join('\n\n')
  const listText = `Shopping list\n${list.map((section) => `${section.name}\n${section.items.map((item) => `  ${item.text}${item.detail ? ` (${item.detail})` : ''}`).join('\n')}`).join('\n\n')}`

  const swap = (day: string, type: MealType) => {
    const pool = recipes.filter((recipe) => recipe.type === type && recipe.focus.includes(focus))
    const current = display.find((entry) => entry.day === day)?.meals.find((meal) => meal.type === type)?.recipe
    if (!current || pool.length < 2) return
    const next = pool[(pool.indexOf(current) + 1) % pool.length]
    setPicks((prev) => ({ ...prev, [`${day}-${type}`]: next.id }))
  }
  const toggleDone = (day: string) =>
    setDoneDays((prev) => (prev.includes(day) ? prev.filter((item) => item !== day) : [...prev, day]))

  return (
    <div>
      <div className="tool-controls" role="group" aria-label="Meal plan focus">
        {dietFocuses.map((option) => (
          <button key={option.id} type="button" className={cn('filter-pill', focus === option.id && 'is-active')} aria-pressed={focus === option.id} onClick={() => { setFocus(option.id); setSeed(0); setPicks({}) }} title={option.hint}>{option.name}</button>
        ))}
        <button type="button" className={cn('filter-pill', withSnacks && 'is-active')} aria-pressed={withSnacks} onClick={() => setWithSnacks((value) => !value)}>+ Snacks</button>
        <Button variant="outline" size="sm" className="no-print" onClick={() => setSeed((value) => value + 1)} title="New week — keeps your swapped meals"><RefreshCw aria-hidden="true" /> Reshuffle week</Button>
        <CopyButton label="Copy plan" text={planText} />
        <CopyButton label="Copy shopping list" text={listText} />
        <PrintButton label="Print" />
        {saved && <span className="target-chip" title="From your saved Body Metrics">Target ≈{saved.kcal.toLocaleString()} kcal · {saved.proteinMin}–{saved.proteinMax}g protein a day</span>}
      </div>
      <div className="planner-grid">
        {display.map((day) => {
          const totals = planNutrition(display, day.day)
          const isDone = doneDays.includes(day.day)
          return (
            <div key={day.day} className={cn('planner-day', isDone && 'is-done')}>
              <div className="planner-day-head">
                <h4>{day.day}</h4>
                <button type="button" className="day-done no-print" aria-pressed={isDone} aria-label={isDone ? `Mark ${day.day} not done` : `Mark ${day.day} done`} onClick={() => toggleDone(day.day)}>
                  {isDone ? <CheckCircle2 size={16} aria-hidden="true" /> : <Circle size={16} aria-hidden="true" />}
                </button>
              </div>
              {day.meals.map((meal) => (
                <div key={meal.type} className="planner-meal">
                  <span className="planner-slot">{meal.type}</span>
                  <span className="planner-name">{meal.recipe.name}</span>
                  <button type="button" className="meal-swap no-print" onClick={() => swap(day.day, meal.type)} title="Swap for another recipe" aria-label={`Swap ${meal.type} on ${day.day}`}><RotateCcw size={12} aria-hidden="true" /></button>
                </div>
              ))}
              <p className="planner-total">≈ {totals.kcal} kcal · {totals.protein}g protein</p>
            </div>
          )
        })}
        <div className="planner-day planner-shop">
          <h4>Shopping list</h4>
          <div className="shop-list">
            {list.map((section) => (
              <div key={section.name} className="shop-section">
                <h5>{section.name}</h5>
                <ul>{section.items.map((item) => <li key={item.text}>{item.text}{item.detail && <span> · {item.detail}</span>}</li>)}</ul>
              </div>
            ))}
          </div>
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
  const [ordered, setOrdered] = useState<Recipe[] | null>(null)
  const filtered = recipes.filter((recipe) => type === 'All' || recipe.type === type)
  const shown = ordered ?? filtered
  return (
    <div>
      <div className="tool-controls" role="group" aria-label="Filter recipes">
        {mealTypes.map((name) => (
          <button key={name} type="button" className={cn('filter-pill', type === name && 'is-active')} aria-pressed={type === name} onClick={() => { setType(name); setOrdered(null) }}>{name}</button>
        ))}
        <Button variant="outline" size="sm" onClick={() => setOrdered(shufflePick(filtered))} title="Deal the cards again"><Shuffle aria-hidden="true" /> Shuffle recipes</Button>
      </div>
      <div className="recipe-grid">{shown.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}</div>
      <EstimateNote />
    </div>
  )
}

// ---- Meal creator -----------------------------------------------------------

function MealCreator() {
  const [bowl, setBowl] = usePersistentState('ta-bowl', { base: 0, protein: 0, veg: 0, sauce: 0, extras: [] as string[] })
  const { base, protein, veg, sauce, extras } = bowl
  const setField = (field: 'base' | 'protein' | 'veg' | 'sauce') => (index: number) => setBowl((prev) => ({ ...prev, [field]: index }))
  const parts = [mealBase[base], mealProteins[protein], mealVeg[veg], mealSauces[sauce], ...mealExtras.filter((item) => extras.includes(item.name))]
  const kcal = parts.reduce((total, part) => total + part.kcal, 0)
  const proteinTotal = parts.reduce((total, part) => total + part.protein, 0)
  const surprise = () => setBowl({
    base: Math.floor(Math.random() * mealBase.length),
    protein: Math.floor(Math.random() * mealProteins.length),
    veg: Math.floor(Math.random() * mealVeg.length),
    sauce: Math.floor(Math.random() * mealSauces.length),
    extras: shufflePick(mealExtras.map((item) => item.name), Math.floor(Math.random() * 3)),
  })

  const pick = (label: string, options: { name: string }[], value: number, field: 'base' | 'protein' | 'veg' | 'sauce', hint: string) => (
    <fieldset className="builder-field">
      <legend>{label}</legend>
      <div className="builder-options" role="group" aria-label={hint}>
        {options.map((option, index) => (
          <button key={option.name} type="button" className={cn('builder-chip', value === index && 'is-active')} aria-pressed={value === index} onClick={() => setField(field)(index)}>{option.name}</button>
        ))}
      </div>
    </fieldset>
  )

  return (
    <div className="builder">
      <div className="builder-fields">
        <div className="tool-controls no-print">
          <Button variant="outline" size="sm" onClick={surprise} title="Random bowl"><Dices aria-hidden="true" /> Surprise me</Button>
        </div>
        {pick('1 · Pick a base', mealBase, base, 'base', 'Base options')}
        {pick('2 · Add a protein', mealProteins, protein, 'protein', 'Protein options')}
        {pick('3 · Choose veg', mealVeg, veg, 'veg', 'Vegetable options')}
        {pick('4 · Finish with a sauce', mealSauces, sauce, 'sauce', 'Sauce options')}
        <fieldset className="builder-field">
          <legend>5 · Extras <span className="legend-note">optional, pick any</span></legend>
          <div className="builder-options" role="group" aria-label="Extra options">
            {mealExtras.map((option) => (
              <button key={option.name} type="button" className={cn('builder-chip', extras.includes(option.name) && 'is-active')} aria-pressed={extras.includes(option.name)}
                onClick={() => setBowl((prev) => ({ ...prev, extras: prev.extras.includes(option.name) ? prev.extras.filter((item) => item !== option.name) : [...prev.extras, option.name] }))}>{option.name}</button>
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
  const [blend, setBlend] = usePersistentState('ta-smoothie', { base: 0, fruits: ['Banana'], boosts: [] as string[] })
  const { base, fruits, boosts } = blend
  const setBase = (index: number) => setBlend((prev) => ({ ...prev, base: index }))
  const setFruits = (value: string[] | ((prev: string[]) => string[])) => setBlend((prev) => ({ ...prev, fruits: typeof value === 'function' ? value(prev.fruits) : value }))
  const setBoosts = (value: string[] | ((prev: string[]) => string[])) => setBlend((prev) => ({ ...prev, boosts: typeof value === 'function' ? value(prev.boosts) : value }))
  const parts = [
    smoothieBases[base],
    ...smoothieFruits.filter((item) => fruits.includes(item.name)),
    ...smoothieBoosts.filter((item) => boosts.includes(item.name)),
  ]
  const kcal = parts.reduce((total, part) => total + part.kcal, 0)
  const protein = parts.reduce((total, part) => total + part.protein, 0)
  const toggle = (name: string, list: string[], set: (value: string[]) => void) => () =>
    set(list.includes(name) ? list.filter((item) => item !== name) : [...list, name])
  const surprise = () => setBlend({
    base: Math.floor(Math.random() * smoothieBases.length),
    fruits: shufflePick(smoothieFruits.map((item) => item.name), 1 + Math.floor(Math.random() * 3)),
    boosts: shufflePick(smoothieBoosts.map((item) => item.name), Math.floor(Math.random() * 3)),
  })

  return (
    <div className="builder">
      <div className="builder-fields">
        <div className="tool-controls no-print">
          <Button variant="outline" size="sm" onClick={surprise} title="Random blend"><Dices aria-hidden="true" /> Surprise me</Button>
        </div>
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

// ---- Body metrics (BMI + daily energy needs) --------------------------------

function BodyMetrics() {
  const [saved, setSaved] = useState<SavedBody | null>(() => loadSavedBody())
  const [height, setHeight] = useState(saved ? String(saved.height) : '')
  const [weight, setWeight] = useState(saved ? String(saved.weight) : '')
  const [age, setAge] = useState(saved ? String(saved.age) : '')
  const [sex, setSex] = useState<Sex>(saved?.sex ?? 'female')
  const [activity, setActivity] = useState(saved?.activity ?? 'light')
  const [remember, setRemember] = useState(saved !== null)
  const h = Number(height)
  const w = Number(weight)
  const a = Number(age)
  const bmiValid = h >= 100 && h <= 250 && w >= 25 && w <= 400
  const bmi = bmiValid ? bmiFor(h, w) : null
  const category = bmi !== null ? bmiLabels[bmiCategory(bmi)] : null
  const factor = activityLevels.find((level) => level.id === activity)?.factor ?? 1.55
  const needs = bmiValid && a >= 14 && a <= 100 ? dailyNeeds(sex, a, h, w, factor) : null

  useEffect(() => {
    if (!remember) {
      clearSavedBody()
      setSaved(null)
      return
    }
    if (needs) {
      const body: SavedBody = { height: h, weight: w, age: a, sex, activity, ...needs }
      saveBody(body)
      setSaved(body)
    }
  }, [remember, needs, h, w, a, sex, activity])

  return (
    <div className="bmi-tool">
      <div className="bmi-inputs">
        <label>Height <span className="legend-note">cm</span>
          <Input type="number" inputMode="decimal" min={100} max={250} placeholder="e.g. 172" value={height} onChange={(event) => setHeight(event.target.value)} />
        </label>
        <label>Weight <span className="legend-note">kg</span>
          <Input type="number" inputMode="decimal" min={25} max={400} placeholder="e.g. 68" value={weight} onChange={(event) => setWeight(event.target.value)} />
        </label>
        <label>Age <span className="legend-note">years</span>
          <Input type="number" inputMode="numeric" min={14} max={100} placeholder="e.g. 34" value={age} onChange={(event) => setAge(event.target.value)} />
        </label>
        <fieldset className="builder-field metrics-sex">
          <legend>Sex <span className="legend-note">for the energy equation</span></legend>
          <div className="builder-options" role="group" aria-label="Sex">
            {(['female', 'male'] as const).map((option) => (
              <button key={option} type="button" className={cn('builder-chip', sex === option && 'is-active')} aria-pressed={sex === option} onClick={() => setSex(option)}>{option === 'female' ? 'Female' : 'Male'}</button>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="control-row metrics-activity" role="group" aria-label="Day-to-day activity">
        <span className="control-label">Most days</span>
        {activityLevels.map((level) => (
          <button key={level.id} type="button" className={cn('filter-pill', activity === level.id && 'is-active')} aria-pressed={activity === level.id} onClick={() => setActivity(level.id)} title={level.hint}>{level.name}</button>
        ))}
      </div>
      <div className="bmi-result" aria-live="polite">
        {bmi !== null && category ? (
          <>
            <div className="bmi-score"><strong>{bmi.toFixed(1)}</strong><span>BMI</span></div>
            <div className="bmi-scale" aria-hidden="true">
              <span className="bmi-marker" style={{ left: `${Math.min(97, Math.max(2, ((bmi - 14) / (40 - 14)) * 100))}%` }} />
            </div>
            <p className="bmi-category">{category.name} <span>({category.range})</span></p>
            {needs && (
              <>
                <div className="needs-block">
                  <div><strong>≈{needs.kcal.toLocaleString()}</strong><span>kcal / day to maintain</span></div>
                  <div><strong>{needs.proteinMin}–{needs.proteinMax}g</strong><span>protein / day</span></div>
                </div>
                <p className="bmi-note">{category.note} Energy and protein use the Mifflin–St Jeor equation — a solid guide, not a prescription.</p>
              </>
            )}
          </>
        ) : <p className="bmi-note">Enter your height, weight, age and activity — your results appear here instantly and never leave this page.</p>}
      </div>
      <label className="remember-row">
        <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} />
        <span><strong>Keep my numbers on this device</strong> — feeds your daily target into the Meal Planner. Untick and they're gone.</span>
      </label>
      <div className="tool-disclaimer">
        <p><strong>Read this first.</strong> BMI is a rough population screening tool for adults 18+. It can't tell muscle from fat — so muscular people often read "overweight" — and it isn't designed for pregnancy, under-18s, eating disorders, or some health conditions. For a real picture, talk to your GP.</p>
      </div>
    </div>
  )
}

// ---- Gym routine creator ----------------------------------------------------

function SessionView({ day, checks, onToggle, onSet, onFinish, onEnd }: {
  day: ReturnType<typeof buildRoutine>['days'][number]
  checks: Record<string, boolean>
  onToggle: (key: string) => void
  onSet: (key: string, exercise: RoutineExercise) => void
  onFinish: () => void
  onEnd: () => void
}) {
  const key = (id: string) => `${day.name}|${id}`
  const total = day.warmup.length + day.exercises.reduce((sum, item) => sum + item.sets, 0) + day.cooldown.length
  const doneCount = Object.keys(checks).filter((k) => k.startsWith(`${day.name}|`) && checks[k]).length
  const checkItem = (id: string, label: string) => {
    const k = key(id)
    return (
      <li key={k}>
        <button type="button" className={cn('check-item', checks[k] && 'is-done')} aria-pressed={!!checks[k]} onClick={() => onToggle(k)}>
          <span className="check-dot" aria-hidden="true">{checks[k] && <Check size={12} />}</span>{label}
        </button>
      </li>
    )
  }
  return (
    <div className="session-view">
      <div className="session-head">
        <div><span className="tiny-label">{day.focus}</span><h5>{day.name} — session mode</h5></div>
        <button type="button" className="session-end" onClick={onEnd}>End session</button>
      </div>
      <div className="session-progress" role="progressbar" aria-valuenow={doneCount} aria-valuemin={0} aria-valuemax={total} aria-label={`${day.name} progress`}>
        <span style={{ width: `${total ? (doneCount / total) * 100 : 0}%` }} />
      </div>
      <p className="session-count">{doneCount} of {total} done — tap a set when you finish it and the rest timer starts.</p>
      <div className="routine-block"><span>Warm-up</span>
        <ul className="session-list">{day.warmup.map((item, index) => checkItem(`w${index}`, item))}</ul>
      </div>
      <div className="session-exercises">
        {day.exercises.map((exercise, ei) => (
          <div key={exercise.name} className="session-ex">
            <div className="session-ex-head"><strong>{exercise.name}</strong><em>{exercise.dose}</em></div>
            <div className="set-row" role="group" aria-label={`${exercise.name} sets`}>
              {Array.from({ length: exercise.sets }, (_, si) => {
                const k = key(`e${ei}s${si}`)
                const isDone = !!checks[k]
                return (
                  <button key={k} type="button" className={cn('set-check', isDone && 'is-done')} aria-pressed={isDone} aria-label={`${exercise.name} set ${si + 1}`} onClick={() => onSet(k, exercise)}>
                    {isDone ? <Check size={14} aria-hidden="true" /> : si + 1}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="routine-block"><span>Cool-down</span>
        <ul className="session-list">{day.cooldown.map((item, index) => checkItem(`c${index}`, item))}</ul>
      </div>
      <Button className="session-finish no-print" onClick={onFinish}><Check aria-hidden="true" /> Finish session</Button>
    </div>
  )
}

function RoutineCreator() {
  const [goal, setGoal] = usePersistentState<RoutineGoal>('ta-routine-goal', 'strength')
  const [level, setLevel] = usePersistentState<RoutineLevel>('ta-routine-level', 'new')
  const [days, setDays] = usePersistentState<2 | 3 | 4>('ta-routine-days', 3)
  const [sessionDay, setSessionDay] = useState<string | null>(null)
  const [checks, setChecks] = useState<Record<string, boolean>>({})
  const [doneDays, setDoneDays] = usePersistentState<string[]>('ta-routine-done', [])
  const [variant, setVariant] = useState(0)
  const beep = useBeeper()
  const { rest, start, adjust, togglePause, stop } = useRestTimer(beep)
  const plan = buildRoutine(goal, level, days, variant)

  const reconfigure = () => { setSessionDay(null); setChecks({}) }
  const pickGoal = (id: RoutineGoal) => { setGoal(id); reconfigure() }
  const pickLevel = (id: RoutineLevel) => { setLevel(id); reconfigure() }
  const pickDays = (count: 2 | 3 | 4) => { setDays(count); reconfigure() }
  const toggle = (key: string) => setChecks((prev) => ({ ...prev, [key]: !prev[key] }))
  const completeSet = (key: string, exercise: RoutineExercise) => {
    if (!checks[key]) start(exercise.name, exercise.restSec)
    toggle(key)
  }
  const openSession = (name: string) => {
    setChecks((prev) => Object.fromEntries(Object.entries(prev).filter(([key]) => !key.startsWith(`${name}|`))))
    setSessionDay(name)
  }
  const finish = (name: string) => {
    setDoneDays((prev) => (prev.includes(name) ? prev : [...prev, name]))
    setChecks((prev) => Object.fromEntries(Object.entries(prev).filter(([key]) => !key.startsWith(`${name}|`))))
    setSessionDay(null)
    stop()
  }

  return (
    <div>
      <div className="tool-controls tool-controls-stacked">
        <div className="control-row" role="group" aria-label="Training goal">
          <span className="control-label">Goal</span>
          {routineGoals.map((option) => (
            <button key={option.id} type="button" className={cn('filter-pill', goal === option.id && 'is-active')} aria-pressed={goal === option.id} onClick={() => pickGoal(option.id)} title={option.hint}>{option.name}</button>
          ))}
        </div>
        <div className="control-row" role="group" aria-label="Experience level">
          <span className="control-label">Level</span>
          {routineLevels.map((option) => (
            <button key={option.id} type="button" className={cn('filter-pill', level === option.id && 'is-active')} aria-pressed={level === option.id} onClick={() => pickLevel(option.id)}>{option.name}</button>
          ))}
        </div>
        <div className="control-row" role="group" aria-label="Days per week">
          <span className="control-label">Days</span>
          {([2, 3, 4] as const).map((count) => (
            <button key={count} type="button" className={cn('filter-pill', days === count && 'is-active')} aria-pressed={days === count} onClick={() => pickDays(count)}>{count} days</button>
          ))}
          <Button variant="outline" size="sm" className="no-print" onClick={() => { setVariant((value) => value + 1); reconfigure() }} title="Rotate in different session templates"><RefreshCw aria-hidden="true" /> Reshuffle plan</Button>
          <PrintButton label="Print plan" />
        </div>
      </div>
      <div className="routine-plan" aria-live="polite">
        <div className="routine-head">
          <h4>{plan.title}</h4>
          <p>{plan.note}</p>
        </div>
        <div className="routine-grid">
          {plan.days.map((day) => (
            <article key={day.name} className={cn('routine-day', sessionDay === day.name && 'is-session')}>
              {sessionDay === day.name ? (
                <SessionView day={day} checks={checks} onToggle={toggle} onSet={completeSet} onFinish={() => finish(day.name)} onEnd={() => setSessionDay(null)} />
              ) : (
                <>
                  <div className="routine-day-top">
                    <span className="tiny-label">{day.focus}</span>
                    {doneDays.includes(day.name) && <span className="done-badge"><CheckCircle2 size={13} aria-hidden="true" /> Done</span>}
                  </div>
                  <h5>{day.name}</h5>
                  <div className="routine-block"><span>Warm-up</span><ul>{day.warmup.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div className="routine-block"><span>Main set</span><ul>{day.exercises.map((item) => <li key={item.name}><strong>{item.name}</strong><em>{item.dose}</em></li>)}</ul></div>
                  <div className="routine-block"><span>Cool-down</span><ul>{day.cooldown.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <Button variant="outline" size="sm" className="session-start no-print" onClick={() => openSession(day.name)}><Play size={13} aria-hidden="true" /> {doneDays.includes(day.name) ? 'Run it again' : 'Start session'}</Button>
                </>
              )}
            </article>
          ))}
        </div>
        <CopyButton label="Copy routine" text={`${plan.title}\n${plan.note}\n\n${plan.days.map((day) => `${day.name} (${day.focus})\nWarm-up: ${day.warmup.join('; ')}\n${day.exercises.map((item) => `- ${item.name}: ${item.dose}`).join('\n')}\nCool-down: ${day.cooldown.join('; ')}`).join('\n\n')}`} />
      </div>
      {rest && (
        <div className={cn('rest-timer', rest.left === 0 && 'is-done')} role="status" aria-live="polite">
          <Timer size={18} aria-hidden="true" />
          <span className="rest-info"><strong>{formatClock(rest.left)}</strong><span>{rest.left === 0 ? `Go — ${rest.label}` : rest.label}</span></span>
          {rest.left > 0 && (
            <>
              <button type="button" onClick={() => adjust(-15)} aria-label="Cut 15 seconds">−15</button>
              <button type="button" onClick={togglePause} aria-pressed={rest.paused} aria-label={rest.paused ? 'Resume timer' : 'Pause timer'}>{rest.paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}</button>
              <button type="button" onClick={() => adjust(15)} aria-label="Add 15 seconds">+15</button>
            </>
          )}
          <button type="button" onClick={stop} aria-label={rest.left === 0 ? 'Dismiss' : 'Skip rest'}><X size={14} aria-hidden="true" /></button>
        </div>
      )}
      <p className="tool-estimate"><Sparkles size={13} aria-hidden="true" /> General guidance for healthy adults — not a personal program. New to lifting or managing an injury? Our trainers can tailor this on the gym floor.</p>
    </div>
  )
}

// ---- Playlist builders ------------------------------------------------------

function RadioStation() {
  const [showId, setShowId] = usePersistentState('ta-radio-show', defaultShowId())
  const show = radioShows.find((s) => s.id === showId) ?? radioShows[0]
  return (
    <div>
      <div className="tool-controls no-print" role="group" aria-label="Choose a radio channel">
        {radioShows.map((s) => (
          <button key={s.id} className={`filter-pill${s.id === show.id ? ' is-active' : ''}`} aria-pressed={s.id === show.id} onClick={() => setShowId(s.id)}>
            {s.name}
          </button>
        ))}
        <Button variant="outline" size="sm" onClick={() => {
          const others = radioShows.filter((s) => s.id !== show.id)
          setShowId(others[Math.floor(Math.random() * others.length)].id)
        }} title="Spin the dial"><Dices aria-hidden="true" /> Surprise me</Button>
      </div>
      <div className="radio-player">
        <div className="radio-frame">
          <iframe
            key={show.id}
            src={`https://www.youtube-nocookie.com/embed/${show.videoId}?rel=0`}
            title={`Transform Radio — ${show.name} live stream`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="radio-meta">
          <span className="radio-live"><i aria-hidden="true" />Live now</span>
          <h4>{show.name}</h4>
          <p>{show.hint} — streaming free, 24/7.</p>
          <p className="radio-note">Transform Radio plays through YouTube's own player — free for everyone, no app or account needed. Channels are run by their own broadcasters, so the music genuinely never stops changing. Tap the video title inside the player to visit the channel.</p>
        </div>
      </div>
    </div>
  )
}

function PlaylistBuilder({ moods, playlistName }: { moods: PlaylistMood[]; playlistName: string }) {
  const [mood, setMood] = usePersistentState(`ta-playlist-${playlistName.replace(/\W+/g, '-').toLowerCase()}`, 0)
  const [mix, setMix] = useState<PlaylistMood['tracks'] | null>(null)
  const current = moods[mood]
  // Pools run deeper than the ten shown — shuffling deals a fresh cut.
  const shown = mix ?? current.tracks.slice(0, 10)
  return (
    <div>
      <div className="tool-controls" role="group" aria-label="Playlist mood">
        {moods.map((option, index) => (
          <button key={option.id} type="button" className={cn('filter-pill', mood === index && 'is-active')} aria-pressed={mood === index} onClick={() => { setMood(index); setMix(null) }} title={option.hint}>{option.name}</button>
        ))}
        <Button variant="outline" size="sm" onClick={() => setMix(shufflePick(current.tracks, 10))} title="Deal a fresh mix from the full pool"><Shuffle aria-hidden="true" /> Shuffle mix</Button>
      </div>
      <div className="playlist" aria-live="polite">
        <div className="playlist-head">
          <div><h4>{playlistName} · {current.name}</h4><p>{current.hint} — {shown.length} of {current.tracks.length} tracks</p></div>
          <CopyButton label="Copy track list" text={trackList({ ...current, tracks: shown }, playlistName)} />
        </div>
        <ol className="track-list">
          {shown.map((track) => (
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
  const [shelf, setShelf] = useState<typeof books | null>(null)
  const shown = shelf ?? books.slice(0, 6)
  return (
    <div>
      <div className="tool-controls no-print">
        <Button variant="outline" size="sm" onClick={() => setShelf(shufflePick(books, 6))} title="Deal a different shelf"><Shuffle aria-hidden="true" /> Shuffle shelf</Button>
      </div>
      <div className="book-grid">
        {shown.map((book) => (
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
    </div>
  )
}

function VideoLibrary() {
  const [order, setOrder] = useState<typeof videos | null>(null)
  const shown = order ?? videos
  return (
    <div>
      <div className="tool-controls no-print">
        <Button variant="outline" size="sm" onClick={() => setOrder(shufflePick(videos))} title="Deal a different lineup"><Shuffle aria-hidden="true" /> Shuffle videos</Button>
      </div>
      <div className="video-grid">
        {shown.map((video) => (
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
  const [tool, setTool] = usePersistentState<ToolId>('ta-tool', 'planner')
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
            {tool === 'bmi' && <BodyMetrics />}
            {tool === 'routine' && <RoutineCreator />}
            {tool === 'radio' && <RadioStation />}
            {tool === 'gym-music' && <PlaylistBuilder moods={gymPlaylistMoods} playlistName="Transform Active Gym" />}
            {tool === 'yoga-music' && <PlaylistBuilder moods={yogaPlaylistMoods} playlistName="Transform Active Yoga" />}
            {tool === 'books' && <BookShelf />}
            {tool === 'videos' && <VideoLibrary />}
            <p className="tool-saved no-print"><ShieldCheck size={13} aria-hidden="true" /> Your picks and progress stay on this device — nothing is uploaded or shared.</p>
          </Panel>
        </Reveal>
      </div>
    </section>
  )
}
