import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

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

  //! clear input fields

  const clearInputField = () => {
    setLoginPassword("");
    setLoginUserName("");
  };

  // TODO signin using firebase
  const loginByUser = async (loginUserName, loginPassword) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginUserName,
        loginPassword
      );
      message.success("Login Successfull");
      return true;
    } catch (error) {
      message.error("Username does not exist");
      return false;
    }
  };
  const handleLoginClickBtn = async () => {
    if (isValid(loginUserName, loginPassword)) {
      const isLoginSuccess = await loginByUser(loginUserName, loginPassword);
      if (isLoginSuccess) {
        clearInputField();
        navigate("/products");
      }
    }
  };

  return (
    <>
      <Header/>
      <div className="flex-container" style={{backgroundColor:'#eee'}} >
        <div className="container"  >
          <h1>Login to Qkart</h1>
          <Space direction="vertical" style={{ width: "80%" }}>
            <Input
              value={loginUserName}
              placeholder="Email"
              maxLength="32"
              prefix={<UserOutlined />}
              onChange={(e) => setLoginUserName(e.target.value)}
            />
            <Input.Password
              value={loginPassword}
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
      <Footer/>
    </>
  );
}

export default Login;
