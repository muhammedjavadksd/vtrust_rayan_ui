import apiClient from './axios'
import { resolveImageUrl } from './config'
import type { ApiResponse } from '../types/course'
import type { GalleryItem } from '../types/gallery'

export async function getGalleryImages(signal?: AbortSignal): Promise<string[]> {
  const response = await apiClient.get<ApiResponse<GalleryItem[]>>('/gallery/all', {
    signal,
  })

  const body = response.data
  if (!body?.success || !Array.isArray(body?.data)) {
    throw new Error('Invalid gallery API response')
  }

  return body.data
    .filter((item: GalleryItem) => !!item.imageUrl)
    .map((item: GalleryItem) => resolveImageUrl(item.imageUrl))
}
