export const primaryNavLinks = [
  'Home',
  'Courses',
  'About',
  'Institution',
  'News & Events',
  'Contact',
] as const

export const institutionLinks = [
  { label: 'Student Life', href: '/student-life' },
  { label: 'Campuses', href: '/campuses' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Mysore University', href: 'https://uni-mysore.ac.in', external: true },
  { label: 'BESTIU', href: 'https://www.bestiu.edu.in', external: true },
] as const

export const LOGO_SRC = '/logo/logo.png'
export const CTA_GRADIENT = 'bg-[linear-gradient(90deg,#0D2B6B_0%,#2A69D6_100%)]'

export type NavLabel = (typeof primaryNavLinks)[number] | (typeof institutionLinks)[number]['label']
export type HeaderProps = { className?: string }

export function getNavHref(label: NavLabel) {
  if (label === 'Home') return '/'
  if (label === 'About') return '/about'
  if (label === 'Student Life') return '/student-life'
  if (label === 'Campuses') return '/campuses'
  if (label === 'Alumni') return '/alumni'
  if (label === 'Gallery') return '/gallery'
  if (label === 'News & Events') return '/news-events'
  if (label === 'Contact') return '/contact'
  if (label === 'Courses') return '/courses'
  return `#${label.toLowerCase()}`
}
