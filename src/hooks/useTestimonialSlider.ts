import { useEffect, useRef, useState } from 'react'

/**
 * Hook to manage complex interactive slider logic for testimonials.
 * Encapsulates:
 * - Active index management
 * - Auto-play timer
 * - Swipe gesture detection
 * - Navigation (prev/next)
 */
export function useTestimonialSlider(count: number, interval = 6000) {
  const [activeIndex, setActiveIndex] = useState(0)
  const swipeStartXRef = useRef<number | null>(null)

  const prev = () => setActiveIndex((i) => (i - 1 + count) % count)
  const next = () => setActiveIndex((i) => (i + 1) % count)

  // Auto-play timer
  useEffect(() => {
    if (count <= 1) return
    const id = window.setInterval(next, interval)
    return () => window.clearInterval(id)
  }, [count, interval])

  // Swipe gesture handlers
  const onPointerDown = (e: React.PointerEvent) => {
    swipeStartXRef.current = e.clientX
  }

  const onPointerUp = (e: React.PointerEvent) => {
    const startX = swipeStartXRef.current
    swipeStartXRef.current = null
    if (startX == null) return

    const dx = e.clientX - startX
    const threshold = 60 // px
    if (Math.abs(dx) < threshold) return

    if (dx < 0) next()
    else prev()
  }

  return {
    activeIndex,
    setActiveIndex,
    prev,
    next,
    pointerHandlers: {
      onPointerDown,
      onPointerUp,
      style: { touchAction: 'pan-y' } as React.CSSProperties,
    },
  }
}
