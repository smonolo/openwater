import type { LoginPayload, RegisterPayload } from '@/lib/store/thunks/auth'
import { fetcher } from '@/lib/api'

export const registerUser = async (payload: RegisterPayload) => {
  return await fetcher('auth/register', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export const loginUser = async (payload: LoginPayload) => {
  return await fetcher('auth/login', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export const verifyUser = async (id: string) => {
  return await fetcher('auth/verify', {
    method: 'POST',
    body: JSON.stringify({ id })
  })
}
