import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
  title: "",
  font: "",
  color: "coral",
  fontSize: "",
  position: ""
}}

export const textInputSlice = createSlice({
  name: 'textInput', //change this
  initialState,

  reducers: {
    setTitle: (state, action) => {
      state.value.title = action.payload
    },
    setFont: (state, action) => {
      state.value.font = action.payload
    }
  },
})

export const { setTitle, setFont } = textInputSlice.actions

export default textInputSlice.reducer