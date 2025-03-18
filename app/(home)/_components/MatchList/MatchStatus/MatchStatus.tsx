import { MatchStatus } from '@/types'

interface Props {
  status: MatchStatus
}

export const MatchStatusComponent = ({ status }: Props) => {
  const statusStyles = {
    Ongoing: 'bg-green-glow text-white',
    Finished: 'bg-red-glow text-white',
    Scheduled: 'bg-orange text-white',
  }

  const statusLabels = {
    Ongoing: 'Live',
    Finished: 'Finished',
    Scheduled: 'Match preparing',
  }

  return (
    <div
      className={`${statusStyles[status]} min-w-[70px] rounded px-2 py-1 text-center text-s_caption tb:min-w-[92px] tb:py-1.5`}
    >
      {statusLabels[status]}
    </div>
  )
}
