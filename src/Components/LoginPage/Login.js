import React from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button ,message} from 'antd';
import { Input, Space } from 'antd';
function Login() {

  const loginMsg = () => {
    message.info('Login is clicked')
  }

  return (
    <>
      <Header />
      <div className="flex-container">
        <div className="container">
          <h1>Login to Qkart</h1>
          <Space direction="vertical" style={{ width: "80%" }}>
            <Input
              placeholder="Username"
              maxLength="5"
              prefix={<UserOutlined />}
            />
            <Input.Password placeholder=" Password" prefix={<LockOutlined />} />
             
          </Space>

          <Button onClick={loginMsg} className="btn-block" type="primary">
            Login
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
