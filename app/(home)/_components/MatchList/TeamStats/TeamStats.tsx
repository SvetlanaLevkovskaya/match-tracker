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
    <div className="bg-gray-3 rounded px-3 tb:px-6 py-3.5 mt-2">
      <ul className="flex text-center divide-x divide-gray-5">
        {stats.map((stat, index) => (
          <li key={index} className="flex-1 flex justify-center items-center space-x-2 px-2">
            <span className="text-s_caption tb:text-s_text text-gray-4 leading-[0.8]">
              {stat.label}
            </span>
            <span className="text-s_text tb:text-s_body">{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
