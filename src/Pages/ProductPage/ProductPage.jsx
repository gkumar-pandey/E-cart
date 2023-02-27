import React from "react";
import "./ProductPage.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Button } from "antd";
import Filters from "../../Components/Filters/Filters";

const ProductPage = () => {
  return (
    <>
      <div className="products-page">
        <div className="products-page-side-bar">
          <div className="side-bar-wrapper">
            <Filters />
          </div>
        </div>
        <div className="products-page-main">
          <div className="container">
            <div className="product-container-wrapper">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
