import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/pages/Home";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer/globalReducer";

// Create Store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
