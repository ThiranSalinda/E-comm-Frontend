import React, { useEffect } from "react";
import axios from "axios";

const Cart = () => {
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:8080/api/cart",
  //     // responseType: 'stream'
  //   }).then(function (response) {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Smart Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Manage Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="cart" class="section-p1">
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
                <a href="#"></a>
              </td>
              <td>
                <img src="../images/p1.jpg" alt=""></img>
              </td>
              <td>Apple 14 Pro</td>
              <td>$550.00</td>
              <td>
                <input type="number" value="1"></input>
              </td>
              <td>$550.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cart-add" class="section-p1">
        <div id="subtotal">
          <h3 class="text-center">Cart Totals</h3>
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
          <button class="normal">Proceed to checkout</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
