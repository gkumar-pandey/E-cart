import React from "react";
import Header from "../Header/Header";
import { Row, Col } from "antd";
import Checkout from "./Checkout";
import Cartcontainer from "../Cart/Cartcontainer";
import { ProductForCheckOut } from "../Cart/Cartcontainer";
import Cartcard from "../Cart/Cartcard";

function CheckoutPage() {
  return (
    <div>
      <Header />
      <Row>
        <Col md={18}>
          <Checkout />
        </Col>
        <Col md={6} sx={24} style={{ width: "100%", backgroundColor: "#eee" }}>
          {ProductForCheckOut.map((product, idx) => {
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
