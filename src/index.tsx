import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import store from "./core/store";
import { GridObject } from "./components/Game/Grid";

render(
  <Provider store={store}>
    <GridObject />
  </Provider>,
  document.getElementById("root")
);
