import React from "react";
import { Col, Row } from "antd";
import Header from "../Header/Header";
import Product from "../ProductPage/Product";
import Data from "../../Data/Data";
import "./Search.css";
import Footer from "../Footer/Footer";

const ProductCard = ({ title, category, price, rating, img }) => {
  return (
    <>
      <Col sm={12} sx={24} md={6}>
        <Product
          title={title}
          category={category}
          price={price}
          rating={rating}
          img={img}
        />
      </Col>
    </>
  );
};

function Search() {
  return (
    <>
      <Header />
      <div
        className="product-container"
        style={{
          backgroundColor: "#eee",
        }}
      >
        <Row>
          {Data.map((product, idx) => {
            return (
              <ProductCard
                key={idx}
                title={product.product}
                price={product.price}
                rating={product.rating}
                category={product.category}
                img={product.img}
              />
            );
          })}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Search;
