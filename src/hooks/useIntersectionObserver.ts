import { useState, useEffect, type RefObject } from 'react'
import type { UseIntersectionObserverProps } from '../types/hooks.types'

export function useIntersectionObserver(
  elementRef: RefObject<Element | null>,
  {
    threshold = 0.1,
    rootMargin = '0px',
    freezeOnceVisible = true,
  }: UseIntersectionObserverProps = {}
) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (freezeOnceVisible) {
            observer.disconnect()
          }
        } else if (!freezeOnceVisible) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef, threshold, rootMargin, freezeOnceVisible])

  return isVisible
}
