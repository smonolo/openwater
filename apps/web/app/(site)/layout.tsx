'use client'

import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { useAppDispatch } from '@/lib/store/hooks'
import { verify } from '@/lib/store/thunks/auth'
import { useEffect, type PropsWithChildren } from 'react'

export default function SiteLayout({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      dispatch(verify(token))
    }
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between pt-14">
        <main className="content:px-0 mx-auto w-full max-w-[1200px] px-5">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
