import { Team } from '@/types'

interface Props {
  team: Team
}

export const TeamStats = ({ team }: Props) => {
  const stats = [
    { label: 'Points:', value: `+${team.points}` },
    { label: 'Место:', value: team.place },
    { label: 'Всего убийств:', value: team.total_kills },
  ]

  return (
    <div className="mt-2 rounded bg-gray-3 px-3 py-3.5 tb:px-6">
      <ul className="flex divide-x divide-gray-5 text-center">
        {stats.map((stat, index) => (
          <li
            key={index}
            className="space-x-none flex flex-1 items-center justify-center pl-1 ds:space-x-1 ds:pl-2 xl:space-x-2"
          >
            <span className="whitespace-nowrap text-s_caption leading-[0.8] text-gray-4 xl:text-s_text">
              {stat.label}
            </span>
            <span className="min-w-[28px] text-end text-s_text ds:min-w-[32px] xl:text-s_body">
              {stat.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
