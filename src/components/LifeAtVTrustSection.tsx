import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

type GalleryItem = {
  src: string
  alt: string
  className: string
}

const gallery: GalleryItem[] = [
  {
    src: '/generated/journey-img.png',
    alt: 'Healthcare professional with patient',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/generated/journey-img.png',
    alt: 'Medical team in hospital',
    className: 'col-span-2 row-span-1',
  },
  {
    src: '/generated/journey-img.png',
    alt: 'Hospital corridor',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/generated/journey-img.png',
    alt: 'Dental clinic consultation',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/generated/journey-img.png',
    alt: 'Surgeon preparing',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/generated/journey-img.png',
    alt: 'Research and laboratory',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/generated/journey-img.png',
    alt: 'Laboratory equipment',
    className: 'col-span-1 row-span-1',
  },
]

export function LifeAtVTrustSection() {
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
        <h2
          className={`${revealClass('animate-load')} text-center text-2xl font-semibold text-black md:text-3xl`}
          style={{ '--delay': '60ms' } as CSSProperties}
        >
          Life at V Trust
        </h2>

        {/* Structured collage: 2 rows x 4 columns, with one tile spanning 2 columns on the top row */}
        <div className="mt-10 grid h-[440px] grid-cols-4 grid-rows-2 gap-4 rounded-2xl bg-white p-0 shadow-sm shadow-black/5 md:mt-12 md:h-[480px] lg:h-[520px]">
          {/* We rely on the natural order + spans to place each item into the collage cells */}
          {gallery.map((item, index) => (
            <div
              key={item.alt}
              className={[
                item.className,
                'h-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm shadow-black/5',
                revealClass('animate-load-from-right'),
              ].join(' ')}
              style={{ '--delay': `${160 + index * 60}ms` } as CSSProperties}
            >
              <img
                src="/generated/journey-img.png"
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

