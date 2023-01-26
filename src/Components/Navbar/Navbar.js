import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import AvatarComp from "./Components/AvatarComp";
import CartIcon from "./Components/CartIcon";
import DrawerComp from "./Components/DrawerComp";
import { useState } from "react";
import Logo from "./Components/Logo";
import WishList from "./Components/WishList";
import "./Navbar.css";
import SearchBar from "./Components/SearchBar";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathName = useLocation();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <div className="left-nav">
            <MenuOutlined onClick={handleOpen} className="menu-icon" />
            <Logo />
            <button>Home</button>
            <button>Shop now</button>
          </div>
          {pathName == "products" ? (
            <>
              <div className="search-bar">
                <SearchBar />
              </div>
            </>
          ) : null}

          <div className="right-nav">
            <AvatarComp />
            <WishList />
            <CartIcon />
          </div>
        </div>
        <DrawerComp handleClose={handleClose} openDrawer={open} />
      </nav>
    </div>
  );
};

export default Navbar;
