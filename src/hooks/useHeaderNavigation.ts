import { useEffect, useState } from 'react'
import type { NavLabel } from '../constants/header'
import { getActiveNavLabel } from '../utils/navigation'

/**
 * Hook to manage the active navigation link based on current URL and hash.
 * Synchronizes with browser navigation events.
 */
export function useHeaderNavigation(initialLabel: NavLabel = 'Home') {
  const [activeLink, setActiveLink] = useState<NavLabel>(initialLabel)

  useEffect(() => {
    const updateActiveLink = () => {
      const label = getActiveNavLabel(window.location.pathname, window.location.hash)
      setActiveLink(label)
    }

    // Initial update
    updateActiveLink()

    window.addEventListener('hashchange', updateActiveLink)
    window.addEventListener('popstate', updateActiveLink)
    
    return () => {
      window.removeEventListener('hashchange', updateActiveLink)
      window.removeEventListener('popstate', updateActiveLink)
    }
  }, [])

  return { activeLink, setActiveLink }
}
