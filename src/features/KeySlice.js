import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
    display: true,
    position: 'Top',
    pointStyle: 'Circle',
    pointSize: 3,
    align: 'Center',
    padding: 10,
    isReversed: false,
    item1: "test",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    item6: ""
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
    },
    setItem1: (state, action) => {
        state.value.item1 = action.payload
    },
    setItem2: (state, action) => {
        state.value.item2 = action.payload
    },
    setItem3: (state, action) => {
        state.value.item3 = action.payload
    },
    setItem4: (state, action) => {
        state.value.item4 = action.payload
    },
    setItem5: (state, action) => {
        state.value.item5 = action.payload
    },
    setItem6: (state, action) => {
        state.value.item6 = action.payload
    },
  }
})

export const { setDisplay, fontSize, setPosition, setPointStyle, setPointSize,
               setAlign, setPadding, setIsReversed, setItem1, setItem2, setItem3,
               setItem4, setItem5, setItem6 } = keySlice.actions
export default keySlice.reducer