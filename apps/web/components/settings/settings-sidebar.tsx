import { useAppDispatch } from '@/lib/store/hooks'
import { logout } from '@/lib/store/slices/auth'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'

type Item = {
  text: string
  url: string
}

const items: Item[] = [
  {
    text: 'Profile',
    url: '/settings/profile'
  },
  {
    text: 'Account',
    url: '/settings/account'
  }
]

export default function SettingsSidebar() {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token')
    dispatch(logout())
    router.push('/')
  }, [dispatch, router])

  return (
    <aside className="w-64">
      <ul className="flex flex-row gap-2 lg:flex-col">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className={classNames(
                'block rounded-lg px-4 py-2 font-semibold transition-colors',
                pathname === item.url
                  ? 'bg-neutral-800/80 hover:bg-neutral-800'
                  : 'hover:bg-neutral-800/60'
              )}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="my-4 hidden h-px bg-neutral-800 lg:block" />
      <button
        className="hidden w-full items-center gap-x-2 rounded-lg px-4 py-1.5 font-semibold text-red-500 transition-colors hover:bg-red-500/10 lg:flex"
        onClick={handleLogout}
      >
        <i className="bi bi-box-arrow-right" />
        <span>Log out</span>
      </button>
    </aside>
  )
}
