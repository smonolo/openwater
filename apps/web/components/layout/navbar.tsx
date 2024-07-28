'use client'

import logo from '@/assets/images/logo.png'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { logout } from '@/lib/store/slices/auth'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
import Popover from '@/components/ui/popover'

type Item = {
  icon: string
  text: string
  url: string
}

const items: Item[] = [
  { icon: 'bi bi-compass', text: 'Explore', url: '/' },
  { icon: 'bi bi-trophy', text: 'Competitions', url: '/competitions' },
  { icon: 'bi bi-lightning', text: 'Training', url: '/training' },
  { icon: 'bi bi-plus-circle', text: 'Publish', url: '/publish' }
]

export default function Navbar() {
  const pathname = usePathname()
  const { user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token')
    dispatch(logout())
  }, [dispatch])

  return (
    <div className="fixed left-0 top-0 w-full">
      <nav className="h-14 bg-neutral-800">
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
              {user ? (
                <div className="w-full lg:w-fit">
                  <div className="flex flex-col gap-y-4 lg:hidden">
                    <div className="flex w-fit items-center gap-x-2">
                      <div className="flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-blue-500 text-sm font-semibold uppercase">
                        {user.firstName.at(0)}
                      </div>
                      <div>
                        <span className="block text-sm font-semibold">
                          {user.firstName} {user.lastName}
                        </span>
                        <span className="block text-sm text-neutral-400">
                          {user.email}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <Link
                        href="/settings/profile"
                        className="flex items-center justify-center gap-x-2 rounded-lg bg-neutral-700/80 px-4 py-1.5 font-semibold text-neutral-200 transition-colors hover:bg-neutral-700"
                        onClick={() => setMenuOpen(false)}
                      >
                        <i className="bi bi-gear" />
                        <span>Settings</span>
                      </Link>
                      <button
                        className="flex items-center justify-center gap-x-2 rounded-lg bg-red-500/10 px-4 py-1.5 font-semibold text-red-500 transition-colors hover:bg-red-500/20"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right" />
                        <span>Log out</span>
                      </button>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <Popover
                      trigger={
                        <div className="flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-blue-500 text-sm font-semibold uppercase">
                          {user.firstName.at(0)}
                        </div>
                      }
                    >
                      <div className="p-5">
                        <div className="flex flex-col items-center">
                          <div className="flex h-12 w-12 select-none items-center justify-center rounded-full bg-blue-500 text-xl font-semibold uppercase">
                            {user.firstName.at(0)}
                          </div>
                          <div className="mt-3 text-center">
                            <span className="block font-semibold">
                              {user.firstName} {user.lastName}
                            </span>
                            <span className="block text-sm text-neutral-400">
                              {user.email}
                            </span>
                          </div>
                          <Link
                            href="/settings/profile"
                            className="mt-4 flex w-fit items-center justify-center gap-x-2 rounded-lg bg-neutral-700/80 px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-neutral-700"
                          >
                            <i className="bi bi-gear" />
                            <span>Settings</span>
                          </Link>
                        </div>
                        <div className="my-4 h-px w-full bg-neutral-700" />
                        <button
                          className="mx-auto flex w-fit items-baseline justify-center gap-x-2 rounded-lg px-4 py-1.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-500/10"
                          onClick={handleLogout}
                        >
                          <i className="bi bi-box-arrow-right" />
                          <span>Log out</span>
                        </button>
                      </div>
                    </Popover>
                  </div>
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
