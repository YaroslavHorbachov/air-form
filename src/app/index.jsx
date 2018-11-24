import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./app.jsx";
import { store, sagaMiddleware } from "./store";
import style from "./style";
import sagaObserves from "./sagas";

// init fabric style
style();

// init saga observables
sagaMiddleware.run(sagaObserves);

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(Root, document.querySelector(".root"));
