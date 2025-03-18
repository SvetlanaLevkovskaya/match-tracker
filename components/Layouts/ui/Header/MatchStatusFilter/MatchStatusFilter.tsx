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
    <div className="relative w-full ds:w-[180px]">
      <button
        className="flex w-full items-center justify-between rounded bg-gray-2 p-4 text-gray-1"
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
        <ul className="absolute left-0 z-10 mt-2 max-h-[224px] w-full overflow-auto rounded bg-gray-2 ds:w-[180px]">
          {statuses.map(({ value, label }) => (
            <li
              key={value}
              className={clsx(
                'cursor-pointer p-3 transition-colors',
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
