import React from "react";
import { Button } from "antd";

const LoadingBtn = ({ text }) => {
  return (
    <>
      <Button block type="primary" size="large" loading>
        Loading...
      </Button>
    </>
  );
};

export default LoadingBtn;
