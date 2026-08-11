import { useState } from 'react'
import type {
  EnquiryFormErrors,
  EnquiryFormValues,
} from '../types/hooks.types'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\+?[0-9\s-]{7,15}$/

function validateForm(form: EnquiryFormValues): EnquiryFormErrors {
  const errors: EnquiryFormErrors = {}

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!PHONE_REGEX.test(form.phone.trim())) {
    errors.phone = 'Please enter a valid phone number'
  }

  return errors
}

export function useEnquiryForm(initialValues: EnquiryFormValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
  course: '',
}) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<EnquiryFormValues>(initialValues)
  const [errors, setErrors] = useState<EnquiryFormErrors>({})

  const handleChange = (field: keyof EnquiryFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof EnquiryFormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof EnquiryFormErrors]
        return next
      })
    }
  }

  const resetForm = () => {
    setForm(initialValues)
    setSubmitted(false)
    setError(null)
    setErrors({})
  }

  const handleSubmit = async (submitFn: (data: EnquiryFormValues) => Promise<any>) => {
    setError(null)
    const validationErrors = validateForm(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return
    }
    setLoading(true)
    try {
      await submitFn(form)
      setSubmitted(true)
    } catch (err: any) {
      setError(err?.message || 'Submission failed')
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    errors,
    submitted,
    loading,
    error,
    setSubmitted,
    setLoading,
    setError,
    handleChange,
    resetForm,
    handleSubmit,
  }
}
