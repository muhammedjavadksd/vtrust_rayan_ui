export const API_BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? ''

export const resolveImageUrl = (imageUrl: string) => {
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl
  }

  const origin = API_BASE_URL.replace(/\/api\/?$/, '')

  if (imageUrl.startsWith('/')) {
    return `${origin}${imageUrl}`
  }

  return imageUrl
}
