import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { Input, Space } from "antd";
import { auth } from "../Firebase/Firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
function Register() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  let navigate = useNavigate(); //? useNavigate used to redirect ot login page
  const valid = (userName, password, confirmPassword) => {
    let isValid = true;
    if (userName !== "" && isValid) {
      isValid = true;
    } else {
      isValid = false;
      message.error("username is required");
      return;
    }

    if (userName.length >= 6 && userName.length <= 32 && isValid) {
      isValid = true;
    } else {
      isValid = false;
      message.error(
        "Username should contain atleast 6 character and most 32 character"
      );
    }
    if (password !== "" && isValid) {
      isValid = true;
    } else {
      isValid = false;
      message.error("password is required");
      return;
    }

    if (password.length >= 6 && password.length <= 32 && isValid) {
      isValid = true;
    } else {
      isValid = false;
      message.error(
        "Password should contain atleast 6 character and most 32 character"
      );
      return;
    }
    if (confirmPassword !== "" && isValid) {
      isValid = true;
    } else {
      isValid = false;
      message.error("confirmPassword is required");
      return;
    }

    if (
      confirmPassword.length >= 6 &&
      confirmPassword.length <= 32 &&
      isValid
    ) {
      isValid = true;
    } else {
      isValid = false;
      message.error(
        "confirmPassword should contain atleast 6 character and most 32 character"
      );
      return;
    }

    if (password == confirmPassword) {
      isValid = true;
    } else {
      isValid = false;
      message.error("Password and Confirm password not matching");
      return;
    }
    return isValid;
  };

  // * Register user using firebase */
  const registerUser = async (userName, userPassword) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userName,
        userPassword
      );
      message.success("Register Successfully ✌🏻");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };
  const registerBtnClickHandle = () => {
    const allRegistrationInputsAreValid = valid(
      userName,
      password,
      confirmPassword
    );
    if (allRegistrationInputsAreValid) {
      registerUser(userName, password);
    }
  };

  return (
    <>
      <Header />
      <div className="flex-container" style={{backgroundColor:'#eee'}} >
        <div className="container">
          <h1>Make an account</h1>
          <Space direction="vertical" style={{ width: "80%" }}>
            <Input
              placeholder="Email"
              maxLength="32"
              prefix={<UserOutlined />}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <Input.Password
              placeholder=" Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              prefix={<LockOutlined />}
            />
            <Input.Password
              placeholder="Confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              prefix={<LockOutlined />}
            />
          </Space>

          <Button
            onClick={registerBtnClickHandle}
            className="btn-block"
            type="primary"
          >
            Register
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
