import { useEffect, useRef, useState, type FormEvent, type PointerEvent } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { Anchor, ArrowDown, ArrowRight, Check, Clock3, Facebook, History, Instagram, Leaf, Mail, MapPin, Menu, Pause, Play, Sprout, Sun, TrendingUp, UsersRound, Waves, Wind } from 'lucide-react'
import { BreathingCircles, GrainOverlay, Logo, Reveal, RoundSeal, SectionHeading } from './components/brand'
import { GymShot, Magnetic } from './components/fx'
import { BookingDialog, type BookingIntent } from './components/BookingDialog'
import { Schedule } from './components/Schedule'
import { Toolkit } from './components/Toolkit'
import { Button } from './components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Input } from './components/ui/input'
import { pricing, STUDIO } from './lib/catalog'
import { asset } from './lib/assets'
import { practices, teachers, testimonials, type PracticeName, type Session } from './lib/studio'
import { cn, useReducedMotion } from './lib/utils'

const navigation = [
  { label: 'The Gym', id: 'gym' },
  { label: 'Classes', id: 'classes' },
  { label: 'Timetable', id: 'schedule' },
  { label: 'Toolkit', id: 'toolkit' },
  { label: 'Teachers', id: 'teachers' },
  { label: 'Membership', id: 'membership' },
  { label: 'Community', id: 'community' },
]

const values = [
  { title: 'Root', icon: Anchor, description: 'Everyone starts somewhere — the first visit, the first rep, the first class. We meet you where you are and build from there.' },
  { title: 'Breathe', icon: Wind, description: 'Train hard, recover well. Breath, mobility and the sauna are part of the program — not an afterthought.' },
  { title: 'Rise', icon: TrendingUp, description: "Progress here isn't measured in PBs or poses. It's measured in showing up — week after week, at whatever pace is yours." },
]

type InfoPage = 'Privacy Policy' | 'Class FAQs' | 'About the studio' | 'The wider team'

const API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '')

function Header({ onTrial }: { onTrial: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const menuTrigger = useRef<HTMLButtonElement>(null)
  const pendingTrial = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      if (window.scrollY < 80) setActive('')
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onResize = () => { if (desktop.matches) setMenuOpen(false) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    desktop.addEventListener('change', onResize)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-15% 0px -65% 0px' })
    navigation.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      desktop.removeEventListener('change', onResize)
      observer.disconnect()
    }
  }, [])

  return (
    <header className={cn('site-header', scrolled && 'is-scrolled')}>
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(({ label, id }) => <a key={id} href={`#${id}`} className={cn(active === id && 'is-active')}>{label}</a>)}</nav>
        <Magnetic><Button className="desktop-trial" size="sm" onClick={onTrial}>Free Trial for Locals <ArrowRight aria-hidden="true" /></Button></Magnetic>
        <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
          <DialogTrigger asChild><Button ref={menuTrigger} className="mobile-menu-trigger" variant="ghost" size="icon" aria-label="Open navigation menu"><Menu size={25} aria-hidden="true" /></Button></DialogTrigger>
          <DialogContent className="mobile-menu" onCloseAutoFocus={(event) => {
            if (pendingTrial.current) {
              event.preventDefault()
              pendingTrial.current = false
              menuTrigger.current?.focus()
              onTrial()
            }
          }}>
            <Logo light onNavigate={() => setMenuOpen(false)} />
            <DialogTitle className="sr-only">Explore Transform Active</DialogTitle>
            <DialogDescription className="sr-only">Navigate to classes, the timetable, our teachers, membership, or the community.</DialogDescription>
            <nav aria-label="Mobile navigation">{navigation.map(({ label, id }, index) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}<ArrowRight size={22} aria-hidden="true" /></a>)}</nav>
            <Magnetic><Button variant="light" size="lg" onClick={() => { pendingTrial.current = true; setMenuOpen(false) }}>Free Trial for Locals <ArrowRight aria-hidden="true" /></Button></Magnetic>
            <p className="mobile-menu-cue">Move. Breathe. Transform.</p>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  )
}

const finePointer = () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

