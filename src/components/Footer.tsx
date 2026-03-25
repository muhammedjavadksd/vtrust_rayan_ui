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
      { label: 'Home', href: '#' },
      { label: 'Courses', href: '#courses' },
      { label: 'About Us', href: '#about' },
      { label: 'Campuses', href: '#campuses' },
      { label: 'Admissions', href: '#admissions' },
    ],
    [],
  )

  return (
    <footer className="bg-white pt-10 pb-8">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {/* Top address row */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {addresses.map((a) => (
            <div key={a.title} className="space-y-1 text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-5 text-[#2353b1]" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-slate-700">{a.title}</p>
                  <p className="text-[0.78rem] leading-snug">
                    {a.lines.join(', ')}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[0.78rem]">
                    <Phone className="size-4 text-[#2353b1]" aria-hidden />
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
            <img
              src="/logo/logo.png"
              alt="VTRUST Group of Institutions"
              className="h-16 w-auto object-contain"
              loading="lazy"
            />
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-800">Follow Us:</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-[#2353b1] transition-colors hover:bg-slate-50"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-[#2353b1] transition-colors hover:bg-slate-50"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-[#2353b1] transition-colors hover:bg-slate-50"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-slate-900">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-600 transition-colors hover:text-[#2353b1]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Signup */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-slate-900">
              Sign Up To Get Latest Updates
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
                className="h-12 w-full rounded-xl border border-slate-300 bg-white px-6 text-base outline-none ring-0 placeholder:text-slate-400 focus:border-[#2353b1]"
              />
              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-[#2353b1] px-6 text-2xl font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12">
          <div className="w-full rounded-xl bg-[#223f86] px-6 py-4 text-center text-xs font-medium text-white">
            All rights reserved © 2026 V Trust.
            <span className="mx-3">•</span>
            <a
              href="#"
              className="hover:underline"
            >
              Privacy Policy
            </a>
            <span className="mx-3">•</span>
            <a
              href="#"
              className="hover:underline"
            >
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

