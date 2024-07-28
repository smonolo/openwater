'use client'

import SettingsSidebar from '@/components/settings/settings-sidebar'
import { useAppSelector } from '@/lib/store/hooks'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'

export default function SettingsLayout({ children }: PropsWithChildren) {
  const router = useRouter()
  const { user } = useAppSelector(state => state.auth)

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  return (
    <section className="mt-5 flex w-full flex-col gap-x-10 gap-y-5 py-10 lg:flex-row">
      <SettingsSidebar />
      <div className="w-full">{children}</div>
    </section>
  )
}
