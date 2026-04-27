/**
 * Standardized custom event names for the application.
 */
export const APP_EVENTS = {
  OPEN_ENQUIRY_MODAL: 'vtrust:open-enquiry-modal',
} as const

/**
 * Dispatches a custom event to open the enquiry modal.
 */
export function dispatchEnquiryModal() {
  window.dispatchEvent(new CustomEvent(APP_EVENTS.OPEN_ENQUIRY_MODAL))
}

/**
 * Subscribes to the enquiry modal opening event.
 * @param handler Callback to execute when the event is triggered.
 * @returns Unsubscribe function.
 */
export function onEnquiryModal(handler: () => void) {
  window.addEventListener(APP_EVENTS.OPEN_ENQUIRY_MODAL, handler)
  return () => window.removeEventListener(APP_EVENTS.OPEN_ENQUIRY_MODAL, handler)
}
