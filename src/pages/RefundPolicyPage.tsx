import LegalPageTemplate from './components/LegalPageTemplate'
import { useLegalDocument } from '../hooks/useLegalDocument'

export default function RefundPolicyPage() {
  const { content, loading, error } = useLegalDocument('refund')

  if (loading) return <div>Loading...</div>
  if (error || !content) return <div>Error loading refund policy</div>

  return <LegalPageTemplate content={content} />
}
