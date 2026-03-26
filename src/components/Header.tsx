import { ChevronDown, Globe, Mail, Menu, Phone, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

const primaryNavLinks = [
  'Home',
  'Courses',
  'About',
  'Institution',
  'News & Events',
  'Contact',
] as const

const institutionLinks = [
  { label: 'Student Life', href: '/student-life' },
  { label: 'Campuses', href: '/campuses' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Gallery', href: '/gallery' },
] as const

type NavLabel = (typeof primaryNavLinks)[number] | (typeof institutionLinks)[number]['label']
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

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path
        fill="currentColor"
        d="M23 12.02c0-2.23-.26-3.72-.56-4.47-.24-.62-.72-1.1-1.34-1.34C20.35 5.91 18.86 5.65 12 5.65c-6.86 0-8.35.26-9.1.56c-.62.24-1.1.72-1.34 1.34C1.26 8.3 1 9.79 1 12.02c0 2.23.26 3.72.56 4.47c.24.62.72 1.1 1.34 1.34c.75.3 2.24.56 9.1.56c6.86 0 8.35-.26 9.1-.56c.62-.24 1.1-.72 1.34-1.34c.3-.75.56-2.24.56-4.47ZM10 15.5v-7l6 3.5l-6 3.5Z"
      />
    </svg>
  )
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<NavLabel>('Home')
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
      const path = window.location.pathname.replace(/\/+$/, '') || '/'
      if (path === '/about') return 'About' as NavLabel
      if (path === '/student-life') {
        return 'Student Life' as NavLabel
      }
      if (path === '/courses' || path.startsWith('/courses/')) {
        return 'Courses' as NavLabel
      }
      if (path === '/campuses') {
        return 'Campuses' as NavLabel
      }
      if (path === '/alumni') {
        return 'Alumni' as NavLabel
      }
      if (path === '/gallery') {
        return 'Gallery' as NavLabel
      }
      if (path === '/news-events' || path.startsWith('/news/')) {
        return 'News & Events' as NavLabel
      }
      if (path === '/contact') {
        return 'Contact' as NavLabel
      }

      const hash = window.location.hash?.replace('#', '').trim().toLowerCase()
      if (!hash) return 'Home' as NavLabel
      if (hash === 'student-life') return 'Student Life' as NavLabel
      if (hash === 'campuses') return 'Campuses' as NavLabel
      if (hash === 'alumni') return 'Alumni' as NavLabel
      if (hash === 'gallery') return 'Gallery' as NavLabel
      if (hash === 'news-events') return 'News & Events' as NavLabel
      if (hash === 'contact') return 'Contact' as NavLabel
      if (hash === 'about') return 'About' as NavLabel
      if (hash === 'courses') return 'Courses' as NavLabel
      return 'Home' as NavLabel
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
  const openEnquiryModal = () => {
    window.dispatchEvent(new CustomEvent('vtrust:open-enquiry-modal'))
  }
  const getNavHref = (label: NavLabel) => {
    if (label === 'Home') return '/'
    if (label === 'About') return '/about'
    if (label === 'Student Life') return '/student-life'
    if (label === 'Campuses') return '/campuses'
    if (label === 'Alumni') return '/alumni'
    if (label === 'Gallery') return '/gallery'
    if (label === 'News & Events') return '/news-events'
    if (label === 'Contact') return '/contact'
    if (label === 'Courses') return '/courses'
    return `#${label.toLowerCase()}`
  }
  const isInstitutionActive = institutionLinks.some((item) => item.label === activeLink)

  return (
    <header className={headerClassName} aria-label="Site header">
      {/* Utility bar (35%) */}
      <div
        className={[
          'hidden border-b backdrop-blur-md transition-colors duration-500 md:block',
          isScrolled
            ? 'border-[#0D2B6B] bg-[#0D2B6B]/95'
            : 'border-gray-100 bg-white/90',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2 md:px-6 lg:px-8">
            <div className={['flex items-center gap-6 text-[0.85rem]', isScrolled ? 'text-white/85' : 'text-slate-600'].join(' ')}>
              <a href="tel:+919400920044" className={['flex items-center gap-2 font-medium transition-colors', isScrolled ? 'hover:text-white' : 'hover:text-[#0D2B6B]'].join(' ')}>
                <span className={['inline-flex size-8 items-center justify-center rounded-md transition-colors', isScrolled ? 'bg-white/15 text-white' : 'bg-slate-100 text-[#0D2B6B]'].join(' ')}>
                  <Phone className="size-4" aria-hidden />
                </span>
                +91 9400920044
              </a>
              <a
                href="mailto:vtrustcollege@gmail.com"
                className={['flex items-center gap-2 font-medium transition-colors', isScrolled ? 'hover:text-white' : 'hover:text-[#0D2B6B]'].join(' ')}
              >
                <span className={['inline-flex size-8 items-center justify-center rounded-md transition-colors', isScrolled ? 'bg-white/15 text-white' : 'bg-slate-100 text-[#0D2B6B]'].join(' ')}>
                  <Mail className="size-4" aria-hidden />
                </span>
                vtrustcollege@gmail.com
              </a>

            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/Vtrustinstitutions/" target="_blank" rel="noreferrer" className={['transition-colors', isScrolled ? 'text-white/90 hover:text-[#4DB6AC]' : 'text-[#0D2B6B] hover:text-[#4DB6AC]'].join(' ')} aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/vtrustinstitutions" target="_blank" rel="noreferrer" className={['transition-colors', isScrolled ? 'text-white/90 hover:text-[#4DB6AC]' : 'text-[#0D2B6B] hover:text-[#4DB6AC]'].join(' ')} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.youtube.com/@Vtrustinstitutions" target="_blank" rel="noreferrer" className={['transition-colors', isScrolled ? 'text-white/90 hover:text-[#4DB6AC]' : 'text-[#0D2B6B] hover:text-[#4DB6AC]'].join(' ')} aria-label="YouTube">
                <YoutubeIcon />
              </a>
              <a href="https://www.linkedin.com/company/vtrust-institutions/" target="_blank" rel="noreferrer" className={['transition-colors', isScrolled ? 'text-white/90 hover:text-[#4DB6AC]' : 'text-[#0D2B6B] hover:text-[#4DB6AC]'].join(' ')} aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/JFVivGked4WZDm8r9"
            target="_blank"
            rel="noreferrer"
            className={['flex items-center gap-2 text-[0.88rem] font-semibold transition-colors', isScrolled ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-[#0D2B6B]'].join(' ')}
          >
            <Globe className={['size-4 transition-colors', isScrolled ? 'text-white' : 'text-[#0D2B6B]'].join(' ')} aria-hidden />
            360° Virtual Tour
          </a>
        </div>
      </div>

      {/* Main navigation (65%) */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-6 lg:px-8">
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
          {primaryNavLinks.map((label) => {
            const isActive = label === 'Institution' ? isInstitutionActive : activeLink === label

            if (label === 'Institution') {
              return (
                <div key={label} className="group relative">
                  <button
                    type="button"
                    className={[
                      'inline-flex items-center gap-1 py-2 text-[0.98rem] font-semibold transition-colors',
                      isActive
                        ? 'rounded-md bg-[#0D2B6B] px-3 text-white shadow-sm'
                        : 'text-slate-700 hover:text-[#0D2B6B]',
                    ].join(' ')}
                    aria-haspopup="menu"
                    aria-expanded={isActive}
                  >
                    Institution
                    <ChevronDown className="size-4" aria-hidden />
                  </button>

                  <div className="invisible absolute left-0 top-full z-50 mt-2 w-52 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    {institutionLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setActiveLink(item.label)}
                        className={[
                          'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                          activeLink === item.label
                            ? 'bg-[#0D2B6B] text-white'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-[#0D2B6B]',
                        ].join(' ')}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )
            }

            const href = getNavHref(label)

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
          <button
            type="button"
            onClick={openEnquiryModal}
            className={`hidden items-center justify-center rounded-lg px-5 py-2.5 text-[0.95rem] font-semibold text-white shadow-sm transition-opacity hover:opacity-95 lg:inline-flex ${CTA_GRADIENT}`}
          >
            Apply Now
          </button>

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
              {primaryNavLinks.map((label) => {
                if (label === 'Institution') {
                  return (
                    <div key={label} className="rounded-lg border border-slate-200 p-2">
                      <p className="px-2 py-1 text-[0.92rem] font-semibold text-[#0D2B6B]">
                        Institution
                      </p>
                      <div className="mt-1 grid gap-1">
                        {institutionLinks.map((item) => {
                          const isItemActive = activeLink === item.label
                          return (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => {
                                setActiveLink(item.label)
                                setMobileOpen(false)
                              }}
                              className={[
                                'rounded-lg px-3 py-2 text-[0.95rem] font-semibold transition-colors',
                                isItemActive
                                  ? 'bg-[#0D2B6B] text-white'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#0D2B6B]',
                              ].join(' ')}
                            >
                              {item.label}
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  )
                }

                const href = getNavHref(label)
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
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false)
                  openEnquiryModal()
                }}
                className={`inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-[0.98rem] font-semibold text-white shadow-sm ${CTA_GRADIENT}`}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
