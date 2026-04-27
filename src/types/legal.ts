import type { AnimationClassType } from '../enums/ui'

export interface LegalDocumentSection {
  heading: string
  paragraphs: string[]
}

export interface LegalDocument {
  title: string
  focusLabel: string
  summary: string
  effectiveDate: string
  sections: LegalDocumentSection[]
}

export interface LegalPageTemplateProps {
  content: LegalDocument
}

export interface LegalPageAnimationState {
  isVisible: boolean
  mainRef: React.RefObject<HTMLElement | null>
}

export interface LegalPageAnimationUtils {
  revealClass: (animationClass: AnimationClassType) => string
  getAnimationStyle: (delay: number) => React.CSSProperties
}
