import Image from 'next/image'

import Avatar from '@/public/avatar.webp'
import { Player } from '@/types'

interface PlayerProps {
  player: Player
}

export const PlayerCard = ({ player }: PlayerProps) => (
  <div className="bg-gray-3 flex-center-center xl:flex-center-between rounded px-6 py-2 min-w-[123px] max-w-80 flex-1 flex-col xl:flex-row gap-1">
    <div className="flex-center-center gap-[5.5px] tb:gap-2 flex-nowrap">
      <Image
        src={Avatar}
        alt={player.username}
        width={36}
        height={36}
        className="w-8 h-8 tb:w-9 tb:h-9"
      />
      <span className="truncate overflow-hidden whitespace-nowrap min-w-0 w-20 text-s_text tb:text-s_body text-left">
        {player.username}
      </span>
    </div>
    <span className="text-s_text tb:text-s_body text-nowrap text-center">
      <span className="text-s_caption tb:text-s_text text-gray-4 pr-2">Убийств:</span>{' '}
      {player.kills}
    </span>
  </div>
)
