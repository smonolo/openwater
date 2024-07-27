import AuthCard from '@/components/auth/auth-card'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Join'
}

export default function Join() {
  return (
    <AuthCard>
      <p className="text-center">Get started with your account.</p>
      <form className="mt-8 flex flex-col gap-y-4">
        <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="first-name" className="text-sm text-neutral-200">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              className="w-full rounded-lg bg-neutral-900 px-3 py-2 outline-none placeholder:text-neutral-600"
              placeholder="Your first name"
              minLength={1}
              maxLength={100}
              required
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="last-name" className="text-sm text-neutral-200">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              className="w-full rounded-lg bg-neutral-900 px-3 py-2 outline-none placeholder:text-neutral-600"
              placeholder="Your last name"
              minLength={1}
              maxLength={100}
              required
            />
          </div>
        </div>
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
      <p className="mt-3 text-center text-xs text-neutral-400">
        By signing up, you acknowledge our{' '}
        <Link
          href="/terms"
          className="underline underline-offset-2 transition-colors hover:text-neutral-200"
        >
          Terms of Service
        </Link>
        .
      </p>
      <span className="my-4 block w-full text-center text-sm uppercase text-neutral-400">
        Or
      </span>
      <Link
        href="/login"
        className="block w-full rounded-lg bg-neutral-700/80 px-4 py-1.5 text-center font-semibold transition-colors hover:bg-neutral-700"
      >
        Login to your account
      </Link>
    </AuthCard>
  )
}
