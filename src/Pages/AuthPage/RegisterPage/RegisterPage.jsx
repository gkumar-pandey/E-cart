import React from "react";
import RegistrationForm from "../../../Components/Form/RegistrationForm/RegistrationForm";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  //TODO -> Link with Backend

  return (
    <>
      <div className="login-form-container">
        <div className="form-wrapper">
          <div>
            <h1 className="title">Register</h1>
          </div>
          <RegistrationForm />
          <div style={CoustemStyle.loginBtn}>
            <button className="register-btn">Register</button>
          </div>
          <p style={CoustemStyle.linkTosignUp}>
            <Link to={"/login"}>
              Already have account <RightOutlined />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

const CoustemStyle = {
  btn: {
    width: "100%",
    fontWeight: "bolder",
    marginBottom: "0.8rem"
  },
  linkTosignUp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    fontWeight: "400"
  }
};

export default RegisterPage;
