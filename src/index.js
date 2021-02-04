import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesProvider";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <FavoritesProvider>
      <Router>
        <App />
      </Router>
    </FavoritesProvider>
  </Provider>,
  document.getElementById("root")
);
