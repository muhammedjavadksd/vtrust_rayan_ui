import { useState, useEffect } from 'react'
import { getNews } from '../api/news.api'
import type { NewsArticle } from '../types/news'

export function useNewsArticle(slug: string) {
  const [article, setArticle] = useState<NewsArticle | null>(null)
  const [relatedNews, setRelatedNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadData = async () => {
      try {
        setLoading(true)
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
        setError(null)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err : new Error('Failed to fetch article'))
      } finally {
        setLoading(false)
      }
    }

    loadData()
    return () => controller.abort()
  }, [slug])

  return { article, relatedNews, loading, error }
}
