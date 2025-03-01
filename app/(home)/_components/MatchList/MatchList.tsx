'use client'

import { Spinner } from '@/components/ui'

import { ArrowIcon } from '@/ui/Icons/ArrowIcon'

import { MatchStatusComponent } from './MatchStatus/MatchStatus'
import { TeamInfo } from './TeamInfo/TeamInfo'
import { useMatches } from '@/providers/MatchesContext'


export const MatchList = () => {
  const { matches, loading } = useMatches()

  if (loading) {
    return <Spinner />
  }

  if (matches.length === 0) {
    return (
      <div className="flex justify-center items-center w-full p-4 text-gray-500">
        Нет матчей для отображения
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {matches.map((match) => (
        <div key={match.time} className="bg-gray-2 rounded-lg p-2 tb:py-4 tb:px-[36px]">
          <div className="flex flex-col tb:flex-row tb:flex-center-between">
            <div className="flex justify-between flex-grow gap-1">
              <TeamInfo teamName={match.homeTeam.name} />
              <div className="flex-center-center flex-col gap-1 min-w-[120px]">
                <p className="text-s_text tb:text-s_h5">{`${match.homeScore} : ${match.awayScore}`}</p>
                <MatchStatusComponent status={match.status} />
              </div>
              <TeamInfo teamName={match.awayTeam.name} isHomeTeam={false} />
            </div>
            <ArrowIcon className="mt-2.5 self-center" />
          </div>
        </div>
      ))}
    </div>
  )
}
