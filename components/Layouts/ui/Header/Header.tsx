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
      <div className="flex flex-col tb:flex-row tb:justify-between items-center w-full gap-2.5">
        <div className="flex items-center gap-6 w-full tb:w-auto flex-col tb:flex-row ">
          <Link href={AppRoutes.home}>
            <LogoIcon />
          </Link>

          <MatchStatusFilter selectedStatus={filterStatus} onChange={setFilterStatus} />
        </div>

        <div className="flex flex-col tb:flex-row tb:items-center w-full tb:w-auto gap-2.5 tb:justify-end">
          {error && (
            <div className="flex items-center tb:justify-center w-full tb:w-[500px] px-6 py-3.5 gap-2.5 bg-gray-2 rounded">
              <AlertIcon />
              <p className="text-white text_s-text tb:text-s_sh2 text-center tb:text-left">
                {error}
              </p>
            </div>
          )}

          <Button
            color="red"
            size="l"
            onClick={refreshMatches}
            disabled={loading}
            className="w-full tb:w-auto px-10"
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
