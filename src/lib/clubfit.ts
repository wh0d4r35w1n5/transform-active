import { STUDIO } from './catalog'

// Live data straight from the studio's booking system (ClubFit / MyClub
// Fitness). The class-search endpoint is the same public one the member
// portal calls — it returns the rolling week with real spots remaining.
// Sauna sessions themselves book inside the member app; we use the live
// class feed to surface the recovery windows around them.

const API = 'https://transformactive.clubfit.net.au/api/v1'

export interface LiveClass {
  name: string
  instructor: string
  room: string
  startsAt: Date
  endsAt: Date
  spotsLeft: number | null
  full: boolean
}

interface ClubfitClass {
  className: string
  instructor: string | null
  classRoomName: string | null
  classStartDate: string // "2026-09-23T00:00:00+10:00" — Sydney offset baked in
  classStartTime: string // "07:00:00"
  classDuration: number // minutes
  classCapacity: number | null
  totalBooked: number | null
}

function sydneyDateString(date: Date) {
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: STUDIO.timezone, year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(date)
  const get = (type: string) => parts.find((part) => part.type === type)?.value
  return `${get('year')}/${get('month')}/${get('day')}`
}

export async function fetchLiveClasses(reference = new Date()): Promise<LiveClass[]> {
  const res = await fetch(`${API}/booking/search-classes-advance`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      userId: '', clubId: '1', selectedDate: sydneyDateString(reference),
      classType: 0, department: 'Member', imageHeight: 0, imageWidth: 0,
    }),
  })
  if (!res.ok) throw new Error(`Booking system responded ${res.status}`)
  const json = await res.json() as { payload?: ClubfitClass[] }
  if (!Array.isArray(json.payload)) throw new Error('Unexpected booking response')
  return json.payload
    .map((entry) => {
      const offset = entry.classStartDate.slice(-6) // "+10:00" / "+11:00"
      const startsAt = new Date(`${entry.classStartDate.slice(0, 10)}T${entry.classStartTime}${offset}`)
      if (Number.isNaN(startsAt.getTime())) return null
      const spotsLeft = entry.classCapacity != null && entry.totalBooked != null
        ? Math.max(0, entry.classCapacity - entry.totalBooked)
        : null
      return {
        name: entry.className,
        instructor: entry.instructor ?? '',
        room: entry.classRoomName ?? '',
        startsAt,
        endsAt: new Date(startsAt.getTime() + (entry.classDuration || 0) * 60000),
        spotsLeft,
        full: spotsLeft === 0,
      }
    })
    .filter((entry): entry is LiveClass => entry !== null)
    .sort((a, b) => a.startsAt.getTime() - b.startsAt.getTime())
}

export interface RecoveryWindow {
  cls: LiveClass
  label: string
  quiet: boolean
}

// A recovery window is the stretch right after a class ends — the studio's
// own guidance is 15–20 minutes of sauna post-workout. Windows with a long
// gap before the next class (or after the last one) are tagged as quieter:
// the single-room sauna is likeliest to be free then.
export function recoveryWindows(classes: LiveClass[], now = new Date()): { today: RecoveryWindow[]; tomorrow: RecoveryWindow[] } {
  const todayKey = sydneyDateString(now)
  const tomorrow = new Date(now.getTime() + 86400000)
  const tomorrowKey = sydneyDateString(tomorrow)
  const dayClasses = (key: string) => classes
    .filter((cls) => sydneyDateString(cls.startsAt) === key && cls.endsAt.getTime() + 3600000 > now.getTime())
    .slice(0, 4)
  const windowFor = (list: LiveClass[]) => list.map((cls, index) => {
    const next = list[index + 1]
    const gapToNext = next ? next.startsAt.getTime() - cls.endsAt.getTime() : Infinity
    return {
      cls,
      label: `from ${cls.endsAt.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit', timeZone: STUDIO.timezone }).replace(' ', '')}`,
      quiet: gapToNext >= 45 * 60000,
    }
  })
  return { today: windowFor(dayClasses(todayKey)), tomorrow: windowFor(dayClasses(tomorrowKey)) }
}

// Staffed hours from the studio's site — the sauna waiver at reception only
// matters while someone's at the desk.
const STAFFED: Record<number, [number, number] | null> = {
  0: null, 1: [7.5, 17.5], 2: [7.5, 17.5], 3: [7.5, 17.5], 4: [7.5, 17.5], 5: [7.5, 16], 6: [7.5, 10.5],
}

export function staffedStatus(now = new Date()): { staffed: boolean; label: string } {
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: STUDIO.timezone, weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23',
  }).formatToParts(now)
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? ''
  const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  const hours = STAFFED[dayIndex]
  const clock = Number(get('hour')) + Number(get('minute')) / 60
  const staffed = !!hours && clock >= hours[0] && clock < hours[1]
  return {
    staffed,
    label: staffed ? 'Staffed now — waiver at reception' : 'Members-only hours',
  }
}
