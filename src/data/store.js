import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from './userDetailsSlice'
import gpaTableReducer from './gpaTableSlice'
import classLevelReducer  from './desiredClassLevelSlice'

export const store = configureStore({
  reducer: {
    user : userDetailsReducer,
    all_gpa_table : gpaTableReducer,
    class_level : classLevelReducer,
  },
})