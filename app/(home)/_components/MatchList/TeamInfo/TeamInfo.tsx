import { memo } from 'react'

import { TeamIcon } from '@/ui/Icons/TeamIcon'

interface Props {
  teamName: string
  isHomeTeam?: boolean
}

export const TeamInfo = memo(({ teamName, isHomeTeam = true }: Props) => {
  return (
    <div
      className={`flex w-auto items-center gap-1 tb:gap-3 ${isHomeTeam ? 'flex-row-reverse' : ''}`}
    >
      <p
        className={`w-24 tb:w-40 ds:w-64 xl:w-96 min-w-0 
        truncate overflow-hidden whitespace-nowrap break-all 
        text-white text-s_text tb:text-s_h5 
        ${isHomeTeam ? 'text-left' : 'text-right'}`}
      >
        {teamName}
      </p>
      <TeamIcon className="w-7 h-7 tb:w-12 tb:h-12" />
    </div>
  )
})

TeamInfo.displayName = 'TeamInfo'
