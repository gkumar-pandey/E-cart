import React, { useEffect, useState } from "react";
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

function ProductPage() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
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
          {filterProduct.map((product, idx) => {
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
