import { api } from '../lib/api'
import { resolveImageUrl } from './config'

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
  const response = await api.get('/alumni/all', {
    signal,
  })

  if (!response.data?.success || !Array.isArray(response.data?.data)) {
    throw new Error('Invalid alumni API response')
  }

  return response.data.data
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
