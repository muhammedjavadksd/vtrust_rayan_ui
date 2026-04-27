import apiClient from './axios'
import { resolveImageUrl } from './config'
import type { NewsArticle } from '../types/news'

interface NewsApiEntry {
  _id: string
  title: string
  description: string
  articleDate: string
  status: string
  imageUrl: string
  category: string
  details: string
  createdAt: string
  updatedAt: string
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export async function getNews(signal?: AbortSignal): Promise<NewsArticle[]> {
  const response = await apiClient.get('/articles/all', { signal })

  const data = response.data
  if (!data?.success || !Array.isArray(data?.data)) {
    throw new Error('Invalid news API response')
  }

  return data.data
    .filter((item: NewsApiEntry) => !!item.title && !!item.imageUrl)
    .map((item: NewsApiEntry) => ({
      id: item._id,
      slug: slugify(item.title),
      title: item.title,
      category: item.category,
      description: item.description,
      excerpt: item.description, // Use description as fallback for excerpt
      image: item.imageUrl.startsWith('data:')
        ? item.imageUrl
        : resolveImageUrl(item.imageUrl),
      publishedAt: item.articleDate,
      details: item.details,
      type: item.category.toLowerCase().includes('event') ? 'event' : (item.category.toLowerCase().includes('media') || item.category.toLowerCase().includes('press') ? 'media' : 'news'),
      ctaLabel: 'Read story',
      ctaHref: `/news/${slugify(item.title)}`,
    }))
}
