import { useState } from 'react'

import clsx from 'clsx'

import { ArrowDownIcon } from '@/ui/Icons/ArrowDownIcon'

import { MatchStatus } from '@/types'

interface Props {
  selectedStatus: string
  onChange: (selectedStatus: 'All' | MatchStatus) => void
}

export const MatchStatusFilter = ({ selectedStatus, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (value: string) => {
    onChange(value as 'All' | MatchStatus)
    setIsOpen(false)
  }

  const statuses = [
    { value: 'All', label: 'Все статусы' },
    { value: 'Ongoing', label: 'Live' },
    { value: 'Finished', label: 'Finished' },
    { value: 'Scheduled', label: 'Match preparing' },
  ]

  return (
    <div className="relative w-full tb:w-[180px]">
      <button
        className="flex items-center justify-between w-full p-4 bg-gray-2 text-gray-1 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {statuses.find((s) => s.value === selectedStatus)?.label}
        <ArrowDownIcon
          className={clsx('transition-transform duration-300', {
            'rotate-180': isOpen,
          })}
        />
      </button>

      {isOpen && (
        <ul
          className="absolute left-0 mt-2 bg-gray-2 rounded z-10 overflow-auto max-h-[224px]
          w-full tb:w-[180px] shadow-lg"
        >
          {statuses.map(({ value, label }) => (
            <li
              key={value}
              className={clsx(
                'p-3 cursor-pointer transition-colors',
                selectedStatus === value ? 'text-gray-6' : 'text-gray-1',
                'hover:text-white'
              )}
              onClick={() => handleSelect(value)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
