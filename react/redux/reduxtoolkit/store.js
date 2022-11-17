// Store is the place where we need to configure and this configured store should be kept wrapped around the
// React components for which we need to access the state.

export const store = configureStore({
  reducer: {
    "reducer alias name": userReducer,
    "reducer alias name2": todoReducer,
  },
});

//index.js
import { store } from "./correctplace";
import { Provider } from "react-redux";
import React from "react";

const root = ReactDOM.createRoot("getElementById(root)");
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Provider is a wrapper component and is exclusively for React.
