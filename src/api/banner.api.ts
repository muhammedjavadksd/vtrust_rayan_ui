import apiClient from './axios'
import { resolveImageUrl } from './config'
import type { ApiResponse } from '../types/course'

export interface BannerApiItem {
  id?: string
  _id?: string
  heading?: string
  highlightedText?: string
  subtext?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  image?: string
  imageUrl?: string
  status?: string
  isActive?: boolean
  order?: number
}

export interface Banner {
  id: string
  heading: string
  highlightedText: string
  subtext: string
  primaryButtonText: string
  secondaryButtonText: string
  image: string
}

const isActive = (item: BannerApiItem) => {
  if (item.status !== undefined) return item.status === 'Active'
  if (item.isActive !== undefined) return Boolean(item.isActive)
  return true
}

export async function getBanners(signal?: AbortSignal): Promise<Banner[]> {
  const response = await apiClient.get<ApiResponse<BannerApiItem[]>>('/banners/all', { signal })

  const body = response.data
  if (!body?.success || !Array.isArray(body.data)) {
    throw new Error('Invalid banner API response')
  }

  return body.data
    .filter((item) => isActive(item) && !!item.image)
    .map((item) => {
      const image = item.image ?? ''
      return {
        id: item.id ?? item._id ?? '',
        heading: item.heading ?? '',
        highlightedText: item.highlightedText ?? '',
        subtext: item.subtext ?? '',
        primaryButtonText: item.primaryButtonText ?? '',
        secondaryButtonText: item.secondaryButtonText ?? '',
        image: image.startsWith('data:') ? image : resolveImageUrl(image),
      }
    })
}
