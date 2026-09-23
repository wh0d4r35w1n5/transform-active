import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Droplets, Flame, Smartphone, Sparkles, Timer, UsersRound, Waves } from 'lucide-react'
import { Button } from './ui/button'
import { Reveal } from './brand'
import { STUDIO } from '../lib/catalog'
import { fetchLiveClasses, recoveryWindows, staffedStatus, type RecoveryWindow } from '../lib/clubfit'
import { cn, useReducedMotion } from '../lib/utils'

const facts = [
  { icon: Timer, label: '15–20 min sessions' },
  { icon: UsersRound, label: 'Room for two members' },
  { icon: Droplets, label: 'Bring water + a towel' },
  { icon: Sparkles, label: 'Chromotherapy lighting' },
]

const steps = [
  { icon: Smartphone, title: 'Open MyClub Fitness', body: 'The same member app you book classes with — or the member portal online.' },
  { icon: Waves, title: 'Book your session', body: 'Pick a slot that suits you — straight after a class is the sweet spot.' },
  { icon: Flame, title: 'First visit? Sign the waiver', body: 'Arrive a few minutes early and sign the sauna waiver at reception.' },
]

function ago(ms: number) {
  const seconds = Math.max(0, Math.round(ms / 1000))
  if (seconds < 8) return 'just now'
  if (seconds < 90) return `${seconds}s ago`
  return `${Math.round(seconds / 60)}m ago`
}

