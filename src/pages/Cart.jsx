import React, { useEffect } from "react";
import "../style/Cart.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getCartDetailsById } from "../Api/products.service";

const Cart = () => {
  const navigate = useNavigate();

  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const res = async () => {
      const response = await getCartDetailsById();
      // console.log(response?.data);
      setCartList(response?.data);
    };

    res();

    console.log(cartList);
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
            <tr>
              <td>
                <a href="#">
                  <i class="bi bi-x-circle-fill"></i>
                </a>
              </td>
              <td>
                <img src="" class="img-thumbnail" alt="..."></img>
              </td>
              <td>{cartList?.title}</td>
              <td>$550.00</td>
              <td>
                <input type="number" defaultValue="1"></input>
              </td>
              <td>$550.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
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
