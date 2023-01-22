import React from "react";
import Label from "../LoginForm/Components/Label";
import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";

//TODO: Create UI of Registration Form
// TODO : -> Create Validation Funtion for Registration
// ?  check all input field are not empty
//? Check a valid user name , email , password
// ? check password and confirm password are similar

const RegistrationForm = (props) => {
  const {
    userNameValidation,
    emailValidationStatus,
    passwordValidationStatus,
    confirmPasswordValidation,
    userName,
    setUserName,
    email,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
    userNameValidation,
    emailValidation,
    passValidation,
    confirmPassValidation
  } = props;
  return (
    <div>
      <Form layout="vertical" autoComplete="off">
        <Form.Item hasFeedback label={<Label title={"Username"} />} required>
          <Input onChange={userNameHandler} placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          name={"email"}
          label={<Label title={"Email"} />}
          required
          hasFeedback
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input onChange={emailHandler} placeholder="abc@gmail.com" />
        </Form.Item>
        <Form.Item
          name="password"
          required
          hasFeedback
          label={<Label title={"Password"} />}
          rules={[
            {
              required: true,
              message: "Please enter your password"
            }
          ]}
        >
          <Input.Password
            onChange={passwordHandler}
            placeholder="Password"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item
          required
          name="confirm password"
          hasFeedback
          label={<Label title={"Confirm Password"} />}
          rules={[
            {
              required: true,
              message: "Please confirm your password!"
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              }
            })
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            onChange={confirmPasswordHandler}
            prefix={<LockOutlined />}
          />
        </Form.Item>
        {/* <Form.Item>
          <Button
            htmlType="submit"
            style={coustemStyle.btn}
            block
            size="large"
            type="primary"
            onClick={onClickHandler}
          >
            Register
          </Button>
        </Form.Item> */}
      </Form>
    </div>
  );
};

const coustemStyle = {
  btn: {
    fontWeight: "bolder"
  }
};

export default RegistrationForm;
