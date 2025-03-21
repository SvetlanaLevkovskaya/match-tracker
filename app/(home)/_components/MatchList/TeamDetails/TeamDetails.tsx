import { PlayerCard } from './PlayerCard/PlayerCard'
import { TeamStats } from './TeamStats/TeamStats'
import { Team } from '@/types'

interface Props {
  team: Team
  isHome?: boolean
}

export const TeamDetails = ({ team, isHome }: Props) => {
  return (
    <div className={`w-full ds:w-1/2 ${isHome ? 'text-left' : 'text-right'}`}>
      <div className="gap-2 flex-center-between tb:gap-1">
        {team.players.map((player) => (
          <PlayerCard key={player.username} player={player} />
        ))}
      </div>
      <TeamStats team={team} />
    </div>
  )
}
