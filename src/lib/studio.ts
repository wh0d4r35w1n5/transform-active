import { STUDIO } from './catalog'
import { asset } from './assets'

export type ClassCategory = 'Yoga & mindful' | 'Pilates & barre' | 'Strength' | 'Cardio & dance'
export type ClassFilter = ClassCategory | 'All classes'

export const categorySlug: Record<ClassCategory, string> = {
  'Yoga & mindful': 'yoga',
  'Pilates & barre': 'pilates',
  Strength: 'strength',
  'Cardio & dance': 'cardio',
}

export const practices = [
  {
    name: 'Vinyasa Yoga',
    category: 'Yoga & mindful',
    duration: 75,
    image: asset('class-vinyasa.jpg'),
    imagePosition: '50% 35%',
    note: 'Breath-led & energising',
    description: 'A dynamic, energising flow linking breath with movement to build strength, flexibility and balance. Creative transitions and a moderate-to-strong pace that builds heat, with modifications offered throughout.',
    bestFor: 'A stronger practice and an energy boost',
  },
  {
    name: 'Functional Strength',
    category: 'Strength',
    duration: null,
    image: asset('studio-b.jpg'),
    imagePosition: '50% 30%',
    note: 'Lift, push & carry',
    description: 'Coach-led strength work on the turf and gym floor — compound lifts, carries and bodyweight patterns that build muscle you actually use. Scaled for every level, from first session to seasoned lifter.',
    bestFor: 'Building real-world strength with a coach watching your form',
  },
  {
    name: 'Pilates Sculpt',
    category: 'Pilates & barre',
    duration: null,
    image: asset('class-pilates.jpg'),
    imagePosition: '50% 28%',
    note: 'Core strength & tone',
    description: 'A modern twist on classic mat Pilates using light hand weights, ankle weights, balls and blocks. Deep core activation while sculpting long, lean muscles through controlled, flowing sequences.',
    bestFor: 'Core strength, muscle tone and full-body sculpting',
  },
  {
    name: 'Latin Rhythms',
    category: 'Cardio & dance',
    duration: null,
    image: asset('studio-d.jpg'),
    imagePosition: '50% 35%',
    note: 'Dance cardio',
    description: 'A high-energy dance class set to Latin rhythms — simple, follow-along choreography that gets the heart rate up and the room smiling. No dance experience needed; just bring your energy.',
    bestFor: 'Cardio that feels like a party, not a workout',
  },
  {
    name: 'Yin Yoga',
    category: 'Yoga & mindful',
    duration: 60,
    image: asset('class-yin.jpg'),
    imagePosition: '50% 30%',
    note: 'Stillness & deep release',
    description: 'A slow, meditative practice using long-held, passive poses to target the deep connective tissues. Minimal movement and a focus on stillness and breath, supporting flexibility, joint health and nervous-system rest.',
    bestFor: 'Recovery, stress relief and deep stretching',
  },
  {
    name: 'Barre Align',
    category: 'Pilates & barre',
    duration: null,
    image: asset('class-barre.webp'),
    imagePosition: '50% 45%',
    note: 'Ballet · Pilates · yoga',
    description: 'A full-body class blending ballet, Pilates and yoga, with a strong emphasis on balance, alignment and mindful movement. Dynamic, low-impact work at the barre, then focused core on the mat and a deep, restorative breath.',
    bestFor: 'Form, balance and strength in a controlled way',
  },
] as const

export type PracticeName = (typeof practices)[number]['name']

export const teachers = [
  {
    name: 'Ella Sol',
    role: 'Slow Flow & Vinyasa Yoga Instructor',
    image: asset('teacher-ella.jpg'),
    imagePosition: '50% 20%',
    certifications: ['Ashtanga Vinyasa', 'Authorised 500 RYT', 'Trained in Mysore, India'],
    bio: 'Ella is an experienced Ashtanga Vinyasa teacher who completed her training in India, including Ashtanga\u2019s second series in Mysore. Teaching since 2016, her classes blend core, strength and flexibility work with breath and meditation — inspired by a lifelong background in dance.',
  },
  {
    name: 'Jenna Kenny',
    role: 'Mat Pilates & Barre Instructor',
    image: asset('teacher-jenna.jpg'),
    imagePosition: '50% 15%',
    certifications: ['Mat Pilates', 'Pilates Barre', 'Reception team'],
    bio: 'Movement has always been part of Jenna\u2019s life — from dancing growing up to falling in love with Pilates while working overseas. Her classes are calm, friendly and supportive, designed to challenge physical and mental strength in a way that feels fun and nourishing.',
  },
  {
    name: 'Cinta Gare',
    role: 'Customer Service & Yoga Teacher',
    image: asset('teacher-cinta.jpg'),
    imagePosition: '50% 20%',
    certifications: ['200hr YTT, Bali', 'Professional dance', 'Aerial arts'],
    bio: 'A professional dancer and aerial artist who has performed around the world, Cinta completed her 200-hour Yoga Teacher Training in Bali. She celebrates each person\u2019s unique movement journey — cheering you on, cracking a joke, and reminding you not to take life too seriously.',
  },
] as const

export const testimonials = [
  {
    quote: 'Love this gym! And I am not a gym person. You guys have done such a great job in building a really welcoming, friendly environment. Wide range of classes and machines and great teachers!',
    name: 'Sally',
    detail: 'Google review',
    initials: 'S',
  },
  {
    quote: 'Amazing gym and wonderful staff! Great machines, good range of classes, and a stunning view of the fields. Felt very unpretentious — all shapes and ages welcome. I can\u2019t speak highly enough.',
    name: 'Analisa',
    detail: 'Google review · holiday pass',
    initials: 'A',
  },
  {
    quote: 'Excellent, supportive staff. Great Pilates class and a clean environment.',
    name: 'Mandy',
    detail: 'Google review',
    initials: 'M',
  },
] as const

