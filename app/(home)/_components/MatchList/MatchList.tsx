'use client'

import { useEffect, useState } from 'react'

import clsx from 'clsx'

import { ArrowIcon } from '@/ui/Icons/ArrowIcon'

import { MatchStatusComponent } from './MatchStatus/MatchStatus'
import { TeamDetails } from './TeamDetails/TeamDetails'
import { TeamInfo } from './TeamInfo/TeamInfo'
import { useMatches } from '@/providers/MatchesContext'

export const MatchList = () => {
  const { matches, loading, error } = useMatches()
  const [expandedMatch, setExpandedMatch] = useState<string | null>(null)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1)
  }, [matches])

  if (loading || error) return null
  if (matches.length === 0)
    return (
      <div className="w-full p-4 text-gray-4 flex-center-center">Нет матчей для отображения</div>
    )

  const toggleMatch = (matchId: string) => {
    setExpandedMatch(expandedMatch === matchId ? null : matchId)
  }

  return (
    <div className="flex w-full flex-col gap-3">
      {matches.map((match) => {
        const matchId = match.time
        const isExpanded = expandedMatch === matchId

        return (
          <div
            key={matchId}
            className="rounded-lg bg-gray-2 p-2 tb:px-9 tb:py-4"
            onClick={() => toggleMatch(matchId)}
          >
            <div className="flex flex-col tb:flex-row">
              <div className="flex flex-grow justify-between gap-1">
                <TeamInfo teamName={match.homeTeam.name} />
                <div className="ml-0 flex min-w-28 flex-col items-center ds:ml-6">
                  <p
                    key={`${animationKey}`}
                    className={clsx(`mb-1 inline-block animate-countUp text-s_text tb:text-s_h5`)}
                  >{`${match.homeScore} : ${match.awayScore}`}</p>
                  <MatchStatusComponent status={match.status} />
                </div>
                <TeamInfo teamName={match.awayTeam.name} isHomeTeam={false} />
              </div>
              <div className="flex cursor-pointer justify-center self-center transition-transform">
                <ArrowIcon className={`hidden ds:flex ${isExpanded ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {isExpanded && (
              <div className="mt-4 tb:mt-8">
                <div className="flex flex-col justify-between gap-3.5 tb:gap-8 ds:flex-row">
                  <TeamDetails team={match.homeTeam} isHome />
                  <div className="flex w-full items-center ds:hidden">
                    <div className="flex-1 border-t border-gray-5"></div>
                    <span className="mx-2 text-s_text text-gray-5">VS</span>
                    <div className="flex-1 border-t border-gray-5"></div>
                  </div>
                  <TeamDetails team={match.awayTeam} isHome={false} />
                </div>
              </div>
            )}

            <div className="mt-2 flex justify-center ds:hidden">
              <ArrowIcon className={`${isExpanded ? 'rotate-180' : ''}`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
