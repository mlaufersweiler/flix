import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
