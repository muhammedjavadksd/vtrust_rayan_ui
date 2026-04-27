export interface GalleryItem {
  _id: string
  title: string
  category: string
  imageUrl: string
  createdAt: string
  updatedAt: string
}

export interface GalleryImage {
  _id?: string
  url: string
  alt?: string
}

export type GalleryApiResponse = string[]
