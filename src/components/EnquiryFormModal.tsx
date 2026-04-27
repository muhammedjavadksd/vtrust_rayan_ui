import { X } from 'lucide-react'
import { useEffect } from 'react'
import { submitEnquiry } from '../api/enquiry.api'
import { useCourses } from '../hooks/useCourses'
import { useEnquiryForm } from '../hooks/useEnquiryForm'
import { useEnquiryModalLogic } from '../hooks/useEnquiryModalLogic'
import type { EnquiryForm } from '../api/enquiry.api'
import { DEFAULT_COURSE } from '../constants/enquiry'

export function EnquiryFormModal() {
  const { courses: apiCourses } = useCourses()
  const courseTitles = apiCourses.map((c) => c.title)

  const {
    form,
    submitted,
    loading,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  } = useEnquiryForm({
    fullName: '',
    emailOrPhone: '',
    course: courseTitles[0] ?? DEFAULT_COURSE,
    message: '',
  })

  // Hook handles auto-open, manual trigger, and body scroll lock
  const { open, setOpen } = useEnquiryModalLogic(resetForm)

  // Update default course when courses are loaded
  useEffect(() => {
    if (courseTitles.length > 0 && !form.course) {
      handleChange('course', courseTitles[0]!)
    }
  }, [courseTitles, form.course, handleChange])

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit(async (data) => {
      await submitEnquiry(data as EnquiryForm)
    })
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-100 flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Enquirey form"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Close modal backdrop"
          />

          {/* Panel */}
          <div className="relative z-10 max-h-[calc(100svh-4rem)] w-full max-w-none overflow-hidden rounded-t-2xl rounded-b-none bg-white shadow-xl sm:max-h-none sm:max-w-[720px] sm:rounded-2xl">
            <div className="flex items-start justify-between gap-6 border-b border-slate-100 bg-[#0D2B6B] px-6 py-5">
              <div className="text-white">
                <p className="text-xs font-semibold tracking-[0.18em] opacity-80">
                  Enquirey Form
                </p>
                <h2 className="mt-1 text-lg font-semibold">Request information</h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15"
                aria-label="Close enquiry modal"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5 sm:px-8 sm:py-6">
              {submitted ? (
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-slate-900">
                    Thanks! Your enquiry has been submitted.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Our admissions team will contact you shortly.
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-lg bg-[#0D2B6B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={onFormSubmit}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {error && (
                    <div className="sm:col-span-2 text-red-600 text-sm font-semibold">
                      {error}
                    </div>
                  )}
                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-800">
                      Full Name
                    </span>
                    <input
                      value={form.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Enter your name"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#4DB6AC]"
                      required
                    />
                  </label>

                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-800">
                      Email or Phone
                    </span>
                    <input
                      value={form.emailOrPhone}
                      onChange={(e) => handleChange('emailOrPhone', e.target.value)}
                      placeholder="+91 ... or email@..."
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#4DB6AC]"
                      required
                    />
                  </label>

                  <label className="space-y-1 sm:col-span-2">
                    <span className="text-sm font-semibold text-slate-800">
                      Course
                    </span>
                    <select
                      value={form.course}
                      onChange={(e) => handleChange('course', e.target.value)}
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#4DB6AC]"
                    >
                      {courseTitles.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="space-y-1 sm:col-span-2">
                    <span className="text-sm font-semibold text-slate-800">
                      Message
                    </span>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us what you're looking for"
                      className="min-h-[110px] w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#4DB6AC]"
                    />
                  </label>

                  <div className="flex items-center justify-end gap-3 sm:col-span-2">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-[#0D2B6B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95 disabled:opacity-60"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

