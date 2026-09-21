import { motion } from 'motion/react'
import { Sun } from 'lucide-react'
import type { ReactNode } from 'react'
import { asset } from '../lib/assets'
import { cn, useReducedMotion } from '../lib/utils'

export function Logo({ light = false, onNavigate }: { light?: boolean; onNavigate?: () => void }) {
  return (
    <a className={cn('wordmark', light && 'wordmark-light')} href="#home" onClick={onNavigate} aria-label="Transform Active Mullumbimby home">
      <img src={asset(light ? 'logo-light.png' : 'logo-trimmed.png')} alt="Transform Active" width="872" height="207" />
    </a>
  )
}

export function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />
}

export function BreathingCircles({ paused = false }: { paused?: boolean }) {
  const reducedMotion = useReducedMotion()
  return (
    <div className="breathing-circles" aria-hidden="true">
      {[1.08, 1.1, 1.12].map((scale, index) => (
        <motion.div
          key={`${scale}-${reducedMotion}`}
          className={`breathing-ring breathing-ring-${index + 1}`}
          animate={{ scale: reducedMotion || paused ? 1 : [1, scale, 1] }}
          transition={{ duration: reducedMotion || paused ? 0 : 4, repeat: reducedMotion || paused ? 0 : Infinity, ease: 'easeInOut', delay: index * 0.2 }}
        />
      ))}
    </div>
  )
}

export function RoundSeal() {
  return (
    <div className="round-seal" aria-hidden="true">
      <svg viewBox="0 0 120 120" focusable="false">
        <defs><path id="seal-circle" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs>
        <text><textPath href="#seal-circle" textLength="270">A LITTLE SPACE TO RECONNECT · COME AS YOU ARE · </textPath></text>
      </svg>
      <Sun size={38} strokeWidth={1} />
    </div>
  )
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-35px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, children, className }: { eyebrow: string; title: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <Reveal className={cn('section-heading', className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </Reveal>
  )
}