function StaggerWord({ word, className, delay, reducedMotion }: { word: string; className?: string; delay: number; reducedMotion: boolean }) {
  return (
    <span className={className} aria-hidden="true">
      {word.split('').map((char, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block' }}
          initial={reducedMotion ? false : { opacity: 0, y: 24, filter: 'blur(7px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: delay + index * 0.032, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >{char}</motion.span>
      ))}
    </span>
  )
}

function Hero({ onTrial }: { onTrial: () => void }) {
  const [paused, setPaused] = useState(false)
  const reducedMotion = useReducedMotion()
  const entrance = (y: number) => reducedMotion ? false : { opacity: 0, y }
  const { scrollY } = useScroll()
  const photoY = useTransform(scrollY, [0, 900], [0, 85])
  const glowX = useMotionValue(-800)
  const glowY = useMotionValue(-800)
  const glowSpringX = useSpring(glowX, { stiffness: 55, damping: 17 })
  const glowSpringY = useSpring(glowY, { stiffness: 55, damping: 17 })

  function onHeroPointerMove(event: PointerEvent<HTMLElement>) {
    if (reducedMotion || !finePointer()) return
    glowX.set(event.clientX)
    glowY.set(event.clientY)
  }

  return (
    <section id="home" className="hero" onPointerMove={onHeroPointerMove}>
      {!reducedMotion && <motion.div className="cursor-glow" style={{ x: glowSpringX, y: glowSpringY }} aria-hidden="true" />}
      <div className="hero-photo-frame"><motion.img src={asset('gym-1.webp')} alt="The Transform Active gym floor — benches, racks, free weights and mirrored walls in the Mullumbimby studio" width="1500" height="904" fetchPriority="high" style={{ y: reducedMotion ? 0 : photoY }} initial={reducedMotion ? false : { scale: 1.16 }} animate={{ scale: 1.07 }} transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }} /><div className="hero-photo-wash" /></div>
      <BreathingCircles paused={paused} />
      <div className="hero-seal"><RoundSeal /></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.p className="eyebrow hero-eyebrow" initial={entrance(10)} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}><span />24-Hour Holistic Fitness Centre · Mullumbimby</motion.p>
          <h1 aria-label="Move. Breathe. Transform."><StaggerWord word="Move." delay={0.32} reducedMotion={!!reducedMotion} /><StaggerWord word="Breathe." delay={0.52} reducedMotion={!!reducedMotion} /><StaggerWord word="Transform." className="hero-accent" delay={0.72} reducedMotion={!!reducedMotion} /></h1>
          <motion.p className="hero-description" initial={entrance(20)} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.65 }}>Mullumbimby&apos;s 24-hour community gym — Technogym-equipped floor, 25 group classes a week from yoga to boxing, personal training and an infrared sauna.</motion.p>
          <motion.div className="hero-actions" initial={entrance(20)} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.65 }}><Magnetic><Button size="lg" onClick={onTrial}>Free Trial for Locals <ArrowRight aria-hidden="true" /></Button></Magnetic><a className="hero-schedule-link" href="#gym">Explore the Gym <ArrowDown size={15} aria-hidden="true" /></a></motion.div>
          <motion.div className="breathing-cue" initial={entrance(0)} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}><button type="button" className={cn('breathing-toggle', (paused || reducedMotion) && 'is-paused')} onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume breathing animation' : 'Pause breathing animation'} aria-pressed={paused} disabled={!!reducedMotion}><span className="breathing-dot" /><span>Inhale. Exhale. Begin.</span>{paused ? <Play size={11} aria-hidden="true" /> : <Pause size={11} aria-hidden="true" />}</button></motion.div>
        </div>
      </div>
      <div className="hero-photo-note"><span className="note-icon"><Clock3 size={23} strokeWidth={1.2} aria-hidden="true" /></span><div><span className="tiny-label">Open 24 hours, every day.</span><p>Come as you are.</p></div></div>
      <p className="hero-side-caption">Weights. Classes. Recovery. Community.</p>
    </section>
  )
}

const facilityShots = [
  { image: 'gym-1.webp', label: 'The strength floor', detail: 'Benches, racks, barbells and a dedicated deadlift platform', position: '50% 55%' },
  { image: 'gym-3.webp', label: 'The machine room', detail: 'Technogym pin-loaded equipment and cable stations', position: '50% 60%' },
  { image: 'gym-2.webp', label: 'The outdoor deck', detail: 'Functional training zone over the Mullum farmland', position: '50% 50%' },
]

