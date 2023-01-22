import React from "react";
import Label from "../LoginForm/Components/Label";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailTwoTone } from "@ant-design/icons";

//TODO: Create UI of Registration Form
// TODO : -> Create Validation Funtion for Registration
// ?  check all input field are not empty
//? Check a valid user name , email , password
// ? check password and confirm password are similar

const RegistrationForm = (props) => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
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
        <Form.Item
          validateStatus={userNameValidation.status}
          name={"Username"}
          help={userNameValidation.msg}
          hasFeedback
          label={<Label title={"Full name"} />}
          required
        >
          <Input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Enter your full name"
          />
        </Form.Item>

        <Form.Item
          label={<Label title={"Email"} />}
          validateStatus={emailValidation.status}
          help={emailValidation.msg}
          required
          hasFeedback
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            prefix={<MailTwoTone />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          required
          validateStatus={passValidation.status}
          help={passValidation.msg}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item
          required
          name="confirm password"
          validateStatus={confirmPassValidation.status}
          help={confirmPassValidation.msg}
          hasFeedback
          label={<Label title={"Confirm Password"} />}
          rules={[
            {
              required: true,
              message: "Please confirm your password!"
            }
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            prefix={<LockOutlined />}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
