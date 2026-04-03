import { API_BASE_URL, resolveImageUrl } from './config'

type AlumniApiEntry = {
  _id: string
  name: string
  role: string
  company: string
  place: string
  profileImageUrl: string
  createdAt: string
  updatedAt: string
}

type AlumniListItem = {
  id: string
  name: string
  role: string
  company: string
  place: string
  profileImageUrl: string
}

export async function getAlumni(signal?: AbortSignal): Promise<AlumniListItem[]> {
  const url = `${API_BASE_URL.replace(/\/$/, '')}/alumni/all`

  const response = await fetch(url, {
    method: 'GET',
    signal,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Alumni fetch failed: ${response.status} ${response.statusText}`)
  }

  const body = await response.json()
  if (!body?.success || !Array.isArray(body?.data)) {
    throw new Error('Invalid alumni API response')
  }

  return body.data
    .filter((item: AlumniApiEntry) => !!item.name && !!item.profileImageUrl)
    .map((item: AlumniApiEntry) => ({
      id: item._id,
      name: item.name,
      role: item.role,
      company: item.company,
      place: item.place,
      profileImageUrl: item.profileImageUrl.startsWith('data:')
        ? item.profileImageUrl
        : resolveImageUrl(item.profileImageUrl),
    }))
}

export type { AlumniListItem }
