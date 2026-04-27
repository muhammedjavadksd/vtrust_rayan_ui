export interface NewsArticleBlock {
  type: 'paragraph' | 'subheading' | 'list'
  text?: string
  items?: string[]
}

export interface NewsArticle {
  id: string
  slug: string
  title: string
  category: string
  type?: 'news' | 'event' | 'media'
  description: string
  image: string
  publishedAt: string
  details: string
  ctaLabel: string
  ctaHref: string
  excerpt?: string
  content?: NewsArticleBlock[]
  // Optional fields for events
  startsOn?: string
  dateLabel?: string
  venue?: string
  summary?: string
  // Optional fields for media
  outlet?: string
  headline?: string
}

export type BlogPost = Omit<NewsArticle, 'content' | 'details'>

export interface EventAnnouncement {
  id: string
  title: string
  summary: string
  startsOn: string
  dateLabel: string
  venue: string
  image: string
  ctaLabel: string
  ctaHref: string
}

export interface MediaCoverageItem {
  id: string
  outlet: string
  headline: string
  publishedAt: string
  image: string
  ctaLabel: string
  ctaHref: string
}
