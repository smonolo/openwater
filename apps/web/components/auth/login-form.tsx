'use client'

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { setError } from '@/lib/store/slices/auth'
import { login } from '@/lib/store/thunks/auth'
import { loginSchema } from '@/validations/auth'
import { createHash } from 'crypto'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { ValidationError } from 'yup'

export default function LoginForm() {
  const auth = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (auth.user) {
      router.push('/')
    }
  }, [auth.user, router])

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        const validatedPayload = await loginSchema.validate({
          email: emailRef.current?.value,
          password: passwordRef.current?.value
        })

        const hashedPassword = createHash('sha256')
          .update(validatedPayload.password)
          .digest('hex')

        dispatch(
          login({
            ...validatedPayload,
            password: hashedPassword
          })
        )

        router.push('/')
      } catch (error) {
        if (error instanceof ValidationError) {
          return dispatch(setError(error.message))
        }
      }
    },
    [dispatch, router]
  )

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="email" className="text-sm text-neutral-200">
          Email
        </label>
        <input
          ref={emailRef}
          id="email"
          type="text"
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
          ref={passwordRef}
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
      {auth.error && <p className="text-red-500">{auth.error}</p>}
      <button
        type="submit"
        className="mt-4 rounded-lg bg-blue-500 px-4 py-1.5 font-semibold transition-colors hover:bg-blue-500/80 disabled:cursor-context-menu disabled:bg-blue-500/50"
        disabled={auth.isLoading}
      >
        Continue
      </button>
    </form>
  )
}
