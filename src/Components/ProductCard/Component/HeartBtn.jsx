import React from "react";
import { AiFillHeart } from "react-icons/ai";

const HeartBtn = () => {
  return (
    <div>
      <div style={coustemStyle.wrapper}>
        <AiFillHeart style={coustemStyle.icon} />
      </div>
    </div>
  );
};

const coustemStyle = {
  wrapper: {
    // border: "1px solid red",
    borderRadius: "50%",
    padding: "5px",
    display: "flex",
    backgroundColor: "#e5c5c5"
  },
  icon: {
    color: "red",
    fontSize: "1.4rem"
  }
};

export default HeartBtn;
