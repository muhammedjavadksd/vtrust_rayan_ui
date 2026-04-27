import LegalPageTemplate from './components/LegalPageTemplate'
import { useLegalDocument } from '../hooks/useLegalDocument'

export default function PrivacyPolicyPage() {
  const { content, loading, error } = useLegalDocument('privacy')

  if (loading) return <div>Loading...</div>
  if (error || !content) return <div>Error loading privacy policy</div>

  return <LegalPageTemplate content={content} />
}
