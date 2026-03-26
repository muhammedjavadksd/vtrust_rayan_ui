import { ArrowRight, GraduationCap, Microscope, Stethoscope } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

const stats = [
  { value: 'Since 2017', label: 'Foundation in eye-care and education' },
  { value: '4 Centres', label: 'Thamarassery, Balussery, Koyilandy, Vadakara' },
] as const

const highlights = [
  {
    icon: Microscope,
    title: 'Optometry-led academic strength',
    description:
      'UGC-aligned, university-affiliated optometry pathways with clinical emphasis.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & allied programmes',
    description:
      'Includes ANM Nursing, diploma tracks, and vocational healthcare courses.',
  },
  {
    icon: GraduationCap,
    title: 'Internship and placement support',
    description:
      '100% internship assistance with interview training and placement-focused support.',
  },
] as const

export function WhyVtrustSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const revealClass = (animationClass: string) =>
    isVisible ? animationClass : 'opacity-0'

  return (
    <section ref={sectionRef} className="relative px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16 bg-white">
      {/* subtle dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          opacity: 0.35,
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-stretch lg:gap-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2
              className={`${revealClass('animate-load-right')} max-w-[20ch] text-4xl leading-[1.06] font-semibold tracking-tight text-black lg:text-5xl`}
              style={{ '--delay': '80ms' } as CSSProperties}
            >
              Excellence in Healthcare & Optometry <br /> Education
            </h2>
            <p
              className={`${revealClass('animate-load')} max-w-xl text-lg leading-relaxed text-slate-600`}
              style={{ '--delay': '180ms' } as CSSProperties}
            >
              VTRUST began in 2021 at Balussery and has expanded to Koyilandy,
              Thamarassery, and Vadakara with a practical, career-focused
              healthcare education model.
            </p>
          </div>

          <div
            className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
            aria-label="Key statistics"
          >
            {stats.map((item, index) => (
              <div
                key={item.value}
                className={`${revealClass('animate-load')} space-y-2`}
                style={{ '--delay': `${240 + index * 100}ms` } as CSSProperties}
              >
                <p className="text-[2.5rem] leading-none font-bold tracking-tight text-vtrust-navy">
                  {item.value}
                </p>
                <p className="text-base font-medium text-slate-500">{item.label}</p>
              </div>
            ))}

            {/* vertical divider (between the two stats) */}
            <div
              aria-hidden
              className="hidden h-[70px] w-px bg-slate-200 md:block"
            />
          </div>

          <a
            href="#about"
            className={`${revealClass('animate-load')} inline-flex items-center gap-2 rounded-full border border-vtrust-navy/30 px-8 py-3 text-base font-semibold text-vtrust-navy transition-colors hover:bg-vtrust-navy hover:text-white`}
            style={{ '--delay': '480ms' } as CSSProperties}
          >
            About Us
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className={`${revealClass('animate-load-from-right')} space-y-6 lg:space-y-5`}>
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`${revealClass('animate-load')} flex items-start gap-5 rounded-3xl border border-slate-200/70 bg-transparent p-6`}
              style={{ '--delay': `${320 + index * 95}ms` } as CSSProperties}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#4DB6AC]/20 bg-transparent text-[#4DB6AC]">
                <Icon className="size-6" strokeWidth={2} aria-hidden />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl leading-tight font-semibold text-vtrust-navy">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
