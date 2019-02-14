import React from "react";
import ReactDOM from "react-dom";

import Caculator from "./Caculator";
import NumBorder from "./NumBoard";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducers from "./redux/reducer";

// import { init } from "@rematch/core";
// import * as models from "./rematch/modals";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <NumBorder />
      <Caculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <Provider store={init({ models })}>
  <App />,
  // </Provider>,
  rootElement
);
