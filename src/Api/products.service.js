import axios from "axios";

export const api = () => {
  return axios.create({
    baseURL: "http://localhost:8080/api/",
  });
};

export const getProucts = async () => {
  return await api()
    .get("product")
    .then((result) => {
      //   console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

// getProuctById
