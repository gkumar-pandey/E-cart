import "./App.css";
import Home from "./Components/HomePage/Home";
import Register from "./Components/RegisterPage/Register";
import Login from "./Components/LoginPage/Login";
import Checkout from "./Components/Checkout/Checkout";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./Components/Search/ProductPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
