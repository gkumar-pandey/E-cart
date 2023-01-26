import { ShoppingOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";

const CartIcon = () => {
  return (
    <div className="nav-icon">
      <Badge count={4}>
        <ShoppingOutlined style={{ fontSize: "1.5rem" }} />
      </Badge>
      <p>Cart</p>
    </div>
  );
};

export default CartIcon;
