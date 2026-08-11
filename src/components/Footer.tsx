import { CheckCircle2, MapPin, Phone } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useBranches } from '../hooks/useBranches'
import { addresses } from '../constants/footer'
import { submitAdmissionEnquiry } from '../api/enquiry.api'
import { FacebookIcon } from './icons/FacebookIcon'
import { InstagramIcon } from './icons/InstagramIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { YoutubeIcon } from './icons/YoutubeIcon'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PLACE_REGEX = /^[a-zA-Z\s]+$/
const PHONE_DIGITS_REGEX = /^\d{10}$/

const INITIAL_FORM = { place: '', email: '', phone: '' }
const INITIAL_TOUCHED = { place: false, email: false, phone: false }

type FormField = keyof typeof INITIAL_FORM
type FormErrors = Partial<Record<FormField, string>>

function validatePlace(value: string): string {
  const trimmed = value.trim()
  if (!trimmed) return 'Place is required'
  if (trimmed.length < 2) return 'Place must be at least 2 characters'
  if (!PLACE_REGEX.test(trimmed)) {
    return 'Place must contain only letters and spaces'
  }
  return ''
}

function validateEmail(value: string): string {
  const trimmed = value.trim()
  if (!trimmed) return 'Email is required'
  if (!EMAIL_REGEX.test(trimmed)) return 'Please enter a valid email'
  return ''
}

function validatePhone(value: string): string {
  const stripped = value.trim().replace(/[\s-]/g, '')
  if (!stripped) return 'Phone number is required'
  const digits = stripped.replace(/^\+91/, '')
  if (!PHONE_DIGITS_REGEX.test(digits)) {
    return 'Phone number must be 10 digits'
  }
  return ''
}

function validateForm(form: typeof INITIAL_FORM): FormErrors {
  return {
    place: validatePlace(form.place),
    email: validateEmail(form.email),
    phone: validatePhone(form.phone),
  }
}

