import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
    display: true,
    title: "testtitle",
    color: 'red',
    font: 'Arial', // delete?
    pointStyle: 'circle', 
    boxWidth: '10px',
    boxHeight: '10px',
    textAlign: 'center',
    padding: 10
}}

export const keySlice = createSlice({
  name: 'key',
  initialState,
  reducers: {
    // setVisibility: (state, action) => {
    //   state.value.title = action.payload
    // },
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
    setPointStyle: (state, action) => {
        state.value.pointStyle = action.payload
    },
    setBoxWidth: (state, action) => {
        state.value.boxHeight = action.payload
    },
    setBoxHeight: (state, action) => {
        state.value.boxWidth = action.payload
    },
    setTextAlign: (state, action) => {
        state.value.textAlign = action.payload
    }, 
    setPadding: (state, action) => {
        state.value.padding = action.payload
    },   
  }
})

export const { setTitle, setColor, setFont, fontSize,setPointStyle, setBoxWidth,
               setBoxHeight, setTextAlign, setPadding } = keySlice.actions
export default keySlice.reducer