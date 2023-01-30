import React from "react";
import "./SingleProductCard.css";
import { Card } from "antd";

const SingleProductCard = () => {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      ></Card>
    </div>
  );
};

export default SingleProductCard;
