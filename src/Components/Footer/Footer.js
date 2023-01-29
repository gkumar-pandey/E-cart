import {
  GithubOutlined,
  LinkedinFilled,
  TwitterSquareFilled
} from "@ant-design/icons";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <p style={coustemStyle.text}>Made by GKP</p>
        </div>
        <div>
          <GithubOutlined style={coustemStyle.iconStyle} />
          <LinkedinFilled style={coustemStyle.iconStyle} />
          <TwitterSquareFilled style={coustemStyle.iconStyle} />
        </div>
      </div>
    </>
  );
}

const coustemStyle = {
  iconStyle: {
    fontSize: "2rem",
    margin: "0 0.6rem",
    color: "#fff"
  },
  text: {
    color: "#fff",
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "0",
    padding: "0.5rem 0"
  }
};

export default Footer;
