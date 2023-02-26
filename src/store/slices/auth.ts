import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    token: undefined | string
}

const initialState:AuthState = {
    token: undefined
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state: AuthState, action: PayloadAction<string>) => {
            state.token = action.payload
        },

        removeToken: (state: AuthState) => {
            state.token = undefined
        },
    }
})

export const {setToken, removeToken} = auth.actions

export default auth.reducer