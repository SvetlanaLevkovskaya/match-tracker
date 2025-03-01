'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/ui/Button/Button'

import { AppRoutes } from '@/lib/api/routes'

export const ButtonNotFound = () => {
  const { push } = useRouter()

  return (
    <Button
      color="green"
      size="l"
      className="w-full tb:w-[330px] mt-5"
      onClick={() => {
        push(AppRoutes.home)
      }}
    >
      Go Home
    </Button>
  )
}
