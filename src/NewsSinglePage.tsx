import { ArrowRight, CalendarDays } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { EnquiryFormModal } from './components/EnquiryFormModal'
import { MobileAdmissionButton } from './components/MobileAdmissionButton'
import { formatPostDate } from './data/news-events'
import { getNews, type NewsArticle } from './api/news.api'

type NewsSinglePageProps = {
  slug: string
}

export default function NewsSinglePage({ slug }: NewsSinglePageProps) {
  const mainRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [article, setArticle] = useState<NewsArticle | null>(null)
  const [relatedNews, setRelatedNews] = useState<NewsArticle[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const loadArticle = async () => {
      try {
        setIsLoading(true)
        const allNews = await getNews(controller.signal)
        const selected =
          allNews.find((item) => item.id === slug) ||
          allNews.find((item) => item.slug === slug)

        if (selected) {
          setArticle(selected)
          setRelatedNews(
            allNews
              .filter((item) => item.id !== selected.id)
              .sort(
                (a, b) =>
                  new Date(b.publishedAt).getTime() -
                  new Date(a.publishedAt).getTime(),
              )
              .slice(0, 3),
          )
        } else {
          setArticle(null)
          setRelatedNews([])
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return
        }
        console.error(err)
        setArticle(null)
        setRelatedNews([])
      } finally {
        setIsLoading(false)
      }
    }

    loadArticle()

    return () => controller.abort()
  }, [slug])

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

    // Mobile/Safari fallback to avoid stuck opacity-0
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

  if (isLoading) {
    return (
      <div className="min-h-svh bg-white">
        <Header />
        <main className="mx-auto w-full max-w-[900px] px-4 py-16 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#2353b1]">NEWS &amp; EVENTS</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#0D2B6B]">Loading article...</h1>
        </main>
        <Footer />
        <EnquiryFormModal />
        <MobileAdmissionButton />
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-svh bg-white">
        <Header />
        <main className="mx-auto w-full max-w-[900px] px-4 py-16 text-center md:px-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#2353b1]">
            NEWS &amp; EVENTS
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#0D2B6B]">Article not found</h1>
          <p className="mt-4 text-slate-600">The article may have moved. Explore our latest updates below.</p>
          <a
            href="/news-events"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0D2B6B] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Back to News &amp; Events
            <ArrowRight className="size-4" aria-hidden />
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
      <main ref={mainRef} className="px-4 pb-10 pt-2 md:px-6 md:pb-14 lg:px-10">
        <section className="mx-auto w-full max-w-[1400px]">
          <div className={`${revealClass('animate-load')} relative overflow-hidden rounded-2xl`}>
            <img
              src={article.imageUrl}
              alt={article.title}
              className="h-[360px] w-full object-cover sm:h-[420px]"
              loading="eager"
              decoding="async"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,43,107,0.15)_0%,rgba(13,43,107,0.75)_60%,rgba(13,43,107,0.88)_100%)]"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 sm:px-10 md:px-12 md:pb-10">
              <p
                className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-white/85`}
                style={{ '--delay': '140ms' } as CSSProperties}
              >
                {article.category}
              </p>
              <h1
                className={`${revealClass('animate-load')} mt-2 max-w-4xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl`}
                style={{ '--delay': '180ms' } as CSSProperties}
              >
                {article.title}
              </h1>
              <div
                className={`${revealClass('animate-load')} mt-4 flex flex-wrap items-center gap-3 text-sm text-white/90`}
                style={{ '--delay': '220ms' } as CSSProperties}
              >
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4" aria-hidden />
                  Published: {formatPostDate(article.publishedAt)}
                </span>
                <span className="text-white/60">•</span>
                <a href="/news-events" className="font-semibold hover:text-white">
                  News &amp; Events
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[900px] md:mt-12">
          <article className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm shadow-black/5 sm:px-8 md:px-10">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '260ms' } as CSSProperties}
            >
              ENGAGEMENT &amp; RECENCY
            </p>

            <div
              className={`${revealClass('animate-load')} mt-4 text-base leading-relaxed text-slate-700`}
              style={{ '--delay': '300ms' } as CSSProperties}
              dangerouslySetInnerHTML={{ __html: article.details }}
            />
          </article>
        </section>

        <section className="mx-auto mt-14 w-full max-w-[1400px] pb-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2
              className={`${revealClass('animate-load')} text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
              style={{ '--delay': '260ms' } as CSSProperties}
            >
              Related news
            </h2>
            <a
              href="/news-events"
              className={`${revealClass('animate-load')} inline-flex items-center gap-2 text-sm font-semibold text-[#0D2B6B] hover:underline`}
              style={{ '--delay': '300ms' } as CSSProperties}
            >
              View all
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedNews.map((item, index) => (
              <article
                key={item.id}
                className={`${revealClass('animate-load-from-right')} flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-black/5`}
                style={{ '--delay': `${320 + index * 50}ms` } as CSSProperties}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold tracking-[0.12em] text-hero-teal">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-[#0D2B6B]">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.excerpt}
                  </p>
                  <time
                    dateTime={item.publishedAt}
                    className="mt-3 text-xs font-semibold tracking-wide text-slate-500"
                  >
                    {formatPostDate(item.publishedAt)}
                  </time>
                  <a
                    href={item.ctaHref}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0D2B6B] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-95"
                  >
                    Read story
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
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
