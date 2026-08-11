import { useState } from 'react'
import type { FormEvent } from 'react'
import { useBranches } from './useBranches'
import { submitContactEnquiry } from '../api/contact.api'
import type { BranchAddress } from '../api/branch.api'
import type { ContactFormFields, ContactFormErrors } from '../types/contact'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateForm(fields: ContactFormFields): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!fields.fullName.trim()) {
    errors.fullName = 'Full name is required'
  }

  if (!fields.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }

  if (!fields.phone.trim()) {
    errors.phone = 'Phone number is required'
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required'
  }

  return errors
}

const INITIAL_FIELDS: ContactFormFields = {
  fullName: '',
  email: '',
  phone: '',
  subject: 'Admissions Inquiry',
  message: '',
}

export function useContactForm() {
  const [fields, setFields] = useState<ContactFormFields>(INITIAL_FIELDS)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (field: keyof ContactFormFields, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof ContactFormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof ContactFormErrors]
        return next
      })
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitError(null)

    const validationErrors = validateForm(fields)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setLoading(true)
    try {
      await submitContactEnquiry(fields)
      setSubmitted(true)
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Failed to send enquiry'
      setSubmitError(message)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFields(INITIAL_FIELDS)
    setErrors({})
    setSubmitted(false)
    setSubmitError(null)
  }

  return {
    fields,
    errors,
    submitted,
    loading,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  }
}

// Order in which campus tabs should be displayed.
// Anything not listed here keeps its original relative order and is appended at the end.
const CAMPUS_DISPLAY_ORDER = ['kozhikode', 'mysore']

function sortCampuses(branches: BranchAddress[]): BranchAddress[] {
  return [...branches].sort((a, b) => {
    const aName = a.name?.toLowerCase() ?? ''
    const bName = b.name?.toLowerCase() ?? ''

    const aIndex = CAMPUS_DISPLAY_ORDER.findIndex((key) => aName.includes(key))
    const bIndex = CAMPUS_DISPLAY_ORDER.findIndex((key) => bName.includes(key))

    const aRank = aIndex === -1 ? CAMPUS_DISPLAY_ORDER.length : aIndex
    const bRank = bIndex === -1 ? CAMPUS_DISPLAY_ORDER.length : bIndex

    return aRank - bRank
  })
}

export function useCampusSelector(initialCampusId?: string) {
  const { branches, loading, error } = useBranches()
  const [userSelectedId, setUserSelectedId] = useState<string | null>(null)

  const campuses = sortCampuses(branches)

  const defaultCampus =
    campuses.find((c: BranchAddress) =>
      c.name?.toLowerCase().includes('kozhikode')
    ) ?? campuses[0]

  const activeId = userSelectedId ?? initialCampusId ?? defaultCampus?.id ?? ''

  const activeCampus: BranchAddress | null =
    campuses.find((c: BranchAddress) => c.id === activeId) ??
    campuses[0] ??
    null

  const selectCampus = (campusId: string) => {
    setUserSelectedId(campusId)
  }

  return {
    activeId,
    activeCampus,
    campuses,
    selectCampus,
    loading,
    error,
  }
}