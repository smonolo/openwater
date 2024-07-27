import Footer from '@/components/layout/footer'
import Image from 'next/image'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import logo from '@/assets/images/logo.png'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-5">
        <div className="flex select-none items-center gap-x-1.5">
          <Image
            src={logo}
            alt="OpenWater white logo"
            className="w-9"
            draggable={false}
          />
          <span className="font-display hidden text-lg font-medium md:block">
            OpenWater
          </span>
        </div>
        <Link
          href="/"
          className="flex items-center gap-x-1.5 rounded-lg border border-neutral-800 px-4 py-1.5 font-semibold transition-colors hover:bg-neutral-800"
        >
          <i className="bi bi-compass" />
          <span>Explore</span>
        </Link>
      </nav>
      <main className="flex h-screen justify-center px-5 py-28">
        {children}
      </main>
      <Footer />
    </div>
  )
}
