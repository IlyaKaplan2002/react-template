import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from './home.state'

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ name: string }>) => {
      state.cards.push({ name: action.payload.name })
    },
  },
})

export const homeActions = homeSlice.actions

export const homeReducer = homeSlice.reducer
