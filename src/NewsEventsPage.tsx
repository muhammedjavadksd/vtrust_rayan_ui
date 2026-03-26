import { ArrowRight, CalendarDays, Mic2, Newspaper } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { EnquiryFormModal } from './components/EnquiryFormModal'
import { MobileAdmissionButton } from './components/MobileAdmissionButton'
import {
  eventAnnouncements,
  formatPostDate,
  getBlogFeed,
  mediaCoverage,
} from './data/news-events'

function CardCta({
  href,
  label,
  variant = 'solid',
}: {
  href: string
  label: string
  variant?: 'solid' | 'outline'
}) {
  const base =
    'mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-95 sm:w-auto'
  if (variant === 'outline') {
    return (
      <a
        href={href}
        className={`${base} border border-slate-200 bg-white text-[#0D2B6B] hover:bg-slate-50`}
      >
        {label}
        <ArrowRight className="size-4" aria-hidden />
      </a>
    )
  }
  return (
    <a
      href={href}
      className={`${base} bg-[#0D2B6B] text-white shadow-sm`}
    >
      {label}
      <ArrowRight className="size-4" aria-hidden />
    </a>
  )
}

export default function NewsEventsPage() {
  const mainRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const blogFeed = useMemo(() => getBlogFeed(9), [])

  const sortedEvents = useMemo(
    () =>
      [...eventAnnouncements].sort(
        (a, b) =>
          new Date(a.startsOn).getTime() - new Date(b.startsOn).getTime(),
      ),
    [],
  )

  const sortedMedia = useMemo(
    () =>
      [...mediaCoverage].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  )

  useEffect(() => {
    const node = mainRef.current
    if (!node) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)

    // Mobile/Safari fallback to prevent content staying hidden
    const fallback = window.setTimeout(() => {
      setIsVisible(true)
      observer.disconnect()
    }, 450)

    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
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
                VTRUST GROUP OF INSTITUTIONS
              </p>
              <h1
                className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl`}
                style={{ '--delay': '180ms' } as CSSProperties}
              >
                News &amp; Events
              </h1>
              <p
                className={`${revealClass('animate-load')} mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg`}
                style={{ '--delay': '220ms' } as CSSProperties}
              >
                Stay close to what is happening now — fresh stories, upcoming
                moments to join, and how the wider world covers our work.
              </p>

              <div
                className={`${revealClass('animate-load')} mt-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[2px]`}
                style={{ '--delay': '260ms' } as CSSProperties}
              >
                <a href="/" className="font-semibold text-white/95 hover:text-white">
                  Home
                </a>
                <span className="text-white/70">/</span>
                <span className="font-medium text-white">News &amp; Events</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[1400px] md:mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm shadow-black/5 sm:px-10 md:px-12 md:py-12">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '300ms' } as CSSProperties}
            >
              ENGAGEMENT &amp; RECENCY
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
              style={{ '--delay': '340ms' } as CSSProperties}
            >
              Timely updates you can act on
            </h2>
            <p
              className={`${revealClass('animate-load')} mt-4 max-w-3xl text-base leading-relaxed text-slate-600`}
              style={{ '--delay': '380ms' } as CSSProperties}
            >
              The feed below is built from live data and sorted by date so the
              newest campus voices, invitations, and press mentions surface
              first. Use each card&apos;s call-to-action to read deeper, save a
              seat, or open external coverage.
            </p>
          </div>
        </section>

        <section
          className="mx-auto mt-12 w-full max-w-[1400px]"
          aria-labelledby="blog-feed-heading"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className={`${revealClass('animate-load')} flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
                style={{ '--delay': '400ms' } as CSSProperties}
              >
                <Newspaper className="size-4 text-hero-teal" aria-hidden />
                BLOG FEED
              </p>
              <h2
                id="blog-feed-heading"
                className={`${revealClass('animate-load')} mt-2 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
                style={{ '--delay': '420ms' } as CSSProperties}
              >
                Latest stories
              </h2>
            </div>
            <p
              className={`${revealClass('animate-load')} max-w-md text-sm text-slate-600`}
              style={{ '--delay': '440ms' } as CSSProperties}
            >
              Nine most recent posts — 3×3 grid on large screens.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogFeed.map((post, index) => (
              <article
                key={post.id}
                className={`${revealClass('animate-load-from-right')} flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-black/5`}
                style={
                  { '--delay': `${460 + index * 40}ms` } as CSSProperties
                }
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold tracking-[0.12em] text-hero-teal">
                    {post.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-[#0D2B6B]">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <time
                    dateTime={post.publishedAt}
                    className="mt-3 text-xs font-semibold tracking-wide text-slate-500"
                  >
                    {formatPostDate(post.publishedAt)}
                  </time>
                  <CardCta href={post.ctaHref} label={post.ctaLabel} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mx-auto mt-14 w-full max-w-[1400px]"
          aria-labelledby="events-heading"
        >
          <p
            className={`${revealClass('animate-load')} flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
            style={{ '--delay': '200ms' } as CSSProperties}
          >
            <CalendarDays className="size-4 text-hero-teal" aria-hidden />
            EVENT ANNOUNCEMENTS
          </p>
          <h2
            id="events-heading"
            className={`${revealClass('animate-load')} mt-2 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
            style={{ '--delay': '220ms' } as CSSProperties}
          >
            Coming up on campus
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {sortedEvents.map((ev, index) => (
              <article
                key={ev.id}
                className={`${revealClass('animate-load')} flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80`}
                style={
                  { '--delay': `${240 + index * 60}ms` } as CSSProperties
                }
              >
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold leading-snug text-[#0D2B6B]">
                    {ev.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {ev.summary}
                  </p>
                  <p className="mt-3 text-xs font-medium text-slate-700">
                    {ev.dateLabel}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{ev.venue}</p>
                  <CardCta href={ev.ctaHref} label={ev.ctaLabel} variant="outline" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mx-auto mt-14 w-full max-w-[1400px] pb-4"
          aria-labelledby="media-heading"
        >
          <p
            className={`${revealClass('animate-load')} flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
            style={{ '--delay': '200ms' } as CSSProperties}
          >
            <Mic2 className="size-4 text-hero-teal" aria-hidden />
            MEDIA COVERAGE
          </p>
          <h2
            id="media-heading"
            className={`${revealClass('animate-load')} mt-2 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
            style={{ '--delay': '220ms' } as CSSProperties}
          >
            In the press
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {sortedMedia.map((item, index) => (
              <article
                key={item.id}
                className={`${revealClass('animate-load-from-right')} flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm`}
                style={
                  { '--delay': `${260 + index * 70}ms` } as CSSProperties
                }
              >
                <img
                  src={item.image}
                  alt={item.headline}
                  className="h-36 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-hero-teal">
                    {item.outlet}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-[#0D2B6B]">
                    {item.headline}
                  </h3>
                  <time
                    dateTime={item.publishedAt}
                    className="mt-auto pt-4 text-xs font-semibold text-slate-500"
                  >
                    {formatPostDate(item.publishedAt)}
                  </time>
                  <CardCta href={item.ctaHref} label={item.ctaLabel} />
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
