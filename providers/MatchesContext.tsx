'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { useWebsocket } from '@/hooks/useWebsocket'

import { fetchMatches } from '@/services/apiClientService'

import { Match, MatchStatus } from '@/types'

const WS_URL = process.env.NEXT_PUBLIC_WS_URL ?? ''

interface MatchesContextType {
  matches: Match[]
  loading: boolean
  error: string | null
  refreshMatches: () => void
  filterStatus: 'All' | MatchStatus
  setFilterStatus: (filterStatus: 'All' | MatchStatus) => void
}

const MatchesContext = createContext<MatchesContextType>({
  matches: [],
  loading: true,
  error: null,
  refreshMatches: () => {},
  filterStatus: 'All',
  setFilterStatus: () => {},
})

export const MatchesProvider = ({ children }: { children: ReactNode }) => {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<'All' | MatchStatus>('All')

  const filteredMatches =
    filterStatus === 'All' ? matches : matches.filter((match) => match.status === filterStatus)

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

  useWebsocket(WS_URL, (data) => setMatches(data))

  return (
    <MatchesContext.Provider
      value={{
        matches: filteredMatches,
        loading,
        error,
        refreshMatches: loadMatches,
        filterStatus,
        setFilterStatus,
      }}
    >
      {children}
    </MatchesContext.Provider>
  )
}

export const useMatches = () => useContext(MatchesContext)
