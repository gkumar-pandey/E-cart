import React from "react";
import Card from "antd/lib/card/Card";
import { Row, Col, Divider } from "antd";

function Totalprice({ TotalPrice, totalNoOfProducts }) {
  return (
    <>
      <Card className="card">
        <h3>Total</h3>
        <Row>
          <Col md={18} xs={18}>
            Products
          </Col>
          <Col md={6} xs={6}>
            {totalNoOfProducts}
          </Col>
          <Col md={18} xs={18}>
            Total
          </Col>
          <Col md={6} xs={6}>
            {"₹"}
            {TotalPrice}
          </Col>
          <Col md={18} xs={18}>
            Shipping
          </Col>
          <Col md={6} xs={6}>
            N/A
          </Col>
          <Divider />
          <Col md={18} xs={18}>
            Total
          </Col>
          <Col md={6} xs={6}>
            {"₹"}
            {TotalPrice}
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Totalprice;
