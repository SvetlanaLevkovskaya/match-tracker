'use client'

import { useState } from 'react'

import { Spinner } from '@/components/ui'

import { ArrowIcon } from '@/ui/Icons/ArrowIcon'

import { MatchStatusComponent } from './MatchStatus/MatchStatus'
import { TeamDetails } from './TeamDetails/TeamDetails'
import { TeamInfo } from './TeamInfo/TeamInfo'
import { useMatches } from '@/providers/MatchesContext'

export const MatchList = () => {
  const { matches, loading, error } = useMatches()
  const [expandedMatch, setExpandedMatch] = useState<string | null>(null)

  if (error) return null
  if (loading) return <Spinner />
  if (matches.length === 0)
    return (
      <div className="flex justify-center items-center w-full p-4 text-gray-4">
        Нет матчей для отображения
      </div>
    )

  const toggleMatch = (matchId: string) => {
    setExpandedMatch(expandedMatch === matchId ? null : matchId)
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {matches.map((match) => {
        const matchId = match.time
        const isExpanded = expandedMatch === matchId

        return (
          <div
            key={match.time}
            className="bg-gray-2 rounded-lg p-2 tb:py-4 tb:px-[36px]"
            onClick={() => toggleMatch(matchId)}
          >
            <div className="flex flex-col tb:flex-row tb:flex-center-between">
              <div className="flex justify-between flex-grow gap-1">
                <TeamInfo teamName={match.homeTeam.name} />
                <div className="flex-center-center flex-col gap-1 min-w-[120px]">
                  <p className="text-s_text tb:text-s_h5">{`${match.homeScore} : ${match.awayScore}`}</p>
                  <MatchStatusComponent status={match.status} />
                </div>
                <TeamInfo teamName={match.awayTeam.name} isHomeTeam={false} />
              </div>
              <div className="flex justify-center mt-2.5 self-center cursor-pointer transition-transform">
                <ArrowIcon className={`ds:flex hidden ${isExpanded ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {isExpanded && (
              <div className="mt-8">
                <div className="flex-center-between gap-4 flex-col ds:flex-row">
                  <TeamDetails team={match.homeTeam} isHome />
                  <div className="flex items-center w-full ds:hidden">
                    <div className="flex-1 border-t border-gray-5"></div>
                    <span className="mx-2 text-s_text text-gray-5">VS</span>
                    <div className="flex-1 border-t border-gray-5"></div>
                  </div>
                  <TeamDetails team={match.awayTeam} isHome={false} />
                </div>
              </div>
            )}

            <div className="flex justify-center ds:hidden">
              <ArrowIcon className={`${isExpanded ? 'rotate-180' : ''}`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
