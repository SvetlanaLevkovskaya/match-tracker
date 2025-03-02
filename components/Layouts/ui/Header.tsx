'use client'

import clsx from 'clsx'
import Link from 'next/link'

import { AlertIcon } from '@/ui/Icons/AlertIcon'
import { LogoIcon } from '@/ui/Icons/LogoIcon'
import { RefreshIcon } from '@/ui/Icons/RefreshIcon'
import { Button } from '@/ui/index'

import { AppRoutes } from '@/lib/api/routes'
import { useMatches } from '@/providers/MatchesContext'

export const Header = () => {
  const { loading, error, refreshMatches } = useMatches()

  return (
    <div className="text-gray-dark">
      <div className="flex flex-col items-center tb:flex-row tb:justify-between gap-2.5">
        <Link href={AppRoutes.home}>
          <LogoIcon />
        </Link>

        <div className="flex flex-col tb:flex-row tb:items-center w-full tb:w-auto gap-2.5">
          {error && (
            <div className="flex-center-center w-full tb:w-auto px-6 py-3.5 gap-2.5 bg-gray-2 rounded">
              <AlertIcon />
              <p className="text-center text-white text_s-text tb:text-s_sh2">{error}</p>
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
                'fill-gray-4': loading,
              })}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
