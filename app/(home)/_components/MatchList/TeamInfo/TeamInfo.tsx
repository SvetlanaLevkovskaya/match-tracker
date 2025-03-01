import { TeamIcon } from '@/ui/Icons/TeamIcon'

interface Props {
  teamName: string
  isHomeTeam?: boolean
}

export const TeamInfo = ({ teamName, isHomeTeam = true }: Props) => {
  return (
    <div
      className={`flex-center-center gap-1 tb:gap-3 w-full tb:w-auto ${!isHomeTeam ? 'text-right' : ''}`}
    >
      {isHomeTeam && <TeamIcon className="w-7 h-7 tb:w-12 tb:h-12" />}
      <p
        className={`text-white text-s_text tb:text-s_h5 break-all w-[90px] tb:w-[160px] ds:w-[260px] xl:w-[350px] text-left ${
          !isHomeTeam ? 'text-right' : ''
        }`}
      >
        {teamName}
      </p>
      {!isHomeTeam && <TeamIcon className="w-7 h-7 tb:w-12 tb:h-12" />}
    </div>
  )
}
