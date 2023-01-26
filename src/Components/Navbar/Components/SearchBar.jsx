import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  const { Search } = Input;

  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <>
      <Input
        placeholder="input search text"
        style={{
          width: "100%",
          borderRadius: "6px"
        }}
        size="large"
        prefix={<SearchOutlined />}
      />
    </>
  );
};

export default SearchBar;
