'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { fetchMatches } from '@/services/apiClientService'

import { Match } from '@/types'


interface MatchesContextType {
  matches: Match[]
  loading: boolean
  error: string | null
  refreshMatches: () => void
}

const MatchesContext = createContext<MatchesContextType>({
  matches: [],
  loading: true,
  error: null,
  refreshMatches: () => {},
})

export const MatchesProvider = ({ children }: { children: ReactNode }) => {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadMatches = async () => {
    setLoading(true)
    try {
      const data = await fetchMatches()
      setMatches(data)
      setError(null)
    } catch (error) {
      setError('Ошибка: не удалось загрузить информацию')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMatches()
  }, [])

  const refreshMatches = () => {
    loadMatches()
  }

  return (
    <MatchesContext.Provider value={{ matches, loading, error, refreshMatches }}>
      {children}
    </MatchesContext.Provider>
  )
}

export const useMatches = () => useContext(MatchesContext)
