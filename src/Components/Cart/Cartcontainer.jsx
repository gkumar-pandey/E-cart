import React from "react";
import Cartcard from "./Cartcard";
import Totalprice from "./Totalprice";

function Cartcontainer({ productListInCart }) {
  return (
    <div style={{ margin: "auto" }}>
      {productListInCart.map((product, idx) => {
        return (
          <Cartcard
            key={idx}
            img={product.img}
            name={product.product}
            price={product.price}
            category={product.category}
          />
        );
      })}
      <Totalprice />
    </div>
  );
}

export default Cartcontainer;
