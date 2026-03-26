import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { EnquiryFormModal } from './components/EnquiryFormModal'
import { MobileAdmissionButton } from './components/MobileAdmissionButton'

type Leader = {
  name: string
  designation: string
  photo: string
}

const leadershipTeam: Leader[] = [
  {
    name: 'Dr. Managing Director',
    designation: 'Managing Director (MD)',
    photo: '/icons/image.png',
  },
  {
    name: 'Chief Executive Officer',
    designation: 'Chief Executive Officer (CEO)',
    photo: '/hero/doc.jpg',
  },
  {
    name: 'Dr. Academic Director',
    designation: 'Director – Academics & Quality',
    photo: '/generated/clinical-eye-banner.png',
  },
  {
    name: 'Principal',
    designation: 'Principal',
    photo: '/generated/journey-img.png',
  },
  {
    name: 'Chief Operating Officer',
    designation: 'Chief Operating Officer (COO)',
    photo: '/icons/image.png',
  },
  {
    name: 'Director – Clinical Training',
    designation: 'Director – Clinical Training & Partnerships',
    photo: '/hero/doc.jpg',
  },
  {
    name: 'Director – Admissions',
    designation: 'Director – Admissions & Student Affairs',
    photo: '/generated/journey-img.png',
  },
  {
    name: 'Head – Corporate Relations',
    designation: 'Head – Corporate & Industry Relations',
    photo: '/generated/clinical-eye-banner.png',
  },
]

