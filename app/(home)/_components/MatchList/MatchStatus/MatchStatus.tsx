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
      className={`${statusStyles[status]} min-w-[70px] tb:min-w-[92px] text-center rounded py-1 tb:py-1.5 px-2 text-s_caption`}
    >
      {statusLabels[status]}
    </div>
  )
}
