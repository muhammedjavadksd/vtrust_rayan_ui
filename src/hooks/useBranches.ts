import { useState, useEffect } from 'react'
import { getBranches } from '../api/branch.api'
import type { BranchAddress } from '../api/branch.api'

export function useBranches() {
  const [branches, setBranches] = useState<BranchAddress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBranches = async () => {
    try {
      setLoading(true)
      const data = await getBranches()
      setBranches(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch branches')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBranches()
  }, [])

  return {
    branches,
    loading,
    error,
    refetch: fetchBranches,
  }
}
