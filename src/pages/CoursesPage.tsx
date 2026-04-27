import { ArrowUpRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { EnquiryFormModal } from '../components/EnquiryFormModal'
import { MobileAdmissionButton } from '../components/MobileAdmissionButton'
import { tabs } from '../types/course'
import { useCourses } from '../hooks/useCourses'
import { useCategories } from '../hooks/useCategories'

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState<'All Courses' | string>(
    'All Courses',
  )
  
  const { courses, loading: coursesLoading } = useCourses()
  const { categories: apiCategories, loading: categoriesLoading } = useCategories()
  
  const categories = useMemo(() => {
    return apiCategories.length > 0 ? apiCategories : Array.from(tabs)
  }, [apiCategories])

  const isLoading = coursesLoading || categoriesLoading

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'All Courses') return courses
    return courses.filter((course) => course.category === activeFilter)
  }, [activeFilter, courses])

  return (
    <div className="min-h-svh bg-white">
      <Header />
      <main className="px-4 pb-10 pt-2 md:px-6 md:pb-14 lg:px-10">
        <section className="mx-auto w-full max-w-[1400px]">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/generated/clinical-eye-banner.png')" }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,43,107,0.82)_0%,rgba(13,43,107,0.55)_45%,rgba(13,43,107,0.35)_100%)]"
              aria-hidden
            />

            <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
              <p className="text-xs font-semibold tracking-[0.18em] text-white/80">
                VTRUST GROUP OF INSTITUTIONS
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Courses
              </h1>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[2px]">
                <a href="/" className="font-semibold text-white/95 hover:text-white">
                  Home
                </a>
                <span className="text-white/70">/</span>
                <span className="font-medium text-white">Courses</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[1400px] md:mt-12">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#2353b1]">
              PROGRAMMES
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl md:text-4xl">
              All courses
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
              Explore our diploma, undergraduate, and postgraduate offerings across
              optometry, allied health, management, and nutrition.
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
              Updated with brochure-backed course details from the latest uploaded
              institute documents.
            </p>
            <a
              href="/course/institute.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2353b1] hover:underline"
            >
              View institute details (PDF)
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {['All Courses', ...categories].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  activeFilter === filter
                    ? 'bg-[#0D2B6B] text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-[#0D2B6B]/40 hover:text-[#0D2B6B]',
                ].join(' ')}
              >
                {filter}
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-sm text-slate-600">
            Showing {filteredCourses.length} courses
            {isLoading ? ' (loading from API...)' : ''}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map((course) => (
              <article
                key={course.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-black/5"
              >
                <div className="overflow-hidden rounded-t-2xl bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-[#2353b1]">
                    {course.category}
                  </p>
                  <h3 className="mt-2 min-h-14 text-lg font-semibold leading-tight text-black">
                    {course.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                    {course.description}
                  </p>
                  <a
                    href={`/courses/${course.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-vtrust-navy"
                  >
                    View curriculum
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                  {course.brochurePdf ? (
                    <a
                      href={course.brochurePdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[#2353b1]"
                    >
                      Download brochure
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  ) : null}
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
