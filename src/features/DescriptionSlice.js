import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: {
    description: "",
    descriptionPadding: 0
}}

export const descriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {
    setDescription: (state, action) => {
        state.value.description = action.payload 
    },
    setDescriptionPadding: (state, action) => {
      state.value.descriptionPadding = action.payload
    }
  }
})

export const { setDescription, setDescriptionPadding } = descriptionSlice.actions
export default descriptionSlice.reducer

