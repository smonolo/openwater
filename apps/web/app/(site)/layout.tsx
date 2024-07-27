import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import type { PropsWithChildren } from 'react'

export default function SiteLayout({ children }: PropsWithChildren) {
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
