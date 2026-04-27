import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useEffect, useState, useCallback, type CSSProperties } from 'react'
import { badges, bannerContents, BANNER_IMAGES } from '../constants/hero'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalSlides = BANNER_IMAGES.length

  const openEnquiryModal = () => {
    window.dispatchEvent(new CustomEvent('vtrust:open-enquiry-modal'))
  }

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % totalSlides)
  }, [currentSlide, goToSlide, totalSlides])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides)
  }, [currentSlide, goToSlide, totalSlides])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const content = bannerContents[currentSlide]

  return (
    <section className="flex min-h-[calc(100svh-6.5rem-50px)] flex-col pt-0 pb-4 md:min-h-[calc(100svh-7rem-50px)] md:pb-6 lg:pt-0 lg:min-h-[calc(100svh-5.5rem-50px)]">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
        <div className="relative flex h-full min-h-[calc(100svh-7.5rem-50px)] w-full flex-col overflow-hidden rounded-2xl shadow-lg shadow-black/10 md:min-h-[calc(100svh-8rem-50px)] lg:min-h-[calc(100svh-6.5rem-50px)]">
          {BANNER_IMAGES.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${image}')` }}
              role="img"
              aria-hidden={index !== currentSlide}
            />
          ))}
          <div className="absolute inset-0 bg-slate-950/55" aria-hidden />

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20 lg:left-4 lg:p-3"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-5 lg:size-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20 lg:right-4 lg:p-3"
            aria-label="Next slide"
          >
            <ChevronRight className="size-5 lg:size-6" />
          </button>

          <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col px-3 py-8 sm:px-4 sm:py-10 md:px-4 md:py-12 lg:px-5 lg:py-14">
            <div className="flex min-h-0 flex-1 flex-col justify-center">
              <div className="max-w-2xl">
                <h1
                  className={`animate-load text-[2rem] font-bold leading-[1.1] tracking-tight text-white transition-all duration-500 sm:text-4xl md:text-5xl lg:text-[3.25rem] ${
                    isTransitioning ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'
                  }`}
                  style={{ '--delay': '180ms' } as CSSProperties}
                >
                  <span className="block">{content.title}</span>
                  <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-2 sm:mt-2">
                    <span className="inline-block rounded-lg bg-hero-teal px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
                      {content.titleAccent}
                    </span>
                    <span className="text-white">{content.titleSuffix}</span>
                  </span>
                </h1>

                <p
                  className={`animate-load mt-6 max-w-xl text-base leading-relaxed text-white/95 transition-all duration-500 sm:text-lg ${
                    isTransitioning ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'
                  }`}
                  style={{ '--delay': '260ms' } as CSSProperties}
                >
                  {content.descriptionLinks && content.descriptionLinks.length > 0 ? (
                    <>
                      {'Join thousands of successful graduates who have built rewarding careers. Affiliated with top universities like '}
                      <a
                        href={content.descriptionLinks[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-hero-teal"
                      >
                        {content.descriptionLinks[0].text}
                      </a>
                      {' & '}
                      <a
                        href={content.descriptionLinks[1].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-hero-teal"
                      >
                        {content.descriptionLinks[1].text}
                      </a>
                      {' ensuring quality education and recognized certifications.'}
                    </>
                  ) : (
                    content.description
                  )}
                </p>

                <div className={`mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 transition-all duration-500 ${
                    isTransitioning ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'
                  }`}>
                  <a
                    href={content.primaryCta.href}
                    className="animate-load inline-flex items-center justify-center gap-2 rounded-full bg-hero-teal px-6 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-95 sm:text-base"
                    style={{ '--delay': '320ms' } as CSSProperties}
                  >
                    {content.primaryCta.text}
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </a>
                  <button
                    type="button"
                    onClick={openEnquiryModal}
                    className="animate-load inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/90 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-[2px] transition-colors hover:bg-white/10 sm:text-base"
                    style={{ '--delay': '380ms' } as CSSProperties}
                  >
                    {content.secondaryCta.text}
                  </button>
                </div>
              </div>
            </div>

            <div className={`mt-6 flex flex-col gap-4 border-t border-white/20 pt-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3 sm:border-white/15 sm:pt-6 transition-all duration-500 ${
                    isTransitioning ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'
                  }`}>
              {badges.map(({ icon: Icon, label }, index) => (
                <div
                  key={label}
                  className="animate-load flex items-center gap-2.5 text-sm font-semibold text-white"
                  style={{ '--delay': `${430 + index * 80}ms` } as CSSProperties}
                >
                  <Icon
                    className="size-5 shrink-0 text-hero-teal sm:size-6"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 lg:bottom-6">
            {BANNER_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-hero-teal'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