export const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const

export type ClassTemplate = {
  name: string
  time: string
  teacher: string
  category: ClassCategory
  duration?: number
}

// The studio's published weekly timetable. Recurring classes — check the
// MyClub app for live times, as the timetable changes seasonally.
export const weeklySchedule: ClassTemplate[][] = [
  [
    { name: 'Sweat + Lift', time: '08:00', teacher: 'Lau', category: 'Strength' },
    { name: 'Power Pilates', time: '09:30', teacher: 'Kea', category: 'Pilates & barre' },
    { name: 'Latin Rhythms', time: '10:30', teacher: 'Lau', category: 'Cardio & dance' },
    { name: 'Pilates Sculpt', time: '17:30', teacher: 'Jenna', category: 'Pilates & barre' },
  ],
  [
    { name: 'Core & Booty Burner', time: '07:00', teacher: 'Ceara', category: 'Pilates & barre' },
    { name: 'Vinyasa Yoga', time: '08:00', teacher: 'Nikki', category: 'Yoga & mindful', duration: 75 },
    { name: 'Strength + Conditioning', time: '09:30', teacher: 'Danny', category: 'Strength' },
    { name: 'Female Focused Circuit', time: '10:30', teacher: 'Lau', category: 'Strength' },
    { name: 'Full Body Circuit', time: '17:30', teacher: 'Victoria', category: 'Strength' },
    { name: 'Yin Yoga', time: '18:30', teacher: 'Ella', category: 'Yoga & mindful', duration: 60 },
  ],
  [
    { name: 'Pilates Sculpt', time: '07:00', teacher: 'Jess', category: 'Pilates & barre' },
    { name: 'Barre Align', time: '08:00', teacher: 'Jess', category: 'Pilates & barre' },
    { name: 'Functional Strength', time: '09:30', teacher: 'Tomm', category: 'Strength' },
    { name: 'Activated Strength', time: '17:30', teacher: 'Lillian', category: 'Strength' },
    { name: 'Primal Flow', time: '18:30', teacher: 'Lillian', category: 'Yoga & mindful' },
  ],
  [
    { name: 'Strength + Conditioning', time: '07:00', teacher: 'Danny', category: 'Strength' },
    { name: 'Pilates Barre', time: '09:30', teacher: 'Victoria', category: 'Pilates & barre' },
    { name: 'Female Focused Circuit', time: '10:30', teacher: 'Eliana', category: 'Strength' },
    { name: 'Pilates Sculpt', time: '17:30', teacher: 'Jenna', category: 'Pilates & barre' },
    { name: 'Gentle Flow Yoga', time: '18:30', teacher: 'Ella', category: 'Yoga & mindful', duration: 60 },
  ],
  [
    { name: 'Pilates Barre', time: '07:00', teacher: 'Jenna', category: 'Pilates & barre' },
    { name: 'Sweat + Lift', time: '08:00', teacher: 'Eliana', category: 'Strength' },
    { name: 'Latin Rhythms', time: '09:30', teacher: 'Eliana', category: 'Cardio & dance' },
  ],
  [
    { name: 'Vinyasa Yoga', time: '09:30', teacher: 'Marli', category: 'Yoga & mindful', duration: 75 },
  ],
  [
    { name: 'Boxing Fundamentals', time: '09:15', teacher: 'Karl', category: 'Cardio & dance', duration: 75 },
  ],
]

export type Session = ClassTemplate & { id: string; startsAt: Date; day: number }

// Timetable times are studio-local (Australia/Sydney). Compare against the
// studio clock, not the visitor's device timezone, so "today" and "finished"
// stay correct for interstate and overseas visitors.
export function studioNow(reference = new Date()) {
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: STUDIO.timezone, year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h23',
  }).formatToParts(reference)
  const get = (type: string) => Number(parts.find((part) => part.type === type)?.value)
  return new Date(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second'))
}

export function getWeekStart(date = new Date(), offset = 0) {
  const start = new Date(date)
  start.setHours(0, 0, 0, 0)
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7) + offset * 7)
  return start
}

export function getWeekSessions(start: Date): Session[][] {
  return weeklySchedule.map((classes, day) => classes.map((session) => {
    const startsAt = new Date(start)
    startsAt.setDate(startsAt.getDate() + day)
    const [hours, minutes] = session.time.split(':').map(Number)
    startsAt.setHours(hours, minutes, 0, 0)
    return { ...session, day, startsAt, id: `${startsAt.getFullYear()}-${startsAt.getMonth() + 1}-${startsAt.getDate()}-${session.time}` }
  }))
}

export function getUpcomingSessions(now = new Date(), daysAhead = 7) {
  const lastDate = new Date(now)
  lastDate.setDate(lastDate.getDate() + daysAhead)
  return Array.from({ length: Math.ceil(daysAhead / 7) + 1 }, (_, offset) => getWeekSessions(getWeekStart(now, offset)).flat())
    .flat()
    .filter((session) => session.startsAt > now && session.startsAt <= lastDate)
}

export function formatTime(time: string) {
  const [hours, minutes] = time.split(':').map(Number)
  return `${hours % 12 || 12}${minutes ? `:${String(minutes).padStart(2, '0')}` : ''}${hours < 12 ? 'am' : 'pm'}`
}

const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'] as const

export function formatSession(session: Session) {
  return `${weekdays[session.day].slice(0, 3)} ${session.startsAt.getDate()} ${shortMonths[session.startsAt.getMonth()]} · ${formatTime(session.time)} · ${session.name} with ${session.teacher}`
}
