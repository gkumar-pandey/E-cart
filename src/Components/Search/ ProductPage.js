import React, { useState } from "react";
import { Col, Row } from "antd";
import Header from "../Header/Header";
import Product from "../ProductPage/Product";
import Data from "../../Data/Data";
import "./Search.css";
import Footer from "../Footer/Footer";
import { Input } from "antd";
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
const Search = (value) => {
  console.log(value);
};

const SearchField = () => {
  return (
    <Input.Search
      placeholder="Search a product"
      enterButton
      onChange={(e) => Search(e.target.value)}
    />
  );
};

function ProductPage() {

  const [isLoggedIn, setIsLoggedIn] = useState('');
  const [productList, setProductList] = useState(Data)

  const debounceSearch= ()=> {
    
  }

  return (
    <>
      <Header search={<SearchField />} />
      <div
        className="product-container"
        style={{
          backgroundColor: "#eee",
        }}
      >
        <Row>
          {productList.map((product, idx) => {
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

export default ProductPage;
