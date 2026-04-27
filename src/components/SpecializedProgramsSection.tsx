import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { tabs } from '../types/course'
import type { TabKey } from '../types/course'
import { useCourses } from '../hooks/useCourses'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export function SpecializedProgramsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' })
  const [activeTab, setActiveTab] = useState<TabKey>(tabs[0]!)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const { courses: filteredPrograms, loading } = useCourses(activeTab)

  const revealClass = (animationClass: string) =>
    isVisible ? animationClass : 'opacity-0'

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
          {loading ? (
             <div className="flex w-full h-52 items-center justify-center">
              <div className="size-8 animate-spin rounded-full border-4 border-[#0D2B6B] border-t-transparent" />
            </div>
          ) : (
            filteredPrograms.map((program, index) => (
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
                <div className="mt-4 flex  flex-1 flex-col rounded-2xl bg-white p-5 shadow-sm shadow-black/5">
                  <h3 className="text-2xl leading-tight font-semibold text-black">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {program.description}
                  </p>
                  <a
                    href={`/courses/${program.slug}`}
                    className="pt-3 inline-flex items-center  text-sm font-semibold text-vtrust-navy"
                  >
                    View curriculum
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
