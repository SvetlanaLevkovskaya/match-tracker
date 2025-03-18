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
      className="mt-5 w-full tb:w-80"
      onClick={() => {
        push(AppRoutes.home)
      }}
    >
      Go Home
    </Button>
  )
}
