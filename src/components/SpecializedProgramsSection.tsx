import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

const tabs = [
  'Optometry & Vision Sciences',
  'Allied Health Sciences',
  'Healthcare Management',
  'Nutrition & Dietetics',
] as const

type TabKey = (typeof tabs)[number]

const programs = [
  {
    title: 'BSc Optometry',
    description: 'Build strong clinical and diagnostic skills for optometry.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'MSc Optometry',
    description:
      'Advanced training in clinical optometry, diagnostics.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'Diploma in Optometry',
    description: 'Foundation for eye care, vision testing, and optical assistance.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'Optical Technician',
    description: 'Optical dispensing and lens technology with hands-on training.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'Diploma in Medical Lab Technology',
    description: 'Practical lab training in microbiology, biochemistry & diagnostics.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'Diploma in Nursing (ANM)',
    description: 'Nursing fundamentals with patient care and clinical exposure.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'B.Voc in Anesthesia Technology',
    description: 'Assist during anesthesia with OT preparation and monitoring.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'B.Voc in Operation Theatre Technology',
    description: 'Hands-on OT training: sterilization, surgical support, teamwork.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'B.Voc in Medical Lab Technology',
    description: 'Practical diagnostics with quality testing and biomedical analysis.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'B.Voc in Nutrition & Dietetics',
    description: 'Clinical nutrition and diet planning for health & wellness.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'B.Voc in Hospital Management',
    description: 'Hospital operations and management leadership with case learning.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'Diploma in Hospital Management',
    description: 'Focused management training for healthcare operations.',
    image:
      '/generated/hero-bg.png',
  },
  {
    title: 'Diploma in Human Resources Management',
    description: 'HR fundamentals and talent management for healthcare.',
    image:
      '/generated/hero-bg.png',
  },
] as const

const tabProgramTitles: Record<TabKey, string[]> = {
  'Optometry & Vision Sciences': [
    'BSc Optometry',
    'MSc Optometry',
    'Diploma in Optometry',
  ],
  'Allied Health Sciences': [
    'Optical Technician',
    'Diploma in Medical Lab Technology',
    'Diploma in Nursing (ANM)',
    'B.Voc in Anesthesia Technology',
    'B.Voc in Operation Theatre Technology',
    'B.Voc in Medical Lab Technology',
  ],
  'Healthcare Management': [
    'B.Voc in Hospital Management',
    'Diploma in Hospital Management',
    'Diploma in Human Resources Management',
  ],
  'Nutrition & Dietetics': ['B.Voc in Nutrition & Dietetics'],
}

export function SpecializedProgramsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<TabKey>(tabs[0]!)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

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

  const filteredPrograms = programs.filter((program) =>
    tabProgramTitles[activeTab].includes(program.title),
  )

  const updateScrollButtons = () => {
    const slider = sliderRef.current
    if (!slider) return

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth
    const epsilon = 2
    setCanScrollPrev(slider.scrollLeft > epsilon)
    setCanScrollNext(slider.scrollLeft < maxScrollLeft - epsilon)
  }

  useEffect(() => {
    // Reset slider to the beginning when switching tabs.
    sliderRef.current?.scrollTo({ left: 0, behavior: 'auto' })
    // Wait one frame for layout updates, then refresh disabled states.
    requestAnimationFrame(() => updateScrollButtons())
  }, [activeTab, filteredPrograms.length])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    updateScrollButtons()

    const handleScroll = () => updateScrollButtons()
    const handleResize = () => updateScrollButtons()

    slider.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      slider.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [activeTab, filteredPrograms.length])

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
            Courses Offered
          </h2>
          <p
            className={`${revealClass('animate-load')} mx-auto mt-3 max-w-xl text-lg leading-relaxed text-slate-600`}
            style={{ '--delay': '150ms' } as CSSProperties}
          >
            Diploma, undergraduate and postgraduate programs supported by clinical
            learning and partnerships.
          </p>
        </div>

        <div
          className={`${revealClass('animate-load')} mx-auto mt-7 flex w-fit max-w-full gap-2 overflow-x-auto rounded-2xl bg-white/75 p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
          style={{ '--delay': '220ms' } as CSSProperties}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={[
                'shrink-0 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                activeTab === tab
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
            disabled={!canScrollPrev}
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-full border border-vtrust-navy/25 transition-colors',
              canScrollPrev
                ? 'bg-white/90 text-vtrust-navy hover:bg-vtrust-navy hover:text-white'
                : 'cursor-not-allowed bg-white/60 text-slate-400',
            ].join(' ')}
            aria-label="Previous programs"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => handleSlide('next')}
            disabled={!canScrollNext}
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-full border border-vtrust-navy/25 transition-colors',
              canScrollNext
                ? 'bg-white/90 text-vtrust-navy hover:bg-vtrust-navy hover:text-white'
                : 'cursor-not-allowed bg-white/60 text-slate-400',
            ].join(' ')}
            aria-label="Next programs"
          >
            &#8594;
          </button>
        </div>

        <div
          ref={sliderRef}
          className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredPrograms.map((program, index) => (
            <article
              key={program.title}
              data-program-card="true"
              className={`${revealClass('animate-load-from-right')} flex min-w-[300px] max-w-[360px] flex-1 flex-col snap-start`}
              style={{ '--delay': `${300 + index * 90}ms` } as CSSProperties}
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/5">
                <img
                  src="/generated/hero-bg.png"
                  alt={program.title}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex  flex-1 flex-col rounded-2xl bg-white p-5 shadow-sm shadow-black/5">
                <h3 className="text-2xl leading-tight font-semibold text-black">
                  {program.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {program.description}
                </p>
                <a
                  href="#curriculum"
                  className="pt-3 inline-flex items-center  text-sm font-semibold text-vtrust-navy"
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
