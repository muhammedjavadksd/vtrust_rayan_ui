import { api } from '../lib/api'

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
  addressLines: string[]
  phone: string
  phoneNumbers: string
  mapUrl: string
  mapEmbedSrc: string
  email: string
}

export async function getBranches(signal?: AbortSignal): Promise<BranchAddress[]> {
  const response = await api.get('/branches/all', {
    signal,
  })

  if (!response.data?.success || !Array.isArray(response.data?.data)) {
    throw new Error('Invalid Branch API response')
  }

  return response.data.data
    .filter((item: BranchApiItem) => !!item.name && !!item.location)
    .map((item: BranchApiItem) => ({
      id: item._id,
      name: item.name,
      location: [item.location],
      addressLines: [item.location],
      phone: item.phoneNumbers[0] || '',
      phoneNumbers: item.phoneNumbers.join(', '),
      mapUrl: item.mapUrl,
      mapEmbedSrc: item.mapUrl, // Mapping mapUrl to mapEmbedSrc for now as a fallback
      email: item.email,
    }))
}
