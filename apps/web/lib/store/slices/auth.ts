import type { User } from '@/types/user'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { login, register, verify } from '@/lib/store/thunks/auth'

type AuthState = {
  user: User | null
  error: string | null
  isLoading: boolean
}

const initialState: AuthState = {
  user: null,
  error: null,
  isLoading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    logout: state => {
      state.user = null
    }
  },
  extraReducers: builder => {
    ;[register, login, verify].forEach(thunk => {
      builder
        .addCase(thunk.pending, state => {
          state.error = null
          state.isLoading = true
        })
        .addCase(thunk.fulfilled, (state, action: PayloadAction<User>) => {
          state.user = action.payload
          state.isLoading = false
        })
        .addCase(thunk.rejected, (state, action) => {
          state.user = null
          state.error = action.payload as string
          state.isLoading = false
        })
    })
  }
})

export const { setError, logout } = authSlice.actions

export default authSlice.reducer
