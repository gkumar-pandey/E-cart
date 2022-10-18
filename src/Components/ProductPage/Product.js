import React from "react";
import Card from "antd/lib/card/Card";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./Product.css";
import { message } from "antd";
import { CartState } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";

function Product({ product, img, title, category, price, rating }) {
  const { addToCart, setAddToCart } = CartState();
  const navigate = useNavigate();

  // ! Add to Cart function Start
  const addToCartHandler = (cart) => {
    if (localStorage.getItem("userName")) {
      if (addToCart.includes(cart)) {
        message.warning("Already added 🤘🏼");
        return;
      } else {
        setAddToCart((preCart) => {
          return [cart, ...preCart];
        });
        message.success("Item is Added to cart 🛒");
      }
    } else {
      navigate("/login");
      return;
    }
  };

  // ! if user is not Logged in then redirect to Login Page

  return (
    <div
      className="product-card-container"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "0.5rem",
      }}
    >
      <Card
        hoverable
        style={{
          width: "100%",
          padding: "8px 8px",
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
