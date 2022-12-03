import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const textInputSlice = createSlice({
  name: 'textInput',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setText } = textInputSlice.actions

export default textInputSlice.reducer