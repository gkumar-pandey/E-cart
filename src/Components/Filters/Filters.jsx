import React, { useState } from "react";
import "./Filters.css";
import { Radio, Checkbox, Slider } from "antd";

const FilterBySort = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div>
        <h3 style={coustemStyle.filter}>Sort</h3>
        <div>
          <Radio.Group value={value} onChange={onChange}>
            <Radio value={"latest"}>Latest</Radio>
            <Radio value={"lowToHigh"}>Price (Low to High) </Radio>
            <Radio value={"HighToLow"}>Price (High to Low) </Radio>
          </Radio.Group>
        </div>
      </div>
    </>
  );
};

const FilterByPriceAndInStock = () => {
  const [value, setValue] = useState(5000);

  const onChangeSlider = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <div>
      <h3 style={coustemStyle.filter}>Available & Price</h3>
      <Checkbox>In Stock</Checkbox>
      <div>
        <p className="mb-0">Price Range: 0 to {value}</p>
        <Slider
          min={0}
          max={5000}
          defaultValue={5000}
          onChange={onChangeSlider}
        />
      </div>
    </div>
  );
};

const FilterByTypes = () => {
  const options = ["wireless", "wired", "speakers"];

  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h3 style={coustemStyle.filter}>Types</h3>
      <div>
        <Checkbox.Group
          options={options}
          onChange={onChange}
          style={coustemStyle.checkboxGrp}
        />
      </div>
    </div>
  );
};

const FilterByBrand = () => {
  const options = ["JBL", "Boat", "Sony", "Bose"];
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h3 style={coustemStyle.filter}>Brands</h3>
      <div>
        <Checkbox.Group
          options={options}
          onChange={onChange}
          style={coustemStyle.checkboxGrp}
        />
      </div>
    </div>
  );
};

const Filters = () => {
  return (
    <div style={coustemStyle.container}>
      <div className="filter-title" style={coustemStyle.titleContainer}>
        <h3 style={coustemStyle.filter}>Filters</h3>
        <button style={coustemStyle.clearBtn}>Clear all</button>
      </div>
      <div>
        <div style={coustemStyle.filterComp}>
          <FilterBySort />
        </div>
        <div style={coustemStyle.filterComp}>
          <FilterByPriceAndInStock />
        </div>
        <div style={coustemStyle.filterComp}>
          <FilterByTypes />
        </div>
        <div style={coustemStyle.filterComp}>
          <FilterByBrand />
        </div>
      </div>
    </div>
  );
};

const coustemStyle = {
  container: {
    // border: "1px solid red",
    margin: "0.5rem 0.8rem"
  },
  filter: {
    // border: "1px solid green",
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "0px",
    padding: "2px"
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.6rem"
  },
  clearBtn: {
    padding: "2px 8px",
    fontSize: "1rem",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    borderRadius: "0.2rem"
  },
  checkboxGrp: {
    display: "flex",
    flexDirection: "column"
  },
  filterComp: {
    // border: "1px solid red",
    padding: "1rem ",
    borderTop: "1px solid black"
  }
};

export default Filters;
