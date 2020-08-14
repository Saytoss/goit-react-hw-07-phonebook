import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import globalState from "./redux/store";
import "./index.css";

ReactDOM.render(
  <Provider store={globalState}>
    <App />
  </Provider>,

  document.getElementById("root")
);
