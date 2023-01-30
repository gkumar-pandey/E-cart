import React from "react";
import SingleProductCard from "../../Components/SingleProductCard/SingleProductCard";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <>
      <main className="home-page-container">
        <div className="side-bar"></div>
        <div className="products-container ">
          <SingleProductCard />
        </div>
      </main>
    </>
  );
};

export default ProductPage;
