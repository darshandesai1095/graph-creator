import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
    description: "",
}}

export const descriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {
    setDescription: (state, action) => {
        state.value.description = action.payload 
    },
  }
})

export const { setDescription } = descriptionSlice.actions
export default descriptionSlice.reducer

