import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

type NewsItem = {
  category: string
  title: string
  description: string
  date: string
  image: string
}

const news: NewsItem[] = [
  {
    category: 'ADMISSION ALERT',
    title: 'Admissions for 2024 Academic Year Now Open',
    description:
      'Join V Trust for programs in optometry and nursing with hands-on clinical exposure.',
    date: 'MARCH 15, 2026',
    image: '/hero/doc.jpg',
  },
  {
    category: 'NEW LAUNCH',
    title: 'Masters in Hospital Management (MHM) Launched',
    description:
      'A new course designed to help students learn management and hospital operations.',
    date: 'MARCH 10, 2026',
    image: '/hero/doc.jpg',
  },
  {
    category: 'CAMPUS NEWS',
    title: 'V Trust Bengaluru Campus Achieves Accreditation',
    description:
      'Our newest facility receives A+ grade for state-of-the-art diagnostic labs.',
    date: 'MARCH 02, 2026',
    image: '/hero/doc.jpg',
  },
] as const

export function NewsSection() {
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
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

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

