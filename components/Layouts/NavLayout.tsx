'use client'

import { ReactNode } from 'react'

import clsx from 'clsx'

import { Header } from '@/components/Layouts/ui/Header'

export const NavLayout = ({
  disabledPadding,
  children,
}: {
  disabledPadding?: boolean
  children: ReactNode
}) => {
  return (
    <div className="flex flex-col min-h-dvh max-w-[1960px] mx-auto p-4 tb:p-[24px] min-w-[428px]">
      <Header />
      <main
        className={clsx('w-full h-full flex-center flex-grow bg-black text-white', {
          ['py-5']: !disabledPadding,
        })}
      >
        {children}
      </main>
    </div>
  )
}
