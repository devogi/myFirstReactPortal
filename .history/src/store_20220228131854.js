import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./stp"

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
