import { API_BASE_URL } from './config'

export type EnquiryForm = {
  fullName: string
  emailOrPhone: string
  course: string
  message: string
}

export async function submitEnquiry(form: EnquiryForm) {
  const url = `${API_BASE_URL.replace(/\/$/, '')}/enquiry`  

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
  if (!res.ok) {
    throw new Error('Failed to submit enquiry')
  }
  return res.json()
}