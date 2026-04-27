export interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export interface EnquiryFormValues {
  fullName: string
  emailOrPhone: string
  message: string
  course?: string
}
