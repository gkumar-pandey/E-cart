import React, { useState } from "react";
import { Drawer } from "antd";
import { UserOutlined } from "@ant-design/icons";

const DrawerTitle = () => {
  return (
    <>
      <div style={coustemStyle.title}>
        <div style={coustemStyle.userLogo}>
          <UserOutlined style={{ fontSize: "1.5rem" }} />
        </div>
        <span>Gautam kumar</span>
      </div>
    </>
  );
};

const DrawerComp = ({ openDrawer, handleClose }) => {
  return (
    <>
      <Drawer
        title={<DrawerTitle />}
        placement="left"
        width={"60%"}
        onClose={handleClose}
        closable={false}
        visible={openDrawer}
        headerStyle={{ backgroundColor: "blue" }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default DrawerComp;

const coustemStyle = {
  userLogo: {
    border: "4px solid red",
    borderRadius: "50%",
    padding: "0.5rem"
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
    // backgroundColor: "yellow"
  }
};
