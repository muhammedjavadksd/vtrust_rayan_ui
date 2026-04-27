import {
  CircleCheck,
  GraduationCap,
  Landmark,
} from 'lucide-react'

export const badges = [
  { icon: CircleCheck, label: 'NCVRT Certified' },
  { icon: GraduationCap, label: 'UGC Approved' },
  { icon: Landmark, label: 'University Affiliations' },
] as const

export const BANNER_IMAGES = [
  '/banners/banner1.jpg',
  '/banners/banner2.jpg',
  '/banners/banner3.jpg',
] as const

export interface BannerContent {
  title: string
  titleAccent: string
  titleSuffix: string
  description: string
  descriptionLinks?: { text: string; href: string }[]
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
  }
}

export const bannerContents: BannerContent[] = [
  {
    title: 'Shaping Future',
    titleAccent: 'Career',
    titleSuffix: 'Professionals',
    description: 'VTRUST was founded in 2021 and expanded from Balussery in 2021 across Koyilandy, Thamarassery, and Vadakara with practical professional education, strong affiliations, and internship-first learning.',
    primaryCta: {
      text: 'Explore Programs',
      href: '/courses',
    },
    secondaryCta: {
      text: 'Book Your Consultation',
    },
  },
  {
    title: 'Excellence in',
    titleAccent: 'Management',
    titleSuffix: 'Education',
    description: 'Our institution offers comprehensive professional programs designed to prepare students for real-world challenges with hands-on training and expert faculty guidance.',
    primaryCta: {
      text: 'View Courses',
      href: '/courses',
    },
    secondaryCta: {
      text: 'Learn More',
    },
  },
  {
    title: 'Your Journey to',
    titleAccent: 'Management',
    titleSuffix: 'Excellence',
    description: 'Join thousands of successful graduates who have built rewarding careers. Affiliated with top universities ensuring quality education and recognized certifications.',
    descriptionLinks: [
      { text: 'Mysore University', href: 'https://uni-mysore.ac.in' },
      { text: 'BESTIU', href: 'https://www.bestiu.edu.in' },
    ],
    primaryCta: {
      text: 'Start Application',
      href: '/courses',
    },
    secondaryCta: {
      text: 'Schedule Visit',
    },
  },
]
