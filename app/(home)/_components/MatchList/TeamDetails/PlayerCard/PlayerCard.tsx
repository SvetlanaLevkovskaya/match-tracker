import Image from 'next/image'

import Avatar from '@/public/avatar.webp'
import { Player } from '@/types'

interface PlayerProps {
  player: Player
}

export const PlayerCard = ({ player }: PlayerProps) => {
  return (
    <div className="min-w-[123px] max-w-80 flex-1 flex-col gap-1 rounded bg-gray-3 px-6 py-2 flex-center-center xl:flex-row xl:justify-between">
      <div className="flex-nowrap gap-[5.5px] flex-center-center tb:gap-2">
        <Image
          src={Avatar}
          alt={player.username}
          width={36}
          height={36}
          className="h-8 w-8 tb:h-9 tb:w-9"
        />
        <span className="w-20 min-w-0 overflow-hidden truncate whitespace-nowrap text-left text-s_text tb:text-s_body">
          {player.username}
        </span>
      </div>
      <span className="flex items-center text-s_text tb:text-s_body">
        <span className="mr-1 text-s_caption text-gray-4 ds:mr-2 xl:text-s_text">Убийств:</span>
        <span className="inline-block min-w-[28px] text-center">{player.kills}</span>
      </span>
    </div>
  )
}
