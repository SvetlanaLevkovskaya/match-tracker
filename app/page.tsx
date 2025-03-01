import { NavLayout } from '@/components/Layouts/NavLayout'

import { MatchList } from '@/app/(home)/_components'
import { ErrorProvider } from '@/providers/ErrorContext'


export default async function MatchListPage() {
  return (
    <ErrorProvider>
      <NavLayout>
        <MatchList />
      </NavLayout>
    </ErrorProvider>
  )
}
