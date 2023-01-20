import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartContext from "./Components/CartContext/CartContext";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContext>
      <Router>
        <App />
      </Router>
    </CartContext>
  </React.StrictMode>
);
