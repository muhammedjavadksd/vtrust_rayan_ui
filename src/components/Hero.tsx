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
  const openEnquiryModal = () => {
    window.dispatchEvent(new CustomEvent('vtrust:open-enquiry-modal'))
  }

  return (
    <section className="flex min-h-[calc(100svh-6.5rem-50px)] flex-col pt-0 pb-4 md:min-h-[calc(100svh-7rem-50px)] md:pb-6 lg:pt-4 lg:min-h-[calc(100svh-5.5rem-50px)]">
      {/* Same horizontal frame as Header: max-w + px — avoids double padding vs section */}
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="relative flex h-full min-h-[calc(100svh-7.5rem-50px)] w-full flex-col overflow-hidden rounded-2xl shadow-lg shadow-black/10 md:min-h-[calc(100svh-8rem-50px)] lg:min-h-[calc(100svh-6.5rem-50px)]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/generated/clinical-eye-banner.png')" }}
            role="img"
            aria-hidden
          />
          <div className="absolute inset-0 bg-slate-950/55" aria-hidden />
          <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col px-3 py-8 sm:px-4 sm:py-10 md:px-4 md:py-12 lg:px-5 lg:py-14">
            <div className="flex min-h-0 flex-1 flex-col justify-center">
              <div className="max-w-2xl">
                <h1
                  className="animate-load text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
                  style={{ '--delay': '180ms' } as CSSProperties}
                >
                  <span className="block">Shaping Future</span>
                  <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-2 sm:mt-2">
                    <span className="inline-block rounded-lg bg-hero-teal px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
                      Healthcare Education
                    </span>
                    <span className="text-white">Professionals</span>
                  </span>
                </h1>

                <p
                  className="animate-load mt-6 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg"
                  style={{ '--delay': '260ms' } as CSSProperties}
                >
                  VTRUST was founded in 2017 and expanded from Balussery in 2021
                  across Koyilandy, Thamarassery, and Vadakara with practical healthcare
                  education, strong affiliations, and internship-first learning.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <a
                    href="/courses"
                    className="animate-load inline-flex items-center justify-center gap-2 rounded-full bg-hero-teal px-6 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-95 sm:text-base"
                    style={{ '--delay': '320ms' } as CSSProperties}
                  >
                    Explore Programs
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </a>
                  <button
                    type="button"
                    onClick={openEnquiryModal}
                    className="animate-load inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/90 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-[2px] transition-colors hover:bg-white/10 sm:text-base"
                    style={{ '--delay': '380ms' } as CSSProperties}
                  >
                    Book Your Consultation
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-white/20 pt-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3 sm:border-white/15 sm:pt-6">
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
      </div>
    </section>
  )
}
