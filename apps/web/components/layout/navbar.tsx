'use client'

import logo from '@/assets/images/logo.png'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type Item = {
  icon: string
  text: string
  url: string
}

const items: Item[] = [
  { icon: 'bi bi-compass', text: 'Explore', url: '/' },
  { icon: 'bi bi-plus-circle', text: 'Publish', url: '/publish' },
  { icon: 'bi bi-tsunami', text: 'About', url: '/about' }
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <div className="fixed left-0 top-0 w-full">
      <nav className="h-14 border-b border-neutral-700 bg-neutral-800">
        <div className="flex h-full items-center justify-between px-5 lg:hidden">
          <Link href="/" className="flex h-full select-none items-center">
            <Image
              src={logo}
              alt="OpenWater white logo"
              className="w-9"
              draggable={false}
            />
          </Link>
          <button
            className="flex h-full flex-col justify-center gap-y-1"
            onClick={() => setMenuOpen(true)}
          >
            <i className="bi bi-water text-2xl" />
          </button>
        </div>
        <div
          className={classNames(
            'absolute left-0 top-0 h-screen w-full bg-neutral-950/70 lg:relative lg:block lg:h-full lg:bg-transparent',
            isMenuOpen ? 'block' : 'hidden'
          )}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="flex flex-col gap-y-5 border-b border-neutral-700 bg-neutral-800 px-5 py-5 lg:grid lg:h-full lg:grid-cols-3 lg:border-none lg:bg-transparent lg:py-0"
            onClick={event => event.stopPropagation()}
          >
            <div className="flex items-center">
              <Link
                href="/"
                className="flex select-none items-center gap-x-1.5"
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src={logo}
                  alt="OpenWater white logo"
                  className="w-9"
                  draggable={false}
                />
                <span className="font-display text-lg font-medium">
                  OpenWater
                </span>
              </Link>
            </div>
            <div className="flex items-center lg:justify-center">
              <ul className="flex w-full flex-col items-start gap-x-3 gap-y-2 lg:w-fit lg:flex-row lg:items-center">
                {items.map((item, index) => (
                  <li key={index} className="w-full">
                    <Link
                      href={item.url}
                      className={classNames(
                        'flex items-center justify-between rounded-lg px-4 py-2 transition-colors',
                        pathname === item.url
                          ? 'bg-neutral-700/80 hover:bg-neutral-700'
                          : 'hover:bg-neutral-700/60'
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex w-fit items-center gap-x-2">
                        <i className={item.icon} />
                        <span className="font-semibold">{item.text}</span>
                      </div>
                      <i
                        className={classNames(
                          'text-neutral-400 lg:hidden',
                          pathname === item.url
                            ? 'bi bi-geo'
                            : 'bi bi-chevron-right'
                        )}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center lg:justify-end">
              <div className="flex w-full flex-col items-center gap-x-3 gap-y-2 sm:flex-row lg:w-fit">
                <Link
                  href="/login"
                  className="block w-full rounded-lg bg-neutral-700/80 px-4 py-1.5 text-center font-semibold hover:bg-neutral-700 lg:w-fit lg:bg-transparent lg:hover:bg-neutral-700/60"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/join"
                  className="block w-full rounded-lg bg-blue-500 px-4 py-1.5 text-center font-semibold transition-colors hover:bg-blue-500/80 lg:w-fit"
                  onClick={() => setMenuOpen(false)}
                >
                  Join
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
