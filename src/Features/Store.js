import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Movies/Movieslices";
export const store = configureStore({
  reducer: {
    items: moviesReducer,
  },
});
