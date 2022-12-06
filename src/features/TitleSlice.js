import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
  title: "",
  font: "Arial",
  color: "#4f4f4f",
  fontSize: 20,
  position: "center",
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
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
    },
    setPaddingTop: (state, action) => {
      state.value.paddingTop = action.payload
    },
    setPaddingBottom: (state, action) => {
      state.value.paddingBottom = action.payload
    }
  }
})

export const { setTitle, setFont, setColor, setFontSize, setPosition,
               setPaddingTop, setPaddingBottom, setPaddingLeft, setPaddingRight } = textInputSlice.actions

export default textInputSlice.reducer