import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { EnquiryFormModal } from '../../components/EnquiryFormModal'
import { MobileAdmissionButton } from '../../components/MobileAdmissionButton'
import { useLegalPageAnimations } from '../../hooks/useLegalPageAnimations'
import { AnimationClass, AnimationDelay } from '../../enums/ui'
import { calculateSectionDelay } from '../../utils/animation'
import type { LegalPageTemplateProps, LegalDocumentSection } from '../../types/legal'

export default function LegalPageTemplate({ content }: LegalPageTemplateProps) {
  const { mainRef, revealClass, getAnimationStyle } = useLegalPageAnimations()

  const openEnquiryModal = () => {
    window.dispatchEvent(new CustomEvent('vtrust:open-enquiry-modal'))
  }

  return (
    <div className="min-h-svh bg-[#F8FAFC]">
      <Header />

      <main ref={mainRef} className="px-4 pb-12 pt-4 md:px-6 md:pb-16 lg:px-10">
        <section className="mx-auto w-full max-w-[1400px]">
          <div className={`${revealClass(AnimationClass.LOAD)} relative overflow-hidden rounded-3xl`}>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url('/generated/hero-bg.png')" }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,43,107,0.82)_0%,rgba(13,43,107,0.55)_45%,rgba(13,43,107,0.35)_100%)]"
              aria-hidden
            />

            <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 md:px-16 md:py-24">
              <div className="max-w-3xl">
                <span
                  className={`${revealClass(AnimationClass.LOAD_FROM_RIGHT)} inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg backdrop-blur-md`}
                  style={getAnimationStyle(AnimationDelay.HERO_LABEL)}
                >
                  {content.focusLabel}
                </span>

                <h1
                  className={`${revealClass(AnimationClass.LOAD)} mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl`}
                  style={getAnimationStyle(AnimationDelay.HERO_TITLE)}
                >
                  {content.title}
                </h1>

                <p
                  className={`${revealClass(AnimationClass.LOAD)} mt-6 text-lg leading-relaxed text-slate-100/90 md:text-xl`}
                  style={getAnimationStyle(AnimationDelay.HERO_SUMMARY)}
                >
                  {content.summary}
                </p>

                <div
                  className={`${revealClass(AnimationClass.LOAD)} mt-10 flex flex-wrap items-center gap-6`}
                  style={getAnimationStyle(AnimationDelay.HERO_BREADCRUMB)}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">
                      Last Updated
                    </span>
                    <span className="text-sm font-medium text-white">
                      {content.effectiveDate}
                    </span>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <button
                    onClick={openEnquiryModal}
                    className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0D2B6B] transition-all hover:bg-[#EEF2FF] hover:shadow-xl hover:shadow-white/10"
                  >
                    Get Policy PDF
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0D2B6B] transition-all group-hover:scale-150" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1000px]">
          <div className="space-y-5">
            {content.sections.map((section: LegalDocumentSection, index: number) => (
              <article
                key={section.heading}
                className={`${revealClass(AnimationClass.LOAD_FROM_RIGHT)} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5 md:p-8`}
                style={getAnimationStyle(calculateSectionDelay(AnimationDelay.SECTIONS_START, index))}
              >
                <h2 className="text-xl font-semibold text-[#0D2B6B]">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph: string) => (
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
