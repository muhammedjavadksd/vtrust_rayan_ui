import { MapPin, Phone } from 'lucide-react'
import { useMemo, useState } from 'react'

type Address = {
  title: string
  lines: string[]
  phone: string
}

const addresses: Address[] = [
  {
    title: 'Thamarassery',
    lines: ['Near Old Bus Stand, Vezhu pur', 'Road, Thamarassery, Kerala'],
    phone: '+91 9072314474',
  },
  {
    title: 'Koyilandy',
    lines: ['Main Road, Koyilandy, Kerala', '673305'],
    phone: '+91 7902666631',
  },
  {
    title: 'Balussery',
    lines: ['Near Bus Stand, Main Road,', 'Balussery, Kerala 673612'],
    phone: '+91 9072201050',
  },
  {
    title: 'Vadakara',
    lines: ['Opp. New Bus stand,', 'Vadakara 673101'],
    phone: '+91 9497469902',
  },
]

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path
        fill="currentColor"
        d="M22 12.07C22 6.47 17.52 2 11.93 2S2 6.47 2 12.07c0 5.05 3.66 9.25 8.44 10.03v-7.08H7.9v-2.95h2.54V9.74c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.95h-2.33v7.08C18.34 21.32 22 17.12 22 12.07Z"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path
        fill="currentColor"
        d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10ZM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm5.5-2.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.5h-4v16ZM8 7.5h3.83v2.18h.05c.53-1 1.83-2.18 3.77-2.18 4.03 0 4.77 2.65 4.77 6.09v9.91h-4v-8.79c0-2.09-.04-4.79-2.91-4.79-2.91 0-3.36 2.27-3.36 4.63v8.95H8v-16Z"
      />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')

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
          {addresses.map((a) => (
            <div key={a.title} className="space-y-1 text-white/85">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-5 shrink-0 text-hero-teal" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-white">{a.title}</p>
                  <p className="text-[0.78rem] leading-snug text-white/80">
                    {a.lines.join(', ')}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[0.78rem] text-white/85">
                    <Phone className="size-4 shrink-0 text-hero-teal" aria-hidden />
                    <span className="font-medium">{a.phone}</span>
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
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
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
        </div>
      </div>
    </footer>
  )
}
