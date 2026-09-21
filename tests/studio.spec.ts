import { expect, test } from '@playwright/test'
import { formatSession, formatTime, getUpcomingSessions, getWeekSessions, getWeekStart } from '../src/lib/studio'

test('weeks start on Monday across month and year boundaries', () => {
  const sunday = getWeekStart(new Date(2026, 8, 27, 18, 30))
  expect([sunday.getFullYear(), sunday.getMonth(), sunday.getDate(), sunday.getHours()]).toEqual([2026, 8, 21, 0])
  const newYear = getWeekStart(new Date(2025, 0, 1))
  expect([newYear.getFullYear(), newYear.getMonth(), newYear.getDate()]).toEqual([2024, 11, 30])
  expect(getWeekStart(new Date(2026, 8, 21), 2).getDate()).toBe(5)
})

test('the timetable matches the studio\u2019s published weekly schedule', () => {
  const week = getWeekSessions(getWeekStart(new Date(2026, 8, 21)))
  expect(week).toHaveLength(7)
  expect(week.flat()).toHaveLength(25)
  expect(week[0].map((session) => [session.time, session.name, session.teacher])).toEqual([
    ['08:00', 'Sweat + Lift', 'Lau'], ['09:30', 'Power Pilates', 'Kea'], ['10:30', 'Latin Rhythms', 'Lau'], ['17:30', 'Pilates Sculpt', 'Jenna'],
  ])
  expect(week[1].map((session) => session.name)).toEqual(['Core & Booty Burner', 'Vinyasa Yoga', 'Strength + Conditioning', 'Female Focused Circuit', 'Full Body Circuit', 'Yin Yoga'])
  expect(week[5][0]).toMatchObject({ time: '09:30', name: 'Vinyasa Yoga', teacher: 'Marli', duration: 75 })
  expect(week[6][0]).toMatchObject({ time: '09:15', name: 'Boxing Fundamentals', teacher: 'Karl' })
  const yoga = week.flat().filter((session) => session.category === 'Yoga & mindful')
  expect(yoga.map((session) => session.name)).toEqual(['Vinyasa Yoga', 'Yin Yoga', 'Primal Flow', 'Gentle Flow Yoga', 'Vinyasa Yoga'])
  const barre = week.flat().filter((session) => session.name === 'Barre Align')
  expect(barre.map((session) => session.category)).toEqual(['Pilates & barre'])
  expect(new Set(week.flat().map((session) => session.id)).size).toBe(25)
})

test('only future sessions inside the lookahead window are offered', () => {
  const now = new Date(2026, 8, 21, 6)
  const sessions = getUpcomingSessions(now)
  expect(sessions).toHaveLength(25)
  const limit = new Date(now)
  limit.setDate(limit.getDate() + 7)
  expect(sessions.every((session) => session.startsAt > now && session.startsAt <= limit)).toBe(true)
  expect(getUpcomingSessions(now, 21)).toHaveLength(75)
  expect(getUpcomingSessions(now, 0)).toEqual([])
  const atStart = new Date(2026, 8, 21, 8)
  expect(getUpcomingSessions(atStart).some((session) => session.startsAt.getTime() === atStart.getTime())).toBe(false)
})

test('times and session labels use readable, unambiguous formats', () => {
  expect(['00:00', '07:00', '12:00', '17:30', '18:30'].map(formatTime)).toEqual(['12am', '7am', '12pm', '5:30pm', '6:30pm'])
  const session = getWeekSessions(getWeekStart(new Date(2026, 8, 21)))[1][5]
  expect(formatSession(session)).toBe('Tue 22 Sept · 6:30pm · Yin Yoga with Ella')
})
