import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    value: 2,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    increment: (state) => {
        state.value += 1;
      },
      increment: (state) => {
        state.value += 1;
      },
  },
});
