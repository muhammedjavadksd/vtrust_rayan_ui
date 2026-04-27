import { useRef, useEffect, useState } from 'react'
import { createIntersectionObserver, getRevealClass, getAnimationStyle } from '../utils/animation'
import { AnimationClass } from '../enums/ui'
import type { LegalPageAnimationState, LegalPageAnimationUtils } from '../types/legal'

export function useLegalPageAnimations(): LegalPageAnimationState & LegalPageAnimationUtils {
  const mainRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const setupObserver = async () => {
      await createIntersectionObserver(mainRef.current)
      setIsVisible(true)
    }

    setupObserver()
  }, [])

  const revealClass = (animationClass: typeof AnimationClass[keyof typeof AnimationClass]): string =>
    getRevealClass(isVisible, animationClass)

  const getAnimationStyleWithDelay = (delay: number): React.CSSProperties =>
    getAnimationStyle(delay)

  return {
    isVisible,
    mainRef,
    revealClass,
    getAnimationStyle: getAnimationStyleWithDelay,
  }
}
