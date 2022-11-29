import React, { useEffect, useState } from "react";
import "../style/ManageProducts.css";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../Api/products.service";

const Products = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const res = async () => {
      const response = await getProducts();
      // console.log(response?.data);
      setProductList(response?.data);
    };

    res();

    console.log(productList);
  }, []);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product Manage</h1>
        {/* <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link> */}

        <button className="productAddButton">Create</button>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Product Name" />
            <label>Product Description</label>
            <input type="text" placeholder="Product Description" />
            <label>Price</label>
            <input type="text" placeholder="Price" />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="{product.img}" alt="" className="productUploadImg" />
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Please Select the Image
                </label>
                <input class="form-control" type="file" id="formFile"></input>
              </div>
              <label for="file">{/* <Publish /> */}</label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
            <button className="productButton2">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;
