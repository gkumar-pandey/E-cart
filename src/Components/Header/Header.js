import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import './Header.css'

function Header() {
  return (
    <div>
      <div className='nav-bar'>
        <div className='nav-logo'>
          <img src='icon.svg' />
        </div>

        <div className="nav-links">
          <Link to={`/products`}>
            Explore
          </Link>
          <Link to={`/login`}>
            Login
          </Link>
          <Link to='/register'>
            <Button className='btn-block' type='primary'>Register</Button>

          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header