'use client'

import { useState } from 'react'

import { ArrowIcon } from '@/ui/Icons/ArrowIcon'

import { MatchStatusComponent } from './MatchStatus/MatchStatus'
import { TeamDetails } from './TeamDetails/TeamDetails'
import { TeamInfo } from './TeamInfo/TeamInfo'
import { useMatches } from '@/providers/MatchesContext'

export const MatchList = () => {
  const { matches, error } = useMatches()
  const [expandedMatch, setExpandedMatch] = useState<string | null>(null)

  if (error) return null
  if (matches.length === 0)
    return (
      <div className="flex-center-center w-full p-4 text-gray-4">Нет матчей для отображения</div>
    )

  const toggleMatch = (matchId: string) => {
    setExpandedMatch(expandedMatch === matchId ? null : matchId)
  }

  return (
    <div className="flex flex-col w-full gap-3 ">
      {matches.map((match) => {
        const matchId = match.time
        const isExpanded = expandedMatch === matchId

        return (
          <div
            key={match.time}
            className="p-2 tb:py-4 tb:px-9 bg-gray-2 rounded-lg"
            onClick={() => toggleMatch(matchId)}
          >
            <div className="flex flex-col tb:flex-row">
              <div className="flex justify-between flex-grow gap-1">
                <TeamInfo teamName={match.homeTeam.name} />
                <div className="flex flex-col items-center min-w-28 ml-0 ds:ml-6">
                  <p className="mb-1 text-s_text tb:text-s_h5">{`${match.homeScore} : ${match.awayScore}`}</p>
                  <MatchStatusComponent status={match.status} />
                </div>
                <TeamInfo teamName={match.awayTeam.name} isHomeTeam={false} />
              </div>
              <div className="self-center  flex justify-center cursor-pointer transition-transform">
                <ArrowIcon className={`hidden ds:flex ${isExpanded ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {isExpanded && (
              <div className="mt-4 tb:mt-8">
                <div className="flex flex-col gap-3.5 tb:gap-8 ds:flex-row justify-between">
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

            <div className="flex justify-center ds:hidden mt-2">
              <ArrowIcon className={`${isExpanded ? 'rotate-180' : ''}`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
