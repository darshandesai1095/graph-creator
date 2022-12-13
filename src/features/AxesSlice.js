import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
    xDisplay: false,
    xLabel: "",
    yDisplay: false, 
    yLabel: ""
}}

export const axesSlice = createSlice({
  name: "axes",
  initialState,
  reducers: {
    setXDisplay: (state, action) => {
        state.value.xDisplay = !state.value.xDisplay 
    },
    setXLabel: (state, action) => {
        state.value.xLabel = action.payload
    },
    setYDisplay: (state, action) => {
        state.value.yDisplay = !state.value.yDisplay 
    },
    setYLabel: (state, action) => {
        state.value.yLabel = action.payload
    },
  }
})

export const { setXDisplay, setXLabel, setYDisplay, setYLabel } = axesSlice.actions
export default axesSlice.reducer

