export interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export interface EnquiryFormValues {
  fullName: string
  email: string
  phone: string
  message: string
  course?: string
}

export interface EnquiryFormErrors {
  email?: string
  phone?: string
}
