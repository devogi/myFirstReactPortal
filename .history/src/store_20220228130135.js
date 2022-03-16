import { configureStore } from "@reduxjs/toolkit";
import counter from "./stores/counter";

export default configureStore({
    reducer: {
        counter: counter
    }
})