import React from "react";
import Card from "antd/lib/card/Card";
import Header from "../Header/Header";
import Data from "../../Data/Data";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./Product.css";

function Product({ img, title, category, price, rating, addToCartHandler }) {
  return (
    <div
      className="product-card-container"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {/* <Header /> */}
      <Card
        hoverable
        style={{
          width: 300,
          margin: "1rem 0",
        }}
        className="product-card"
        cover={<img alt="example" style={{ height: "200px" }} src={img} />}
      >
        {/* <img className="product-img" src={img} /> */}
        <div className="product-info">
          <div className="product-info-text">
            <div className="product-title">{title}</div>
            <div className="product-category">{category}</div>
          </div>
          <div className="price-rating-container">
            <div className="price">{price}</div>
            <div className="rating">{rating}</div>
          </div>
        </div>
        <Button
          className="btn"
          type="primary"
          shape="round"
          onClick={() => addToCartHandler()}
          icon={<PlusCircleOutlined />}
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
}

export default Product;
