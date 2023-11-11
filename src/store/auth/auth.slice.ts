import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './auth.state'

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
  },
})

export const authActions = authSlice.actions

export const authReducer = authSlice.reducer
