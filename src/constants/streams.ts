import { Briefcase, Eye, Stethoscope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface StreamCourse {
  name: string
  duration: string
}

export interface Stream {
  id: string
  title: string
  icon: LucideIcon
  courses: StreamCourse[]
}

/**
 * Every course offered across the three streams of the group, with its duration.
 * Rendered by the stream cards section placed directly under the hero.
 */
export const streams: Stream[] = [
  {
    id: 'optometry-eye-care',
    title: 'Optometry & Eye Care',
    icon: Eye,
    courses: [
      { name: 'M.Sc. Optometry', duration: '2 yrs' },
      { name: 'B.Sc. Optometry', duration: '4 yrs (3+1)' },
      {
        name: 'Optical Equipment, Lens Fitting & Eye Care Assistance',
        duration: '33 days',
      },
    ],
  },
  {
    id: 'allied-health-hospital-management',
    title: 'Allied Health & Hospital Management',
    icon: Stethoscope,
    courses: [
      { name: 'B.Sc. MLT', duration: '4 yrs (3+1)' },
      { name: 'B.Voc. OTT', duration: '3 yrs' },
      { name: 'Hospital Administration', duration: '6 months' },
    ],
  },
  {
    id: 'career-business-skills',
    title: 'Career & Business Skills',
    icon: Briefcase,
    courses: [
      { name: 'Certification in Business Administration', duration: '30 days' },
    ],
  },
]
