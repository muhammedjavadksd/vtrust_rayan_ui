import { type NavLabel } from '../constants/header'

/**
 * Determines the active navigation label based on the current pathname and hash.
 * Extracts complex mapping logic out of components for better maintainability.
 */
export function getActiveNavLabel(pathname: string, hash: string): NavLabel {
  const path = pathname.replace(/\/+$/, '') || '/'

  // Path-based mapping
  if (path === '/about') return 'About'
  if (path === '/student-life') return 'Student Life'
  if (path === '/courses' || path.startsWith('/courses/')) return 'Courses'
  if (path === '/campuses') return 'Campuses'
  if (path === '/alumni') return 'Alumni'
  if (path === '/gallery') return 'Gallery'
  if (path === '/news-events' || path.startsWith('/news/')) return 'News & Events'
  if (path === '/contact') return 'Contact'

  // Hash-based mapping (for landing page sections)
  const cleanHash = hash.replace('#', '').trim().toLowerCase()
  if (!cleanHash) return 'Home'

  switch (cleanHash) {
    case 'student-life': return 'Student Life'
    case 'campuses': return 'Campuses'
    case 'alumni': return 'Alumni'
    case 'gallery': return 'Gallery'
    case 'news-events': return 'News & Events'
    case 'contact': return 'Contact'
    case 'about': return 'About'
    case 'courses': return 'Courses'
    default: return 'Home'
  }
}
