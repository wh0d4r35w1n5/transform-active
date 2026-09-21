import { useSyncExternalStore } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia(reducedMotionQuery)
  preference.addEventListener('change', onChange)
  return () => preference.removeEventListener('change', onChange)
}

function getMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribeToMotionPreference, getMotionPreference, () => true)
}