const facilityFacts = ['24/7 member access', 'Technogym equipment', 'Deadlift platform', 'Outdoor functional zone', 'Infrared sauna', 'Personal training']

const stripFacts = [
  { icon: Clock3, label: '24/7 member access' },
  { icon: UsersRound, label: '25 group classes a week' },
  { icon: Waves, label: 'Infrared sauna' },
  { icon: History, label: 'Mullum\u2019s gym since 2011' },
  { icon: Sun, label: 'Free trial for locals' },
]

function StripFacts() {
  return <>{stripFacts.map(({ icon: Icon, label }) => <span key={label}><Icon size={20} strokeWidth={1.3} aria-hidden="true" />{label}</span>)}</>
}

function Facilities() {
  return (
    <>
      <div className="welcome-strip"><div className="marquee-viewport"><div className="marquee-track"><div className="marquee-group"><StripFacts /></div><div className="marquee-group" aria-hidden="true"><StripFacts /></div></div></div></div>
      <section id="gym" className="section gym-section" aria-labelledby="gym-title">
        <div className="container">
          <Reveal className="gym-heading"><p className="eyebrow">Inside Transform Active</p><h2 id="gym-title">More than a <em>studio.</em></h2><p className="gym-sub">A complete 24-hour gym under one roof in Mullumbimby — grown from the community gym Gabe built in 2011, and a community that makes it feel like yours.</p></Reveal>
          <div className="gym-photo-band" role="group" aria-label="Photos of the Transform Active gym — scroll horizontally to see more" tabIndex={0}>{facilityShots.map((shot, index) => <GymShot key={shot.image} shot={shot} index={index} />)}</div>
          <Reveal className="facility-chips">{facilityFacts.map((fact) => <span key={fact}><Check size={13} strokeWidth={2} aria-hidden="true" />{fact}</span>)}</Reveal>
        </div>
      </section>
    </>
  )
}

function Practices({ onBook }: { onBook: (intent: BookingIntent) => void }) {
  const reducedMotion = useReducedMotion()
  return (
    <>
      <section id="classes" className="section classes-section">
        <div className="container">
          <SectionHeading eyebrow="25 classes a week" title={<>Find Your <em>Practice</em></>}>Yoga, Pilates, barre, strength, boxing and dance — these are the staples members keep coming back to. The full week is on the timetable below.</SectionHeading>
          <div className="practice-grid">{practices.map((practice, index) => {
            return (
              <motion.article
                key={practice.name}
                className="practice-card spotlight"
                initial={reducedMotion ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reducedMotion ? undefined : { y: -5, transition: { duration: 0.2, delay: 0 } }}
              >
                <div className="practice-photo"><img src={practice.image} alt="" style={{ objectPosition: practice.imagePosition }} loading="lazy" /></div>
                <span className="practice-note">{practice.note}</span>
                <h3><button type="button" className="practice-card-link" onClick={() => onBook({ kind: 'class', practice: practice.name })} aria-label={`${practice.name} — booking details`}>{practice.name}</button></h3>
                <span className="level-badge">{practice.category}</span>
                <p>{practice.description}</p>
                <span className="practice-card-footer"><span><Clock3 size={13} aria-hidden="true" />{practice.duration ? `${practice.duration} min` : 'Weekly class'}</span><ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" /></span>
              </motion.article>
            )
          })}</div>
          <Reveal className="classes-note"><Leaf size={16} strokeWidth={1.4} aria-hidden="true" /><span>Not sure where to start? Casual class drop-in can be organised with reception — <a className="text-link" href={STUDIO.telephone}>{STUDIO.phone}</a> or <a className="text-link" href={STUDIO.mailto}>{STUDIO.email}</a>.</span></Reveal>
        </div>
      </section>
    </>
  )
}

