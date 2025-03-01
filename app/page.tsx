import { NavLayout } from '@/components/Layouts/NavLayout'

import { MatchList } from '@/app/(home)/_components'
import { MatchesProvider } from '@/providers/MatchesContext'


export default async function MatchListPage() {
  return (
    <MatchesProvider>
      <NavLayout>
        <MatchList />
      </NavLayout>
    </MatchesProvider>
  )
}
