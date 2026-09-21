import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, type PointerEvent, type ReactNode } from 'react'
import { asset } from '../lib/assets'
import { useReducedMotion } from '../lib/utils'

const finePointer = () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

export function Magnetic({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.35 })

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || !finePointer() || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  return (
    <motion.div ref={ref} className="magnetic" style={{ x: springX, y: springY }} onPointerMove={onPointerMove} onPointerLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </motion.div>
  )
}

type Shot = { image: string; label: string; detail: string; position: string }

export function GymShot({ shot, index }: { shot: Shot; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const rotateXValue = useMotionValue(0)
  const rotateYValue = useMotionValue(0)
  const rotateX = useSpring(rotateXValue, { stiffness: 160, damping: 18, mass: 0.5 })
  const rotateY = useSpring(rotateYValue, { stiffness: 160, damping: 18, mass: 0.5 })

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || !finePointer() || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    rotateYValue.set(px * 6.5)
    rotateXValue.set(-py * 6.5)
    ref.current.style.setProperty('--mx', `${(px + 0.5) * 100}%`)
    ref.current.style.setProperty('--my', `${(py + 0.5) * 100}%`)
  }

  return (
    <motion.div
      ref={ref}
      className="gym-photo"
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      initial={reducedMotion ? false : { clipPath: 'inset(10% 6% 10% 6% round 18px)', opacity: 0.35 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 18px)', opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.95, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={onPointerMove}
      onPointerLeave={() => { rotateXValue.set(0); rotateYValue.set(0) }}
    >
      <img src={asset(shot.image)} alt={`${shot.label} — ${shot.detail}`} loading="lazy" style={{ objectPosition: shot.position }} />
      <span className="gym-photo-sheen" aria-hidden="true" />
      <span className="gym-photo-caption"><strong>{shot.label}</strong><span>{shot.detail}</span></span>
    </motion.div>
  )
}
