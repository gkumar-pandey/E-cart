import React from "react";
import { useState, useEffect } from "react";
import LoginForm from "../../../Components/Form/LoginForm/LoginForm";
import "./LoginPage.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { isEmailPasswordValid } from "../../../Utils/AuthValidation/LoginPageValidation";
import { loginService } from "../../../Services/AuthServices/LoginService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveUser, setSaveUser] = useState(false);
  const [emailValidationStatus, setEmailValidatinStatus] = useState({
    status: "",
    msg: ""
  });
  const [passwordValidationStatus, setPasswordValidationStatus] = useState({
    status: "",
    msg: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const clearLoginInput = () => {
    setEmail("");
    setPassword("");
  };

  const login = async (user) => {
    setIsLoading(true);

    const { valid, status, msg } = isEmailPasswordValid(
      user.email,
      user.password
    );

    if (valid) {
      setEmailValidatinStatus({ status, msg });
      setPasswordValidationStatus({ status, msg });
      try {
        const response = await loginService(user);

        if (response) {
          if (saveUser) {
            localStorage.setItem("user", response.data.foundUser);
            localStorage.setItem("token", response.data.encodedToken);
          }

          setIsLoading(false);
          toast.success("Log in Successfull");
          clearLoginInput();
          navigate("/register");
        }
      } catch (error) {
        const errorMsg = error.response.data.errors;
        toast.error(errorMsg[0]);
        setIsLoading(false);
      }
    } else {
      setEmailValidatinStatus({
        status,
        msg
      });
      setPasswordValidationStatus({ status, msg });
    }
  };

  const loginHandler = () => {
    const user = {
      email,
      password
    };
    login(user);
  };

  const checkboxHandler = (e) => {
    setSaveUser(e.target.checked);
  };

  const loginWithTestCredentials = () => {
    const testUser = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika"
    };
    setEmail(testUser.email);
    setPassword(testUser.password);
    login(testUser);
  };

  return (
    <div className="login-form-container">
      <div className="form-wrapper">
        <div>
          <h1 className="title">Login</h1>
        </div>
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          saveUser={saveUser}
          setPassword={setPassword}
          emailValidationStatus={emailValidationStatus}
          passwordValidationStatus={passwordValidationStatus}
          checkboxHandler={checkboxHandler}
        />

        <div style={CoustemStyle.loginBtn}>
          <Button
            onClick={() => loginHandler()}
            size="large"
            style={CoustemStyle.btn}
            type="primary"
            loading={isLoading}
          >
            {isLoading ? "Loading.." : "Login"}
          </Button>
        </div>
        <div>
          <button onClick={loginWithTestCredentials} className="credential-btn">
            Login with Test Credentials
          </button>
        </div>

        <p style={CoustemStyle.linkTosignUp}>
          <Link to={"/register"}>
            Create New Account <RightOutlined />
          </Link>
        </p>
      </div>
    </div>
  );
};

const CoustemStyle = {
  btn: {
    width: "100%",
    fontWeight: "bolder",
    marginBottom: "0.8rem"
  },
  testCredential: {
    border: "1px solid red",
    textAlign: "center"
  },
  linkTosignUp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    fontWeight: "400"
  }
};

export default LoginPage;
