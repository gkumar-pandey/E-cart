import React from "react";
import Card from "antd/lib/card/Card";
import { InputNumber } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function Cartcard({ img, name, price, category, removeFromCart,id }) {
  return (
    <>
      <Card size="small" className="card">
        <div style={{ display: "flex" }}>
          <img src={img} style={coustemStyle.img} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              padding: "0 1rem",
              // border: "1px solid red",
            }}
          >
            <p style={{ fontWeight: "bold" }}>{name}</p>
            <p>{category}</p>
            <DeleteOutlined onClick={()=> removeFromCart(id)} className="delete-icon" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              // border: "1px solid red",
            }}
          >
            <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>{price}</p>
            <InputNumber min={1} max={10} defaultValue={1} size="small" />
          </div>
        </div>
      </Card>
    </>
  );
}

const coustemStyle = {
  img: {
    height: "100px",
    width: "150px",
  },
  card: {},
};

export default Cartcard;