function Instructors({ onInfo }: { onInfo: (page: InfoPage) => void }) {
  return (
    <section id="teachers" className="section instructors-section">
      <div className="container">
        <SectionHeading eyebrow="Coaches, teachers &amp; the front desk" title={<>Meet the <em>Team</em></>}>Experienced, welcoming, and here to meet you exactly where you are — on the gym floor, in the studio and at reception.</SectionHeading>
        <div className="teacher-grid">{teachers.map((teacher, index) => <Reveal key={teacher.name} className="teacher-card" delay={index * 0.1}><div className="teacher-photo"><img src={teacher.image} alt={`${teacher.name}, ${teacher.role} at Transform Active`} style={{ objectPosition: teacher.imagePosition }} width="240" height="240" loading="lazy" /><span className="teacher-photo-mark"><Sprout size={20} strokeWidth={1.25} aria-hidden="true" /></span></div><h3>{teacher.name}</h3><p className="teacher-specialty">{teacher.role}</p><p className="teacher-bio">{teacher.bio}</p><div className="certifications">{teacher.certifications.map((certification) => <span key={certification}>{certification}</span>)}</div></Reveal>)}</div>
        <Reveal className="classes-note"><UsersRound size={16} strokeWidth={1.4} aria-hidden="true" /><span>Plus our wider team of trainers, reception staff and PTs — <button type="button" onClick={() => onInfo('The wider team')}>meet the wider team</button>.</span></Reveal>
      </div>
    </section>
  )
}

function Philosophy() {
  const reducedMotion = useReducedMotion()
  return (
    <>
      <section id="philosophy" className="section philosophy-section">
        <svg className="philosophy-botanical" viewBox="0 0 220 400" fill="none" aria-hidden="true" focusable="false"><path d="M130 400C115 265 102 195 170 35M130 349C74 335 23 276 25 217C99 226 131 277 130 349ZM123 274C162 254 196 200 188 158C142 175 119 225 123 274ZM127 220C91 204 55 155 68 99C122 128 136 175 127 220ZM150 99C157 56 185 24 212 9C218 61 194 98 150 126" stroke="currentColor" strokeWidth="1" /></svg>
        <div className="container philosophy-container">
          <SectionHeading eyebrow="Our philosophy" title={<><span className="philosophy-quote-mark">“</span><em>A practice is not<br /> a performance.</em><span className="philosophy-quote-mark">”</span></>} />
          <div className="values-grid">{values.map((value, index) => <Reveal key={value.title} delay={index * 0.12}><motion.div className="value-icon" initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }}><value.icon size={32} strokeWidth={1.25} aria-hidden="true" /></motion.div><h3>{value.title}</h3><p>{value.description}</p></Reveal>)}</div>
        </div>
      </section>
    </>
  )
}

function Membership({ onBook }: { onBook: (intent: BookingIntent) => void }) {
  const reducedMotion = useReducedMotion()
  return (
    <section id="membership" className="section pricing-section">
      <div className="container">
        <SectionHeading eyebrow="Membership" title={<>Everything from <em>$24.95</em> a Week</>}>24/7 gym access on every plan. Unlimited classes and the infrared sauna from $24.95 a week on 12 Months Lifestyle — debited weekly in AUD, 30 days&apos; written notice.</SectionHeading>
        <div className="pricing-grid">{pricing.map((tier, index) => <Reveal key={tier.id} delay={index * 0.12}><motion.div className={cn('pricing-card spotlight', index === 1 && 'pricing-featured')} whileHover={reducedMotion ? undefined : { y: -6 }} transition={{ duration: 0.3 }}>
          {index === 1 && <span className="popular-badge"><Sun size={13} aria-hidden="true" />All-inclusive</span>}
          <p className="tier-name">{tier.name}</p><p className="tier-description">{tier.commitment}</p><p className="tier-price">{tier.price}</p><p className="tier-period">{tier.period}</p>
          <ul>{tier.features.map((feature) => <li key={feature}><Check size={16} strokeWidth={1.6} aria-hidden="true" /><span>{feature}</span></li>)}</ul>
          <Button variant={index === 1 ? 'default' : 'outline'} className="w-full" onClick={() => onBook({ kind: 'membership', planId: tier.id })}>{tier.cta}<ArrowRight aria-hidden="true" /></Button>
        </motion.div></Reveal>)}</div>
        <Reveal className="pricing-reassurance"><Check size={15} strokeWidth={1.4} aria-hidden="true" />One-off A$25 key-tag fee for new memberships · student memberships (14–17) at reception · casual &amp; visit passes available.</Reveal>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="container"><Reveal className="section-heading"><p className="eyebrow">More than a gym</p><h2 id="testimonials-title">What the <em>Community</em> Says</h2><p className="section-description">Real words from real members — shared as Google reviews.</p></Reveal><div className="testimonial-grid">{testimonials.map((testimonial, index) => <Reveal key={testimonial.name} delay={index * 0.15} className="testimonial-card spotlight"><span className="quote-mark" aria-hidden="true">“</span><blockquote><p>{testimonial.quote}</p><footer><span className={`testimonial-avatar avatar-${index}`} aria-hidden="true">{testimonial.initials}</span><span><cite>{testimonial.name}</cite><span className="testimonial-detail">{testimonial.detail}</span></span></footer></blockquote></Reveal>)}</div>
        <Reveal className="classes-note"><Instagram size={15} strokeWidth={1.4} aria-hidden="true" /><span>Have a moment to share? <a className="text-link" href={STUDIO.review} target="_blank" rel="noopener noreferrer">Leave the studio a Google review</a>.</span></Reveal>
      </div>
    </section>
  )
}

