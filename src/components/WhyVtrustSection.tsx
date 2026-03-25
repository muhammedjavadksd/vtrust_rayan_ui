import { ArrowRight, GraduationCap, Microscope, Stethoscope } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

const stats = [
  { value: '2017 -> 21', label: 'From hospital to education' },
  { value: '6+ Campuses', label: 'Across 6 localities' },
] as const

const highlights = [
  {
    icon: Stethoscope,
    title: 'Hands-on Clinical Exposure',
    description:
      'Students train in real hospitals with direct exposure to patient care and diagnostics.',
  },
  {
    icon: GraduationCap,
    title: 'Industry-Aligned Programs',
    description:
      'Courses aligned with real healthcare roles like optometry, nursing, lab tech, and management.',
  },
  {
    icon: Microscope,
    title: 'Academic & Clinical Integration',
    description:
      'Learning combines classroom teaching, advanced labs, and clinical training.',
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
    <section ref={sectionRef} className="px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-stretch lg:gap-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2
              className={`${revealClass('animate-load-right')} max-w-[20ch] text-4xl leading-[1.06] font-semibold tracking-tight text-black lg:text-5xl`}
              style={{ '--delay': '80ms' } as CSSProperties}
            >
              Here&apos;s what sets V Trust apart in healthcare <br /> education
            </h2>
            <p
              className={`${revealClass('animate-load')} max-w-xl text-lg leading-relaxed text-slate-600`}
              style={{ '--delay': '180ms' } as CSSProperties}
            >
              Built on real clinical exposure, academic partnerships, and
              career-focused training.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((item, index) => (
              <div
                key={item.value}
                className={`${revealClass('animate-load')} space-y-2`}
                style={{ '--delay': `${240 + index * 100}ms` } as CSSProperties}
              >
                <p className="text-[1.55rem] leading-none font-bold tracking-tight text-vtrust-navy md:text-[1.7rem]">
                  {item.value}
                </p>
                <p className="text-base text-slate-500">{item.label}</p>
              </div>
            ))}
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

        <div
          className={`${revealClass('animate-load-from-right')} rounded-3xl bg-slate-50 p-6 sm:p-8 lg:p-9`}
          style={
            {
              '--delay': '160ms',
              boxShadow: 'inset 0 0 0 1px rgba(15, 23, 42, 0.03)',
            } as CSSProperties
          }
        >
          <div className="space-y-8">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className={`${revealClass('animate-load')} flex items-start gap-4 sm:gap-5`}
                style={{ '--delay': `${320 + index * 95}ms` } as CSSProperties}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-vtrust-navy">
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
      </div>
    </section>
  )
}
