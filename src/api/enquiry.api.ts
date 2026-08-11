import apiClient from './axios'
import { getApiErrorMessage } from './errors'

export type EnquiryForm = {
  fullName: string
  email: string
  phone: string
  course: string
  message: string
}

export type AdmissionEnquiryForm = {
  fullName: string
  email: string
  phone: string
  message: string
  place: string
}

export async function submitEnquiry(form: EnquiryForm) {
  try {
    const res = await apiClient.post('/enquiry', {
      ...form,
      type: 'course_enquiry',
      source: 'enquiry_popup',
    })
    return res.data
  } catch (err) {
    throw new Error(getApiErrorMessage(err, 'Submission failed'))
  }
}

export async function submitAdmissionEnquiry(form: AdmissionEnquiryForm) {
  try {
    const res = await apiClient.post('/enquiry', {
      ...form,
      type: 'admission_enquiry',
      source: 'footer_form',
    })
    return res.data
  } catch (err) {
    throw new Error(getApiErrorMessage(err, 'Submission failed'))
  }
}