type NewsletterState = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error'

function Community({ onTrial }: { onTrial: () => void }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<NewsletterState>('idle')

  async function join(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('submitting')
    if (!API_URL) {
      setState('error')
      return
    }
    try {
      const response = await fetch(`${API_URL}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      setState(response.ok ? 'success' : response.status === 409 ? 'duplicate' : 'error')
    } catch {
      setState('error')
    }
  }

  return (
    <>
      <section className="first-class-banner"><div className="banner-circle banner-circle-one" /><div className="banner-circle banner-circle-two" /><Reveal className="container first-class-inner"><div><p className="eyebrow">A little curious? That's all you need.</p><h2>Try Transform Active<br /><em>free.</em></h2></div><div className="first-class-action"><Magnetic><Button variant="light" size="lg" onClick={onTrial}>Free Trial for Locals <ArrowRight aria-hidden="true" /></Button></Magnetic><p>Local? Experience the gym before deciding.</p></div></Reveal></section>
      <section id="community" className="section community-section"><div className="community-orbit orbit-one" aria-hidden="true" /><div className="community-orbit orbit-two" aria-hidden="true" /><Reveal className="community-inner"><Leaf size={31} strokeWidth={1.2} className="community-leaf" aria-hidden="true" /><p className="eyebrow">Join our community</p><h2>Stay <em>Rooted.</em></h2><p className="community-description">Timetable changes, new classes and studio news — plus the occasional dose of calm. One email when it matters, never spam.</p>
        {state === 'success' || state === 'duplicate' ? <div className="newsletter-success" role="status"><span className="newsletter-success-heading"><Check size={22} aria-hidden="true" />{state === 'success' ? 'You\u2019re on the list.' : 'You\u2019re already on the list.'}</span><p>{state === 'success' ? 'Welcome to the community — studio updates will land in your inbox when they matter.' : 'No need to sign up twice — we\u2019ll keep you posted.'}</p><button type="button" onClick={() => { setState('idle'); setEmail('') }}>Back to the form <ArrowRight size={14} aria-hidden="true" /></button></div> : <><form className="newsletter-form" onSubmit={join}><label className="sr-only" htmlFor="newsletter-email">Your email address</label><Input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} maxLength={254} aria-describedby="newsletter-privacy" required /><Button type="submit" variant="light" disabled={state === 'submitting'}>{state === 'submitting' ? 'Joining…' : 'Join the Community'} <ArrowRight aria-hidden="true" /></Button></form>{state === 'error' && <p className="newsletter-error" role="alert">We couldn&apos;t reach the community list just now — try again, or <a className="text-link-light" href={STUDIO.instagram} target="_blank" rel="noopener noreferrer">follow @transformactivemullum</a> instead.</p>}<p className="newsletter-privacy" id="newsletter-privacy">Your email is used for studio updates only. Unsubscribe anytime.</p><p className="newsletter-instagram"><a className="text-link-light" href={STUDIO.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={14} aria-hidden="true" /> @transformactivemullum</a></p></>}
      </Reveal></section>
    </>
  )
}

function Footer({ onBook, onInfo }: { onBook: (intent: BookingIntent) => void; onInfo: (page: InfoPage) => void }) {
  return (
    <footer className="site-footer"><div className="container"><div className="footer-grid">
      <div className="footer-brand"><Logo light /><p>Move. Breathe. Transform.</p><p className="footer-intro">A 24-hour holistic fitness centre in the heart of Mullumbimby — classes, gym, sauna and community.</p><div className="footer-socials"><a href={STUDIO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Transform Active on Instagram"><Instagram size={18} strokeWidth={1.5} aria-hidden="true" /></a><a href={STUDIO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Transform Active on Facebook"><Facebook size={18} strokeWidth={1.5} aria-hidden="true" /></a></div></div>
      <div><h3>Find your practice</h3><ul>{practices.map((practice) => <li key={practice.name}><button type="button" onClick={() => onBook({ kind: 'class', practice: practice.name as PracticeName })}>{practice.name}</button></li>)}</ul></div>
      <div><h3>The studio</h3><ul><li><button type="button" onClick={() => onInfo('About the studio')}>About us</button></li><li><a href="#teachers">Our teachers</a></li><li><a href="#schedule">Timetable</a></li><li><a href="#toolkit">Free toolkit</a></li><li><a href="#membership">Membership</a></li><li><button type="button" onClick={() => onInfo('Class FAQs')}>Class FAQs</button></li></ul></div>
      <div className="footer-visit"><h3>Come say hello</h3><address><span><MapPin size={15} aria-hidden="true" />4/4 Towers Dr<br />Mullumbimby NSW 2482</span><span><Clock3 size={15} aria-hidden="true" />Staffed Mon–Thu 7:30am–5:30pm<br />Fri til 4pm · Sat til 10:30am<br />Members: 24/7</span><a href={STUDIO.telephone}>{STUDIO.phone} <ArrowRight size={13} aria-hidden="true" /></a><a href={STUDIO.mailto}>{STUDIO.email} <Mail size={13} aria-hidden="true" /></a></address></div>
    </div><div className="footer-bottom"><p>© {new Date().getFullYear()} Transform Active. All rights reserved.</p><span className="footer-made">Website created by Beau Evans</span><div><button type="button" onClick={() => onInfo('Privacy Policy')}>Privacy</button><span aria-hidden="true">·</span><button type="button" onClick={() => onInfo('Class FAQs')}>Studio FAQs</button></div></div></div></footer>
  )
}

const infoMeta: Record<InfoPage, { title: string; description: string }> = {
  'Class FAQs': { title: 'Good to know.', description: 'The studio\u2019s answers to the questions we hear most.' },
  'Privacy Policy': { title: 'Privacy Policy', description: 'How this website handles your information.' },
  'About the studio': { title: 'Our story.', description: 'A down-to-earth community gym in the heart of the Northern Rivers.' },
  'The wider team': { title: 'The whole crew.', description: 'Everyone you\u2019ll meet around the gym — on the floor, at the barre and at the desk.' },
}

const teamGroups = [
  { label: 'Yoga & mindful', names: 'Ella · Nikki · Marli · Lillian' },
  { label: 'Pilates & barre', names: 'Jenna · Jess · Victoria · Ceara · Kea' },
  { label: 'Strength & conditioning', names: 'Danny · Tomm · Eliana · Lau · Lillian' },
  { label: 'Cardio & dance', names: 'Karl · Eliana · Lau' },
  { label: 'Front of house', names: 'Cinta and the reception team' },
  { label: 'Leadership', names: 'Laura Hosking (Gym Manager) · founded by Gabe Connell' },
]

function InfoDialog({ page, onClose }: { page: InfoPage | null; onClose: () => void }) {
  const meta = page ? infoMeta[page] : null
  return (
    <Dialog open={page !== null} onOpenChange={(open) => { if (!open) onClose() }}><DialogContent className="info-dialog"><Leaf className="dialog-leaf" size={28} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">Transform Active Mullumbimby</p><DialogTitle className="dialog-title">{meta?.title}</DialogTitle><DialogDescription className="dialog-description">{meta?.description}</DialogDescription>
      <div className="info-copy">
        {page === 'Class FAQs' && <><article><span className="tiny-label">01 / Booking</span><h3>Do I need to book for classes?</h3><p>Yes — bookings are required for all classes, via the MyClub Fitness app. It keeps class numbers safe and helps shape the timetable around what members love.</p></article><article><span className="tiny-label">02 / Cancellation</span><h3>What if I can&apos;t make it?</h3><p>Please remove yourself from the booking — via your confirmation email or the app. Classes have a maximum attendance and a waitlist, so cancellations matter.</p></article><article><span className="tiny-label">03 / Timing</span><h3>What if I&apos;m running late?</h3><p>Up to five minutes late — enter quietly. After that, your arrival may disrupt the class and the instructor may prefer you cancel.</p></article><article><span className="tiny-label">04 / What to bring</span><h3>Just yourself and some water.</h3><p>Bring a bottle of water; mats are provided and you&apos;re welcome to bring your own. Feedback is always welcome at reception or by email.</p></article></>}
        {page === 'Privacy Policy' && <><h3>Your information, respected.</h3><p>Joining the community list sends your email address to this site&apos;s own Cloudflare service, which stores it for studio updates only. Nothing else is collected, and there are no analytics or advertising trackers on this page.</p><p>Class bookings, free trials and memberships are completed on MyClub Fitness (ClubFit) — their own privacy terms apply there. Fonts are served by Google Fonts.</p><p>To be removed from the community list, email <a className="text-link" href={STUDIO.mailto}>{STUDIO.email}</a>.</p></>}
        {page === 'About the studio' && <><img className="info-storefront" src={asset('gym-5.webp')} alt="The Transform Active storefront on Towers Drive, Mullumbimby" loading="lazy" /><h3>A community gym, evolved.</h3><p>Transform Active was established in August 2023 — the evolution of Transform Fitness, a local gym founded by Gabe Connell in 2011 and loved by the Mullumbimby community for over 13 years. The move took a smaller shed-style gym into a larger facility for a broader range of people across the Northern Rivers.</p><p>A down-to-earth country gym nestled amongst farmland and the mountains of Mullum — 24/7 gym access with Technogym equipment, a wide variety of group classes, personal training and an infrared sauna.</p><article><span className="tiny-label">Gym Manager</span><h3>Laura Hosking</h3><p>Laura has run the daily operations of Transform Active and Mullum gym for the past three years. A Northern Rivers local of nearly six years with a background in dance, personal training and nutrition — &ldquo;I am a big believer that if you put your health first, everything in your life will improve.&rdquo;</p></article><article><span className="tiny-label">Visit us</span><h3>4/4 Towers Dr, Mullumbimby</h3><p>Staffed Mon–Thu 7:30am–5:30pm, Fri til 4pm, Sat til 10:30am — members train 24/7. Call <a className="text-link" href={STUDIO.telephone}>{STUDIO.phone}</a> or email <a className="text-link" href={STUDIO.mailto}>{STUDIO.email}</a>.</p></article></>}
        {page === 'The wider team' && <><div className="team-photo-strip"><img src={asset('gym-4.webp')} alt="A Transform Active trainer at the Mullumbimby gym" loading="lazy" /><img src={asset('gym-6.webp')} alt="A member of the Transform Active team" loading="lazy" /></div><h3>Real people, real classes.</h3><p>Our featured teachers are above — and behind them is a whole crew of instructors, trainers and friendly faces keeping the gym running seven days a week.</p>{teamGroups.map((group) => <article key={group.label}><span className="tiny-label">{group.label}</span><h3>{group.names}</h3></article>)}<p>Say hello at the desk next visit — or call <a className="text-link" href={STUDIO.telephone}>{STUDIO.phone}</a> and the team will point you toward the right class.</p></>}
      </div>
    </DialogContent></Dialog>
  )
}

export default function App() {
  const [booking, setBooking] = useState<BookingIntent | null>(null)
  const [info, setInfo] = useState<InfoPage | null>(null)
  const openTrial = () => setBooking({ kind: 'trial' })
  const bookSession = (session?: Session) => setBooking({ kind: 'class', session })

  useEffect(() => {
    const onMove = (event: globalThis.PointerEvent) => {
      const card = (event.target as Element).closest?.('.spotlight') as HTMLElement | null
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      card.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <GrainOverlay />
      <Header onTrial={openTrial} />
      <main id="main-content"><Hero onTrial={openTrial} /><Facilities /><Practices onBook={setBooking} /><Schedule onBook={bookSession} /><Toolkit /><Instructors onInfo={setInfo} /><Philosophy /><Membership onBook={setBooking} /><Testimonials /><Community onTrial={openTrial} /></main>
      <Footer onBook={setBooking} onInfo={setInfo} />
      <BookingDialog intent={booking} onClose={() => setBooking(null)} />
      <InfoDialog page={info} onClose={() => setInfo(null)} />
    </>
  )
}
