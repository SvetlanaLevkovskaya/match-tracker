import Image from 'next/image'

import Avatar from '@/public/avatar.webp'
import { Player } from '@/types'

interface PlayerProps {
  player: Player
}

export const PlayerCard = ({ player }: PlayerProps) => (
  <div className="flex-center-center flex-col xl:flex-row flex-1 min-w-[123px] max-w-80 gap-1 bg-gray-3 rounded px-6 py-2 xl:justify-between">
    <div className="flex-center-center flex-nowrap gap-[5.5px] tb:gap-2">
      <Image
        src={Avatar}
        alt={player.username}
        width={36}
        height={36}
        className="w-8 h-8 tb:w-9 tb:h-9"
      />
      <span className="w-20 min-w-0 text-left truncate overflow-hidden whitespace-nowrap text-s_text tb:text-s_body">
        {player.username}
      </span>
    </div>
    <span className="text-nowrap text-center text-s_text tb:text-s_body">
      <span className="pr-2 text-gray-4 text-s_caption tb:text-s_text">Убийств:</span>{' '}
      {player.kills}
    </span>
  </div>
)
