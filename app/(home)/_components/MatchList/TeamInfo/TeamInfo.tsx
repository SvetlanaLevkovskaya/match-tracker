import { TeamIcon } from '@/ui/Icons/TeamIcon'

interface Props {
  teamName: string
  isHomeTeam?: boolean
}

export const TeamInfo = ({ teamName, isHomeTeam = true }: Props) => {
  return (
    <div
      className={`flex w-auto items-center gap-1 tb:gap-3 ${isHomeTeam ? 'flex-row-reverse' : ''}`}
    >
      <p
        className={`w-24 min-w-0 overflow-hidden truncate whitespace-nowrap break-all text-s_text text-white tb:w-40 tb:text-s_h5 ds:w-64 xl:w-96 ${isHomeTeam ? 'text-left' : 'text-right'}`}
      >
        {teamName}
      </p>
      <TeamIcon className="h-7 w-7 tb:h-12 tb:w-12" />
    </div>
  )
}
