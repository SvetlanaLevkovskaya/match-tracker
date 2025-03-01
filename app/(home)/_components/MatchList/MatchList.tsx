'use client'

import { Button, Spinner } from '@/components/ui'

import { ArrowIcon } from '@/ui/Icons/ArrowIcon'
import { TeamIcon } from '@/ui/Icons/TeamIcon'
import { useEffect, useState } from 'react'
import { fetchMatches } from '@/services/apiClientService'
import { Match } from '@/types'
import { useError } from '@/providers/ErrorContext'


export const MatchList = () => {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const { setError } = useError()

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await fetchMatches()
        setMatches(data)
      } catch (error) {
        setError('Ошибка: не удалось загрузить информацию')
      } finally {
        setLoading(false)
      }
    }
    loadMatches()
  }, [setError])

  if (loading) {
    return <Spinner/>
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {matches.map((match) => (
        <div key={match.time} className="bg-gray-2 rounded-lg p-2 tb:py-4 tb:px-[36px]">
          <div className="flex flex-col tb:flex-row tb:flex-center-between">
            <div className="flex justify-between flex-grow gap-1">
              <div className="flex-center-center gap-1 tb:gap-3">
                <TeamIcon className="w-[28px] h-[28px] tb:w-[48px] tb:h-[48px]" />
                <p className="text-white break-all">{match.homeTeam.name}</p>
              </div>

              <div className="flex-center-center flex-col gap-1">
                <p className="text-s_text tb:text-s_h5">{`${match.homeScore} : ${match.awayScore}`}</p>
                {match.status === 'Ongoing' && (
                  <Button color="green" size="m">Live</Button>
                )}
                {match.status === 'Finished' && (
                  <Button color="red" size="m">Finished</Button>
                )}
              </div>

              <div className="flex-center-center gap-1 tb:gap-3">
                <p className="text-white break-all">{match.awayTeam.name}</p>
                <TeamIcon className="w-[28px] h-[28px] tb:w-[48px] tb:h-[48px]" />
              </div>
            </div>
            <ArrowIcon className="self-center" />
          </div>
        </div>
      ))}
    </div>
  )
}
