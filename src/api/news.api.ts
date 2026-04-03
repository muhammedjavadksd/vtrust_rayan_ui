import { API_BASE_URL, resolveImageUrl } from './config'

type NewsApiEntry = {
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

export type NewsArticle = {
  id: string
  slug: string
  title: string
  category: string
  description: string
  image: string
  publishedAt: string
  details: string
  ctaLabel: string
  ctaHref: string
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export async function getNews(signal?: AbortSignal): Promise<NewsArticle[]> {
  const url = `${API_BASE_URL.replace(/\/$/, '')}/articles/all`

  const response = await fetch(url, {
    method: 'GET',
    signal,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`News fetch failed: ${response.status} ${response.statusText}`)
  }

  const body = await response.json()
  if (!body?.success || !Array.isArray(body?.data)) {
    throw new Error('Invalid news API response')
  }

  return body.data
    .filter((item: NewsApiEntry) => !!item.title && !!item.imageUrl)
    .map((item: NewsApiEntry) => ({
      id: item._id,
      slug: slugify(item.title),
      title: item.title,
      category: item.category,
      description: item.description,
      image: item.imageUrl.startsWith('data:')
        ? item.imageUrl
        : resolveImageUrl(item.imageUrl),
      publishedAt: item.articleDate,
      details: item.details,
      ctaLabel: 'Read story',
      ctaHref: `/news/${slugify(item.title)}`,
    }))
}

