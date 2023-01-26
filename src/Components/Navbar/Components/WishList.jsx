import { HeartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";

const WishList = () => {
  return (
    <div className="nav-icon">
      <Badge count={5}>
        <HeartOutlined style={{ fontSize: "1.5rem" }} />
      </Badge>
      <p>wishlist</p>
    </div>
  );
};

export default WishList;
