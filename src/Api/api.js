import axios from "axios";

export const api = () => {
  return axios.create({
    baseURL: "http://localhost:8080/api/",
  });
};
