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

export function useCampusSelector(initialCampusId?: string) {
  const { branches, loading, error } = useBranches()
  const [userSelectedId, setUserSelectedId] = useState<string | null>(null)

  const activeId = userSelectedId ?? initialCampusId ?? branches[0]?.id ?? ''

  const activeCampus: BranchAddress | null =
    branches.find((c: BranchAddress) => c.id === activeId) ??
    branches[0] ??
    null

  const selectCampus = (campusId: string) => {
    setUserSelectedId(campusId)
  }

  return {
    activeId,
    activeCampus,
    campuses: branches,
    selectCampus,
    loading,
    error,
  }
}
