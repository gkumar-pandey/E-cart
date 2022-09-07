import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "antd";
import Header from "../Header/Header";
import Product from "../ProductPage/Product";
import Data from "../../Data/Data";
import "./Search.css";
import Footer from "../Footer/Footer";
import Cartcontainer from "../Cart/Cartcontainer";
import { CartState } from "../CartContext/CartContext";

function ProductPage() {
  const [productList, setProductList] = useState(Data);
  const [filterProduct, setFilterProduct] = useState(Data);
  const [searchText, setSearchText] = useState("");

  const Search = (value) => {
    const filteredProducts = productList.filter(
      (item) =>
        item.product.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
    );
    if (searchText) {
      setFilterProduct(filteredProducts);
    } else {
      setFilterProduct(Data);
    }
  };

  const searchBarHandle = (searchTerm) => {
    setSearchText(searchTerm);
  };

  // ! Debounce search start
  useEffect(() => {
    const timer = setTimeout(() => {
      Search(searchText);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchText]);
  //! Debounce search end

  return (
    <>
      <Header
        productPage={true}
        searchBarHandle={searchBarHandle}
        Search={Search}
        searchText={searchText}
      />
      <div
        className="product-container"
        style={{
          backgroundColor: "#eee",
        }}
      >
        <Row>
          <Col md={18}>
            <Row>
              {filterProduct.map((product, idx) => {
                return (
                  <Col
                    key={idx}
                    sm={12}
                    sx={24}
                    md={6}
                    style={{ width: "100%" }}
                  >
                    <Product
                      product={product}
                      title={product.product}
                      category={product.category}
                      price={product.price}
                      rating={product.rating}
                      img={product.img}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={6} sx={24} style={{ width: "100%" }}>
            <Cartcontainer />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
