import React from "react";
import Cartcard from "./Cartcard";
import Totalprice from "./Totalprice";

function Cartcontainer({ productListInCart, removeFromCart }) {
  return (
    <div style={{ margin: "auto" }}>
      {productListInCart.map((product, idx) => {
        return (
          <Cartcard
            key={idx}
            id={product.id}
            img={product.img}
            name={product.product}
            price={product.price}
            category={product.category}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <Totalprice />
    </div>
  );
}

export default Cartcontainer;
