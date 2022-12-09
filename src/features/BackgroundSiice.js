import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
    display: true,
    title: "testtitle", 
    color: 'red',
}}

export const keySlice = createSlice({
  name: 'key',
  initialState,
  reducers: {
    setTitle: (state, action) => {
        state.value.title = action.payload
    },
    setColor: (state, action) => {
        state.value.color = action.payload
    },
  }
})

export const { setTitle, setColor } = keySlice.actions
export default keySlice.reducer