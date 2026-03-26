import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export function ClinicalLearningCard() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleApplyNow = () => {
    window.dispatchEvent(new CustomEvent('vtrust:open-enquiry-modal'))

    // Fallback action: if modal is not visible, route to Contact page.
    window.setTimeout(() => {
      const hasDialog = Boolean(
        document.querySelector('[role="dialog"][aria-modal="true"]'),
      )
      if (!hasDialog) window.location.assign('/contact')
    }, 250)
  }

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
        <div className="rounded-3xl border border-slate-200 bg-white">
          <div className="grid items-center gap-6 p-6 md:gap-10 md:p-8 md:grid-cols-[0.46fr_0.54fr]">
            {/* Left banner image */}
            <div
              className={`${revealClass('animate-load-right')} overflow-hidden rounded-[26px]`}
              style={{ '--delay': '160ms' } as CSSProperties}
              aria-hidden
            >
              <img
                src="/generated/clinical-eye-banner.png"
                alt="Doctor checking a patient eye"
                className="h-[138px] w-full object-cover sm:h-[160px] md:h-[190px]"
                loading="lazy"
              />
            </div>

            {/* Text side */}
            <div className="text-center md:pr-8">
              <div className="space-y-3">
                <h3
                  className={`${revealClass('animate-load')} text-2xl font-semibold leading-tight text-vtrust-navy sm:text-3xl`}
                  style={{ '--delay': '200ms' } as CSSProperties}
                >
                  Real Clinical Learning Experience
                </h3>
                <p
                  className={`${revealClass('animate-load')} mx-auto max-w-[420px] text-sm leading-relaxed text-slate-600 sm:text-base`}
                  style={{ '--delay': '280ms' } as CSSProperties}
                >
                  Students gain hands-on training through real hospital exposure, advanced labs, and industry-focused programs.
                </p>
                <button
                  type="button"
                  className={`${revealClass('animate-load')} inline-flex items-center justify-center gap-2 rounded-full bg-[#0D2B6B] px-8 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-95`}
                  style={{ '--delay': '360ms' } as CSSProperties}
                  onClick={handleApplyNow}
                >
                  Apply now
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
