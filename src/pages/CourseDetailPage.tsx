import { ArrowRight } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { EnquiryFormModal } from '../components/EnquiryFormModal'
import { MobileAdmissionButton } from '../components/MobileAdmissionButton'
import { useEnquiryForm } from '../hooks/useEnquiryForm'
import { useCourse } from '../hooks/useCourse'

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { course, loading, error } = useCourse(slug || '')
  const { form, submitted, handleChange, handleSubmit } = useEnquiryForm()

  const onLocalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit(async () => {
      // For now, this is just a local success since we don't have a specific course enquiry API yet that's different from the general one
      return Promise.resolve()
    })
  }

  if (loading) {
    return (
      <div className="min-h-svh bg-white">
        <Header />
        <main className="mx-auto w-full max-w-[1400px] px-4 py-16 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#2353b1]">COURSE DETAIL</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#0D2B6B]">Loading course details...</h1>
        </main>
        <Footer />
        <EnquiryFormModal />
        <MobileAdmissionButton />
      </div>
    )
  }

  if (error || !course) {
    return (
      <div className="min-h-svh bg-white">
        <Header />
        <main className="mx-auto w-full max-w-[1400px] px-4 py-16 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#2353b1]">COURSE DETAIL</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#0D2B6B]">Course not found</h1>
          <a href="/courses" className="mt-4 inline-flex items-center gap-2 text-[#0D2B6B] hover:underline">
            Back to courses
          </a>
        </main>
        <Footer />
        <EnquiryFormModal />
        <MobileAdmissionButton />
      </div>
    )
  }

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
                {course.CourseOverview}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                  <p className="text-xs font-semibold tracking-wide text-[#2353b1]">
                    College
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#0D2B6B]">
                    {course.college}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                  <p className="text-xs font-semibold tracking-wide text-[#2353b1]">
                    University / Affiliation
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#0D2B6B]">
                    {course.university}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold tracking-wide text-[#2353b1]">
                    Category
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#0D2B6B]">
                    {course.category}
                  </p>
                </div>
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
                {course.courseRoll}
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
                Course Highlights
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.courseHighlights?.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
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
                src={course.imageUrl}
                alt={course.name}
                className="h-[260px] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-xs font-semibold tracking-wide text-[#2353b1]">
                  {course.type}
                </p>
                {course.ugcApproved ? (
                  <p className="mt-1 text-xs font-bold tracking-[0.12em] text-emerald-700">
                    UGC APPROVED
                  </p>
                ) : null}
                <h3 className="mt-2 text-xl font-semibold text-[#0D2B6B]">
                  {course.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {course.CourseOverview}
                </p>
                <a
                  href="#course-inquiry"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0D2B6B] px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Apply Now
                  <ArrowRight className="size-4" aria-hidden />
                </a>
                {course.brochurePdf ? (
                  <a
                    href={course.brochurePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-[#0D2B6B] transition-colors hover:bg-slate-50"
                  >
                    Download brochure
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                ) : null}
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
                Ask for detailed information about {course.name}.
              </p>

              {submitted ? (
                <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm font-medium text-slate-700">
                  Thank you. Your inquiry has been submitted successfully.
                </p>
              ) : (
                <form
                  className="mt-4 space-y-3"
                  onSubmit={onLocalSubmit}
                >
                  <input
                    value={form.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    required
                    placeholder="Full Name"
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#2353b1]"
                  />
                  <input
                    value={form.emailOrPhone}
                    onChange={(e) => handleChange('emailOrPhone', e.target.value)}
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
                    onChange={(e) => handleChange('message', e.target.value)}
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
