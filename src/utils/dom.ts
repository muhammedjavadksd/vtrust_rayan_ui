/**
 * Utility to toggle body scroll locking.
 * Useful for modals and overlays.
 */
export function setBodyScrollLock(lock: boolean) {
  if (lock) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}
