import type { AnimationClassType } from '../enums/ui'

export function createIntersectionObserver(
  element: HTMLElement | null,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
): Promise<void> {
  return new Promise((resolve) => {
    if (!element) {
      resolve()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        resolve()
      },
      options
    )

    observer.observe(element)
  })
}

export function getRevealClass(
  isVisible: boolean,
  animationClass: AnimationClassType
): string {
  return isVisible ? animationClass : 'opacity-0'
}

export function getAnimationStyle(delay: number): React.CSSProperties {
  return {
    '--delay': `${delay}ms`,
  } as React.CSSProperties
}

export function calculateSectionDelay(baseDelay: number, index: number): number {
  return baseDelay + index * 35
}
