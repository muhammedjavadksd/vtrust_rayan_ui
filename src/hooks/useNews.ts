import { useState, useEffect } from 'react'
import { getNews } from '../api/news.api'
import type { NewsArticle } from '../types/news'

export function useNews(limit?: number) {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchItems = async () => {
      try {
        setLoading(true)
        const data = await getNews(controller.signal)
        setNews(limit ? data.slice(0, limit) : data)
        setError(null)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err : new Error('Failed to fetch news'))
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
    return () => controller.abort()
  }, [limit])

  return { news, loading, error }
}