function WindowList({ windows, emptyNote }: { windows: RecoveryWindow[]; emptyNote: string }) {
  if (!windows.length) return <p className="sauna-live-empty">{emptyNote}</p>
  return (
    <ul className="sauna-window-list">
      {windows.map(({ cls, label, quiet }) => (
        <li key={`${cls.name}-${cls.startsAt.toISOString()}`}>
          <div className="sauna-window-class">
            <strong>{cls.name}{quiet && <em className="sauna-quiet">quieter pick</em>}</strong>
            <span>{cls.instructor ? `with ${cls.instructor}` : cls.room}</span>
          </div>
          <div className="sauna-window-meta">
            <span className="sauna-window-time">{label}</span>
            {cls.spotsLeft !== null && (
              <span className={cn('sauna-spots', cls.full && 'is-full')}>{cls.full ? 'Class full' : `${cls.spotsLeft} spot${cls.spotsLeft === 1 ? '' : 's'} left`}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

const PORTAL_SIGNIN = 'https://myaccount.clubfit.net.au/signin?code=TRANSFORMACTIVE&accountId=1'

export function Sauna() {
  const reducedMotion = useReducedMotion()
  const [windows, setWindows] = useState<{ today: RecoveryWindow[]; tomorrow: RecoveryWindow[] } | null>(null)
  const [syncedAt, setSyncedAt] = useState<Date | null>(null)
  const [failed, setFailed] = useState(false)
  const [booking, setBooking] = useState(false)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    let cancelled = false
    const sync = () => fetchLiveClasses()
      .then((classes) => { if (!cancelled) { setWindows(recoveryWindows(classes)); setSyncedAt(new Date()); setFailed(false) } })
      .catch(() => { if (!cancelled) setFailed(true) })
    sync()
    const poll = setInterval(sync, 60000)
    const clock = setInterval(() => setTick((value) => value + 1), 15000)
    return () => { cancelled = true; clearInterval(poll); clearInterval(clock) }
  }, [])

  const live = windows !== null
  const staffed = staffedStatus()
  void tick // re-render keeps the synced stamp fresh

  return (
    <section id="sauna" className="section sauna-section" aria-labelledby="sauna-title">
      {!reducedMotion && <div className="sauna-ember sauna-ember-a" aria-hidden="true" />}
      {!reducedMotion && <div className="sauna-ember sauna-ember-b" aria-hidden="true" />}
      <div className="container">
        <Reveal className="sauna-heading">
          <p className="eyebrow">Recovery · members only</p>
          <h2 id="sauna-title">The Infrared <em>Sauna</em></h2>
          <p className="sauna-sub">The Sunlighten Signature I — SoloCarbon infrared heat, chromotherapy lighting and a bench built for twenty quiet minutes. Book it like a class, then let the day go.</p>
        </Reveal>
        <div className="sauna-grid">
          <Reveal className="sauna-story">
            <div className="sauna-facts">
              {facts.map(({ icon: Icon, label }) => <span key={label}><Icon size={15} strokeWidth={1.6} aria-hidden="true" />{label}</span>)}
            </div>
            <ol className="sauna-steps">
              {steps.map(({ icon: Icon, title, body }, index) => (
                <li key={title}>
                  <span className="sauna-step-num">0{index + 1}</span>
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  <div><strong>{title}</strong><p>{body}</p></div>
                </li>
              ))}
            </ol>
            <p className="sauna-plan-note">Included with <a className="text-link-light" href="#membership">Ongoing Plus and 12 Months Lifestyle</a> — from A$24.95 a week.</p>
          </Reveal>
          <Reveal className="sauna-live-card">
            <div className="sauna-live-head">
              <span className={cn('sauna-live-dot', !live && 'is-offline')} aria-hidden="true" />
              <div>
                <h3>{booking ? 'Member sign-in' : live ? 'Today at the studio' : failed ? 'Book your session' : 'Reading the timetable…'}</h3>
                <p>{booking
                  ? <>The studio&rsquo;s own member portal — sign in to book your sauna, classes and more</>
                  : live
                    ? failed
                      ? <>Feed dropped — showing last sync {syncedAt ? ago(Date.now() - syncedAt.getTime()) : ''}</>
                      : <>Live from the booking system — {staffed.label.toLowerCase()} · synced {syncedAt ? ago(Date.now() - syncedAt.getTime()) : '…'}</>
                    : 'Live class feed unavailable right now — booking still works in the app'}</p>
              </div>
            </div>
            {booking ? (
              <div className="sauna-book-pane">
                <iframe
                  className="sauna-book-frame"
                  src={PORTAL_SIGNIN}
                  title="Transform Active member portal — sign in to book the sauna"
                />
                <div className="sauna-book-foot">
                  <button type="button" className="sauna-book-back" onClick={() => setBooking(false)}><ArrowLeft size={13} aria-hidden="true" /> Back to today&rsquo;s timetable</button>
                  <a className="text-link-light" href={PORTAL_SIGNIN} target="_blank" rel="noopener noreferrer">Open portal in a new tab <ArrowUpRight size={12} aria-hidden="true" /></a>
                </div>
              </div>
            ) : (
              <>
                {windows && (
                  <>
                    <WindowList windows={windows.today} emptyNote="Classes are done for today — tomorrow's windows are below." />
                    {windows.tomorrow.length > 0 && (
                      <>
                        <p className="sauna-live-sub">Tomorrow</p>
                        <WindowList windows={windows.tomorrow} emptyNote="" />
                      </>
                    )}
                  </>
                )}
                <div className="sauna-live-actions">
                  <Button size="lg" variant="light" onClick={() => setBooking(true)}>Sign in &amp; book <ArrowUpRight aria-hidden="true" /></Button>
                  <p>member login for sauna, classes &amp; memberships — or grab the app: <a className="text-link-light" href={STUDIO.appStore} target="_blank" rel="noopener noreferrer">Apple</a> · <a className="text-link-light" href={STUDIO.playStore} target="_blank" rel="noopener noreferrer">Google Play</a></p>
                </div>
              </>
            )}
          </Reveal>
        </div>
        <Reveal className="sauna-fineprint">
          <p>Sauna access is for members — book your 15–20 minute session in the MyClub Fitness app. Class times and spots refresh live every minute; sauna slots themselves live inside member login. First visit: sign the waiver at reception. Hydrate before, towel on the bench, keep it to twenty minutes.</p>
        </Reveal>
      </div>
    </section>
  )
}
