import React, { useEffect, useState } from "react";
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
    <div className="">
      <h3>Products Count : {productList?.length}</h3>

      <div className="row mt-4">
        {productList?.map((product, key) => {
          return (
            <div className="col-lg-3">
              <img src="" class="img-thumbnail" alt="..."></img>
              <h4>{product?.title}</h4>
              <h5>LKR{product?.price ?? 0}</h5>
              <p>{product?.dese}</p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => navigate(`/product/${product?._id}`)}
              >
                View more
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
