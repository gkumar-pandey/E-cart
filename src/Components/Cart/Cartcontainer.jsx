import React from "react";
import Cartcard from "./Cartcard";
import Totalprice from "./Totalprice";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Cartcontainer({ productListInCart, removeFromCart }) {
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
            id={product.id}
            img={product.img}
            name={product.product}
            price={product.price}
            category={product.category}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <Totalprice />

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
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cartcontainer;
