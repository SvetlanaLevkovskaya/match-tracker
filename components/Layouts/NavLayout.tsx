'use client'

import { ReactNode } from 'react'

import { Header } from './ui/Header/Header'

export const NavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-dvh min-w-[428px] max-w-[1960px] flex-col p-4 ds:p-6">
      <Header />
      <main className="h-full w-full flex-grow bg-black py-8 text-white flex-center ds:py-5">
        {children}
      </main>
    </div>
  )
}
