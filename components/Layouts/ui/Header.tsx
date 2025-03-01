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

  console.log(loading)

  return (
    <div className="text-gray-dark">
      <div className="transition-all2">
        <div className="flex flex-col tb:flex-row tb:items-center tb:justify-between gap-2.5">
          <Link href={AppRoutes.home}>
            <LogoIcon />
          </Link>

          <div className="flex flex-col tb:flex-row tb:items-center gap-2.5">
            {error && (
              <div className="px-6 py-[14px] bg-gray-2 rounded flex-center-center gap-2.5">
                <AlertIcon />
                <p className="text-white text_s-text tb:text-s_sh2 text-center">{error}</p>
              </div>
            )}

            <Button
              color="red"
              size="l"
              onClick={refreshMatches}
              className={clsx('w-full tb:w-auto px-10', {
                'bg-red-glow text-white': !loading && !error,
                'bg-red-light text-white': loading,
                'bg-red-dark text-gray-4': error,
              })}
            >
              Обновить
              <RefreshIcon   className={clsx('ml-2.5 fill-white', {
                'fill-gray-4': error,
              })}/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
