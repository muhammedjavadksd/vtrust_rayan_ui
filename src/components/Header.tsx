import { Globe, Mail, Menu, Phone, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

const navLinks = ['Home', 'Courses', 'About', 'Specialities', 'Admissions'] as const
const LOGO_SRC = '/logo/logo.png'

type HeaderProps = { className?: string }

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

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<(typeof navLinks)[number]>('Home')
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    const getActive = () => {
      const hash = window.location.hash?.replace('#', '').trim().toLowerCase()
      if (!hash) return 'Home' as (typeof navLinks)[number]

      const found = navLinks.find((l) => l !== 'Home' && l.toLowerCase() === hash)
      return (found ?? 'Home') as (typeof navLinks)[number]
    }

    const update = () => setActiveLink(getActive())
    update()
    window.addEventListener('hashchange', update)
    window.addEventListener('popstate', update)
    return () => {
      window.removeEventListener('hashchange', update)
      window.removeEventListener('popstate', update)
    }
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onClick = (e: MouseEvent) => {
      const panel = panelRef.current
      if (!panel) return
      if (!panel.contains(e.target as Node)) setMobileOpen(false)
    }
    window.addEventListener('mousedown', onClick)
    return () => window.removeEventListener('mousedown', onClick)
  }, [mobileOpen])

  const headerClassName = useMemo(() => {
    const base = ['sticky top-0 z-50 w-full', className].filter(Boolean).join(' ')
    const layer = isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
    const border = isScrolled ? 'border-b border-gray-100' : 'border-b border-transparent'
    return [base, layer, border].join(' ')
  }, [className, isScrolled])

  const CTA_GRADIENT = 'bg-[linear-gradient(90deg,#0D2B6B_0%,#2A69D6_100%)]'

  return (
    <header className={headerClassName} aria-label="Site header">
      {/* Utility bar (35%) */}
      <div className="hidden border-b border-gray-100 bg-white/90 backdrop-blur-md md:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 md:px-10 lg:px-14">
            <div className="flex items-center gap-6 text-[0.85rem] text-slate-600">
              <a href="tel:+919072314474" className="flex items-center gap-2 font-medium hover:text-[#0D2B6B]">
                <span className="inline-flex size-8 items-center justify-center rounded-md bg-slate-100 text-[#0D2B6B]">
                  <Phone className="size-4" aria-hidden />
                </span>
                +91 9072314474
              </a>
              <a
                href="mailto:info@vtrusteyehospital.com"
                className="flex items-center gap-2 font-medium hover:text-[#0D2B6B]"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-md bg-slate-100 text-[#0D2B6B]">
                  <Mail className="size-4" aria-hidden />
                </span>
                info@vtrusteyehospital.com
              </a>

            <div className="flex items-center gap-3">
              <a href="#" className="text-[#0D2B6B] transition-colors hover:text-[#4DB6AC]" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="text-[#0D2B6B] transition-colors hover:text-[#4DB6AC]" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-[#0D2B6B] transition-colors hover:text-[#4DB6AC]" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <a href="#tour" className="flex items-center gap-2 text-[0.88rem] font-semibold text-slate-600 hover:text-[#0D2B6B]">
            <Globe className="size-4 text-[#0D2B6B]" aria-hidden />
            360° Virtual Tour
          </a>
        </div>
      </div>

      {/* Main navigation (65%) */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-10 lg:px-14">
        <a href="/" className="flex items-center gap-3 no-underline">
          <img
            src={LOGO_SRC}
            alt="VTRUST Group of Institutions"
            width={320}
            height={120}
            className="h-10 w-auto object-contain"
            decoding="async"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex" aria-label="Main navigation">
          {navLinks.map((label) => {
            const href = label === 'Home' ? '/' : `#${label.toLowerCase()}`
            const isActive = activeLink === label

            return (
              <a
                key={label}
                href={href}
                onClick={() => setActiveLink(label)}
                className={[
                  'group relative inline-flex items-center py-2 text-[0.98rem] font-semibold transition-colors',
                  isActive
                    ? 'rounded-md bg-[#0D2B6B] px-3 text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#0D2B6B]',
                ].join(' ')}
              >
                {label}
                {!isActive && (
                  <span
                    className="pointer-events-none absolute -bottom-[6px] left-0 h-[2px] w-full origin-left scale-x-0 bg-[#4DB6AC] transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#apply"
            className={`hidden items-center justify-center rounded-lg px-5 py-2.5 text-[0.95rem] font-semibold text-white shadow-sm transition-opacity hover:opacity-95 lg:inline-flex ${CTA_GRADIENT}`}
          >
            Apply Now
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white/70 text-[#0D2B6B] backdrop-blur-md lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden" role="dialog" aria-label="Mobile navigation">
          <div
            ref={panelRef}
            className="mx-4 mb-4 rounded-xl border border-gray-100 bg-white/95 p-4 shadow-sm backdrop-blur-md"
          >
            <nav className="grid gap-2" aria-label="Mobile navigation links">
              {navLinks.map((label) => {
                const href = label === 'Home' ? '/' : `#${label.toLowerCase()}`
                const isActive = activeLink === label

                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => {
                      setActiveLink(label)
                      setMobileOpen(false)
                    }}
                    className={[
                      'rounded-lg px-3 py-2 text-[0.98rem] font-semibold transition-colors',
                      isActive
                        ? 'bg-[#0D2B6B] text-white'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0D2B6B]',
                    ].join(' ')}
                  >
                    {label}
                  </a>
                )
              })}
            </nav>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-[0.98rem] font-semibold text-white shadow-sm ${CTA_GRADIENT}`}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
