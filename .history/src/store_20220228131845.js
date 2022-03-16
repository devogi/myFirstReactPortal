import { configureStore } from "@reduxjs/toolkit";
import counter

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
