import React, { useEffect, useState } from "react";
import "../style/ManageProducts.css";
import { useNavigate } from "react-router-dom";

import { addProduct, getProducts } from "../Api/products.service";

const Products = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [dese, setDese] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    const data = {
      title,
      dese,
      price,
    };

    const response = await addProduct(data);

    if (response?.status === 200) {
      alert("Success");
    } else {
      alert("Error");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product Manage</h1>
        {/* <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link> */}
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              value={title}
              onChange={(e) => {
                setTitle(e?.target?.value);
              }}
            />
            <label>Product Description</label>
            <input
              type="text"
              placeholder="Product Description"
              value={dese}
              onChange={(e) => {
                setDese(e?.target?.value);
              }}
            />
            <label>Price</label>
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setPrice(e?.target?.value);
              }}
            />

            <button
              className="productAddButton"
              type="button"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
          <div className="productFormRight">
            <button className="productButton">Update</button>
            <button className="productButton2">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;
