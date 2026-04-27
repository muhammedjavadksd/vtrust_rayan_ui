import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react'
import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { testimonials } from '../constants/testimonials'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useTestimonialSlider } from '../hooks/useTestimonialSlider'

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  
  // Logic extracted to dedicated hooks
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.16, rootMargin: '0px 0px -10% 0px' })
  const { activeIndex, setActiveIndex, prev, next, pointerHandlers } = useTestimonialSlider(testimonials.length)

  const revealClass = (animationClass: string) =>
    isVisible ? `${animationClass} ` : 'opacity-0 '

  const t = testimonials[activeIndex]!

  return (
    <section
      ref={sectionRef}
      className="pt-0 pb-14 md:pb-18 lg:pb-18"
    >
      <div
        className="relative w-full overflow-hidden bg-[#2353b1]"
        {...pointerHandlers}
      >
        {/* Overlapping translucent shapes (no grid) */}
        <div
          className="absolute inset-0 z-0"
          aria-hidden
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.06) 65%, rgba(0,0,0,0.00) 100%)',
          }}
        />
        <div
          className="absolute right-0 top-0 z-0 h-[210px] w-[420px] rounded-l-[24px] bg-white/10"
          aria-hidden
        />
        <div
          className="absolute right-0 top-[120px] z-0 h-[180px] w-[340px] rounded-l-[28px] bg-white/8"
          aria-hidden
        />
        <div
          className="absolute right-[140px] top-[60px] z-0 h-[120px] w-[190px] rounded-3xl bg-white/8"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 right-0 z-0 h-[120px] bg-[#1d428f]/55"
          aria-hidden
        />
        <div
          className="absolute bottom-[-10px] left-[55%] z-0 h-[90px] w-[520px] rounded-[40px] bg-[#1d428f]/60"
          aria-hidden
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-10 p-8 md:grid-cols-[0.48fr_1fr] md:gap-12 md:p-12">
          <div className="col-span-full flex justify-center">
            <p
              className={`${revealClass('animate-load')} w-full text-center text-3xl font-semibold tracking-widest text-white/80 md:text-4xl`}
              style={{ '--delay': '60ms' } as CSSProperties}
            >
              VOICE OF SUCCESS
            </p>
          </div>

          <div
            className={revealClass('animate-load')}
            style={{ '--delay': '120ms' } as CSSProperties}
          >
            <img
              src={t.image}
              alt={t.name}
              className="h-52 w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>

          <div
            className={revealClass('animate-load-right')}
            style={{ '--delay': '140ms' } as CSSProperties}
          >
            <p className="text-[2.2rem] font-semibold leading-none text-white/90 md:text-[2.55rem]">
              “
            </p>
            <blockquote className="mt-2 text-base leading-relaxed text-white/90 md:text-lg">
              {t.quote}
            </blockquote>

            <div className="mt-6 flex items-center gap-6">
              <div className="space-y-1">
                <p className="text-lg font-semibold text-white">{t.name}</p>
                <div className="flex items-center gap-1 text-[#ffd166]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
              </div>

              <div className="ml-auto hidden items-center gap-3 md:flex">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#2353b1] text-white">
                  <Play className="size-5 fill-current" aria-hidden />
                </span>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={[
                      'h-2.5 w-2.5 rounded-full transition-colors',
                      i === activeIndex ? 'bg-white' : 'bg-white/35',
                    ].join(' ')}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
