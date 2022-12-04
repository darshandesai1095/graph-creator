import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
  title: "",
  font: "Baskerville",
  color: "coral",
  fontSize: 20,
  position: "right"
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
      state.value.fontSize = action.payload
    },
    setPosition: (state, action) => {
      state.value.position = action.payload
    }
  }
})

export const { setTitle, setFont, setColor, setFontSize, setPosition } = textInputSlice.actions

export default textInputSlice.reducer