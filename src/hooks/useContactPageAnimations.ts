import { useRef } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver'
import type { CSSProperties } from 'react'
import type { AnimationClass } from '../types/contact'

export function useContactPageAnimations() {
  const mainRef = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(mainRef, {
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px',
    freezeOnceVisible: true,
  })

  const revealClass = (animationClass: AnimationClass): string =>
    isVisible ? animationClass : 'opacity-0'

  const getAnimationStyle = (delay: number): CSSProperties => ({
    '--delay': `${delay}ms`,
  } as CSSProperties)

  return {
    mainRef,
    isVisible,
    revealClass,
    getAnimationStyle,
  }
}
