import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { streams } from '../constants/streams'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { getRevealClass } from '../constants/animations'

export function StreamCardsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.12,
    rootMargin: '0px 0px -5% 0px',
  })

  const revealClass = (animationClass: string) =>
    getRevealClass(isVisible, animationClass)

  return (
    <section
      ref={sectionRef}
      id="streams"
      aria-labelledby="streams-heading"
      className="mx-auto w-full max-w-[1400px] scroll-mt-28 px-4 py-12 md:px-6 md:py-16 lg:px-8"
    >
      <div className="max-w-2xl">
        <p
          className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
          style={{ '--delay': '80ms' } as CSSProperties}
        >
          PROGRAMS ACROSS THE GROUP
        </p>

        <h2
          id="streams-heading"
          className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold leading-tight text-[#0D2B6B] sm:text-3xl md:text-4xl`}
          style={{ '--delay': '140ms' } as CSSProperties}
        >
          Three streams, one group of institutions
        </h2>

        <p
          className={`${revealClass('animate-load')} mt-3 text-base leading-relaxed text-slate-600 md:text-lg`}
          style={{ '--delay': '200ms' } as CSSProperties}
        >
          Every program below is UGC-approved and university-affiliated, with
          course lengths from 30 days to 4 years.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {streams.map((stream, index) => {
          const Icon = stream.icon

          return (
            <article
              key={stream.id}
              className={`${revealClass('animate-load-from-right')} flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5`}
              style={{ '--delay': `${260 + index * 90}ms` } as CSSProperties}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0D2B6B]/10">
                  <Icon className="size-5 text-[#0D2B6B]" aria-hidden />
                </span>

                <h3 className="text-lg leading-snug font-semibold text-[#0D2B6B]">
                  {stream.title}
                </h3>
              </div>

              <ul className="mt-5 flex-1 space-y-3">
                {stream.courses.map((course) => (
                  <li
                    key={course.name}
                    className="flex items-start justify-between gap-3 border-b border-dashed border-slate-200 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-sm leading-snug text-slate-700">
                      {course.name}
                    </span>

                    <span className="shrink-0 rounded-full bg-[#0D2B6B]/10 px-2.5 py-1 text-xs leading-none font-semibold text-[#0D2B6B]">
                      {course.duration}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/courses"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0D2B6B] transition-colors hover:text-[#2353b1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D2B6B] focus-visible:ring-offset-2"
              >
                View all courses
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
