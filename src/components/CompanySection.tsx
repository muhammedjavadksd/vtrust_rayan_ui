import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { GraduationCap, Users, Award, Building } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { getRevealClass } from '../constants/animations'

const stats = [
  { icon: GraduationCap, label: 'Students Enrolled', value: '2,500+' },
  { icon: Users, label: 'Expert Faculty', value: '50+' },
]

export function CompanySection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' })

  const revealClass = (animationClass: string) => getRevealClass(isVisible, animationClass)

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-[1400px] px-4 py-12 md:px-6 md:py-16 lg:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div
          className={`${revealClass('animate-load-from-right')}`}
          style={{ '--delay': '100ms' } as CSSProperties}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-black/5">
            <img
              src="/company/building.jpg"
              alt="VTRUST Group of Institutions"
              className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[480px]"
              loading="lazy"
            />
          </div>
        </div>

        <div
          className={`${revealClass('animate-load-from-right')} space-y-6`}
          style={{ '--delay': '200ms' } as CSSProperties}
        >
          <div>
            <p
              className="text-xs font-semibold tracking-[0.16em] text-[#2353b1]"
              style={{ '--delay': '280ms' } as CSSProperties}
            >
              ABOUT VTRUST
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold leading-tight text-[#0D2B6B] sm:text-3xl md:text-4xl`}
              style={{ '--delay': '320ms' } as CSSProperties}
            >
              Shaping Future Management Professionals Through Excellence
            </h2>
          </div>

          <div
            className={`${revealClass('animate-load')} space-y-4 text-base leading-relaxed text-slate-600`}
            style={{ '--delay': '360ms' } as CSSProperties}
          >
            <p>
              VTRUST Group of Educational Institutions traces its foundation to 2021 with a focus on affordable, high-quality management studies and skill-based education pathways.
            </p>
            <p>
              The education network formally expanded from Balussery in 2021 and later grew across Koyilandy, Thamarassery, and Vadakara with recognized affiliations including University of Mysore, BESTIU, Glocal University, and NCVRT.
            </p>
            <p>
              We deliver focused management and optometry education through structured academics, practical lab work, and industry-linked exposure so students graduate with strong professional confidence.
            </p>
          </div>

          <div
            className={`${revealClass('animate-load-from-right')} grid grid-cols-2 gap-4 lg:gap-5`}
            style={{ '--delay': '440ms' } as CSSProperties}
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
              >
                <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-[#0D2B6B]/10">
                  <Icon className="size-5 text-[#0D2B6B]" />
                </div>
                <p className="text-xl font-semibold text-[#0D2B6B]">{value}</p>
                <p className="mt-0.5 text-xs text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
