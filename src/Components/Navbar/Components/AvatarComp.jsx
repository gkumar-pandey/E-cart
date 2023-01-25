import { UserOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";

const AvatarComp = () => {
  return (
    <div className="nav-icon" id="avatar-icon">
      <UserOutlined style={{ fontSize: "1.5rem" }} />
      <p>Login</p>
    </div>
  );
};

export default AvatarComp;
