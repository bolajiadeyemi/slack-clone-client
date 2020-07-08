const axios = require("axios");

export const loginUser = (payload) => {
  return axios.post("http://localhost:3001/api/auth/login", payload);
};
