import { useEffect, useState } from 'react'
import { onEnquiryModal } from '../utils/events'
import { setBodyScrollLock } from '../utils/dom'

/**
 * Hook to manage the complex orchestration of the Enquiry Form Modal.
 * Encapsulates:
 * - Auto-open logic (timer)
 * - Custom event subscription
 * - Body scroll locking
 */
export function useEnquiryModalLogic(onResetForm: () => void) {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    onResetForm()
    setOpen(true)
  }

  // Auto-open logic (5s delay, desktop only, once per session tab)
  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) return
    if (sessionStorage.getItem('enquiryModalShown') === 'true') return

    const timer = window.setTimeout(() => {
      sessionStorage.setItem('enquiryModalShown', 'true')
      openModal()
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [])

  // Listen for manual trigger events
  useEffect(() => {
    return onEnquiryModal(openModal)
  }, [])

  // Body scroll lock management
  useEffect(() => {
    setBodyScrollLock(open)
    return () => setBodyScrollLock(false)
  }, [open])

  return { open, setOpen, openModal }
}
