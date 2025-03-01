'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/ui/index'

import { AppRoutes } from '@/lib/api/routes'
import { LogoIcon } from '@/ui/Icons/LogoIcon'
import Link from 'next/link'
import { RefreshIcon } from '@/ui/Icons/RefreshIcon'
import { useError } from '@/providers/ErrorContext'


export const Header = () => {
  const { error } = useError()
  const router = useRouter()

  const handleRefresh = () => {
    router.refresh()
  }


  return (
    <div className="sticky top-0 z-5 text-gray-dark">
      <div className=" transition-all2">
        <div className="flex-center-between flex-col tb:flex-row text-gray-5 gap-2.5">
          <Link href={AppRoutes.home}>
            <LogoIcon/>
          </Link>
          {error && <p className="text-red-500">{error}</p>}
          <Button color="red" size={'l'} onClick={handleRefresh} className='w-full tb:w-auto px-[40px]'>
            Обновить
            <RefreshIcon className='ml-2'/>
          </Button>
        </div>
      </div>
    </div>
  )
}
