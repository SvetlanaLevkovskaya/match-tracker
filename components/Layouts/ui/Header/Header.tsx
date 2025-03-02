'use client'

import clsx from 'clsx'
import Link from 'next/link'

import { AlertIcon } from '@/ui/Icons/AlertIcon'
import { LogoIcon } from '@/ui/Icons/LogoIcon'
import { RefreshIcon } from '@/ui/Icons/RefreshIcon'
import { Button } from '@/ui/index'

import { MatchStatusFilter } from './MatchStatusFilter/MatchStatusFilter'
import { AppRoutes } from '@/lib/api/routes'
import { useMatches } from '@/providers/MatchesContext'

export const Header = () => {
  const { filterStatus, setFilterStatus, loading, error, refreshMatches } = useMatches()

  return (
    <div className="text-gray-dark">
      <div className="flex flex-col ds:flex-row ds:justify-between items-center w-full gap-2.5">
        <div className="flex items-center gap-6 w-full ds:w-auto flex-col ds:flex-row ">
          <Link href={AppRoutes.home}>
            <LogoIcon />
          </Link>

          <MatchStatusFilter selectedStatus={filterStatus} onChange={setFilterStatus} />
        </div>

        <div className="flex flex-col ds:flex-row ds:items-center w-full ds:w-auto gap-2.5 ds:justify-end">
          {error && (
            <div className="flex items-center ds:justify-center w-full ds:w-[500px] px-6 py-3.5 gap-2.5 bg-gray-2 rounded">
              <AlertIcon />
              <p className="text-white text_s-text ds:text-s_sh2 text-center ds:text-left">
                {error}
              </p>
            </div>
          )}

          <Button
            color="red"
            size="l"
            onClick={refreshMatches}
            disabled={loading}
            className="w-full ds:w-auto px-10"
          >
            Обновить
            <RefreshIcon
              className={clsx('ml-2.5 fill-white', {
                'fill-gray-4 animate-spin': loading,
              })}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
