import React, { useEffect } from "react";
import Cartcard from "./Cartcard";
import Totalprice from "./Totalprice";
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CartState } from "../CartContext/CartContext";

function Cartcontainer({ productListInCart }) {
  const navigate = useNavigate();
  const { addToCart, setAddToCart } = CartState();

  const removeFromCart = (id) => {
    const productAfterRemove = addToCart.filter((item) => {
      return item.id !== id;
    });
    setAddToCart([...productAfterRemove]);
    message.success("Product is removed ✌🏻");
  };

  const directToCheckOutPage = () => {
    if (productListInCart.length == 0) {
      message.error("Please add product in cart");
      return;
    }
    navigate("/checkout");
  };

  // console.log(productListInCart);

  // ? Calculate Total price of Products in Cart
  const TotalPrice = productListInCart.reduce((acc, item) => {
    return acc + Number(item.price.slice(1));
  }, 0);

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid red",
      }}
    >
      {productListInCart.length == 0 && (
        <p style={{ textAlign: "center", fontSize: "1.2rem", margin: "auto" }}>
          Add an item to cart and it will show up here
        </p>
      )}

      {productListInCart.map((product, idx) => {
        return (
          <Cartcard
            key={idx}
            productId={product.id}
            img={product.img}
            name={product.product}
            price={product.price}
            category={product.category}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <Totalprice TotalPrice={TotalPrice} />

      {productListInCart.length !== 0 && (
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            style={{
              fontWeight: "bold",
              backgroundColor: "orange",
              border: "none",
            }}
            size="large"
            icon={<ShoppingCartOutlined />}
            onClick={directToCheckOutPage}
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cartcontainer;
