import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provide store={store}>
      <App />
    </Provide  >
  </React.StrictMode>
);
