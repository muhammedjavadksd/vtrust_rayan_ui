import { Plus } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is the eligibility for B.Voc Optometry at VTRUST?',
    answer:
      'Eligibility is Plus Two (Commerce, Science, or Humanities) as per current admission guidelines for B.Voc Optometry.',
  },
  {
    question: 'Does VTRUST provide placement support for healthcare courses?',
    answer:
      'Yes. VTRUST provides career guidance, interview-oriented preparation, and placement assistance aligned with healthcare industry requirements.',
  },
  {
    question: 'Which are the best job-oriented paramedical courses after Plus Two?',
    answer:
      'At VTRUST, popular job-oriented options include B.Voc in OTT, B.Voc in MLT, B.Voc in Optometry, and short-term diplomas in administration domains.',
  },
  {
    question: 'Is VTRUST affiliated with UGC approved universities?',
    answer:
      'Yes. Courses are delivered under recognized affiliation pathways including UGC-approved university systems and approved vocational bodies as applicable to each program.',
  },
  {
    question: 'Where are VTRUST campuses located in Kerala and Karnataka?',
    answer:
      'VTRUST has presence in Thamarassery, Balussery, Koyilandy, and Vadakara to support students across key regions.',
  },
  {
    question: 'How can I apply for admission to VTRUST courses?',
    answer:
      'You can apply through the website enquiry process or contact the admissions team directly by phone for counselling and seat guidance.',
  },
  {
    question: 'Are hostel facilities available for students in VTRUST?',
    answer:
      'Hostel facilities are available for eligible students. Details on availability are provided during admissions.',
  },
  {
    question: 'What is the duration of diploma and degree courses at VTRUST?',
    answer:
      'Program durations vary by course. Degree programs typically take longer, while diplomas are shorter and focused.',
  },
] as const

export function FAQSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

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

  const reveal = (className: string) => (isVisible ? className : 'opacity-0')

  const bgStyle = useMemo((): { [key: string]: string } => {
    // Teal base with subtle block pattern (approximation of screenshot)
    return {
      background:
        '#d8f1ea',
      backgroundImage:
        [
          'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.0) 60%)',
          'radial-gradient(circle at 80% 10%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.0) 55%)',
          'linear-gradient(transparent 75%, rgba(255,255,255,0.35) 75%, rgba(255,255,255,0.35) 85%, transparent 85%)',
          'linear-gradient(90deg, transparent 75%, rgba(255,255,255,0.22) 75%, rgba(255,255,255,0.22) 85%, transparent 85%)',
        ].join(','),
      backgroundSize: 'auto, auto, 140px 140px, 140px 140px',
      backgroundPosition: 'center, center, 0 0, 0 0',
    }
  }, [])

  return (
    <section ref={sectionRef} className="pt-12 pb-0 md:pt-16 md:pb-0">
      <div
        className="w-full rounded-none bg-[#d8f1ea] px-6 pt-10 pb-8 md:px-10 md:pt-14 md:pb-10"
        style={bgStyle as CSSProperties}
      >
        <div className="text-center">
          <p
            className={`${reveal('animate-load')} text-xs font-semibold tracking-[0.18em] text-[#2ea89a]`}
            style={{ '--delay': '80ms' } as CSSProperties}
          >
            FAQ&apos;s
          </p>
          <h2
            className={`${reveal('animate-load')} mt-2 text-3xl font-semibold text-black md:text-[2.6rem]`}
            style={{ '--delay': '160ms' } as CSSProperties}
          >
            Quick &amp; Clear Answers
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-[820px] space-y-4">
          {faqs.map((item, index) => {
            const open = activeIndex === index
            return (
              <div
                key={item.question}
                className={`${reveal('animate-load')} rounded-xl bg-white shadow-sm shadow-black/5`}
                style={{ '--delay': `${220 + index * 80}ms` } as CSSProperties}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  onClick={() => setActiveIndex(open ? null : index)}
                  aria-expanded={open}
                >
                  <span className="text-sm font-semibold text-[#0a2a6b] md:text-[1rem]">
                    {item.question}
                  </span>
                  <span
                    className={[
                      'inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white/80 transition-colors',
                      open ? 'bg-vtrust-navy/5' : '',
                    ].join(' ')}
                    aria-hidden
                  >
                    <Plus
                      className={`size-3.5 text-[#0a2a6b] transition-transform ${
                        open ? 'rotate-45' : 'rotate-0'
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`min-h-0 overflow-hidden transition-[max-height,opacity] duration-300 ${
                    open
                      ? 'max-h-[220px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-3 pt-0">
                    <p className="text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

