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
      <div className="flex w-full flex-col items-center gap-2.5 ds:flex-row ds:justify-between">
        <div className="flex w-full flex-col items-center gap-6 ds:w-auto ds:flex-row">
          <Link href={AppRoutes.home}>
            <LogoIcon />
          </Link>

          <MatchStatusFilter selectedStatus={filterStatus} onChange={setFilterStatus} />
        </div>

        <div className="flex w-full flex-col gap-2.5 ds:w-auto ds:flex-row ds:items-center ds:justify-end">
          {error && (
            <div className="flex w-full items-center gap-2.5 rounded bg-gray-2 px-6 py-3.5 ds:w-[500px] ds:justify-center">
              <AlertIcon />
              <p className="text_s-text text-center text-white ds:text-left ds:text-s_sh2">
                {error}
              </p>
            </div>
          )}

          <Button
            color="red"
            size="l"
            onClick={refreshMatches}
            disabled={loading}
            className="w-full px-10 ds:w-auto"
          >
            Обновить
            <RefreshIcon
              className={clsx('ml-2.5 fill-white', {
                'animate-spin fill-gray-4': loading,
              })}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
