import LegalPageTemplate from './LegalPageTemplate'
import { termsConditionsContent } from './data/legal'

export default function TermsConditionsPage() {
  return <LegalPageTemplate content={termsConditionsContent} />
}
