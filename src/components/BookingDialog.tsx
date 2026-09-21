import { ArrowUpRight, CalendarDays, Check, Clock3, KeyRound, Leaf, Mail, Smartphone } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { getPlan, STUDIO, type PlanId } from '../lib/catalog'
import { formatSession, formatTime, getUpcomingSessions, studioNow, type PracticeName, type Session } from '../lib/studio'

export type BookingIntent =
  | { kind: 'trial' }
  | { kind: 'class'; session?: Session; practice?: PracticeName }
  | { kind: 'membership'; planId: PlanId }

function ExternalLink({ href, children }: { href: string; children: string }) {
  return <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

function BookingSteps() {
  return (
    <ol className="booking-steps">
      <li><Smartphone size={16} aria-hidden="true" /><span><strong>Book your spot</strong> — on the MyClub Fitness app (<ExternalLink href={STUDIO.appStore}>Apple</ExternalLink> / <ExternalLink href={STUDIO.playStore}>Google</ExternalLink>) or <ExternalLink href={STUDIO.bookClasses}>book online</ExternalLink>. Bookings are required for every class.</span></li>
      <li><Clock3 size={16} aria-hidden="true" /><span><strong>Arrive within 5 minutes</strong> — entry after five minutes can disrupt the class, so please cancel via the app if you can&apos;t make it.</span></li>
      <li><Leaf size={16} aria-hidden="true" /><span><strong>Just bring water</strong> — mats and props are provided. Come exactly as you are.</span></li>
    </ol>
  )
}

function BookingBody({ intent }: { intent: BookingIntent }) {
  if (intent.kind === 'trial') {
    return (
      <>
        <span className="dialog-leaf"><Leaf size={28} strokeWidth={1.3} aria-hidden="true" /></span>
        <p className="eyebrow">Come exactly as you are</p>
        <DialogTitle className="dialog-title">A free trial, for locals.</DialogTitle>
        <DialogDescription className="dialog-description">Try the studio — classes, gym and a breath of calm — before you decide anything. The free trial is run through Transform Active&apos;s official sign-up partner.</DialogDescription>
        <ol className="booking-steps">
          <li><CalendarDays size={16} aria-hidden="true" /><span><strong>Claim your trial</strong> — fill in the official free-trial form and the team will be in touch.</span></li>
          <li><KeyRound size={16} aria-hidden="true" /><span><strong>Collect your key tag</strong> — visit reception during staffed hours (Mon–Thu 7:30am–5:30pm, Fri until 4pm, Sat until 10:30am).</span></li>
          <li><Leaf size={16} aria-hidden="true" /><span><strong>Book a class &amp; breathe</strong> — mats and props are provided. All levels welcome.</span></li>
        </ol>
        <div className="dialog-actions">
          <Button asChild size="lg" className="w-full"><a href={STUDIO.trial} target="_blank" rel="noopener noreferrer">Claim free trial <ArrowUpRight aria-hidden="true" /></a></Button>
          <Button asChild variant="outline" className="w-full"><a href={STUDIO.telephone}>Call reception · {STUDIO.phone}</a></Button>
        </div>
        <p className="form-reassurance">Casual class drop-in? Organise it with reception — <ExternalLink href={STUDIO.mailto}>{STUDIO.email}</ExternalLink></p>
      </>
    )
  }

  if (intent.kind === 'membership') {
    const plan = getPlan(intent.planId)
    if (!plan) return null
    return (
      <>
        <span className="dialog-leaf"><Leaf size={28} strokeWidth={1.3} aria-hidden="true" /></span>
        <p className="eyebrow">A practice to call your own</p>
        <DialogTitle className="dialog-title">{plan.name}</DialogTitle>
        <DialogDescription className="dialog-description">{plan.description}</DialogDescription>
        <div className="booking-price"><span>Debited weekly</span><strong>{plan.price}<small>/ week</small></strong></div>
        <ul className="membership-inclusions">{plan.features.map((feature) => <li key={feature}><Check size={15} aria-hidden="true" />{feature}</li>)}</ul>
        <p className="field-hint membership-terms">{plan.cancellation} Plus a one-off A$25 key-tag fee for new memberships. Sign-up is completed securely on MyClub Fitness — collect your 24/7 key tag at reception.</p>
        <div className="dialog-actions">
          <Button asChild size="lg" className="w-full"><a href={plan.signupUrl} target="_blank" rel="noopener noreferrer">Join on MyClub Fitness <ArrowUpRight aria-hidden="true" /></a></Button>
          <Button asChild variant="outline" className="w-full"><a href={STUDIO.trial} target="_blank" rel="noopener noreferrer">Try a free trial first <ArrowUpRight aria-hidden="true" /></a></Button>
        </div>
      </>
    )
  }

  const upcoming = getUpcomingSessions(studioNow()).filter((session) => !intent.practice || session.name === intent.practice).slice(0, 4)
  const session = intent.session
  return (
    <>
      <span className="dialog-leaf"><Leaf size={28} strokeWidth={1.3} aria-hidden="true" /></span>
      <p className="eyebrow">{session ? formatTime(session.time) + ' · ' + session.teacher : 'Find your moment'}</p>
      <DialogTitle className="dialog-title">{session ? session.name : intent.practice ?? 'Book a class'}</DialogTitle>
      {session && <DialogDescription className="dialog-description">{formatSession(session)}</DialogDescription>}
      {!session && upcoming.length > 0 && (
        <ul className="upcoming-list">
          {upcoming.map((item) => <li key={item.id}><CalendarDays size={14} aria-hidden="true" /><span>{formatSession(item)}</span></li>)}
        </ul>
      )}
      <BookingSteps />
      <div className="dialog-actions">
        <Button asChild size="lg" className="w-full"><a href={STUDIO.bookClasses} target="_blank" rel="noopener noreferrer">Book on MyClub Fitness <ArrowUpRight aria-hidden="true" /></a></Button>
        <Button asChild variant="outline" className="w-full"><a href={STUDIO.trial} target="_blank" rel="noopener noreferrer">Free trial for locals <ArrowUpRight aria-hidden="true" /></a></Button>
      </div>
      <p className="form-reassurance"><Mail size={13} aria-hidden="true" /> Casual drop-in? Organise with reception — <ExternalLink href={STUDIO.mailto}>{STUDIO.email}</ExternalLink></p>
    </>
  )
}

export function BookingDialog({ intent, onClose }: { intent: BookingIntent | null; onClose: () => void }) {
  return <Dialog open={intent !== null} onOpenChange={(open) => { if (!open) onClose() }}><DialogContent>{intent && <BookingBody intent={intent} />}</DialogContent></Dialog>
}
