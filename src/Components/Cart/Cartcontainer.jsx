import React from "react";
import Cartcard from "./Cartcard";
import Data from "../../Data/Data";
import Totalprice from "./Totalprice";

function Cartcontainer() {
  return (
    <div style={{ margin: "auto" }}>
      {Data.map((product, idx) => {
        return (
          <Cartcard
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
