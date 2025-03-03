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
    <div className="mt-2 rounded bg-gray-3 px-3 tb:px-6 py-3.5">
      <ul className="flex text-center divide-x divide-gray-5">
        {stats.map((stat, index) => (
          <li
            key={index}
            className="flex-1 flex justify-center items-center space-x-none ds:space-x-1 xl:space-x-2 pl-1 ds:pl-2"
          >
            <span className="leading-[0.8] text-gray-4 text-s_caption xl:text-s_text whitespace-nowrap">
              {stat.label}
            </span>
            <span className="min-w-[28px] text-s_text xl:text-s_body text-end ">{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
