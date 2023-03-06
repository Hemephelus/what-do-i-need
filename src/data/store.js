import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from './userDetailsSlice'

export const store = configureStore({
  reducer: {
    user : userDetailsReducer,
  },
})