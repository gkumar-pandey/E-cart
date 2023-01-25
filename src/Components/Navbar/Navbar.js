import React from "react";
import AvatarComp from "./Components/AvatarComp";
import CartIcon from "./Components/CartIcon";
import Logo from "./Components/Logo";
import WishList from "./Components/WishList";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <div className="left-nav">
            <Logo />
            <button>Home</button>
            <button>Shop now</button>
          </div>
          <div className="right-nav">
            <AvatarComp />
            <WishList />
            <CartIcon />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
