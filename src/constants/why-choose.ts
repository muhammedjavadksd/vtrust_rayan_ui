import { BriefcaseMedical, Cog, GraduationCap } from 'lucide-react'

export const reasons = [
  {
    icon: BriefcaseMedical,
    title: 'Advanced Training Facilities',
    description:
      'Fully equipped laboratories with practical-oriented learning environments.',
  },
  {
    icon: Cog,
    title: 'Experienced Faculty & Mentors',
    description:
      'Experienced professors and healthcare professionals guide every module.',
  },
  {
    icon: GraduationCap,
    title: 'Internships & Clinical Postings',
    description:
      'Internships and clinical postings build real-world confidence for students.',
  },
] as const
