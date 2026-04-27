import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { news } from '../constants/news'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export function NewsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' })

  const revealClass = (animationClass: string) =>
    isVisible ? animationClass : 'opacity-0'

  return (
    <section ref={sectionRef} className="px-6 py-12 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p
            className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.18em] text-[#2ea89a]`}
            style={{ '--delay': '60ms' } as CSSProperties}
          >
            BLOG & NEWS
          </p>
          <h2
            className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold text-black md:text-[2.6rem]`}
            style={{ '--delay': '140ms' } as CSSProperties}
          >
            Read Our Latest News
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {news.map((item, index) => (
            <article
              key={item.title}
              className={`${revealClass('animate-load')} overflow-hidden rounded-2xl bg-white`}
              style={{ '--delay': `${220 + index * 80}ms` } as CSSProperties}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="space-y-3 p-6">
                <p className="text-xs font-semibold tracking-[0.12em] text-[#2ea89a]">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold leading-snug text-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <p className="pt-2 text-[0.72rem] font-semibold tracking-[0.08em] text-slate-500">
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#news"
            className={`${revealClass('animate-load')} inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50`}
            style={{ '--delay': '440ms' } as CSSProperties}
          >
            View All News
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
