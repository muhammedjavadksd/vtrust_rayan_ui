import { API_BASE_URL, resolveImageUrl } from './config'

type GalleryItem = {
  _id: string
  title: string
  category: string
  imageUrl: string
  createdAt: string
  updatedAt: string
}

export async function getGalleryImages(signal?: AbortSignal): Promise<string[]> {
  const url = `${API_BASE_URL.replace(/\/$/, '')}/gallery/all`

  const response = await fetch(url, {
    method: 'GET',
    signal,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Gallery fetch failed: ${response.status} ${response.statusText}`)
  }

  const body = await response.json()
  if (!body?.success || !Array.isArray(body?.data)) {
    throw new Error('Invalid gallery API response')
  }

  return body.data
    .filter((item: GalleryItem) => !!item.imageUrl)
    .map((item: GalleryItem) => resolveImageUrl(item.imageUrl))
}
