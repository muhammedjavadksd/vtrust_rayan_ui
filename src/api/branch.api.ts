import { API_BASE_URL } from './config'

type BranchApiItem = {
  _id: string
  name: string
  location: string
  phoneNumbers: string[]
  mapUrl: string
  email: string
  status: string
  createdAt: string
  updatedAt: string
}

export type BranchAddress = {
  id: string
  name: string
  location: string[]
  phoneNumbers: string
  mapUrl: string
  email: string
}

export async function getBranches(signal?: AbortSignal): Promise<BranchAddress[]> {
  const url = `${API_BASE_URL.replace(/\/$/, '')}/branches/all`

  const response = await fetch(url, {
    method: 'GET',
    signal,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Branch fetch failed: ${response.status} ${response.statusText}`)
  }

  const body = await response.json()
  if (!body?.success || !Array.isArray(body?.data)) {
    throw new Error('Invalid Branch API response')
  }

  return body.data
    .filter((item: BranchApiItem) => !!item.name && !!item.location)
    .map((item: BranchApiItem) => ({
      id: item._id,
      name: item.name,
      location: [item.location],
      phoneNumbers: item.phoneNumbers.join(', '),
      mapUrl: item.mapUrl,
      email: item.email,
    }))
}

