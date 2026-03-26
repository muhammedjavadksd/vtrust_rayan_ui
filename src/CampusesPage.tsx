import { Mail, MapPin, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { EnquiryFormModal } from './components/EnquiryFormModal'
import { MobileAdmissionButton } from './components/MobileAdmissionButton'
import { campuses } from './data/campuses'

export default function CampusesPage() {
  const mainRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeId, setActiveId] = useState(campuses[0]!.id)

  const activeCampus = campuses.find((c) => c.id === activeId) ?? campuses[0]!

  useEffect(() => {
    const node = mainRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const revealClass = (animationClass: string) =>
    isVisible ? animationClass : 'opacity-0'

  return (
    <div className="min-h-svh bg-white">
      <Header />
      <main ref={mainRef} className="px-4 pb-10 pt-2 md:px-6 md:pb-14 lg:px-10">
        <section className="mx-auto w-full max-w-[1400px]">
          <div className={`${revealClass('animate-load')} relative overflow-hidden rounded-2xl`}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/generated/journey-img.png')" }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,43,107,0.82)_0%,rgba(13,43,107,0.55)_45%,rgba(13,43,107,0.35)_100%)]"
              aria-hidden
            />

            <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
              <p
                className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.18em] text-white/80`}
                style={{ '--delay': '120ms' } as CSSProperties}
              >
                VTRUST GROUP OF INSTITUTIONS
              </p>
              <h1
                className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl`}
                style={{ '--delay': '180ms' } as CSSProperties}
              >
                Campuses
              </h1>
              <p
                className={`${revealClass('animate-load')} mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg`}
                style={{ '--delay': '220ms' } as CSSProperties}
              >
                Geographic reach across Thamarassery, Koyilandy, Balussery, and Vadakara — learn
                closer to home, with the same clinical standards and student support.
              </p>

              <div
                className={`${revealClass('animate-load')} mt-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[2px]`}
                style={{ '--delay': '260ms' } as CSSProperties}
              >
                <a href="/" className="font-semibold text-white/95 hover:text-white">
                  Home
                </a>
                <span className="text-white/70">/</span>
                <span className="font-medium text-white">Campuses</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[1400px] md:mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm shadow-black/5 sm:px-10 md:px-12 md:py-12">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '300ms' } as CSSProperties}
            >
              GEOGRAPHIC REACH
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
              style={{ '--delay': '340ms' } as CSSProperties}
            >
              Four locations, one VTRUST community
            </h2>
            <p
              className={`${revealClass('animate-load')} mt-4 max-w-3xl text-base leading-relaxed text-slate-600`}
              style={{ '--delay': '380ms' } as CSSProperties}
            >
              Our multi-campus footprint is built so students from urban hubs and
              surrounding regions can access quality healthcare education without
              long relocation. Each centre connects learners to hospital-linked
              training, local industry partners, and a consistent academic framework.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[1400px] md:mt-12">
          <h2
            className={`${revealClass('animate-load')} text-center text-xl font-semibold text-[#0D2B6B] sm:text-2xl`}
            style={{ '--delay': '420ms' } as CSSProperties}
          >
            Explore by location
          </h2>

          <div
            className={`${revealClass('animate-load')} mx-auto mt-6 flex max-w-full gap-2 overflow-x-auto rounded-2xl bg-slate-100 p-1.5 [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden`}
            style={{ '--delay': '460ms' } as CSSProperties}
            role="tablist"
            aria-label="Campus locations"
          >
            {campuses.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={activeId === c.id}
                onClick={() => setActiveId(c.id)}
                className={[
                  'shrink-0 rounded-xl px-4 py-3 text-sm font-semibold transition-colors',
                  activeId === c.id
                    ? 'bg-[#0D2B6B] text-white shadow-sm'
                    : 'bg-white text-slate-700 shadow-sm ring-1 ring-slate-200/80 hover:text-[#0D2B6B]',
                ].join(' ')}
              >
                <span className="md:hidden">{c.tabLabel}</span>
                <span className="hidden md:inline">{c.name}</span>
              </button>
            ))}
          </div>

          <div
            className={`${revealClass('animate-load-from-right')} mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2`}
            style={{ '--delay': '500ms' } as CSSProperties}
            role="tabpanel"
            aria-label={`${activeCampus.name} details`}
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              <iframe
                title={`Map of ${activeCampus.name}`}
                src={activeCampus.mapEmbedSrc}
                className="aspect-4/3 min-h-[280px] w-full border-0 lg:aspect-auto lg:min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <p className="border-t border-slate-200 bg-white px-4 py-2 text-center text-xs text-slate-500">
                Map data © Google — location is approximate; confirm directions before
                travel.
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5 md:p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#2353b1]">
                CONTACT SPECIFICS
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#0D2B6B]">
                {activeCampus.name} campus
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {activeCampus.reachNote}
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-hero-teal" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Address</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {activeCampus.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-hero-teal" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <a
                      href={`tel:${activeCampus.phone.replace(/\s/g, '')}`}
                      className="mt-1 inline-block text-sm font-medium text-[#0D2B6B] hover:underline"
                    >
                      {activeCampus.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-hero-teal" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <a
                      href={`mailto:${activeCampus.email}`}
                      className="mt-1 inline-block text-sm font-medium text-[#0D2B6B] hover:underline"
                    >
                      {activeCampus.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={activeCampus.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                >
                  Open in Google Maps
                </a>
                <a
                  href={`tel:${activeCampus.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center rounded-xl bg-[#0D2B6B] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-95"
                >
                  Call this campus
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal />
      <MobileAdmissionButton />
    </div>
  )
}
