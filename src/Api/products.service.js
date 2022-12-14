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

export const addProduct = async (data) => {
  return await api()
    .post("product", data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addJson = async () => {
  return await api()
    .get("product/add-json-products")
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