export function Footer() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [touched, setTouched] = useState(INITIAL_TOUCHED)
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { branches } = useBranches()

  const errors = useMemo(() => validateForm(form), [form])
  const hasErrors = Object.values(errors).some(Boolean)

  const showErrorFor = (field: FormField) =>
    (touched[field] || submitAttempted) && errors[field]

  const handleChange = (field: FormField, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleBlur = (field: FormField) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitAttempted(true)
    setSubmitError(null)

    if (hasErrors) return

    setLoading(true)
    try {
      await submitAdmissionEnquiry({
        fullName: `Enquiry from ${form.place.trim()}`,
        email: form.email.trim(),
        phone: form.phone.trim().replace(/[\s-]/g, ''),
        message: 'Quick enquiry submitted from website footer.',
        place: form.place.trim(),
      })
      setSubmitted(true)
      setForm(INITIAL_FORM)
      setTouched(INITIAL_TOUCHED)
      setSubmitAttempted(false)
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Failed to send enquiry'
      setSubmitError(message)
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: FormField) => {
    const errorShown = Boolean(showErrorFor(field))
    const validShown =
      (touched[field] || submitAttempted) && Boolean(errors[field] === '')
    const borderClass = errorShown
      ? 'border-red-500'
      : validShown
        ? 'border-green-500'
        : 'border-white/20'
    return `h-12 w-full rounded-xl border ${borderClass} bg-white px-6 pr-12 text-base text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-hero-teal`
  }

  const quickLinks = useMemo(
    () => [
      { label: 'Home', href: '/' },
      { label: 'Courses', href: '/courses' },
      { label: 'About Us', href: '/about' },
      { label: 'Student Life', href: '/student-life' },
      { label: 'Campuses', href: '/campuses' },
      { label: 'Alumni', href: '/alumni' },
      { label: 'News & Events', href: '/news-events' },
      { label: 'Contact', href: '/contact' },
      { label: 'Admissions', href: '/#admissions' },
    ],
    [],
  )

  return (
    <footer className="bg-[#0D2B6B] pt-10 pb-8 text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {/* Top address row */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {(branches.length > 0 ? branches : addresses).map((a: any) => (
            <div key={a.name} className="space-y-1 text-white/85">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-5 shrink-0 text-hero-teal" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-white">{a.name}</p>
                  <p className="text-[0.78rem] leading-snug text-white/80">
                    {a.location.join(', ')}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[0.78rem] text-white/85">
                    <Phone className="size-4 shrink-0 text-hero-teal" aria-hidden />
                    <span className="font-medium">{a.phoneNumbers}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Left: Logo + Follow */}
          <div className="space-y-5">
            <div className="inline-block rounded-xl bg-white/95 p-3 shadow-sm">
              <img
                src="/logo/logo.png"
                alt="VTRUST Group of Institutions"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Follow Us:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/Vtrustinstitutions/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://instagram.com/vtrustinstitutions"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.youtube.com/@Vtrustinstitutions"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:bg-white/10"
                  aria-label="YouTube"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/vtrust-institutions/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">Quick Links</p>
            <ul className="grid list-none grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 md:gap-y-2">
              {quickLinks.map((l) => (
                <li key={l.label} className="min-w-0">
                  <a
                    href={l.href}
                    className="block text-sm text-white/80 transition-colors hover:text-hero-teal"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Admission / enquiry (anchor target for mobile CTA) */}
          <div id="admission-enquiry" className="scroll-mb-24 space-y-4">
            <p className="text-lg font-semibold text-white">
              Admission &amp; enquiry
            </p>
            <p className="text-sm text-white/75">
              Share your details for admissions and course-related questions.
            </p>
            {submitted ? (
              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white">
                Thanks! Your enquiry has been submitted. Our admissions team will
                contact you shortly.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                noValidate
              >
                {submitError && (
                  <p className="text-sm font-semibold text-red-300">
                    {submitError}
                  </p>
                )}
                <div className="space-y-1">
                  <div className="relative">
                    <input
                      id="footer-place"
                      value={form.place}
                      onChange={(e) => handleChange('place', e.target.value)}
                      onBlur={() => handleBlur('place')}
                      placeholder="Enter your place/location"
                      type="text"
                      aria-invalid={Boolean(showErrorFor('place'))}
                      aria-describedby={
                        showErrorFor('place') ? 'footer-place-error' : undefined
                      }
                      className={inputClass('place')}
                    />
                    {touched.place && !errors.place && (
                      <CheckCircle2
                        className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-green-500"
                        aria-hidden
                      />
                    )}
                  </div>
                  {showErrorFor('place') && (
                    <p id="footer-place-error" className="text-xs text-red-300">
                      {errors.place}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="relative">
                    <input
                      id="footer-email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="Enter your email"
                      type="email"
                      aria-invalid={Boolean(showErrorFor('email'))}
                      aria-describedby={
                        showErrorFor('email') ? 'footer-email-error' : undefined
                      }
                      className={inputClass('email')}
                    />
                    {touched.email && !errors.email && (
                      <CheckCircle2
                        className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-green-500"
                        aria-hidden
                      />
                    )}
                  </div>
                  {showErrorFor('email') && (
                    <p id="footer-email-error" className="text-xs text-red-300">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="relative">
                    <input
                      id="footer-phone"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      placeholder="Enter your phone number"
                      type="tel"
                      aria-invalid={Boolean(showErrorFor('phone'))}
                      aria-describedby={
                        showErrorFor('phone') ? 'footer-phone-error' : undefined
                      }
                      className={inputClass('phone')}
                    />
                    {touched.phone && !errors.phone && (
                      <CheckCircle2
                        className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-green-500"
                        aria-hidden
                      />
                    )}
                  </div>
                  {showErrorFor('phone') && (
                    <p id="footer-phone-error" className="text-xs text-red-300">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading || hasErrors}
                  className="h-14 w-full rounded-xl bg-hero-teal px-6 text-2xl font-semibold text-white shadow-sm transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs font-medium text-white/75">
          All rights reserved © 2026 V Trust.
          <span className="mx-3 text-white/40">•</span>
          <a
            href="/privacy-policy"
            className="text-white/85 transition-colors hover:text-white"
          >
            Privacy Policy
          </a>
          <span className="mx-3 text-white/40">•</span>
          <a
            href="/terms-and-conditions"
            className="text-white/85 transition-colors hover:text-white"
          >
            Terms &amp; Conditions
          </a>
          <span className="mx-3 text-white/40">•</span>
          <a
            href="/refund-policy"
            className="text-white/85 transition-colors hover:text-white"
          >
            Refund Policy
          </a>
          <span className="mx-3 text-white/40">•</span>
          <a
            href="/refund-policy"
            className="text-white/85 transition-colors hover:text-white"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
