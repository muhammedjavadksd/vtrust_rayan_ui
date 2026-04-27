import { useEffect, useState } from 'react'

/**
 * Hook to track whether the window has been scrolled past a certain threshold.
 * Useful for changing header styles on scroll.
 */
export function useScrollPosition(threshold = 10) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold)
    
    // Initial check
    onScroll()
    
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return isScrolled
}
