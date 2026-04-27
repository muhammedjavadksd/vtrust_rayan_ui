import LegalPageTemplate from './components/LegalPageTemplate'
import { useLegalDocument } from '../hooks/useLegalDocument'

export default function TermsConditionsPage() {
  const { content, loading, error } = useLegalDocument('terms')

  if (loading) return <div>Loading...</div>
  if (error || !content) return <div>Error loading terms and conditions</div>

  return <LegalPageTemplate content={content} />
}
