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
