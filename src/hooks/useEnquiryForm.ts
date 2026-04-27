import { useState } from 'react'
import type { EnquiryFormValues } from '../types/hooks.types'

export function useEnquiryForm(initialValues: EnquiryFormValues = {
  fullName: '',
  emailOrPhone: '',
  message: '',
  course: '',
}) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<EnquiryFormValues>(initialValues)

  const handleChange = (field: keyof EnquiryFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setForm(initialValues)
    setSubmitted(false)
    setError(null)
  }

  const handleSubmit = async (submitFn: (data: EnquiryFormValues) => Promise<any>) => {
    setLoading(true)
    setError(null)
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
