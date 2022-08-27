import React, { useEffect, useState } from "react";
import { message } from "antd";
import { Col, Row } from "antd";
import Header from "../Header/Header";
import Product from "../ProductPage/Product";
import Data from "../../Data/Data";
import "./Search.css";
import Footer from "../Footer/Footer";
import Cartcontainer from "../Cart/Cartcontainer";
import Checkout from "../Checkout/Checkout";

function ProductPage() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [productList, setProductList] = useState(Data);
  const [filterProduct, setFilterProduct] = useState(Data);
  const [searchText, setSearchText] = useState("");
  const [addToCart, setAddToCart] = useState([]);
  const chockOut = true;

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
  //TODO : IMPLEMENT ADD TO CART FUNCTION
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
  // TODO : IMPLEMENT REMOVE FROM CART FUNCTION
  const removeFromCart = (id) => {
    const productAfterRemove = addToCart.filter((item) => {
      return item.id !== id;
    });
    setAddToCart([...productAfterRemove]);
    message.success("Product is removed ✌🏻");
  };
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
              {chockOut ? (
                <Checkout />
              ) : (
                filterProduct.map((product, idx) => {
                  return (
                    <>
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
                          addToCartHandler={addToCartHandler}
                        />
                      </Col>
                    </>
                  );
                })
              )}
            </Row>
          </Col>
          <Col md={6} sx={24} style={{ width: "100%" }}>
            <Cartcontainer
              removeFromCart={removeFromCart}
              productListInCart={addToCart}
            />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
