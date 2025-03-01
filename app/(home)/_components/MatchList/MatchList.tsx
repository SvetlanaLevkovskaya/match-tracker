'use client'

import { Button, Spinner } from '@/components/ui'

import { ArrowIcon } from '@/ui/Icons/ArrowIcon'
import { TeamIcon } from '@/ui/Icons/TeamIcon'

import { useMatches } from '@/providers/MatchesContext'


export const MatchList = () => {
  const { matches, loading } = useMatches()

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {matches.map((match) => (
        <div key={match.time} className="bg-gray-2 rounded-lg p-2 tb:py-4 tb:px-[36px]">
          <div className="flex flex-col tb:flex-row tb:flex-center-between">
            <div className="flex justify-between flex-grow gap-1">
              <div className="flex-center-center gap-1 tb:gap-3 w-full tb:w-auto">
                <TeamIcon className="w-7 h-7 tb:w-12 tb:h-12" />
                <p className="text-white text-s_text tb:text-s_h5 break-all w-[90px] tb:w-[160px] ds:w-[260px] xl:w-[350px] text-left">
                  {match.homeTeam.name}
                </p>
              </div>

              <div className="flex-center-center flex-col gap-1 min-w-[120px]">
                <p className="text-s_text tb:text-s_h5">{`${match.homeScore} : ${match.awayScore}`}</p>
                {match.status === 'Ongoing' && (
                  <Button color="green" size="m">
                    Live
                  </Button>
                )}
                {match.status === 'Finished' && (
                  <Button color="red" size="m" className="bg-red-glow">
                    Finished
                  </Button>
                )}
                {match.status === 'Scheduled' && <Button size="m">Scheduled</Button>}
              </div>

              <div className="flex-center-center gap-1 tb:gap-3 w-full tb:w-auto">
                <p className="text-white break-all text-s_text tb:text-s_h5 w-[90px] tb:w-[160px] ds:w-[260px] xl:w-[350px] text-right">
                  {match.awayTeam.name}
                </p>
                <TeamIcon className="w-7 h-7 tb:w-12 tb:h-12" />
              </div>
            </div>
            <ArrowIcon className=" mt-2.5 self-center" />
          </div>
        </div>
      ))}
    </div>
  )
}
