import { useState, useEffect } from 'react'
import { getCourses } from '../api/course.api'
import type { CourseRecord } from '../types/course'

export function useCourses(category?: string) {
  const [courses, setCourses] = useState<CourseRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchItems = async () => {
      try {
        setLoading(true)
        const data = await getCourses(controller.signal)
        const filteredData = category 
          ? data.filter(c => c.category === category)
          : data
        setCourses(filteredData)
        setError(null)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err : new Error('Failed to fetch courses'))
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
    return () => controller.abort()
  }, [category])

  return { courses, loading, error }
}
