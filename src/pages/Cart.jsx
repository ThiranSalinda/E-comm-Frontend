import React, { useEffect } from "react";
import "../style/Cart.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  deleteAllProductInCart,
  deleteProductInCart,
  getAllProductInCart,
  saveCartOrder,
} from "../Api/cart.service";

const Cart = () => {
  const navigate = useNavigate();

  const [cartData, setCartData] = useState(null);

  const getCartProducts = async () => {
    const response = await getAllProductInCart();
    if (response?.status === 200) {
      console.log(response?.data);
      setCartData(response?.data);
    } else {
      alert("Something went wrong.");
    }
  };

  const removeCartItem = async (productId) => {
    const response = await deleteProductInCart(productId);
    if (response?.status === 200) {
      getCartProducts();
    } else {
      alert("Something went wrong.");
    }
  };

  const removeAllCartItem = async () => {
    const response = await deleteAllProductInCart();
    if (response?.status === 200) {
      getCartProducts();
    } else {
      alert("Something went wrong.");
    }
  };

  const savedOrder = async () => {
    const res = await saveCartOrder(cartData?.totalCost);
    if (res?.status === 200) {
      alert("Order placed Successfully!.");
      getCartProducts();
    } else alert("Something went wrong.");
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <div>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cartData?.items?.length > 0 ? (
              cartData?.items?.map((cart, key) => {
                return (
                  <tr key={key}>
                    <td>
                      {/* <i className="bi bi-x-circle-fill"></i> */}
                      <button
                        className="btn btn-danger"
                        onClick={() => removeCartItem(cart?._id)}
                      >
                        Remove
                      </button>
                    </td>
                    <td>{cart?.product?.title}</td>
                    <td>LKR {cart?.product?.price}</td>
                    <td>{cart?.quantity}</td>
                    <td>LKR {cart?.product?.price * cart?.quantity * 1}</td>
                  </tr>
                );
              })
            ) : (
              <p className="text-center mt-3 mb-5">No items</p>
            )}
          </tbody>
        </table>
      </section>
      <button
        id="remove"
        className="btn btn-danger "
        onClick={() => removeAllCartItem()}
      >
        Remove All
      </button>

      <section id="cart-add" className="section-p1 mt-5">
        <div id="subtotal">
          <h3 className="text-center">Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>LKR {cartData?.subTotal ?? 0}</td>
            </tr>
            <tr>
              <td>Tax (1.23%)</td>
              <td>LKR {cartData?.taxTotal ?? 0}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>LKR {cartData?.shippingCost ?? 0}</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>LKR {cartData?.totalCost ?? 0}</strong>
              </td>
            </tr>
          </table>
          <button className="normal" onClick={savedOrder}>
            Proceed to checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
