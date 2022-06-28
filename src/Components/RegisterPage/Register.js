import React from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Input, Space } from 'antd';
function Register() {
  return (
    <>
      <div className="flex-container">
        <div className="container">
          <h1>Make an account</h1>
          <Space direction='vertical' style={{width: '80%'}}>
            <Input placeholder="default size" maxLength='5' prefix={<UserOutlined />} />
            <Input.Password placeholder=" password" prefix={<LockOutlined />} />
            <Input.Password placeholder=" password" prefix={<LockOutlined />} />
          </Space>

          <Button className='btn-block' type='primary'>Register</Button>

        </div>
      </div>
    </>
  )
}

export default Register