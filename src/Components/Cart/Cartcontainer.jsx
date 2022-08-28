import React, { useEffect } from "react";
import Cartcard from "./Cartcard";
import Totalprice from "./Totalprice";
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

let ProductForCheckOut = [];

function Cartcontainer({
  productListInCart,
  removeFromCart,
  refProductInCart,
}) {
  const navigate = useNavigate();
  ProductForCheckOut = refProductInCart;

  const directToCheckOutPage = () => {
    if (productListInCart.length == 0) {
      message.error("Please add product in cart");
      return;
    }
    navigate("/checkout");
  };
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
            onClick={directToCheckOutPage}
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}

export { ProductForCheckOut };
export default Cartcontainer;
