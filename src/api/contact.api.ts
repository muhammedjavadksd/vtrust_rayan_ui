import apiClient from './axios'
import { getApiErrorMessage } from './errors'

export interface ContactPayload {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function submitContactEnquiry(data: ContactPayload) {
  try {
    const res = await apiClient.post('/enquiry', {
      ...data,
      type: 'general',
    })
    return res.data
  } catch (err) {
    throw new Error(getApiErrorMessage(err, 'Failed to send enquiry'))
  }
}
