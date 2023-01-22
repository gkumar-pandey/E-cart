import React, { useState } from "react";
import RegistrationForm from "../../../Components/Form/RegistrationForm/RegistrationForm";
import { RightOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import {
  checkConfirmPassword,
  checkEmail,
  checkPassword,
  checkUserName
} from "../../../Utils/AuthValidation/RegisterFormValidation";
import { toast } from "react-hot-toast";
import { registrationService } from "../../../Services/AuthServices/RegistrationServices";
import LoadingBtn from "../../../Components/Button/LoadingBtn/LoadingBtn";

const RegisterPage = () => {
  //TODO -> Link with Backend
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [userNameValidation, setUserNameValidation] = useState({
    status: "",
    msg: ""
  });
  const [emailValidation, setEmailValidation] = useState({
    status: "",
    msg: ""
  });
  const [passValidation, setPassValidation] = useState({
    status: "",
    msg: ""
  });
  const [confirmPassValidation, setConfirmPassValidation] = useState({
    status: "",
    msg: ""
  });

  const registerInputValidation = () => {
    var valid = true;
    // ? username validation
    const isUserNameValid = checkUserName(userName);
    if (!isUserNameValid.isValid) {
      const { msg, status } = isUserNameValid;
      setUserNameValidation({
        status,
        msg
      });
      valid = false;
    } else {
      valid = true;
      const { msg, status } = isUserNameValid;
      setUserNameValidation({ status, msg });
    }

    //? Email validation

    const isEmailValid = checkEmail(email);
    if (!isEmailValid.isValid) {
      const { msg, status } = isEmailValid;
      setEmailValidation({ status, msg });
      valid = false;
    } else {
      valid = true;
      const { msg, status } = isEmailValid;
      setEmailValidation({ msg, status });
    }

    //? password validation
    const isPassValid = checkPassword(password);
    if (!isPassValid.isValid) {
      const { msg, status } = isPassValid;
      setPassValidation({ msg, status });
      valid = false;
    } else {
      valid = true;
      const { msg, status } = isPassValid;
      setPassValidation({ msg, status });
    }

    //? confirm password
    const isConfirmPassValid = checkConfirmPassword(password, confirmPass);

    if (isConfirmPassValid.isValid) {
      const { msg, status } = isConfirmPassValid;
      setConfirmPassValidation({ msg, status });
      valid = true;
    } else {
      const { msg, status } = isConfirmPassValid;
      setConfirmPassValidation({ msg, status });
      valid = false;
    }
    return valid;
  };

  const clearInput = () => {
    setUserName("");
    setPassword("");
    setEmail("");
    setConfirmPass("");
  };

  const registerHandler = async () => {
    setIsLoading(true);
    const user = {
      email: email,
      password: password,
      name: userName
    };
    const valid = registerInputValidation();
    if (valid) {
      try {
        const { data } = await registrationService(user);

        if (data) {
          setIsLoading(false);
          clearInput();
          toast.success("Register successfully✌🏻");
          navigate("/login");
        }
      } catch (error) {
        const err = { msg: error.response.data.errors[0] };
        console.log(err);
        toast.error(err.msg);
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="login-form-container">
        <div className="form-wrapper">
          <div>
            <h1 className="title">Register</h1>
          </div>
          <RegistrationForm
            userName={userName}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPass={confirmPass}
            setConfirmPass={setConfirmPass}
            userNameValidation={userNameValidation}
            emailValidation={emailValidation}
            passValidation={passValidation}
            confirmPassValidation={confirmPassValidation}
          />

          {isLoading ? (
            <LoadingBtn />
          ) : (
            <div style={CoustemStyle.loginBtn}>
              <button onClick={registerHandler} className="register-btn">
                Register
              </button>
            </div>
          )}

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
