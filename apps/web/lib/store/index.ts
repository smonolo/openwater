import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './slices/auth'

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({ auth }),
    devTools: process.env.NODE_ENV !== 'production'
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
