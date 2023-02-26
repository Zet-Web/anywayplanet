import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MintingActiveTabState {
  activeTab: number
}

const initialState: MintingActiveTabState = {
  activeTab: 0,
}

export const mintingActiveTab = createSlice({
  name: 'activeTab',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<number>) => {
      state.activeTab = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveTab } = mintingActiveTab.actions

export default mintingActiveTab.reducer
