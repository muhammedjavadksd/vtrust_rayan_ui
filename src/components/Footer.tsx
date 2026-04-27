import { MapPin, Phone } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useBranches } from '../hooks/useBranches'
import { addresses } from '../constants/footer'
import { FacebookIcon } from './icons/FacebookIcon'
import { InstagramIcon } from './icons/InstagramIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { YoutubeIcon } from './icons/YoutubeIcon'

export function Footer() {
  const [email, setEmail] = useState('')
  const { branches } = useBranches()

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
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className="flex flex-col gap-4"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                type="email"
                className="h-12 w-full rounded-xl border border-white/20 bg-white px-6 text-base text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-hero-teal"
              />
              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-hero-teal px-6 text-2xl font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
              >
                Submit
              </button>
            </form>
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
