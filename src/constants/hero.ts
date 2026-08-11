import {
  GraduationCap,
  Landmark,
} from 'lucide-react'

export const badges = [
  // { icon: CircleCheck, label: 'NCVRT Certified' },
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
    title: 'Discover Our',
    titleAccent: 'Optometry',
    titleSuffix: 'Programs',
    description:
      'VTRUST was founded in 2021 and expanded across Calicut and Mysore with practical professional education, strong affiliations, and internship-first learning.',
    primaryCta: {
      text: 'Explore Programs',
      href: '/courses',
    },
    secondaryCta: {
      text: 'Book Your Consultation',
    },
  },
  {
    title: 'Launch Your Career in',
    titleAccent: 'M.Sc.',
    titleSuffix: 'Optometry',
    description:
      'A postgraduate program designed for aspiring optometrists — offering advanced clinical training, research, and real-world patient care experience.',
    primaryCta: {
      text: 'Explore M.Sc. Optometry',
      href: '/courses',
    },
    secondaryCta: {
      text: 'Book Your Consultation',
    },
  },
  {
    title: 'Begin Your Journey in',
    titleAccent: 'B.Sc.',
    titleSuffix: 'Optometry',
    description:
      'Join thousands of successful graduates who have built rewarding careers. Affiliated with top universities like Mysore University & BESTIU ensuring quality education and recognized certifications.',
    descriptionLinks: [
      { text: 'Mysore University', href: 'https://uni-mysore.ac.in' },
      // { text: 'BESTIU', href: 'https://www.bestiu.edu.in' },
    ],
    primaryCta: {
      text: 'Explore B.Sc. Optometry',
      href: '/courses',
    },
    secondaryCta: {
      text: 'Schedule Visit',
    },
  },
]