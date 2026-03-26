import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { EnquiryFormModal } from './components/EnquiryFormModal'
import { MobileAdmissionButton } from './components/MobileAdmissionButton'
import type { LegalDocument } from './data/legal'

type LegalPageTemplateProps = {
  content: LegalDocument
}

export default function LegalPageTemplate({ content }: LegalPageTemplateProps) {
  const mainRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = mainRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const revealClass = (animationClass: string) =>
    isVisible ? animationClass : 'opacity-0'

  return (
    <div className="min-h-svh bg-white">
      <Header />
      <main ref={mainRef} className="px-4 pb-10 pt-2 md:px-6 md:pb-14 lg:px-10">
        <section className="mx-auto w-full max-w-[1400px]">
          <div className={`${revealClass('animate-load')} relative overflow-hidden rounded-2xl`}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/generated/hero-bg.png')" }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,43,107,0.82)_0%,rgba(13,43,107,0.55)_45%,rgba(13,43,107,0.35)_100%)]"
              aria-hidden
            />

            <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
              <p
                className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.18em] text-white/80`}
                style={{ '--delay': '120ms' } as CSSProperties}
              >
                {content.focusLabel}
              </p>
              <h1
                className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl`}
                style={{ '--delay': '180ms' } as CSSProperties}
              >
                {content.title}
              </h1>
              <p
                className={`${revealClass('animate-load')} mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg`}
                style={{ '--delay': '220ms' } as CSSProperties}
              >
                {content.summary}
              </p>

              <div
                className={`${revealClass('animate-load')} mt-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[2px]`}
                style={{ '--delay': '260ms' } as CSSProperties}
              >
                <a href="/" className="font-semibold text-white/95 hover:text-white">
                  Home
                </a>
                <span className="text-white/70">/</span>
                <span className="font-medium text-white">{content.title}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[1000px] md:mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-7 shadow-sm shadow-black/5 sm:px-10 md:px-12 md:py-9">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '300ms' } as CSSProperties}
            >
              EFFECTIVE DATE
            </p>
            <p
              className={`${revealClass('animate-load')} mt-2 text-base font-semibold text-[#0D2B6B]`}
              style={{ '--delay': '340ms' } as CSSProperties}
            >
              {content.effectiveDate}
            </p>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1000px]">
          <div className="space-y-5">
            {content.sections.map((section, index) => (
              <article
                key={section.heading}
                className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5 md:p-8`}
                style={{ '--delay': `${360 + index * 35}ms` } as CSSProperties}
              >
                <h2 className="text-xl font-semibold text-[#0D2B6B]">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-slate-700 md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal />
      <MobileAdmissionButton />
    </div>
  )
}
