import { Target, Eye, Rocket } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import type { CSSProperties } from 'react'

const pillars = [
  {
    icon: Target,
    label: 'Mission',
    text: 'To empower students with practical and life skills needed to succeed through professional education and management-focused academic support.',
    accent: 'bg-[#0D2B6B]',
    accentLight: 'bg-[#0D2B6B]/8',
  },
  {
    icon: Eye,
    label: 'Vision',
    text: 'To be a leading institution in management and optometry education, producing quality education and training that serves evolving student and industry needs.',
    accent: 'bg-[#4DB6AC]',
    accentLight: 'bg-[#4DB6AC]/10',
  },
  {
    icon: Rocket,
    label: 'Goals',
    text: 'Continue focused expansion, strengthen affiliations, and sustain internship and placement pathways so learners move from classroom to career with confidence.',
    accent: 'bg-[#F59E0B]',
    accentLight: 'bg-[#F59E0B]/10',
  },
]

export function VisionMissionSection() {
  const sectionRef = { current: null } as React.RefObject<HTMLElement | null>
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })

  const revealClass = (anim: string) => isVisible ? anim : 'opacity-0'

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-[1400px] overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 py-12 md:px-6 md:py-16 lg:px-8"
    >
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className={`${revealClass('animate-load')} max-w-xl`}>
          <p className="text-xs font-semibold tracking-[0.18em] text-[#4DB6AC] uppercase">
            Our Foundation
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#0D2B6B] sm:text-5xl">
            Mission, Vision <br />& Goals
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The three pillars that drive VTRUST forward — shaping how we teach, 
            what we aspire to become, and where we are headed.
          </p>
        </div>

        <div
          className={`${revealClass('animate-load-from-right')} relative w-full max-w-[480px] overflow-hidden rounded-3xl shadow-xl lg:max-w-[520px]`}
        >
          <img
              src="/company/company_night.jpg"
              alt="VTRUST campus"
              className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[300px]"
              loading="lazy"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B6B]/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xl font-semibold text-white">Building Tomorrow's Leaders</p>
            <p className="mt-1 text-sm text-white/80">Since 2021 from Balussery, Kerala</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon
          return (
            <div
              key={pillar.label}
              className={`${revealClass('animate-load-from-right')} group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow hover:shadow-md`}
              style={{ '--delay': `${200 + index * 120}ms` } as CSSProperties}
            >
              <div className={`absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/4 rounded-full ${pillar.accentLight} transition-transform duration-500 group-hover:scale-150`} />

              <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.accent} text-white shadow-sm`}>
                <Icon className="size-6" aria-hidden />
              </div>

              <div className="mt-5">
                <div className={`inline-block rounded-full ${pillar.accentLight} px-3 py-1`}>
                  <span className={`text-xs font-semibold tracking-wide ${pillar.accent.replace('bg-', 'text-')}`}>
                    {pillar.label}
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {pillar.text}
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${pillar.accent}`} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
