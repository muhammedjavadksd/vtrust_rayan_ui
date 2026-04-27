import { useState } from 'react'
import type { FormEvent } from 'react'
import { useBranches } from './useBranches'
import type { BranchAddress } from '../api/branch.api'

export function useContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)

    // Here you would typically send the form data to your API
    // For now, we'll just show the success message
    setTimeout(() => setSubmitted(false), 5000)
  }

  return {
    submitted,
    handleSubmit,
  }
}

export function useCampusSelector(initialCampusId?: string) {
  const { branches, loading, error } = useBranches()
  const [activeId, setActiveId] = useState(initialCampusId || branches[0]?.id || '')

  const activeCampus = branches.find((c: BranchAddress) => c.id === activeId) ?? branches[0]

  const selectCampus = (campusId: string) => {
    setActiveId(campusId)
  }

  return {
    activeId,
    activeCampus,
    campuses: branches,
    selectCampus,
    loading,
    error,
  }
}
