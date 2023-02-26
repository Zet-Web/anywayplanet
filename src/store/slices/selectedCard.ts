import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  selectedCard: any
}

const initialState: CounterState = {
  selectedCard: {},
}

export const selectedCardSlice = createSlice({
  name: 'selectedCard',
  initialState,
  reducers: {
    setSelectedCard: (state, action: PayloadAction<number>) => {
      state.selectedCard = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedCard } = selectedCardSlice.actions

export default selectedCardSlice.reducer
