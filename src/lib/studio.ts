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

// ---- Studio content ---------------------------------------------------------
// Facts verified against the studio's public website (transformactive.com.au).

export const faqItems = [
  {
    q: 'Do I need to be a member to use the gym?',
    a: 'Yes — the gym is members-only for 24/7 access. Casual visits and class passes aren’t offered, but memberships start from A$24.95/week and there’s a free trial so you can try everything first.',
  },
  {
    q: 'How do I get in outside staffed hours?',
    a: 'Members get a key tag that opens the door 24/7. There’s a one-off tag fee when you join, and the studio is monitored for safety around the clock.',
  },
  {
    q: 'Is there parking?',
    a: 'Yes — free on-site parking right at the door on Towers Drive, plus easy street parking nearby. No meters, no time limits.',
  },
  {
    q: 'What should I bring to my first session?',
    a: 'Workout gear, enclosed shoes, a towel and a water bottle. There’s a filtered water station — bring a bottle, no glass please. Towel use is part of gym etiquette.',
  },
  {
    q: 'Can I freeze my membership?',
    a: 'Yes — memberships can be suspended for holidays, injury or life stuff. Email the studio and they’ll sort it.',
  },
  {
    q: 'Do you offer personal training?',
    a: 'Yes — the studio’s trainers offer one-on-one PT. Bookings and pricing are arranged directly with the trainers; ask at reception or via the contact details below.',
  },
  {
    q: 'Is the sauna included in my membership?',
    a: 'The Sunlighten infrared sauna is included with Ongoing Plus and 12 Months Lifestyle memberships. Sessions are booked through the MyClub Fitness app.',
  },
  {
    q: 'Do you accept Fitness Passport?',
    a: 'Yes — Fitness Passport members are welcome. Bring your card on your first visit so the team can set up your access.',
  },
  {
    q: 'Is there a minimum age?',
    a: 'Members need to be 16+ for 24/7 unsupervised access. Younger teens can train during staffed hours with a parent or guardian’s sign-off — check with the team for the current policy.',
  },
  {
    q: 'Can I bring a friend?',
    a: 'Guests can visit during staffed hours for a casual visit fee. Your friend signs a waiver at reception before training.',
  },
  {
    q: 'What if I’ve never trained before?',
    a: 'You’ll fit right in. Every membership starts with an induction so you know the equipment, and trainers are on the floor during staffed hours to help. Classes are scaled for beginners.',
  },
  {
    q: 'How do I cancel?',
    a: 'Email the studio with 30 days’ written notice. On the 12-month plan an early-exit fee applies before the term ends; ongoing memberships are flexible.',
  },
] as const

export const visitSteps = [
  {
    title: 'Say hello',
    text: 'Come during staffed hours and the team will show you around — no pressure, no sales pitch. Bring photo ID if you’re joining.',
  },
  {
    title: 'Get set up',
    text: 'Your induction covers the equipment, your key tag for 24/7 access, and the MyClub Fitness app for classes, sauna bookings and your membership.',
  },
  {
    title: 'Start small',
    text: 'Pick one class or one gym session this week. The toolkit below has routines, warm-ups and meal ideas if you want a plan to follow.',
  },
] as const

export const parking = {
  title: 'Getting here',
  text: 'We’re at 4/4 Towers Drive, Mullumbimby — in the industrial estate off the main road, two minutes from town. Free on-site parking at the door, easy bike access, and a quick walk from Mullumbimby’s centre.',
} as const

export const programs = [
  {
    name: 'New Member Kickstart',
    tag: 'First 4 weeks',
    text: 'A guided start: induction, goal chat with a trainer, two coached sessions and a simple plan. Included with every new membership.',
  },
  {
    name: 'Strength Foundations',
    tag: '8-week block',
    text: 'Learn to lift properly — squat, hinge, push, pull and carry — with coached progression each week. Runs in small groups on the gym floor.',
  },
  {
    name: 'Move Well, Feel Well',
    tag: 'Ongoing',
    text: 'Mobility, balance and strength for the long game — popular with members coming back from injury or starting after 50.',
  },
] as const

export const trainers = [
  {
    name: 'Eliana Alvarez',
    role: 'Personal Trainer & Strength Coach',
    focus: 'Strength training, female-focused sessions, building confidence on the gym floor',
    bio: 'Eliana coaches strength in a way that meets you where you are — whether that’s your first barbell or your first comp prep. She also leads the Female Focused Circuit classes.',
  },
  {
    name: 'Anthony',
    role: 'Personal Trainer',
    focus: 'Functional training, conditioning and everyday strength',
    bio: 'Anthony keeps sessions practical and progress-focused — train what matters, recover well, and build habits that last beyond the program.',
  },
] as const
