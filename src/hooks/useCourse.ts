import { useState, useEffect } from 'react'
import { getCourses } from '../api/course.api'
import type { CourseRecord } from '../types/course'

export function useCourse(slug: string) {
  const [course, setCourse] = useState<CourseRecord | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchItem = async () => {
      try {
        setLoading(true)
        const allCourses = await getCourses(controller.signal)
        const found = allCourses.find((c) => c.slug === slug)
        setCourse(found || null)
        setError(null)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err : new Error('Failed to fetch course'))
      } finally {
        setLoading(false)
      }
    }

    fetchItem()
    return () => controller.abort()
  }, [slug])

  return { course, loading, error }
}
