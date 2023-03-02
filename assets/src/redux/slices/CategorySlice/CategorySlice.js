import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: []
  },
  reducers: {
    load: (state, action) => {
      state.categories = action.payload
    },
    save: (state, action) => {
      state.categories = [action.payload, ...state.categories]
    }
  }
})

export const {load, save} = categorySlice.actions
export default categorySlice.reducer