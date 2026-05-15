import apiClient from './axios'

export interface ContactPayload {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function submitContactEnquiry(data: ContactPayload) {
  const res = await apiClient.post('/contact/send-enquiry', data)
  return res.data
}
