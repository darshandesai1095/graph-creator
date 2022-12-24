import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
    display: true,
    position: 'Top',
    pointStyle: 'Circle',
    pointSize: 3,
    align: 'Center',
    padding: 10,
    isReversed: false
}}

export const keySlice = createSlice({
  name: 'key',
  initialState,
  reducers: {

    setDisplay: (state) => {
        state.value.display = !state.value.display
    },
    setPosition: (state, action) => {
        state.value.position = action.payload
    },
    setPointStyle: (state, action) => {
        state.value.pointStyle = action.payload
    },
    setPointSize: (state, action) => {
        state.value.pointSize = action.payload
    },
    setAlign: (state, action) => {
        state.value.align = action.payload
    }, 
    setPadding: (state, action) => {
        state.value.padding = action.payload
    },
    setIsReversed: (state) => {
        state.value.isReversed = !state.value.isReversed 
    } 
  }
})

export const { setDisplay, fontSize, setPosition, setPointStyle, setPointSize,
               setAlign, setPadding, setIsReversed } = keySlice.actions
export default keySlice.reducer