import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { Input, Space } from "antd";
function Login() {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // ! Check validation of Login input values
  //? if userName is empty return false else true
  //? if password is empty return false else true

  const isValid = (userLoginName, userLoginPassword) => {
    let valid = true;
    if (userLoginName !== "" && valid) {
      valid = true;
    } else {
      valid = false;
      message.error("Enter User name");
      return;
    }

    if (userLoginPassword !== "" && valid) {
      valid = true;
    } else {
      valid = false;
      message.error("Enter Password");
      return;
    }
    return valid;
  };

  const handleLoginClickBtn = () => {
    console.log(isValid(loginUserName, loginPassword));
  };

  return (
    <>
      <Header />
      <div className="flex-container">
        <div className="container">
          <h1>Login to Qkart</h1>
          <Space direction="vertical" style={{ width: "80%" }}>
            <Input
              placeholder="Username"
              maxLength="32"
              prefix={<UserOutlined />}
              onChange={(e) => setLoginUserName(e.target.value)}
            />
            <Input.Password
              placeholder=" Password"
              prefix={<LockOutlined />}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </Space>

          <Button
            onClick={handleLoginClickBtn}
            className="btn-block"
            type="primary"
          >
            Login
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
