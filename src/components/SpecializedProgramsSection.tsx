import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

const tabs = [
  'Optometry & Vision Sciences',
  'Allied Health Sciences',
  'Healthcare Management',
  'Nutrition & Dietetics',
] as const

const programs = [
  {
    title: 'BSc Optometry',
    description: 'Build expertise in vision care, diagnostics, and optometry practice.',
    image:
      'https://images.unsplash.com/photo-1578496479531-32c9d9f84f8f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'MSc Optometry',
    description: 'Advance clinical optometry, diagnostics, and specialized vision care.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Diploma in Optometry',
    description: 'Gain practical skills in eye care, vision testing, and optical support.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'BSc Nursing',
    description: 'Develop nursing competencies through rotations and patient training.',
    image:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'BSc Medical Lab Technology',
    description: 'Master lab techniques, quality testing, and biomedical analysis.',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Diploma in Dialysis Technology',
    description: 'Learn dialysis procedures, equipment handling, and renal support.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
  },
] as const

export function SpecializedProgramsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
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
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const revealClass = (animationClass: string) =>
    isVisible ? animationClass : 'opacity-0'

  const handleSlide = (direction: 'prev' | 'next') => {
    const slider = sliderRef.current
    if (!slider) return

    const firstCard = slider.querySelector<HTMLElement>('[data-program-card="true"]')
    const step = firstCard ? firstCard.offsetWidth + 20 : 340
    const left = direction === 'next' ? step : -step
    slider.scrollBy({ left, behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-16 lg:py-18"
    >
      <div className="w-full overflow-hidden bg-[#d9f1ea] bg-[linear-gradient(90deg,rgba(255,255,255,0.35)_50%,transparent_50%),linear-gradient(rgba(255,255,255,0.35)_50%,transparent_50%)] bg-size-[250px_250px] bg-center px-4 py-10 sm:px-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className={`${revealClass('animate-load')} text-4xl leading-tight font-semibold text-vtrust-navy md:text-5xl`}
            style={{ '--delay': '80ms' } as CSSProperties}
          >
            Our Specialized Programs
          </h2>
          <p
            className={`${revealClass('animate-load')} mx-auto mt-3 max-w-xl text-lg leading-relaxed text-slate-600`}
            style={{ '--delay': '150ms' } as CSSProperties}
          >
            Choose from a variety of healthcare disciplines tailored for career
            growth.
          </p>
        </div>

        <div
          className={`${revealClass('animate-load')} mx-auto mt-7 flex w-fit max-w-full gap-2 overflow-x-auto rounded-2xl bg-white/75 p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
          style={{ '--delay': '220ms' } as CSSProperties}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={[
                'shrink-0 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                index === 0
                  ? 'bg-[#2252b0] text-white'
                  : 'text-slate-600 hover:bg-white hover:text-vtrust-navy',
              ].join(' ')}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => handleSlide('prev')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-vtrust-navy/25 bg-white/90 text-vtrust-navy transition-colors hover:bg-vtrust-navy hover:text-white"
            aria-label="Previous programs"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => handleSlide('next')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-vtrust-navy/25 bg-white/90 text-vtrust-navy transition-colors hover:bg-vtrust-navy hover:text-white"
            aria-label="Next programs"
          >
            &#8594;
          </button>
        </div>

        <div
          ref={sliderRef}
          className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {programs.map((program, index) => (
            <article
              key={program.title}
              data-program-card="true"
              className={`${revealClass('animate-load-from-right')} flex min-w-[300px] max-w-[360px] flex-1 flex-col snap-start`}
              style={{ '--delay': `${300 + index * 90}ms` } as CSSProperties}
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/5">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex min-h-[220px] flex-1 flex-col rounded-2xl bg-white p-5 shadow-sm shadow-black/5">
                <h3 className="min-h-14 text-2xl leading-tight font-semibold text-black">
                  {program.title}
                </h3>
                <p className="mt-3 min-h-18 text-base leading-relaxed text-slate-600">
                  {program.description}
                </p>
                <a
                  href="#curriculum"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-vtrust-navy"
                >
                  View curriculum
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
