import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
  title: "",
}}

export const keySlice = createSlice({
  name: 'key',
  initialState,

  reducers: {
    setTitle: (state, action) => {
      state.value.title = action.payload
    }
  }
})

export const { setTitle } = keySlice.actions
export default keySlice.reducer