import React from "react";
import "../style/ViewProduct.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getProuctById } from "../Api/products.service";
import { addProductToCart } from "../Api/cart.service";

const ViewProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productInfo, setProductInfo] = useState();
  const [qty, setQty] = useState(1);

  const getProductDetails = async () => {
    const response = await getProuctById(id);
    setProductInfo(response?.data);
  };

  const addToCart = async () => {
    const res = await addProductToCart(id, qty);

    if (res?.status === 200) {
      alert("Cart is Updated");
    } else {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <p className="newarrival text-center">New</p>
          <h2>{productInfo?.title}</h2>
          <p>
            <b>Product Code: </b> {productInfo?._id}
          </p>
          <p className="Price">
            <b>Price: </b>LKR {productInfo?.price}
          </p>
          <p>
            <b>Availability: </b>In Stock
          </p>
          <p>
            <b>Condition: </b>New
          </p>

          <label>
            <b>Quantity: </b>{" "}
          </label>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e?.target?.value)}
          ></input>

          <button
            type="button"
            className="btn btn-primary cart"
            onClick={() => addToCart()}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
