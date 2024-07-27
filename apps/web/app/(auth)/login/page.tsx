import AuthCard from '@/components/auth/auth-card'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login'
}

export default function Login() {
  return (
    <AuthCard>
      <p className="text-center">Welcome back.</p>
      <form className="mt-8 flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email" className="text-sm text-neutral-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-lg bg-neutral-900 px-3 py-2 outline-none placeholder:text-neutral-600"
            placeholder="name@example.com"
            minLength={1}
            maxLength={100}
            required
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="password" className="text-sm text-neutral-200">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-lg bg-neutral-900 px-3 py-2 outline-none placeholder:text-neutral-600"
            placeholder="Your secure password"
            minLength={1}
            maxLength={100}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 rounded-lg bg-blue-500 px-4 py-1.5 font-semibold transition-colors hover:bg-blue-500/80"
        >
          Continue
        </button>
      </form>
      <span className="my-4 block w-full text-center text-sm uppercase text-neutral-400">
        Or
      </span>
      <Link
        href="/join"
        className="block w-full rounded-lg bg-neutral-700/80 px-4 py-1.5 text-center font-semibold transition-colors hover:bg-neutral-700"
      >
        Create an account
      </Link>
    </AuthCard>
  )
}
