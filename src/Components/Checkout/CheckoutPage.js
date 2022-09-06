import React from "react";
import Header from "../Header/Header";
import { Row, Col } from "antd";
import Checkout from "./Checkout";
import Cartcontainer from "../Cart/Cartcontainer";
import { ProductForCheckOut } from "../Cart/Cartcontainer";
import Cartcard from "../Cart/Cartcard";
import CartContext, { CartState } from "../CartContext/CartContext";

function CheckoutPage() {
  const { addToCart } = CartState();
  return (
    <div>
      <Header />
      <Row>
        <Col md={18}>
          <Checkout />
        </Col>
        <Col md={6} sx={24} style={{ width: "100%", backgroundColor: "#eee" }}>
          {addToCart.map((product, idx) => {
            return (
              <Cartcard
                key={idx}
                id={product.id}
                img={product.img}
                name={product.product}
                price={product.price}
                category={product.category}
              />
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default CheckoutPage;
