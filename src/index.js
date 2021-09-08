import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";

//creating the database
import { createStore } from "redux";

//creating the provider that will be accessed accross
import { Provider } from "react-redux";

import { rootReducer } from "./reducers/combineReducers";

//creating the store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
