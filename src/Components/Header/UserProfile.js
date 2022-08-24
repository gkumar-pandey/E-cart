import { Button } from "antd";
import React from "react";


function UserProfile({ img, name, logOutHandler }) {
    return (
        <div className="user-profile-container" >
            <div className="profilepic">
                <img src={img} />
                <p>{name}</p>
            </div>

            <div >
                <Button type="primary" onClick={logOutHandler} >LogOut</Button>
            </div>
        </div>
    );
}

export default UserProfile;
