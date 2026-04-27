export const AnimationClass = {
  LOAD: 'animate-load',
  LOAD_FROM_RIGHT: 'animate-load-from-right',
  OPACITY_0: 'opacity-0',
} as const

export const AnimationDelay = {
  HERO_LABEL: 120,
  HERO_TITLE: 180,
  HERO_SUMMARY: 220,
  HERO_BREADCRUMB: 260,
  EFFECTIVE_DATE_LABEL: 300,
  EFFECTIVE_DATE_VALUE: 340,
  SECTIONS_START: 360,
} as const

export const SectionLabel = {
  EFFECTIVE_DATE: 'EFFECTIVE DATE',
} as const

export const HeroBackground = {
  IMAGE_URL: '/generated/hero-bg.png',
  GRADIENT: 'linear-gradient(90deg,rgba(13,43,107,0.82)_0%,rgba(13,43,107,0.55)_45%,rgba(13,43,107,0.35)_100%)',
} as const

export type AnimationClassType = typeof AnimationClass[keyof typeof AnimationClass]
export type AnimationDelayType = typeof AnimationDelay[keyof typeof AnimationDelay]
export type SectionLabelType = typeof SectionLabel[keyof typeof SectionLabel]
export type HeroBackgroundType = typeof HeroBackground[keyof typeof HeroBackground]
