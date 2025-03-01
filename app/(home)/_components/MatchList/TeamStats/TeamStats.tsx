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
    <div className="bg-gray-3 rounded px-3 tb:px-6 py-[14px] mt-2">
      <ul className="flex-center-between text-center">
        {stats.map((stat, index) => (
          <>
            <li key={index} className="flex-1 flex-center-center gap-1">
              <span className="text-s_caption tb:text-s_text text-gray-4 leading-[0.8] pr-2">
                {stat.label}
              </span>
              <span className="text-s_text tb:text-s_body">{stat.value}</span>
            </li>
            {index < stats.length - 1 && <div className="h-[13px] tb:h-4 w-[1px] bg-gray-5"></div>}
          </>
        ))}
      </ul>
    </div>
  )
}
