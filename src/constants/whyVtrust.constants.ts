import { GraduationCap, Microscope, Stethoscope } from 'lucide-react'

export const stats = [
  { value: 'Since 2021', label: 'Foundation management education' },
  { value: '5 Centres', label: 'Calicut, Koyilandy, Vadakara, Nadapuram,Mysoru' },
] as const

export const highlights = [
  {
    icon: Microscope,
    title: 'Management-led academic strength',
    description:
      'UGC-aligned, university-affiliated management pathways with industry emphasis.',
  },
  {
    icon: Stethoscope,
    title: 'Management & allied programmes',
    description:
      'Includes ANM Nursing, diploma tracks, and vocational healthcare courses.',
  },
  {
    icon: GraduationCap,
    title: 'Internship and placement support',
    description:
      '100% internship assistance with interview training and placement-focused support.',
  },
] as const
