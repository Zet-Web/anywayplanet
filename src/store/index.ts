import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import counter from './slices/counter'
import mintingActiveTab from './slices/mintingActiveTab'
import auth from './slices/auth'
import selectedCard from './slices/selectedCard'

export const store = configureStore({
  reducer: {
    counter,
    mintingActiveTab,
    auth,
    selectedCard,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
