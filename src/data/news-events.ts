export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  /** ISO date — feed is sorted newest first */
  publishedAt: string
  ctaLabel: string
  ctaHref: string
}

export type EventAnnouncement = {
  id: string
  title: string
  summary: string
  /** ISO date for sorting (upcoming first) */
  startsOn: string
  dateLabel: string
  venue: string
  image: string
  ctaLabel: string
  ctaHref: string
}

export type MediaCoverageItem = {
  id: string
  outlet: string
  headline: string
  /** ISO date for “recency” display */
  publishedAt: string
  image: string
  ctaLabel: string
  ctaHref: string
}

export type NewsArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] }

export type NewsArticle = BlogPost & {
  content: NewsArticleBlock[]
}

const newsArticles: NewsArticle[] = [
  {
    id: 'b1',
    slug: 'world-optometry-day-screening-camp',
    category: 'CAMPUS',
    title: 'World Optometry Day: screening camp draws 200+ visitors',
    excerpt:
      'Students and faculty ran vision checks and referral counselling at Vadakara in partnership with local PHCs.',
    image: '/generated/clinical-eye-banner.png',
    publishedAt: '2026-03-22',
    ctaLabel: 'Read story',
    ctaHref: '/news/world-optometry-day-screening-camp',
    content: [
      {
        type: 'paragraph',
        text: 'VTRUST students and clinical faculty marked World Optometry Day with a one-day community screening initiative focused on early vision risk detection.',
      },
      {
        type: 'paragraph',
        text: 'Held near the Vadakara corridor, the drive recorded more than 200 walk-ins and delivered on-site counselling, referral notes, and follow-up guidance.',
      },
      { type: 'subheading', text: 'Why this matters now' },
      {
        type: 'list',
        items: [
          'Undetected refractive error continues to affect school and workplace performance.',
          'Early triage helps local clinics prioritize high-risk cases faster.',
          'Student-led outreach strengthens practical learning while serving nearby communities.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The programme team confirmed that additional weekend camps are being planned for nearby towns in the next quarter.',
      },
    ],
  },
  {
    id: 'b2',
    slug: 'new-simulation-lab-hours-critical-care-nursing',
    category: 'ACADEMICS',
    title: 'New simulation lab hours for critical care nursing',
    excerpt:
      'Extended evening slots help working learners practise IV and airway modules without clashing with theory blocks.',
    image: '/generated/journey-img.png',
    publishedAt: '2026-03-18',
    ctaLabel: 'Read story',
    ctaHref: '/news/new-simulation-lab-hours-critical-care-nursing',
    content: [
      {
        type: 'paragraph',
        text: 'To improve engagement and completion rates, VTRUST has expanded simulation lab access for critical care nursing modules.',
      },
      {
        type: 'paragraph',
        text: 'Students can now reserve evening lab sessions for supervised skill rehearsal, including IV setup, airway support, and emergency documentation.',
      },
      { type: 'subheading', text: 'Recency-first scheduling' },
      {
        type: 'list',
        items: [
          'Weekday evening slots from 5:30 PM to 8:00 PM.',
          'Priority booking for final-year students before clinical postings.',
          'Weekly usage data will guide future expansion of slots.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The department expects the revised calendar to reduce timetable friction for both regular and working learners.',
      },
    ],
  },
  {
    id: 'b3',
    slug: 'inter-campus-sports-meet-balussery-finals',
    category: 'STUDENT LIFE',
    title: 'Inter-campus sports meet: Balussery hosts finals',
    excerpt:
      'Teams from all four centres competed in athletics and badminton; proceeds supported a local eye-care charity.',
    image: '/generated/hero-bg.png',
    publishedAt: '2026-03-12',
    ctaLabel: 'Read story',
    ctaHref: '/news/inter-campus-sports-meet-balussery-finals',
    content: [
      {
        type: 'paragraph',
        text: 'The annual inter-campus sports meet concluded at Balussery with participation from students across all VTRUST centres.',
      },
      {
        type: 'paragraph',
        text: 'Athletics, indoor games, and team rounds were structured to encourage cross-campus collaboration and active student engagement.',
      },
      { type: 'subheading', text: 'Event highlights' },
      {
        type: 'list',
        items: [
          'Record turnout from first-year entrants.',
          'Student council raised funds for community eye-care outreach.',
          'New mixed-team format improved participation across programmes.',
        ],
      },
      {
        type: 'paragraph',
        text: 'A detailed recap with photo stories is scheduled for the next monthly student bulletin.',
      },
    ],
  },
  {
    id: 'b4',
    slug: 'faculty-poster-wins-regional-allied-health-symposium',
    category: 'RESEARCH',
    title: 'Faculty poster wins at regional allied health symposium',
    excerpt:
      'Dry-eye prevalence in coastal adolescents — early findings shared with Kozhikode district health officials.',
    image: '/generated/clinical-eye-banner.png',
    publishedAt: '2026-03-05',
    ctaLabel: 'Read story',
    ctaHref: '/news/faculty-poster-wins-regional-allied-health-symposium',
    content: [
      {
        type: 'paragraph',
        text: 'A VTRUST faculty research poster received recognition at a regional allied health symposium this month.',
      },
      {
        type: 'paragraph',
        text: 'The study examined dry-eye prevalence patterns among coastal adolescents and proposed practical school-level screening interventions.',
      },
      { type: 'subheading', text: 'Next steps' },
      {
        type: 'list',
        items: [
          'Expand sample collection through partner schools.',
          'Publish baseline findings in a peer-reviewed education-health journal.',
          'Integrate selected findings into classroom case discussions.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The academic committee has approved a follow-up phase for the 2026 monsoon term.',
      },
    ],
  },
  {
    id: 'b5',
    slug: 'hospital-partners-preceptorship-final-year-optometry',
    category: 'INDUSTRY',
    title: 'Hospital partners on preceptorship for final-year optometry',
    excerpt:
      'Rotations now include tele-optometry triage — aligning trainees with how rural outreach is delivered today.',
    image: '/generated/journey-img.png',
    publishedAt: '2026-02-28',
    ctaLabel: 'Read story',
    ctaHref: '/news/hospital-partners-preceptorship-final-year-optometry',
    content: [
      { type: 'paragraph', text: 'Hospital-linked preceptorship slots are now available for final-year optometry trainees.' },
      { type: 'paragraph', text: 'The model combines on-site observation with guided triage logs so learners can track real outpatient workflows.' },
      { type: 'subheading', text: 'Placement format' },
      { type: 'list', items: ['Structured shifts with senior mentors.', 'Weekly reflection and case-note review.', 'Exposure to tele-optometry escalation pathways.'] },
      { type: 'paragraph', text: 'This update aligns course delivery with the current demand for role-ready allied health graduates.' },
    ],
  },
  {
    id: 'b6',
    slug: 'library-extends-digital-journal-bundle-2026',
    category: 'CAMPUS',
    title: 'Library extends digital journal bundle for 2026',
    excerpt:
      'Added full-text access to leading ophthalmology and nursing journals via campus SSO.',
    image: '/generated/hero-bg.png',
    publishedAt: '2026-02-20',
    ctaLabel: 'Read story',
    ctaHref: '/news/library-extends-digital-journal-bundle-2026',
    content: [
      { type: 'paragraph', text: 'The campus library has expanded digital subscriptions with additional ophthalmology and nursing resources.' },
      { type: 'paragraph', text: 'Students can now access more full-text journals through existing login credentials from both desktop and mobile.' },
      { type: 'subheading', text: 'Included in this release' },
      { type: 'list', items: ['Updated archive coverage for top clinical journals.', 'Improved search filters by discipline and year.', 'Orientation sessions for first-year learners.'] },
      { type: 'paragraph', text: 'Library support staff will run onboarding clinics every Friday this month.' },
    ],
  },
  {
    id: 'b7',
    slug: 'eye-health-awareness-walk-koyilandy',
    category: 'COMMUNITY',
    title: 'Eye health awareness walk in Koyilandy',
    excerpt:
      'Student ambassadors distributed IEC material on diabetic retinopathy screening for adults over 40.',
    image: '/generated/clinical-eye-banner.png',
    publishedAt: '2026-02-14',
    ctaLabel: 'Read story',
    ctaHref: '/news/eye-health-awareness-walk-koyilandy',
    content: [
      { type: 'paragraph', text: 'Student ambassadors led a public awareness walk in Koyilandy to promote preventive eye-care habits.' },
      { type: 'paragraph', text: 'Participants distributed multilingual information sheets and encouraged periodic diabetic retinopathy checkups.' },
      { type: 'subheading', text: 'Community response' },
      { type: 'list', items: ['High footfall near main junction points.', 'Strong volunteer support from local groups.', 'Multiple requests for repeat sessions in schools.'] },
      { type: 'paragraph', text: 'The outreach unit plans to convert this into a recurring district-level engagement format.' },
    ],
  },
  {
    id: 'b8',
    slug: 'alumni-spotlight-lead-nurse-tertiary-eye-institute',
    category: 'ALUMNI',
    title: 'Alumni spotlight: lead nurse at tertiary eye institute',
    excerpt:
      'A 2019 graduate shares how VTRUST clinical rotations prepared her for high-volume cataract programmes.',
    image: '/generated/journey-img.png',
    publishedAt: '2026-02-03',
    ctaLabel: 'Read story',
    ctaHref: '/news/alumni-spotlight-lead-nurse-tertiary-eye-institute',
    content: [
      { type: 'paragraph', text: 'In this alumni spotlight, a 2019 graduate reflects on moving from campus training to leading nursing teams in tertiary eye-care.' },
      { type: 'paragraph', text: 'She credits structured rotations and high-volume case exposure for building confidence in real-world care settings.' },
      { type: 'subheading', text: 'Advice for current students' },
      { type: 'list', items: ['Use lab sessions to master fundamentals early.', 'Document practical learning weekly.', 'Seek cross-department exposure whenever possible.'] },
      { type: 'paragraph', text: 'Her full interview will be featured in the upcoming alumni engagement newsletter.' },
    ],
  },
  {
    id: 'b9',
    slug: 'workshop-ethics-consent-clinical-photography',
    category: 'ACADEMICS',
    title: 'Workshop: ethics and consent in clinical photography',
    excerpt:
      'Half-day module for optometry trainees on documenting anterior segment images responsibly.',
    image: '/generated/hero-bg.png',
    publishedAt: '2026-01-22',
    ctaLabel: 'Read story',
    ctaHref: '/news/workshop-ethics-consent-clinical-photography',
    content: [
      { type: 'paragraph', text: 'A focused workshop this month covered consent, privacy, and documentation standards for clinical photography.' },
      { type: 'paragraph', text: 'Students practised scenarios involving image capture, storage, and communication with patients and guardians.' },
      { type: 'subheading', text: 'Key outcomes' },
      { type: 'list', items: ['Better clarity on consent language.', 'Standardized handoff steps for image records.', 'Improved awareness of confidentiality risks.'] },
      { type: 'paragraph', text: 'The module is now part of recurring professionalism sessions across departments.' },
    ],
  },
]

export const eventAnnouncements: EventAnnouncement[] = [
  {
    id: 'e1',
    title: 'Open house: Optometry & Nursing programmes',
    summary:
      'Meet faculty, tour labs, and get fee and scholarship guidance. Families welcome.',
    startsOn: '2026-04-05',
    dateLabel: 'Sat, 5 Apr 2026 · 9:30 AM – 1:00 PM',
    venue: 'Thamarassery campus',
    image: '/generated/journey-img.png',
    ctaLabel: 'Register',
    ctaHref: '#admission-enquiry',
  },
  {
    id: 'e2',
    title: 'Career talk: pathways in hospital operations',
    summary:
      'Guest speaker from a multi-specialty chain on MHM roles, interviews, and growth.',
    startsOn: '2026-04-09',
    dateLabel: 'Wed, 9 Apr 2026 · 3:00 PM',
    venue: 'Online · link emailed after RSVP',
    image: '/generated/clinical-eye-banner.png',
    ctaLabel: 'RSVP',
    ctaHref: '#admission-enquiry',
  },
  {
    id: 'e3',
    title: 'Blood donation drive with district hospital',
    summary:
      'Student council hosts annual drive — donors receive refreshments and a certificate.',
    startsOn: '2026-04-18',
    dateLabel: 'Fri, 18 Apr 2026 · 8:00 AM onwards',
    venue: 'Balussery campus quadrangle',
    image: '/generated/hero-bg.png',
    ctaLabel: 'Volunteer',
    ctaHref: '#admission-enquiry',
  },
]

export const mediaCoverage: MediaCoverageItem[] = [
  {
    id: 'm1',
    outlet: 'Regional digest',
    headline: 'Private institutes expand optometry seats to meet primary-care demand',
    publishedAt: '2026-03-08',
    image: '/generated/clinical-eye-banner.png',
    ctaLabel: 'View coverage',
    ctaHref: '#',
  },
  {
    id: 'm2',
    outlet: 'Health bulletin (Kerala)',
    headline: 'Campus-led screening highlights unmet refractive error in teens',
    publishedAt: '2026-02-17',
    image: '/generated/journey-img.png',
    ctaLabel: 'View coverage',
    ctaHref: '#',
  },
  {
    id: 'm3',
    outlet: 'Education weekly',
    headline: 'VTRUST nursing grads cite simulation-heavy curriculum in exit survey',
    publishedAt: '2026-01-30',
    image: '/generated/hero-bg.png',
    ctaLabel: 'View coverage',
    ctaHref: '#',
  },
]

const blogPosts: BlogPost[] = newsArticles.map(({ content: _content, ...post }) => post)

/** Blog feed derived from data and sorted by recency (newest first). */
export function getBlogFeed(limit = 9): BlogPost[] {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit)
}

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug)
}

export function getRelatedNews(slug: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit)
}

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(iso))
}
