import { useState } from 'react'
import { ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react'
import { Button } from './ui/button'
import { Reveal, SectionHeading } from './brand'
import { STUDIO } from '../lib/catalog'
import { categorySlug, formatTime, getWeekSessions, getWeekStart, weekdays, type ClassCategory, type ClassFilter, type Session } from '../lib/studio'
import { cn } from '../lib/utils'

const filters: ClassFilter[] = ['All classes', 'Yoga & mindful', 'Pilates & barre', 'Strength', 'Cardio & dance']

export function Schedule({ onBook }: { onBook: (session?: Session) => void }) {
  const [filter, setFilter] = useState<ClassFilter>('All classes')
  const [weekOffset, setWeekOffset] = useState(0)
  const now = new Date()
  const start = getWeekStart(now, weekOffset)
  const sessions = getWeekSessions(start)
  const end = new Date(start)
  end.setDate(end.getDate() + 6)
  const dateOptions = { day: 'numeric', month: 'short' } as const
  const dateRange = `${start.toLocaleDateString('en-AU', dateOptions)} — ${end.toLocaleDateString('en-AU', { ...dateOptions, year: 'numeric' })}`
  const visible = sessions.map((day) => day.filter((session) => filter === 'All classes' || session.category === filter))
  const rows = Math.max(1, ...visible.map((day) => day.length))
  const totalClasses = sessions.flat().length

  return (
    <section id="schedule" className="section schedule-section">
      <div className="container">
        <SectionHeading eyebrow="Weekly timetable" title={<>This Week at<br className="desktop-break" /> Transform Active</>}>
          {totalClasses} group classes across yoga, Pilates, strength and dance — every week, in the heart of Mullumbimby. Bookings are made through the MyClub Fitness app.
        </SectionHeading>
        <Reveal>
          <div className="schedule-toolbar">
            <div className="schedule-filters" role="group" aria-label="Filter classes">
              {filters.map((name) => (
                <button key={name} type="button" className={cn('filter-pill', filter === name && 'is-active')} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>
              ))}
            </div>
            <div className="week-control">
              <Button variant="ghost" size="icon" aria-label="Previous week" disabled={weekOffset === 0} onClick={() => setWeekOffset((week) => week - 1)}><ChevronLeft aria-hidden="true" /></Button>
              <span aria-live="polite">{dateRange}</span>
              <Button variant="ghost" size="icon" aria-label="Next week" disabled={weekOffset === 3} onClick={() => setWeekOffset((week) => week + 1)}><ChevronRight aria-hidden="true" /></Button>
            </div>
          </div>
          <div className="schedule-scroll" tabIndex={0} role="region" aria-label="Weekly class timetable, scroll horizontally on small screens">
            <table className="schedule-table">
              <caption className="sr-only">{filter} for {dateRange}. Recurring weekly classes in the studio's local time. Select a class to see how to book.</caption>
              <thead><tr>{weekdays.map((day, index) => {
                const date = new Date(start)
                date.setDate(date.getDate() + index)
                const isToday = date.toDateString() === now.toDateString()
                return <th scope="col" key={day} className={cn(isToday && 'is-today')}><span>{day.slice(0, 3)}</span><strong>{date.getDate()}</strong>{isToday && <span className="today-label">Today</span>}</th>
              })}</tr></thead>
              <tbody>{Array.from({ length: rows }, (_, row) => <tr key={row}>{visible.map((day, index) => {
                const session = day[row]
                if (!session) return <td key={index} className="empty-session"><span aria-label="No class">—</span></td>
                const isPast = weekOffset === 0 && session.startsAt <= now
                return (
                  <td key={index}>
                    <button
                      type="button"
                      className={cn('schedule-class', `class-${categorySlug[session.category as ClassCategory]}`)}
                      disabled={isPast}
                      onClick={() => onBook(session)}
                      aria-label={`${session.name}, ${weekdays[index]} ${formatTime(session.time)}, with ${session.teacher}${isPast ? ', finished' : ', booking details'}`}
                    >
                      <span className="class-time">{formatTime(session.time)}{session.duration ? ` · ${session.duration} min` : ''}</span>
                      <span className="class-title">{session.name}</span>
                      <span className="class-teacher">{isPast ? 'Finished for today' : `with ${session.teacher}`}</span>
                    </button>
                  </td>
                )
              })}</tr>)}</tbody>
            </table>
          </div>
          <div className="schedule-footnote"><span><CalendarDays size={14} aria-hidden="true" /> Recurring weekly timetable · classes can change seasonally</span><span>Bookings required · please arrive within 5 minutes of start</span><span className="scroll-hint"><MoveHorizontal size={16} aria-hidden="true" /> Swipe to see the week</span></div>
          <div className="section-action">
            <Button asChild><a href={STUDIO.bookClasses} target="_blank" rel="noopener noreferrer">Book via MyClub Fitness <ArrowUpRight aria-hidden="true" /></a></Button>
            <p>New here? <a className="text-link" href={STUDIO.trial} target="_blank" rel="noopener noreferrer">Locals can claim a free trial</a> · casual drop-in via reception <a className="text-link" href={STUDIO.telephone}>{STUDIO.phone}</a></p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
