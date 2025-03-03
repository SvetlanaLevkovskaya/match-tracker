'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { fetchMatches } from '@/services/apiClientService'

import { Match, MatchStatus } from '@/types'

const WS_URL = 'wss://app.ftoyd.com/fronttemp-service/ws'

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

    const socket = new WebSocket(WS_URL)

    socket.onopen = () => {
      console.log('WebSocket подключен')
    }

    socket.onmessage = (event) => {
      try {
        const response = JSON.parse(event.data)
        console.log('Получены данные по WebSocket:', response)

        const updatedMatches = response.data as Match[]

        setMatches((prevMatches) =>
          prevMatches.map((match) => {
            const updatedMatch = updatedMatches.find((updated) => {
              const matchTime = new Date(match.time).getTime()
              const updatedMatchTime = new Date(updated.time).getTime()
              return matchTime === updatedMatchTime
            })

            return updatedMatch ? updatedMatch : match
          })
        )
      } catch (error) {
        console.error('Ошибка обработки WebSocket-сообщения:', error)
      }
    }

    socket.onerror = (error) => {
      console.error('WebSocket ошибка:', error)
    }

    socket.onclose = () => {
      console.log('WebSocket отключен')
    }

    return () => {
      socket.close()
    }
  }, [])

  const refreshMatches = () => {
    loadMatches()
  }

  return (
    <MatchesContext.Provider
      value={{
        matches: filteredMatches,
        loading,
        error,
        refreshMatches,
        filterStatus,
        setFilterStatus,
      }}
    >
      {children}
    </MatchesContext.Provider>
  )
}

export const useMatches = () => useContext(MatchesContext)
