import LegalPageTemplate from './LegalPageTemplate'
import { privacyPolicyContent } from './data/legal'

export default function PrivacyPolicyPage() {
  return <LegalPageTemplate content={privacyPolicyContent} />
}
