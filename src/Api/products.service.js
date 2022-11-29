import { api } from "./api";

//Get all products
export const getProducts = async () => {
  return await api()
    .get("product")
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

// getProuctById
export const getProuctById = async (prouctId) => {
  return await api()
    .get(`product/find/${prouctId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

//getCartDetailsById

export const getCartDetailsById = async (prouctId) => {
  return await api()
    .get(`product/find/${prouctId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

//manageProducts

export const manageProducts = async () => {
  return await api()
    .get("product")
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
