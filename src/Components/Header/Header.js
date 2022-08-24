import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import UserProfile from "./UserProfile";
import "./Header.css";
import { Input } from "antd";

function Header({ searchText, Search, productPage, searchBarHandle }) {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-logo">
          <img src="icon.svg" />
        </div>
        {productPage ? (
          <div className="searchbar">
            <Input.Search
              placeholder="Search a product"
              enterButton
              value={searchText}
              onChange={(e) => searchBarHandle(e.target.value)}
            />
          </div>
        ) : null}
        <div className="nav-links">
          {/* <Link to={`/products`}>
            Explore
          </Link>
          <Link to={`/login`}>
            Login
          </Link>
          <Link to='/register'>
            <Button className='btn-block' type='primary'>Register</Button>

          </Link> */}
          <UserProfile name="Gautam kumar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
