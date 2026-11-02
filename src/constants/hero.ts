/**
 * Homepage hero ("Our Courses" showcase) content.
 *
 * The hero is a single static section: no carousel state, no autoplay and no
 * slide dots. Everything it renders is declared here so the component only
 * stays responsible for layout.
 */

/**
 * Destination of every "See All Courses" pill of the hero.
 */
export const HERO_COURSES_LINK = '/courses'

/**
 * Copy of the centred heading block above the two course cards.
 */
export const heroIntro = {
  eyebrow: 'Our Courses',
  title: 'Shape Your Future with the Right Course',
  description:
    'UGC-approved, university-affiliated programs from 30 days to 4 years.',
} as const

export interface HeroCourseChip {
  name: string
  duration: string
}

/**
 * Card colour treatment. `navy` is the academic card, `blue` the skill card.
 */
export type HeroCourseVariant = 'navy' | 'blue'

export interface HeroCourseShowcase {
  id: string
  variant: HeroCourseVariant
  title: string
  meta: string
  /**
   * Artwork shown at the bottom-right of the card.
   *
   * The delivered photos (`/logo/banner1.jpg` and `/logo/banner.jpg`) ship on a
   * flat white background. `mix-blend-mode: multiply` would remove it on a
   * light card, but it darkens the subject over the dark cards, so the artwork
   * is a transparent cut-out generated from those photos instead.
   *
   * TODO: swap in the final transparent PNG/WebP once the design team delivers
   * it and delete the generated cut-outs from `public/hero/`.
   */
  image: string
  imageAlt: string
  /**
   * Intrinsic pixel size of the artwork. Both values must match the real file
   * so the browser reserves the correct box before the asset decodes.
   */
  imageWidth: number
  imageHeight: number
  chips: HeroCourseChip[]
}

/**
 * The two course cards of the hero. Each one carries its own artwork and the
 * list of programs it covers.
 */
export const heroCourseShowcases: HeroCourseShowcase[] = [
  {
    id: 'academic',
    variant: 'navy',
    title: 'Academic Courses',
    meta: '5 programs · 6 months – 4 yrs',
    image: '/hero/academic.png',
    imageAlt: 'Student holding books',
    imageWidth: 387,
    imageHeight: 588,
    chips: [
      { name: 'M.Sc. Optometry', duration: '2 yrs' },
      { name: 'B.Sc. Optometry', duration: '4 yrs' },
      { name: 'B.Sc. MLT', duration: '4 yrs' },
      { name: 'B.Voc. OTT', duration: '3 yrs' },
      { name: 'Hospital Administration', duration: '6 months' },
    ],
  },
  {
    id: 'skill',
    variant: 'blue',
    title: 'Skill Courses',
    meta: '2 programs · 30 – 33 days',
    image: '/hero/skill.png',
    imageAlt: 'Man working on a laptop',
    imageWidth: 461,
    imageHeight: 405,
    chips: [
      { name: 'Business Administration', duration: '30 days' },
      {
        name: 'Optical Equipment, Lens Fitting & Eye Care Assistance',
        duration: '33 days',
      },
    ],
  },
]

/**
 * Items repeated in the highlight strip that sits above the hero content.
 */
export const HERO_MARQUEE_ITEMS = [
  'UGC approved programs',
  'University affiliated',
  '7 programs',
  '30 days to 4 years',
  'Internship-first learning',
] as const
