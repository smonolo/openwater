'use client'

import { useAppSelector } from '@/lib/store/hooks'

export default function RegisterForm() {
  const auth = useAppSelector(state => state.auth)

  return (
    <form className="flex flex-col gap-y-4">
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2">
        <div className="flex flex-col gap-y-1">
          <label htmlFor="first-name" className="text-sm text-neutral-200">
            First name
          </label>
          <input
            id="first-name"
            type="text"
            className="w-full rounded-lg bg-neutral-900 px-3 py-2 outline-none placeholder:text-neutral-600"
            placeholder="Your first name"
            minLength={1}
            maxLength={100}
            required
            disabled={auth.isLoading}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="last-name" className="text-sm text-neutral-200">
            Last name
          </label>
          <input
            id="last-name"
            type="text"
            className="w-full rounded-lg bg-neutral-900 px-3 py-2 outline-none placeholder:text-neutral-600"
            placeholder="Your last name"
            minLength={1}
            maxLength={100}
            required
            disabled={auth.isLoading}
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
          disabled={auth.isLoading}
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
          disabled={auth.isLoading}
        />
      </div>
      <button
        type="submit"
        className="mt-4 rounded-lg bg-blue-500 px-4 py-1.5 font-semibold transition-colors hover:bg-blue-500/80"
      >
        Continue
      </button>
    </form>
  )
}
