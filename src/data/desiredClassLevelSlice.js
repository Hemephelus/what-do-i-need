import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    classLevel: "First Class"
}


export const classLevelSlice = createSlice({
  name: 'class_level',
  initialState,
  reducers: {
      setClassLevel: (state, action) => {
        state.classLevel = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const {setClassLevel } = classLevelSlice.actions

export default classLevelSlice.reducer