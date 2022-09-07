import React, { useEffect, useState } from "react";
import Cartcard from "./Cartcard";
import Totalprice from "./Totalprice";
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CartState } from "../CartContext/CartContext";

function Cartcontainer() {
  const navigate = useNavigate();
  const { addToCart, setAddToCart } = CartState();
  const [value, setValue] = useState(1);

  const removeFromCart = (id) => {
    const productAfterRemove = addToCart.filter((item) => {
      return item.id !== id;
    });
    setAddToCart([...productAfterRemove]);
    message.success("Product is removed ✌🏻");
  };

  const directToCheckOutPage = () => {
    if (addToCart.length == 0) {
      message.error("Please add product in cart");
      return;
    }
    navigate("/checkout");
  };

  // ? Calculate Total price of Products in Cart
  const TotalPrice = addToCart.reduce((acc, item) => {
    return acc + Number(item.price.slice(1)) * item.qty;
  }, 0);

  // show the  No of Products
  const onChange = (value, productId) => {
    addToCart.forEach((element) => {
      if (productId == element.id) {
        element.qty = value;
      }
    });
    setValue(value);
  };
  useEffect(() => {
    setAddToCart(addToCart);
  }, [value]);
  // ? show the NO of Products Ends

  // TODO Calculate the total products available in cart container with help of reduce function

  const totalNoOfProducts = addToCart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  // Total no of products ends
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
      {addToCart.length == 0 && (
        <p style={{ textAlign: "center", fontSize: "1.2rem", margin: "auto" }}>
          Add an item to cart and it will show up here
        </p>
      )}

      {addToCart.map((product, idx) => {
        return (
          <Cartcard
            key={idx}
            qty={product.qty}
            productId={product.id}
            img={product.img}
            name={product.product}
            price={product.price}
            category={product.category}
            removeFromCart={removeFromCart}
            onChange={onChange}
          />
        );
      })}
      <Totalprice
        totalNoOfProducts={totalNoOfProducts}
        TotalPrice={TotalPrice}
      />

      {addToCart.length !== 0 && (
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
