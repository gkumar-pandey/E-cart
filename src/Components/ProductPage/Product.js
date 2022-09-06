import React from "react";
import Card from "antd/lib/card/Card";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./Product.css";
import { message } from "antd";
import { CartState } from "../CartContext/CartContext";

function Product({ product, img, title, category, price, rating }) {
  const { addToCart, setAddToCart } = CartState();

  // ! Add to Cart function Start
  const addToCartHandler = (cart) => {
    if (addToCart.includes(cart)) {
      message.warning("Already added 🤘🏼");
      return;
    } else {
      setAddToCart((preCart) => {
        return [cart, ...preCart];
      });
      message.success("Item is Added to cart 🛒");
    }
  };

  return (
    <div
      className="product-card-container"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Card
        hoverable
        style={{
          width: 300,
          margin: "1rem 0",
        }}
        className="product-card"
        cover={<img alt="example" style={{ height: "200px" }} src={img} />}
      >
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
          onClick={() => addToCartHandler(product)}
          icon={<PlusCircleOutlined />}
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
}

export default Product;
