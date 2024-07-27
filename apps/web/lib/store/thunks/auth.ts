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

      if (!response.ok) {
        return thunk.rejectWithValue('Failed to register')
      }

      const data = await response.json()

      if (data.error) {
        return thunk.rejectWithValue(data.error)
      }

      return data
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

      if (!response.ok) {
        return thunk.rejectWithValue('Failed to login')
      }

      const data = await response.json()

      if (data.error) {
        return thunk.rejectWithValue(data.error)
      }

      return data
    } catch {
      return thunk.rejectWithValue('Failed to login')
    }
  }
)

export const verify = createAsyncThunk<User, string>(
  'user/verify',
  async (id, thunk) => {
    try {
      const response = await verifyUser(id)

      if (!response.ok) {
        return thunk.rejectWithValue('Failed to verify')
      }

      const data = await response.json()

      if (data.error) {
        return thunk.rejectWithValue(data.error)
      }

      return data
    } catch {
      return thunk.rejectWithValue('Failed to verify')
    }
  }
)
