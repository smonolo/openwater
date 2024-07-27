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
  reducers: {},
  extraReducers: builder => {
    // User registration builder
    builder
      .addCase(register.pending, state => {
        state.error = null
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload
        state.isLoading = false
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })

    // User login builder
    builder
      .addCase(login.pending, state => {
        state.error = null
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload
        state.isLoading = false
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })

    // User verification builder
    builder
      .addCase(verify.pending, state => {
        state.error = null
        state.isLoading = true
      })
      .addCase(verify.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload
        state.isLoading = false
      })
      .addCase(verify.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })
  }
})

export default authSlice.reducer
