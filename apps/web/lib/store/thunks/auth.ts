import { loginUser, registerUser, verifyUser } from '@/lib/api/auth'
import type { User } from '@/types/user'
import { createAsyncThunk } from '@reduxjs/toolkit'

export type RegisterPayload = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type LoginPayload = {
  email: string
  password: string
}

export const register = createAsyncThunk<User, RegisterPayload>(
  'user/register',
  async (payload, thunk) => {
    try {
      const response = await registerUser(payload)
      const data = await response.json()

      if (data.error) {
        return thunk.rejectWithValue(data.error)
      } else {
        localStorage.setItem('token', data.token)

        return data.user
      }
    } catch {
      return thunk.rejectWithValue('Failed to register')
    }
  }
)

export const login = createAsyncThunk<User, LoginPayload>(
  'user/login',
  async (payload, thunk) => {
    try {
      const response = await loginUser(payload)
      const data = await response.json()

      if (data.error) {
        return thunk.rejectWithValue(data.error)
      } else {
        localStorage.setItem('token', data.token)

        return data.user
      }
    } catch {
      return thunk.rejectWithValue('Failed to login')
    }
  }
)

export const verify = createAsyncThunk<User, string>(
  'user/verify',
  async (token, thunk) => {
    try {
      const response = await verifyUser(token)
      const data = await response.json()

      if (data.error) {
        localStorage.removeItem('token')

        return thunk.rejectWithValue(data.error)
      } else {
        localStorage.setItem('token', data.token)

        return data.user
      }
    } catch {
      localStorage.removeItem('token')

      return thunk.rejectWithValue('Failed to verify')
    }
  }
)
