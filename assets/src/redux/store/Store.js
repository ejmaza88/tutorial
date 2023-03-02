import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from "../slices/CategorySlice/CategorySlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
  },
})
