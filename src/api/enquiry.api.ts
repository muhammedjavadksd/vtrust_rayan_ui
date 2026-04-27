import apiClient from './axios'

export type EnquiryForm = {
  fullName: string
  emailOrPhone: string
  course: string
  message: string
}

export async function submitEnquiry(form: EnquiryForm) {
  const res = await apiClient.post('/enquiry', form)
  return res.data
}