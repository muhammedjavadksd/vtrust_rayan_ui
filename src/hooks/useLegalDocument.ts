import { useState, useEffect } from 'react'
import api from '../lib/api'
import type { LegalDocument } from '../types/legal'

export function useLegalDocument(documentType: 'privacy' | 'terms' | 'refund') {
  const [content, setContent] = useState<LegalDocument | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLegalDocument = async () => {
      try {
        setLoading(true)
        const response = await api.get(`/legal/${documentType}`)
        
        if (!response.data?.success || !response.data?.data) {
          throw new Error(`Invalid ${documentType} policy API response`)
        }

        setContent(response.data.data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : `Failed to fetch ${documentType} policy`)
      } finally {
        setLoading(false)
      }
    }

    fetchLegalDocument()
  }, [documentType])

  return {
    content,
    loading,
    error,
  }
}
