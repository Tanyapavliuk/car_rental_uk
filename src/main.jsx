import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/car_rental_uk">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
