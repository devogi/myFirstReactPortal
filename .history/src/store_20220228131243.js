import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default st