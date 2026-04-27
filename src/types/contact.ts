export interface ContactFormData {
  name: string
  email: string
  phone: string
  branch: string
  message: string
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
