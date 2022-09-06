import React, { useContext, useState } from "react";
import { createContext } from "react";

const Cart = createContext();

const CartContext = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);
  return (
    <Cart.Provider value={{ addToCart, setAddToCart }}>
      {children}
    </Cart.Provider>
  );
};
export default CartContext;
export const CartState = () => {
  return useContext(Cart);
};
