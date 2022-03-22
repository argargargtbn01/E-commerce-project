import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import store from "./redux/store"
import PersistedStore from "./PersistedStore";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={PersistedStore.getDefaultStore().store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
