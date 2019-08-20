import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { DrizzleContext } from "drizzle-react";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store, { drizzle, drizzleOptions } from "./modules/store";

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <Provider store={store}>
      <App />
    </Provider>
  </DrizzleContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
