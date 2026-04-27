import { useEffect, useState, type RefObject } from 'react'

/**
 * Hook to manage mobile menu state and associated interactions.
 * Handles:
 * - Escape key to close
 * - Click outside to close
 */
export function useMobileMenu(panelRef: RefObject<HTMLDivElement | null>) {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Escape key listener
  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  // Click outside listener
  useEffect(() => {
    if (!mobileOpen) return
    const onClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('mousedown', onClickOutside)
    return () => window.removeEventListener('mousedown', onClickOutside)
  }, [mobileOpen, panelRef])

  return { mobileOpen, setMobileOpen }
}
