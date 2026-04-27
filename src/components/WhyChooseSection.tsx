import { Play, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { reasons } from '../constants/why-choose'

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

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

  useEffect(() => {
    if (!videoOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVideoOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [videoOpen])

  useEffect(() => {
    if (videoOpen) return
    // Stop playback when closing modal.
    videoRef.current?.pause()
  }, [videoOpen])

  const revealClass = (animationClass: string) =>
    isVisible ? animationClass : 'opacity-0'

  return (
    <section ref={sectionRef} className="pt-0">
      <div className="relative bg-[#232529] px-6 pb-14 pt-20 md:px-10 md:pb-16 md:pt-24 lg:px-14">
        <div
          className="absolute inset-x-0 top-0 h-[220px] bg-white md:h-[250px]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <h2
            className={`${revealClass('animate-load')} text-center text-5xl font-semibold leading-tight text-black`}
            style={{ '--delay': '80ms' } as CSSProperties}
          >
            Why Choose VTrust?
          </h2>
          <div
            className={`${revealClass('animate-load')} relative mt-7 overflow-hidden rounded-3xl`}
            style={{ '--delay': '170ms' } as CSSProperties}
          >
            <img
              src="/hero/doc.jpg"
              alt="Healthcare team"
              className="h-[380px] w-full object-cover md:h-[500px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden />
            <button
              type="button"
              className="absolute left-1/2 top-1/2 cursor-pointer inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2353b1] text-white shadow-lg"
              aria-label="Play video"
              onClick={() => setVideoOpen(true)}
            >
              <Play className="size-7 fill-current" aria-hidden />
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className={`${revealClass('animate-load-from-right')} rounded-3xl bg-white p-6 shadow-sm shadow-black/15`}
                style={{ '--delay': `${240 + index * 90}ms` } as CSSProperties}
              >
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl border border-slate-200 text-vtrust-navy">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-3xl leading-tight font-semibold text-vtrust-navy">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {videoOpen ? (
        <div
          className="fixed inset-0 z-9998 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="VTRUST company video"
        >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close video modal backdrop"
            onClick={() => setVideoOpen(false)}
          />

          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/85"
              aria-label="Close video modal"
            >
              <X className="size-5" aria-hidden />
            </button>

            <div className="aspect-video w-full">
              <video
                ref={videoRef}
                src="/company/company.mp4"
                className="h-full w-full"
                autoPlay
                controls
                playsInline
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
