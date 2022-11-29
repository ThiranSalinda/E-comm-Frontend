import { api } from "./api";

export const addProductToCart = async (productId, qty) => {
  return await api()
    .post("cart", {
      productId: productId,
      quantity: qty,
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get all products in cart
export const getAllProductInCart = async () => {
  return await api()
    .get(`cart`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete product in cart
export const deleteProductInCart = async (productId) => {
  return await api()
    .delete(`cart/${productId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
