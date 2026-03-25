import { Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export function JourneySection() {
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
    <section
      ref={sectionRef}
      className="overflow-x-clip px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
        <div className="relative">
          <div
            className={`${revealClass('animate-load-right')} absolute -left-8 -top-10 z-0 grid h-[264px] w-[120px] grid-cols-4 grid-rows-8 content-start gap-x-4 gap-y-5`}
            style={{ '--delay': '80ms' } as CSSProperties}
            aria-hidden
          >
            {Array.from({ length: 32 }).map((_, i) => (
              <span key={i} className="h-3 w-3 rounded-full bg-[#BCBBBB]" />
            ))}
          </div>

          <div
            className={`${revealClass('animate-load')} absolute bottom-[-38px] right-[-28px] h-40 w-44 rounded-2xl bg-[#dff3ef]`}
            style={{ '--delay': '140ms' } as CSSProperties}
            aria-hidden
          />

          <div
            className={`${revealClass('animate-load-right')} relative z-10 ml-3 w-[95%] overflow-hidden rounded-3xl shadow-sm shadow-black/10 md:ml-5 md:w-[93%]`}
            style={{ '--delay': '170ms' } as CSSProperties}
          >
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
              alt="Medical team group"
              className="h-[280px] w-full object-cover md:h-[330px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-6">
          <p
            className={`${revealClass('animate-load')} text-sm font-semibold tracking-[0.15em] text-[#2ea89a] uppercase`}
            style={{ '--delay': '140ms' } as CSSProperties}
          >
            Our Journey
          </p>
          <h2
            className={`${revealClass('animate-load')}  text-2xl leading-[1.08] font-semibold text-black md:text-[2.8rem]`}
            style={{ '--delay': '220ms' } as CSSProperties}
          >
            Since 2021, we&apos;ve redefined medical training.
          </h2>
          <p
            className={`${revealClass('animate-load')} max-w-xl text-lg leading-relaxed text-slate-600`}
            style={{ '--delay': '300ms' } as CSSProperties}
          >
            V Trust Healthcare Education was founded with a mission: bridge
            academic theory and real-world clinical excellence through rapid
            expansion and strong partnerships.
          </p>

          <div className="grid max-w-md grid-cols-2 gap-6 pt-1">
            <div
              className={revealClass('animate-load')}
              style={{ '--delay': '360ms' } as CSSProperties}
            >
              <p className="text-6xl leading-none font-bold text-vtrust-navy">15+</p>
              <p className="mt-2 text-base text-slate-500">Global Affiliations</p>
            </div>
            <div
              className={revealClass('animate-load')}
              style={{ '--delay': '430ms' } as CSSProperties}
            >
              <p className="text-6xl leading-none font-bold text-vtrust-navy">2k+</p>
              <p className="mt-2 text-base text-slate-500">Active Students</p>
            </div>
          </div>

          <a
            href="#story"
            className={`${revealClass('animate-load')} inline-flex items-center gap-3 pt-2 text-xl font-semibold text-vtrust-navy`}
            style={{ '--delay': '510ms' } as CSSProperties}
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#2353b1] text-white">
              <Play className="size-5 fill-current" aria-hidden />
            </span>
            Watch Our Story
          </a>
        </div>
      </div>
    </section>
  )
}
