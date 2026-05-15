export interface ContactFormData {
  name: string
  email: string
  phone: string
  branch: string
  message: string
}

export interface ContactFormFields {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface ContactFormErrors {
  fullName?: string
  email?: string
  phone?: string
  message?: string
}

export interface Campus {
  id: string
  name: string
  addressLines: string[]
  phone: string
  email: string
  mapEmbedSrc: string
}

export type AnimationClass = 'animate-load' | 'animate-load-from-right' | 'opacity-0'