export default function AboutPage() {
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
              style={{ backgroundImage: "url('/generated/clinical-eye-banner.png')" }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,43,107,0.82)_0%,rgba(13,43,107,0.55)_45%,rgba(13,43,107,0.35)_100%)]" aria-hidden />

            <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
              <p
                className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.18em] text-white/80`}
                style={{ '--delay': '120ms' } as CSSProperties}
              >
                VTRUST GROUP OF INSTITUTIONS
              </p>
              <h1
                className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl`}
                style={{ '--delay': '180ms' } as CSSProperties}
              >
                About Us
              </h1>

              <div
                className={`${revealClass('animate-load')} mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[2px]`}
                style={{ '--delay': '240ms' } as CSSProperties}
              >
                <a href="/" className="font-semibold text-white/95 hover:text-white">
                  Home
                </a>
                <span className="text-white/70">/</span>
                <span className="font-medium text-white">About</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[1400px] md:mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm shadow-black/5 sm:px-8 md:px-12 md:py-12">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '280ms' } as CSSProperties}
            >
              ABOUT US
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold leading-tight text-[#0D2B6B] sm:text-3xl md:text-4xl`}
              style={{ '--delay': '320ms' } as CSSProperties}
            >
              VTRUST Group of Institutions
            </h2>
            <div
              className={`${revealClass('animate-load')} mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg`}
              style={{ '--delay': '360ms' } as CSSProperties}
            >
              <p>
                VTRUST Group of Institutions is a healthcare education network
                dedicated to optometry, allied health, and management programmes.
                We combine structured academics with real clinical exposure so
                graduates are ready for patient care and professional practice
                from day one.
              </p>
              <p>
                With multiple centres across Kerala, we focus on quality faculty,
                modern labs, hospital partnerships, and student support—from
                admission through placements—so every learner can build a
                rewarding career in healthcare.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 grid w-full max-w-[1400px] gap-8 md:mt-12 md:grid-cols-2 md:items-center md:gap-10">
          <div
            className={`${revealClass('animate-load-right')} overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-black/5`}
            style={{ '--delay': '400ms' } as CSSProperties}
          >
            <img
              src="/generated/journey-img.png"
              alt="VTRUST institution overview"
              className="h-[280px] w-full object-cover sm:h-[340px] md:h-[420px]"
              loading="lazy"
            />
          </div>

          <div className={`${revealClass('animate-load-from-right')} space-y-5`} style={{ '--delay': '440ms' } as CSSProperties}>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2353b1]">
              INSTITUTION OVERVIEW
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#0D2B6B] sm:text-4xl">
              Building Healthcare Professionals Through Clinical Excellence
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              VTRUST Group of Institutions focuses on career-ready healthcare and
              optometry education by combining classroom theory with real
              clinical exposure, advanced labs, and experienced mentors.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-semibold text-[#0D2B6B]">Since 2021</p>
                <p className="mt-1 text-sm text-slate-600">Strong foundation in education</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-semibold text-[#0D2B6B]">4+ Centres</p>
                <p className="mt-1 text-sm text-slate-600">Growing presence across Kerala</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px] md:mt-14">
          <div className="text-center">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '420ms' } as CSSProperties}
            >
              OUR PURPOSE
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold leading-tight text-[#0D2B6B] sm:text-4xl`}
              style={{ '--delay': '460ms' } as CSSProperties}
            >
              Mission, Vision & Goals
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            <article
              className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5`}
              style={{ '--delay': '520ms' } as CSSProperties}
            >
              <h3 className="text-xl font-semibold text-[#0D2B6B]">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                To deliver industry-ready healthcare education through clinical
                exposure, skilled mentorship, and an academic environment that
                builds both competence and confidence.
              </p>
            </article>

            <article
              className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5`}
              style={{ '--delay': '600ms' } as CSSProperties}
            >
              <h3 className="text-xl font-semibold text-[#0D2B6B]">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                To become a leading institution in healthcare and optometry
                education by shaping responsible professionals who improve
                patient care and community well-being.
              </p>
            </article>

            <article
              className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5`}
              style={{ '--delay': '680ms' } as CSSProperties}
            >
              <h3 className="text-xl font-semibold text-[#0D2B6B]">Goals</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Expand quality training across campuses, strengthen hospital
                partnerships, and create clear career pathways through practical
                learning, internships, and placement support.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px] md:mt-14">
          <div className="text-center">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '760ms' } as CSSProperties}
            >
              WHAT WE STAND FOR
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold leading-tight text-[#0D2B6B] sm:text-4xl`}
              style={{ '--delay': '820ms' } as CSSProperties}
            >
              Core Values
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article
              className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-black/5`}
              style={{ '--delay': '900ms' } as CSSProperties}
            >
              <h3 className="text-lg font-semibold text-[#0D2B6B]">Integrity</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We uphold honesty, ethics, and accountability in education and
                clinical practice.
              </p>
            </article>

            <article
              className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-black/5`}
              style={{ '--delay': '980ms' } as CSSProperties}
            >
              <h3 className="text-lg font-semibold text-[#0D2B6B]">Excellence</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We focus on quality teaching, modern training, and continuous
                improvement across all campuses.
              </p>
            </article>

            <article
              className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-black/5`}
              style={{ '--delay': '1060ms' } as CSSProperties}
            >
              <h3 className="text-lg font-semibold text-[#0D2B6B]">Compassion</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We nurture empathy and patient-centered care as essential values
                for every healthcare professional.
              </p>
            </article>

            <article
              className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-black/5`}
              style={{ '--delay': '1140ms' } as CSSProperties}
            >
              <h3 className="text-lg font-semibold text-[#0D2B6B]">Innovation</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We embrace new ideas, technology, and collaborative learning to
                prepare students for future healthcare needs.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px] md:mt-14">
          <div className="text-center">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '1220ms' } as CSSProperties}
            >
              OUR JOURNEY
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold leading-tight text-[#0D2B6B] sm:text-4xl`}
              style={{ '--delay': '1280ms' } as CSSProperties}
            >
              Institution History
            </h2>
            <p
              className={`${revealClass('animate-load')} mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600`}
              style={{ '--delay': '1340ms' } as CSSProperties}
            >
              From a single vision to multiple campuses, VTRUST has grown by
              linking academic rigour with real hospital experience.
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-2xl pl-2">
            <div
              className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-slate-200"
              aria-hidden
            />

            <ul className="relative space-y-10">
              <li
                className={`${revealClass('animate-load-from-right')} relative pl-12`}
                style={{ '--delay': '1420ms' } as CSSProperties}
              >
                <span className="absolute left-[15px] top-1.5 z-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[#0D2B6B] bg-white" />
                <p className="text-sm font-semibold text-[#2353b1]">2021</p>
                <h3 className="mt-1 text-lg font-semibold text-[#0D2B6B]">
                  Foundation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  VTRUST Healthcare Education began with a mission to bridge
                  classroom theory and clinical practice for students entering
                  healthcare and optometry.
                </p>
              </li>

              <li
                className={`${revealClass('animate-load-from-right')} relative pl-12`}
                style={{ '--delay': '1500ms' } as CSSProperties}
              >
                <span className="absolute left-[15px] top-1.5 z-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[#0D2B6B] bg-white" />
                <p className="text-sm font-semibold text-[#2353b1]">2022–2023</p>
                <h3 className="mt-1 text-lg font-semibold text-[#0D2B6B]">
                  Programmes &amp; partnerships
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Diploma and degree pathways expanded across allied health,
                  optometry, and management, with stronger ties to clinical
                  sites for hands-on training.
                </p>
              </li>

              <li
                className={`${revealClass('animate-load-from-right')} relative pl-12`}
                style={{ '--delay': '1580ms' } as CSSProperties}
              >
                <span className="absolute left-[15px] top-1.5 z-1 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[#0D2B6B] bg-white" />
                <p className="text-sm font-semibold text-[#2353b1]">Today</p>
                <h3 className="mt-1 text-lg font-semibold text-[#0D2B6B]">
                  Four centres
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Students learn across multiple locations with continued
                  focus on quality faculty, modern labs, and pathways from
                  education to employment.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px] md:mt-16">
          <div className="text-center">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '1660ms' } as CSSProperties}
            >
              OUR LEADERSHIP
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold leading-tight text-[#0D2B6B] sm:text-4xl`}
              style={{ '--delay': '1720ms' } as CSSProperties}
            >
              Leadership Team
            </h2>
            <p
              className={`${revealClass('animate-load')} mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600`}
              style={{ '--delay': '1780ms' } as CSSProperties}
            >
              Meet the people guiding VTRUST’s strategy, academics, and
              day-to-day excellence across our campuses.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipTeam.map((leader, index) => (
              <article
                key={`${leader.name}-${leader.designation}`}
                className={`${revealClass('animate-load-from-right')} overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-black/5`}
                style={
                  { '--delay': `${1840 + index * 70}ms` } as CSSProperties
                }
              >
                <div className="aspect-4/5 overflow-hidden bg-slate-100">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center sm:p-5">
                  <h3 className="text-base font-semibold leading-snug text-[#0D2B6B]">
                    {leader.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-600 sm:text-sm">
                    {leader.designation}
                  </p>
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
