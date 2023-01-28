import React from "react";
import { Card } from "antd";

const CategoryCard = ({ title, img }) => {
  return (
    <>
      <div>
        <Card
          hoverable
          className="category-card"
          bodyStyle={{
            padding: "0"
          }}
          cover={<img alt="example" src={img} />}
        >
          <div
            style={{
              textAlign: "center"
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>{title}</h2>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CategoryCard;
