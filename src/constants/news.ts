export type NewsItem = {
  category: string
  title: string
  description: string
  date: string
  image: string
}

export const news: NewsItem[] = [
  {
    category: 'ADMISSION ALERT',
    title: 'Admissions for 2024 Academic Year Now Open',
    description:
      'Join V Trust for programs in optometry and nursing with hands-on clinical exposure.',
    date: 'MARCH 15, 2026',
    image: '/hero/doc.jpg',
  },
  {
    category: 'NEW LAUNCH',
    title: 'Masters in Hospital Management (MHM) Launched',
    description:
      'A new course designed to help students learn management and hospital operations.',
    date: 'MARCH 10, 2026',
    image: '/hero/doc.jpg',
  },
  {
    category: 'CAMPUS NEWS',
    title: 'V Trust Organizes Health Camp in Rural Areas',
    description:
      'Students and faculty conducted free health check-up camps serving over 500 community members.',
    date: 'MARCH 5, 2026',
    image: '/hero/doc.jpg',
  },
] as const
