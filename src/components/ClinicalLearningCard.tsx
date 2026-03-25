import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export function ClinicalLearningCard() {
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
    <section ref={sectionRef} className="px-6 pb-12 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
          <div
            className={`${revealClass('animate-load-right')} absolute -left-20 top-0 h-full w-[42%] min-w-[280px]`}
            style={{ '--delay': '100ms' } as CSSProperties}
            aria-hidden
          >
            <div className="relative h-full w-full">
              <div className="absolute -left-16 top-2 h-44 w-80 rotate-15 rounded-xl border border-white/55 bg-linear-to-br from-[#ddf4fc] via-[#c0e6f6] to-[#96d0ea] opacity-95" />
              <div className="absolute -left-12 top-14 h-44 w-80 rotate-15 rounded-xl border border-white/55 bg-linear-to-br from-[#d6f1fb] via-[#b4def3] to-[#8ac8e7] opacity-90" />
              <div className="absolute -left-8 top-26 h-44 w-80 rotate-15 rounded-xl border border-white/55 bg-linear-to-br from-[#d1effb] via-[#a7d7f0] to-[#81c0e4] opacity-84" />
              <div className="absolute -left-2 top-38 h-44 w-80 rotate-15 rounded-xl border border-white/55 bg-linear-to-br from-[#caeafb] via-[#9fceed] to-[#78b8df] opacity-76" />
              <div className="absolute left-4 top-50 h-44 w-80 rotate-15 rounded-xl border border-white/55 bg-linear-to-br from-[#c3e8f9] via-[#9bc9ea] to-[#6fb0d9] opacity-69" />
              <div className="absolute left-10 top-62 h-44 w-80 rotate-15 rounded-xl border border-white/55 bg-linear-to-br from-[#bfe3f6] via-[#90c0e3] to-[#66a5d1] opacity-60" />
            </div>
          </div>

          <div className="relative z-10 grid min-h-[220px] items-center px-6 py-8 sm:px-8 md:grid-cols-[0.44fr_0.56fr] md:gap-8 md:px-10 md:py-10 lg:px-14">
            <div />
            <div className="space-y-4">
              <h3
                className={`${revealClass('animate-load')} text-3xl leading-tight font-semibold text-vtrust-navy md:text-4xl`}
                style={{ '--delay': '200ms' } as CSSProperties}
              >
                Real Clinical Learning Experience
              </h3>
              <p
                className={`${revealClass('animate-load')} max-w-xl text-lg leading-relaxed text-slate-600`}
                style={{ '--delay': '280ms' } as CSSProperties}
              >
                Students gain hands-on training through real hospital exposure,
                advanced labs, and industry-focused programs.
              </p>
              <a
                href="#apply"
                className={`${revealClass('animate-load')} inline-flex items-center gap-2 rounded-full bg-[#2353b1] px-10 py-3 text-base font-semibold text-white transition-opacity hover:opacity-95`}
                style={{ '--delay': '360ms' } as CSSProperties}
              >
                Apply now
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
