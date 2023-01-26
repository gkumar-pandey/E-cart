import React, { useState } from "react";
import { Drawer } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const DrawerTitle = () => {
  return (
    <>
      <div style={coustemStyle.title}>
        <div style={coustemStyle.userLogo}>
          <UserOutlined style={{ fontSize: "1.5rem" }} />
        </div>
        <span style={{ fontWeight: "bold" }}>Gautam kumar</span>
      </div>
    </>
  );
};

const DrawerComp = ({ openDrawer, handleClose }) => {
  let activeStyle = {
    backgroundColor: "grey"
  };
  return (
    <>
      <Drawer
        title={<DrawerTitle />}
        placement="left"
        width={"60%"}
        onClose={handleClose}
        closable={false}
        visible={openDrawer}
        headerStyle={coustemStyle.headerstyle}
        bodyStyle={{ padding: "5px" }}
      >
        <NavLink
          to=""
          id="drawer-btn"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="profile"
          id="drawer-btn"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Profile
        </NavLink>

        <NavLink
          to="orders"
          id="drawer-btn"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Orders
        </NavLink>

        <NavLink
          to="login"
          id="drawer-btn"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Login
        </NavLink>
      </Drawer>
    </>
  );
};

export default DrawerComp;

const coustemStyle = {
  userLogo: {
    border: "4px solid white",
    borderRadius: "50%",
    padding: "0.5rem"
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white"
  },
  headerstyle: {
    backgroundColor: "#0A2647"
  }
};
