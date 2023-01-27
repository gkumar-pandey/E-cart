import "./App.css";
import Home from "./Components/HomePage/Home";
import "antd/dist/antd.css";
import CheckoutPage from "./Components/Checkout/CheckoutPage";
import Thanks from "./Components/Thanks/Thanks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import RegisterPage from "./Pages/AuthPage/RegisterPage/RegisterPage";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import LoginPage from "./Pages/AuthPage/LoginPage/LoginPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import { Toaster } from "react-hot-toast";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      <Toaster />
      {pathname == "/" ||
      pathname == "/register" ||
      pathname == "/login" ||
      pathname == "/products" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route
          path="/products"
          element={<ProductPage isLoggedIn={isLoggedIn} />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="ordered" element={<Thanks />} /> */}
      </Routes>
    </div>
  );
}

export default App;
