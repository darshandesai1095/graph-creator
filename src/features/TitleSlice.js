import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
  title: "",
  font: "Times New Roman",
  color: "coral",
  fontSize: 20,
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
    },
    setColor: (state, action) => {
      state.value.color = action.payload
    },
    setFontSize: (state, action) => {
      state.value.color = action.payload
    }
  }
})

export const { setTitle, setFont, setColor, setFontSize } = textInputSlice.actions

export default textInputSlice.reducer