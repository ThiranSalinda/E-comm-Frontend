import React, { useEffect } from "react";
import "../style/Cart.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteProductInCart, getAllProductInCart } from "../Api/cart.service";

const Cart = () => {
  const navigate = useNavigate();

  const [cartList, setCartList] = useState([]);

  const getCartProducts = async () => {
    const response = await getAllProductInCart();
    if (response?.status === 200) {
      console.log(response?.data);
      setCartList(response?.data);
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
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cartList?.map((cart, key) => {
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
                  <td>
                    <img src="" className="img-thumbnail" alt="..."></img>
                  </td>
                  <td>{cart?.title}</td>
                  <td>LKR {cart?.price}</td>
                  <td>
                    <input type="number" value={cart?.quantity}></input>
                  </td>
                  <td>$550.00</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1 mt-5">
        <div id="subtotal">
          <h3 className="text-center">Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>LKR 550</td>
            </tr>
            <tr>
              <td>Tax (1.23%)</td>
              <td>LKR 560</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>LKR 500</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>LKR 1010</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
