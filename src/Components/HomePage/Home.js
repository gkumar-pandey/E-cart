import React from 'react'
import { Button } from 'antd';
import './Home.css'
function Home() {
    return (
        <div className='flex-container'>
            <div className="container">

                <div className="welcome-text">
                    <h2>Welcome to </h2> <img src='icon.svg' />
                </div>
                <p>Please select an option from below</p>
                <div className="home-container-btn">
                    <Button  className='btn-block' type='primary'>Register</Button>
                    <Button  className='btn-block' type='primary'>Login</Button>

                </div>
            </div>
        </div>
    )
}

export default Home