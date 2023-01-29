import "./App.css";
import "antd/dist/antd.css";
import CheckoutPage from "./Components/Checkout/CheckoutPage";
import Thanks from "./Components/Thanks/Thanks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import ProductPage from "./Components/Search/ProductPage";
import RegisterPage from "./Pages/AuthPage/RegisterPage/RegisterPage";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import LoginPage from "./Pages/AuthPage/LoginPage/LoginPage";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      <Toaster />
      {pathname == "/" || pathname == "/register" || pathname == "/login" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route
          path="/products"
          element={<ProductPage isLoggedIn={isLoggedIn} />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="ordered" element={<Thanks />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
