import { createSlice } from "@reduxjs/toolkit";

export const startSlice = createSlice({
  name: "start",
  initialState: {
    timer: "",
  },
  reducers: {
    addTimer: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export const { addTimer } = startSlice.actions;
