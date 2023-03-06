import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    university: "",
    department: "",
    durationOfCourse: "",
  }


export const userDetailsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        return action.payload;
      },
      setName: (state, action) => {
        state.name = action.payload;
      },
      setUniversity: (state, action) => {
        state.university = action.payload;
      },
      setCourse: (state, action) => {
        state.department = action.payload;
      },
      setDuration: (state, action) => {
        state.durationOfCourse = action.payload;
      }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setName, setUniversity, setCourse, setDuration } = userDetailsSlice.actions

export default userDetailsSlice.reducer