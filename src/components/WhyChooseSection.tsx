import { BriefcaseMedical, Cog, GraduationCap, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

const reasons = [
  {
    icon: BriefcaseMedical,
    title: 'Real Hospital Exposure',
    description:
      'Direct clinical exposure with hands-on experience across healthcare environments.',
  },
  {
    icon: Cog,
    title: 'Industry-Ready Skills',
    description:
      'Practical proficiency with essential soft skills for healthcare workplaces.',
  },
  {
    icon: GraduationCap,
    title: 'Placement Assistance',
    description:
      'Guided placement support with leading providers for smooth career transition.',
  },
] as const

export function WhyChooseSection() {
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
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const revealClass = (animationClass: string) =>
    isVisible ? animationClass : 'opacity-0'

  return (
    <section ref={sectionRef} className="pt-0">
      <div className="relative bg-[#232529] px-6 pb-14 pt-20 md:px-10 md:pb-16 md:pt-24 lg:px-14">
        <div
          className="absolute inset-x-0 top-0 h-[220px] bg-white md:h-[250px]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <h2
            className={`${revealClass('animate-load')} text-center text-5xl font-semibold leading-tight text-black`}
            style={{ '--delay': '80ms' } as CSSProperties}
          >
            Why Choose VTrust?
          </h2>
          <div
            className={`${revealClass('animate-load')} relative mt-7 overflow-hidden rounded-3xl`}
            style={{ '--delay': '170ms' } as CSSProperties}
          >
            <img
              src="/hero/doc.jpg"
              alt="Healthcare team"
              className="h-[380px] w-full object-cover md:h-[500px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden />
            <button
              type="button"
              className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2353b1] text-white shadow-lg"
              aria-label="Play video"
            >
              <Play className="size-7 fill-current" aria-hidden />
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className={`${revealClass('animate-load-from-right')} rounded-3xl bg-white p-6 shadow-sm shadow-black/15`}
                style={{ '--delay': `${240 + index * 90}ms` } as CSSProperties}
              >
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl border border-slate-200 text-vtrust-navy">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-3xl leading-tight font-semibold text-vtrust-navy">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
