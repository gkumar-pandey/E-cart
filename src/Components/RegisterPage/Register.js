import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Input, Space } from 'antd';
function Register() {
  return (
    <>
      <Header/>
      <div className="flex-container">
      
        <div className="container">
          <h1>Make an account</h1>
          <Space direction='vertical' style={{width: '80%'}}>
            <Input placeholder="Username" maxLength='5' prefix={<UserOutlined />} />
            <Input.Password placeholder=" Password" prefix={<LockOutlined />} />
            <Input.Password placeholder="Confirm password" prefix={<LockOutlined />} />
          </Space>

          <Button className='btn-block' type='primary'>Register</Button>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Register