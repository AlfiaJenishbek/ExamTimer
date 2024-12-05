import { configureStore } from "@reduxjs/toolkit";
import { startSlice } from "./slices/startSlice";

export const store = configureStore({
  reducer: {
    [startSlice.name]: startSlice.reducer,
  },
});