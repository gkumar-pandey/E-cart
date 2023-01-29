import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Row, Col } from "antd";
import getCategory from "../../../Services/ProductServices/getCategoryService";

const CategoryComp = () => {
  const [categoryList, setCategoryList] = useState([]);

  const categoryHandler = async () => {
    try {
      const { data } = await getCategory();
      setCategoryList(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categoryHandler();
  }, []);

  return (
    <div className="container">
      <div>
        <h2 className="title-text">Shop by Category</h2>
        <div>
          <Row justify="center" align="middle">
            {categoryList.map((ele) => {
              return (
                <Col key={ele._id} xs={12} sm={12} lg={6} md={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1rem"
                    }}
                  >
                    <CategoryCard title={ele.categoryName} img={ele.img} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CategoryComp;
