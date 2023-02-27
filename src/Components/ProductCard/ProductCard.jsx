import React from "react";
import "./ProductCard.css";
import HeartBtn from "./Component/HeartBtn";

const ProductCard = () => {
  return (
    <div>
      <div className="product-container">
        <div className="product-wrapper">
          <div className="product-img">
            <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <div className="heart-btn">
              <HeartBtn />
            </div>
          </div>
          <div className="product-title">
            <p> Lorem ipsum dolor sit Lorem ipsum dolor sit.. </p>
          </div>
          <div className="product-discription">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, dolor repellendus tempora earum perspiciatis, id
              voluptatum doloremque amet quasi odit temporibus quaerat soluta!
            </p>
          </div>
          <div className="product-price">
            <span>300</span>
          </div>
          <div className="add-to-cart-btn">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
