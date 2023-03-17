import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { RegisterPage } from "./Pages";
import Navbar from "./Components/Navbar/Navbar";
import LoginPage from "./Pages/AuthPage/LoginPage/LoginPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

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
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
