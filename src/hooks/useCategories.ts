import { useState, useEffect } from 'react'
import { getCategories } from '../api/course.api'

export function useCategories() {
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchItems = async () => {
      try {
        setLoading(true)
        const data = await getCategories(controller.signal)
        setCategories(data)
        setError(null)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err : new Error('Failed to fetch categories'))
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
    return () => controller.abort()
  }, [])

  return { categories, loading, error }
}
