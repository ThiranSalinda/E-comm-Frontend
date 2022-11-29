import { api } from "./api";

export const addProductToCart = async () => {
  return await api()
    .post("cart", {
      productId: "6382071c5ce434fcb9b65f41",
      quantity: 9,
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
