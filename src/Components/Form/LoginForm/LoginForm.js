import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { Input } from "antd";
import Label from "./Components/Label";

const LoginForm = () => {
  return (
    <>
      <div className="form-input-container">
        <Form layout="vertical">
          <Form.Item
            label={<Label title={"Email"} />}
            name="Email"
            validateStatus="error"
            help="Should be combination of numbers & alphabets"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input placeholder="abc@gmail.com" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label={<Label title={"Password"} />}
            name="Password"
            validateStatus="error"
            help="Password .."
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input.Password placeholder="Password" prefix={<LockOutlined />} />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
