import { ChevronDown, Globe, Mail, Menu, Phone, X } from 'lucide-react'
import { useMemo, useRef } from 'react'
import { primaryNavLinks, institutionLinks, LOGO_SRC, type HeaderProps, CTA_GRADIENT, getNavHref } from '../constants/header'
import { FacebookIcon } from './icons/FacebookIcon'
import { InstagramIcon } from './icons/InstagramIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { YoutubeIcon } from './icons/YoutubeIcon'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useHeaderNavigation } from '../hooks/useHeaderNavigation'
import { useMobileMenu } from '../hooks/useMobileMenu'
import { dispatchEnquiryModal } from '../utils/events'

export function Header({ className }: HeaderProps) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  
  // Logic extracted to dedicated hooks
  const isScrolled = useScrollPosition()
  const { activeLink, setActiveLink } = useHeaderNavigation()
  const { mobileOpen, setMobileOpen } = useMobileMenu(panelRef)

  const headerClassName = useMemo(() => {
    const base = ['sticky top-0 z-50 w-full', className].filter(Boolean).join(' ')
    const layer = isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
    const border = isScrolled ? 'border-b border-gray-100' : 'border-b border-transparent'
    return [base, layer, border].join(' ')
  }, [className, isScrolled])

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
            className="h-14 w-auto object-contain"
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
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
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
            onClick={dispatchEnquiryModal}
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
                              target={item.external ? '_blank' : undefined}
                              rel={item.external ? 'noopener noreferrer' : undefined}
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
                  dispatchEnquiryModal()
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
