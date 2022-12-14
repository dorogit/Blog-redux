import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
import { Provider } from "react-redux"
import { configureStore,applyMiddleware } from "@reduxjs/toolkit"
import reducers from "./reducers"
import thunk from "redux-thunk"

const store = configureStore(
  {
    reducer:{reducers}
  },
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>
  ,document.querySelector("#root")
)