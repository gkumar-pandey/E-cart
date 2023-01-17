import React from "react";
import { useState, useEffect } from "react";
import LoginForm from "../../../Components/Form/LoginForm/LoginForm";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="login-form-container">
      <div className="form-wrapper">
        <div>
          <h1 style={formStyle.login}>Login</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
const formStyle = {
  container: {
    border: "1px solid red",
    Width: "600px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column"
  },
  loginFormContainer: {
    border: "1px solid red",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    border: "1px solid green",
    textAlign: "center",
    margin: "0",
    fontWeight: "bolder"
  },
  login: {
    border: "1px solid red",
    textAlign: "center",
    fontWeight: "bolder",
    color: "blue"
  }
};
export default LoginPage;
