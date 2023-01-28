import axios from "axios";

const getCategory = () => {
  return axios.get("/api/categories");
};

export default getCategory;
