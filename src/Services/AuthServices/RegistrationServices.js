import axios from "axios";

const registrationService = (user) => {
  return axios.post("/api/auth/signup", user);
};

export { registrationService };
