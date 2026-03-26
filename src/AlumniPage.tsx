import { BriefcaseBusiness, Star, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { EnquiryFormModal } from './components/EnquiryFormModal'
import { MobileAdmissionButton } from './components/MobileAdmissionButton'

const placements = [
  { metric: '92%', label: 'Placement support conversion in the last cycle' },
  { metric: '140+', label: 'Active hiring partners across hospitals and clinics' },
  { metric: '4', label: 'Career cells serving all major campus clusters' },
] as const

const directory = [
  {
    name: 'Nimisha R',
    image: '/generated/clinical-eye-banner.png',
    programme: 'BSc Optometry',
    role: 'Clinical Optometrist',
    organisation: 'Malabar Vision Centre',
    city: 'Kozhikode',
  },
  {
    name: 'Rahul Menon',
    image: '/generated/hero-bg.png',
    programme: 'MHM',
    role: 'Operations Executive',
    organisation: 'CityCare Hospitals',
    city: 'Kannur',
  },
  {
    name: 'Aparna K',
    image: '/generated/journey-img.png',
    programme: 'GNM Nursing',
    role: 'Staff Nurse',
    organisation: 'Aster Health Network',
    city: 'Kochi',
  },
  {
    name: 'Akhil Prasad',
    image: '/generated/clinical-eye-banner.png',
    programme: 'BSc MLT',
    role: 'Lab Technologist',
    organisation: 'Prime Diagnostics',
    city: 'Calicut',
  },
  {
    name: 'Shahana F',
    image: '/generated/hero-bg.png',
    programme: 'BSc Nursing',
    role: 'Critical Care Nurse',
    organisation: 'Lakeside Multi Speciality',
    city: 'Bengaluru',
  },
  {
    name: 'Naveen M',
    image: '/generated/journey-img.png',
    programme: 'Diploma in Optometry',
    role: 'Vision Therapist',
    organisation: 'SightFirst Clinic',
    city: 'Thrissur',
  },
] as const

const spotlights = [
  {
    name: 'Reshma Thomas',
    image: '/generated/clinical-eye-banner.png',
    role: 'Senior Optometrist, Regional Eye Institute',
    highlight:
      'Leads a 12-member outpatient team and mentors interns from multiple allied-health campuses.',
  },
  {
    name: 'Sreehari V',
    image: '/generated/hero-bg.png',
    role: 'Hospital Operations Manager, CareArc Group',
    highlight:
      'Scaled patient-flow turnaround by introducing queue analytics and weekly service dashboards.',
  },
  {
    name: 'Fathima N',
    image: '/generated/journey-img.png',
    role: 'ICU Nursing Lead, MetroCare',
    highlight:
      'Recognized for protocol-led emergency training and onboarding of 40+ junior nurses.',
  },
] as const

export default function AlumniPage() {
  const mainRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

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
              style={{ backgroundImage: "url('/generated/clinical-eye-banner.png')" }}
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
                Alumni
              </h1>
              <p
                className={`${revealClass('animate-load')} mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg`}
                style={{ '--delay': '220ms' } as CSSProperties}
              >
                Outcome proof from real careers, real employers, and real impact
                stories across healthcare roles.
              </p>

              <div
                className={`${revealClass('animate-load')} mt-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[2px]`}
                style={{ '--delay': '260ms' } as CSSProperties}
              >
                <a href="/" className="font-semibold text-white/95 hover:text-white">
                  Home
                </a>
                <span className="text-white/70">/</span>
                <span className="font-medium text-white">Alumni</span>
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
              OUTCOME PROOF
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
              style={{ '--delay': '340ms' } as CSSProperties}
            >
              Alumni outcomes that validate our training approach
            </h2>
            <p
              className={`${revealClass('animate-load')} mt-4 max-w-3xl text-base leading-relaxed text-slate-600`}
              style={{ '--delay': '380ms' } as CSSProperties}
            >
              Our alumni network reflects measurable placement outcomes,
              consistent career progression, and practical readiness across
              clinical and hospital-management domains.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px]">
          <p
            className={`${revealClass('animate-load')} flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
            style={{ '--delay': '420ms' } as CSSProperties}
          >
            <BriefcaseBusiness className="size-4 text-hero-teal" aria-hidden />
            CAREER PLACEMENTS
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {placements.map((item, index) => (
              <article
                key={item.label}
                className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5`}
                style={{ '--delay': `${460 + index * 60}ms` } as CSSProperties}
              >
                <p className="text-3xl font-semibold text-[#0D2B6B]">{item.metric}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-[1400px]">
          <p
            className={`${revealClass('animate-load')} flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
            style={{ '--delay': '240ms' } as CSSProperties}
          >
            <Users className="size-4 text-hero-teal" aria-hidden />
            ALUMNI DIRECTORY
          </p>
          <h2
            className={`${revealClass('animate-load')} mt-2 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
            style={{ '--delay': '280ms' } as CSSProperties}
          >
            Where our graduates are now
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {directory.map((alumni, index) => (
              <article
                key={`${alumni.name}-${alumni.organisation}`}
                className={`${revealClass('animate-load')} rounded-2xl border border-slate-200 bg-slate-50 p-5`}
                style={{ '--delay': `${320 + index * 45}ms` } as CSSProperties}
              >
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="h-28 w-28 rounded-xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="mt-4 text-lg font-semibold text-[#0D2B6B]">{alumni.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{alumni.programme}</p>
                <p className="mt-3 text-sm text-slate-700">{alumni.role}</p>
                <p className="mt-1 text-sm text-slate-500">{alumni.organisation}</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-hero-teal">
                  {alumni.city}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-[1400px] pb-4">
          <p
            className={`${revealClass('animate-load')} flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
            style={{ '--delay': '240ms' } as CSSProperties}
          >
            <Star className="size-4 text-hero-teal" aria-hidden />
            SUCCESS SPOTLIGHTS
          </p>
          <h2
            className={`${revealClass('animate-load')} mt-2 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
            style={{ '--delay': '280ms' } as CSSProperties}
          >
            Alumni making measurable impact
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {spotlights.map((person, index) => (
              <article
                key={person.name}
                className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5`}
                style={{ '--delay': `${320 + index * 70}ms` } as CSSProperties}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-32 w-full rounded-xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="mt-4 text-lg font-semibold text-[#0D2B6B]">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{person.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {person.highlight}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal />
      <MobileAdmissionButton />
    </div>
  )
}
