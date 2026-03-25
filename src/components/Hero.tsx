import {
  ArrowRight,
  CircleCheck,
  GraduationCap,
  Landmark,
} from 'lucide-react'
import type { CSSProperties } from 'react'

const badges = [
  { icon: CircleCheck, label: 'NCVRT Certified' },
  { icon: GraduationCap, label: 'UGC Approved' },
  { icon: Landmark, label: 'University Affiliations' },
] as const

export function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-6.5rem)] flex-col px-6 pb-6 pt-2 md:min-h-[calc(100svh-7rem)] md:px-10 md:pb-8 lg:px-14">
      <div className="relative mx-auto flex h-full min-h-[calc(100svh-7.5rem)] w-full max-w-[1400px] flex-col overflow-hidden rounded-2xl shadow-lg shadow-black/10 md:min-h-[calc(100svh-8rem)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/ophthalmology-concept-patient-examination-eye-vision-ophthalmological-clinic_926199-3833566.jpg?uid=R206252073&ga=GA1.1.471481738.1764221371&semt=ais_hybrid&w=740&q=80')" }}
          role="img"
          aria-hidden
        />
        <div className="absolute inset-0 bg-slate-950/55" aria-hidden />
        <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
          <div className="flex min-h-0 flex-1 flex-col justify-center">
            <div className="max-w-2xl">
              <h1
                className="animate-load text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
                style={{ '--delay': '180ms' } as CSSProperties}
              >
                <span className="block">Shaping Future</span>
                <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-2 sm:mt-2">
                  <span className="inline-block rounded-lg bg-hero-teal px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
                    Healthcare
                  </span>
                  <span className="text-white">Professionals</span>
                </span>
              </h1>

              <p
                className="animate-load mt-6 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg"
                style={{ '--delay': '260ms' } as CSSProperties}
              >
                Industry-aligned programs with real clinical exposure designed for
                the next generation of medical innovators.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#courses"
                  className="animate-load inline-flex items-center justify-center gap-2 rounded-full bg-hero-teal px-6 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-95 sm:text-base"
                  style={{ '--delay': '320ms' } as CSSProperties}
                >
                  Explore Courses
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </a>
                <a
                  href="#advisor"
                  className="animate-load inline-flex items-center justify-center rounded-full border-2 border-white/90 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-[2px] transition-colors hover:bg-white/10 sm:text-base"
                  style={{ '--delay': '380ms' } as CSSProperties}
                >
                  Talk to Advisor
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3 sm:border-white/15 sm:pt-8">
            {badges.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className="animate-load flex items-center gap-2.5 text-sm font-semibold text-white"
                style={{ '--delay': `${430 + index * 80}ms` } as CSSProperties}
              >
                <Icon
                  className="size-5 shrink-0 text-hero-teal sm:size-6"
                  strokeWidth={2}
                  aria-hidden
                />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
