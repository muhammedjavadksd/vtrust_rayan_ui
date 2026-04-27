import { useState, useEffect } from 'react'
import { getGalleryImages } from '../api/gallery.api'

export function useGallery() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchGallery = async () => {
      try {
        setLoading(true)
        const urls = await getGalleryImages(controller.signal)
        setImages(urls)
        setError(null)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err : new Error('Failed to fetch gallery'))
      } finally {
        setLoading(false)
      }
    }

    fetchGallery()
    return () => controller.abort()
  }, [])

  return { images, loading, error }
}
