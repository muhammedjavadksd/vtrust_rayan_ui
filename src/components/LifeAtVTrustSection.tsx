import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

type GalleryItem = {
  src: string
  alt: string
  className: string
}

const gallery: GalleryItem[] = [
  {
    src: '/gallery/1.png',
    alt: 'VTRUST gallery image 1',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/2.png',
    alt: 'VTRUST gallery image 2',
    className: 'col-span-2 row-span-1',
  },
  {
    src: '/gallery/3.png',
    alt: 'VTRUST gallery image 3',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/4.png',
    alt: 'VTRUST gallery image 4',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/5.png',
    alt: 'VTRUST gallery image 5',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/6.png',
    alt: 'VTRUST gallery image 6',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/7.png',
    alt: 'VTRUST gallery image 7',
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

        {/* Mobile: strict 2 x 3 grid with equal square tiles */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
          {gallery.slice(0, 6).map((item, index) => (
            <div
              key={`mobile-${item.alt}`}
              className={[
                'aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-sm shadow-black/5',
                revealClass('animate-load-from-right'),
              ].join(' ')}
              style={{ '--delay': `${160 + index * 60}ms` } as CSSProperties}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Tablet/Desktop: structured collage */}
        <div className="mt-12 hidden h-[480px] grid-cols-4 grid-rows-2 gap-4 rounded-2xl bg-white p-0 shadow-sm shadow-black/5 md:grid lg:h-[520px]">
          {gallery.map((item, index) => (
            <div
              key={`desktop-${item.alt}`}
              className={[
                item.className,
                'h-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm shadow-black/5',
                revealClass('animate-load-from-right'),
              ].join(' ')}
              style={{ '--delay': `${160 + index * 60}ms` } as CSSProperties}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div
          className={`${revealClass('animate-load')} mt-8 flex justify-center`}
          style={{ '--delay': '620ms' } as CSSProperties}
        >
          <a
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full bg-[#0D2B6B] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95"
          >
            Explore Gallery
          </a>
        </div>
      </div>
    </section>
  )
}

