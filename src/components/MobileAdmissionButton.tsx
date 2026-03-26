function scrollToEnquiryTarget() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const isCourseDetail = path.startsWith('/courses/') && path !== '/courses'

  const targetId = isCourseDetail ? 'course-inquiry' : 'admission-enquiry'
  const el = document.getElementById(targetId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const focusable = el.querySelector<HTMLElement>(
      'input:not([disabled]), textarea, select, button',
    )
    focusable?.focus({ preventScroll: true })
    return
  }

  if (!isCourseDetail) {
    window.location.assign(`/#${targetId}`)
  }
}

export function MobileAdmissionButton() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const isCourseDetail = path.startsWith('/courses/') && path !== '/courses'

  if (!isCourseDetail) return null

  return (
    <button
      type="button"
      onClick={scrollToEnquiryTarget}
      className="fixed inset-x-4 bottom-4 z-50 h-12 rounded-xl bg-[#0D2B6B] text-sm font-semibold text-white shadow-lg md:hidden"
      aria-label="Get admission"
    >
      Get Admission
    </button>
  )
}
