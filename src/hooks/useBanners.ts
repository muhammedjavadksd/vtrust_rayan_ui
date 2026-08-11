import { useEffect, useState } from 'react'
import { getBanners } from '../api/banner.api'
import type { Banner } from '../api/banner.api'

export function useBanners() {
  const [banners, setBanners] = useState<Banner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchBanners = async () => {
      try {
        setLoading(true)
        const data = await getBanners(controller.signal)
        setBanners(data)
        setError(null)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err : new Error('Failed to fetch banners'))
      } finally {
        setLoading(false)
      }
    }

    fetchBanners()
    return () => controller.abort()
  }, [])

  return { banners, loading, error }
}
