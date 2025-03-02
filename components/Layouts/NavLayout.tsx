'use client'

import { ReactNode } from 'react'

import { Header } from './ui/Header/Header'

export const NavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-dvh min-w-[428px] max-w-[1960px] mx-auto p-4 ds:p-6">
      <Header />
      <main className="flex-center flex-grow w-full h-full bg-black text-white py-8 ds:py-5">
        {children}
      </main>
    </div>
  )
}
