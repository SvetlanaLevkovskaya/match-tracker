import { MatchStatus } from '@/types'

interface Props {
  status: MatchStatus
}

export const MatchStatusComponent = ({ status }: Props) => {
  const statusStyles = {
    Ongoing: 'bg-green-glow text-white',
    Finished: 'bg-red-glow text-white',
    Scheduled: 'bg-gray-dark text-white',
  }

  const statusLabels = {
    Ongoing: 'Live',
    Finished: 'Finished',
    Scheduled: 'Scheduled',
  }

  return (
    <div
      className={`${statusStyles[status]} rounded py-[6px] px-1 text-s_caption min-w-[92px] max-w-[112px] text-center`}
    >
      {statusLabels[status]}
    </div>
  )
}
