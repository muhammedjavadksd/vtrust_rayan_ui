import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { EnquiryFormModal } from './components/EnquiryFormModal'
import { MobileAdmissionButton } from './components/MobileAdmissionButton'
import type { CourseRecord } from './data/courses'

type Props = {
  course: CourseRecord
}

export default function CourseDetailPage({ course }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    emailOrPhone: '',
    message: '',
  })

  return (
    <div className="min-h-svh bg-white">
      <Header />
      <main className="px-4 pb-10 pt-2 md:px-6 md:pb-14 lg:px-10">
        <section className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${course.image}')` }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,43,107,0.82)_0%,rgba(13,43,107,0.55)_45%,rgba(13,43,107,0.35)_100%)]"
              aria-hidden
            />

            <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
              <p className="text-xs font-semibold tracking-[0.18em] text-white/80">
                COURSE DETAIL
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                {course.title}
              </h1>

              <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[2px]">
                <a href="/" className="font-semibold text-white/95 hover:text-white">
                  Home
                </a>
                <span className="text-white/70">/</span>
                <a
                  href="/courses"
                  className="font-semibold text-white/95 hover:text-white"
                >
                  Courses
                </a>
                <span className="text-white/70">/</span>
                <span className="font-medium text-white">{course.title}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 grid w-full max-w-[1400px] gap-8 md:grid-cols-[0.58fr_0.42fr]">
          <div className="space-y-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5 md:p-7">
              <h2 className="text-2xl font-semibold text-[#0D2B6B]">
                Course Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {course.overview}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold tracking-wide text-[#2353b1]">
                    Duration
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#0D2B6B]">
                    {course.duration}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold tracking-wide text-[#2353b1]">
                    Eligibility
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#0D2B6B]">
                    {course.eligibility}
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5 md:p-7">
              <h2 className="text-2xl font-semibold text-[#0D2B6B]">
                Role of the Course
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {course.roleOfCourse}
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5 md:p-7">
              <h2 className="text-2xl font-semibold text-[#0D2B6B]">
                Syllabus (Subject Breakdown)
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.syllabus.map((subject) => (
                  <li
                    key={subject}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {subject}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5 md:p-7">
              <h2 className="text-2xl font-semibold text-[#0D2B6B]">
                Career Outcomes
              </h2>
              <ul className="mt-4 space-y-2">
                {course.careerOutcomes.map((outcome) => (
                  <li key={outcome} className="text-base text-slate-600">
                    - {outcome}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-black/5">
              <img
                src={course.image}
                alt={course.title}
                className="h-[260px] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-xs font-semibold tracking-wide text-[#2353b1]">
                  {course.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#0D2B6B]">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {course.description}
                </p>
                <a
                  href="#course-inquiry"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0D2B6B] px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Apply Now
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>

            <section
              id="course-inquiry"
              className="scroll-mb-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-black/5"
            >
              <h3 className="text-xl font-semibold text-[#0D2B6B]">
                Specific Inquiry Form
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Ask for detailed information about {course.title}.
              </p>

              {submitted ? (
                <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm font-medium text-slate-700">
                  Thank you. Your inquiry has been submitted successfully.
                </p>
              ) : (
                <form
                  className="mt-4 space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <input
                    value={form.fullName}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                    required
                    placeholder="Full Name"
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#2353b1]"
                  />
                  <input
                    value={form.emailOrPhone}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        emailOrPhone: e.target.value,
                      }))
                    }
                    required
                    placeholder="Email or Phone"
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#2353b1]"
                  />
                  <input
                    value={course.title}
                    disabled
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-600"
                  />
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Your message"
                    className="min-h-[110px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2353b1]"
                  />
                  <button
                    type="submit"
                    className="h-11 w-full rounded-xl bg-[#2353b1] text-sm font-semibold text-white transition-opacity hover:opacity-95"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </section>
          </aside>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal />
      <MobileAdmissionButton />
    </div>
  )
}
