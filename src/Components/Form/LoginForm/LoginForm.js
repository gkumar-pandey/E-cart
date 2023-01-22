import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { Input } from "antd";
import Label from "./Components/Label";
import { Checkbox } from "antd";

const LoginForm = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailValidationStatus,
    passwordValidationStatus,
    checkboxHandler,
    saveUser
  } = props;

  return (
    <>
      <div className="form-input-container">
        <Form layout="vertical">
          <Form.Item
            label={<Label title={"Email"} />}
            validateStatus={
              emailValidationStatus.status && emailValidationStatus.status
            }
            help={emailValidationStatus.msg && emailValidationStatus.msg}
          >
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              value={email}
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item
            label={<Label title={"Password"} />}
            validateStatus={
              passwordValidationStatus.status && passwordValidationStatus.status
            }
            help={passwordValidationStatus.msg && passwordValidationStatus.msg}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input.Password
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item>
            <Checkbox checked={saveUser} onChange={checkboxHandler}>
              Remember me
            </Checkbox>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
