export const tabs = [
  'Optometry & Vision Sciences',
  'Allied Health Sciences',
  'Healthcare Management',
] as const

export type TabKey = (typeof tabs)[number]

export interface CourseRecord {
  slug: string
  title: string
  description: string
  image: string
  brochurePdf?: string
  category: string
  college: string
  university: string
  fees: string
  admissionFee: string
  registrationFee?: string
  ugcApproved: boolean
  highlights: string[]
  overview: string
  roleOfCourse: string
  syllabus: string[]
  eligibility: string
  duration: string
  careerOutcomes: string[]
  name?: string
  imageUrl?: string
  type?: string
  // Added for compatibility with CourseDetailPage.tsx
  courseFullTitle?: string
  courseDuration?: string
  courseRoll?: string
  courseHighlights?: string[]
  CourseOverview?: string
}

export interface CourseApiItem {
  _id?: string
  name?: string
  type?: string
  duration?: string
  CourseOverview?: string
  eligibility?: string
  status?: string
  imageUrl?: string
  university?: string
  college?: string
  courseRoll?: string
  syllabus?: string
  courseHighlights?: string
  careerOutcomes?: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}
