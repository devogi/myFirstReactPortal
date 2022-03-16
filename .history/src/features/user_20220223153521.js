import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 1, email: "" } },
  reducers: {
    login: (state, action) => {
        state.value = action.
    },
  },
});
