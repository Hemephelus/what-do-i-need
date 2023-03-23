import { createSlice } from '@reduxjs/toolkit'

const initialState =[]

// generateGPATableData(durationNumber) 


export const gpaTableSlice = createSlice({
  name: 'all_gpa_table',
  initialState,
  reducers: {
    createGpaTable: (state, action) => {      
        const durationNumber = action.payload.split("")[0] * 2;
        for (let i = 1; i <= durationNumber; i++) {
          state.push({
            id: i,
            Year: Math.ceil(i / 2),
            Semester: ((i + 1) % 2) + 1,
            GPA: 0.0,
            Class: "-",
            CGPA: 0.0,
            Change: "-",
          });
        }
      
      },
      setGpaTable: (state, action) => {
        return action.payload
      },
 
  },
})

// Action creators are generated for each case reducer function
export const { setGpaTable,createGpaTable} = gpaTableSlice.actions

export default gpaTableSlice.reducer