import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
    display: true,
    title: "testtitle", // remove
    color: 'red', // remove
    font: 'Arial', // remove
    position: 'Top',
    pointStyle: 'circle', 
    align: 'Center',
    padding: 10,
    isReversed: false
}}

export const keySlice = createSlice({
  name: 'key',
  initialState,
  reducers: {
    // setVisibility: (state, action) => {
    //   state.value.title = action.payload
    // },
    setDisplay: (state, action) => {
        state.value.display = !state.value.display
    },
    setTitle: (state, action) => {
        state.value.title = action.payload
    },
    setColor: (state, action) => {
        state.value.color = action.payload
    },
    setFont: (state, action) => {
        state.value.font = action.payload
    },
    setFontSize: (state, action) => {
        state.value.fontSize = action.payload
    },
    setPosition: (state, action) => {
        state.value.position = action.payload
    },
    setPointStyle: (state, action) => {
        state.value.pointStyle = action.payload
    },
    setAlign: (state, action) => {
        state.value.align = action.payload
    }, 
    setPadding: (state, action) => {
        state.value.padding = action.payload
    },
    setIsReversed: (state, action) => {
        state.value.isReversed = !state.value.isReversed 
    } 
  }
})

export const { setDisplay, setTitle, setColor, setFont, fontSize, setPosition, setPointStyle, setBoxWidth,
               setBoxHeight, setAlign, setPadding, setIsReversed } = keySlice.actions
export default keySlice.reducer