import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Board } from "./components/Game/Board";
import store from "./core/store";

render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById("root")
);
