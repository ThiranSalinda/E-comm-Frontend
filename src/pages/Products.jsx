import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProucts } from "../Api/products.service";

const Products = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const res = async () => {
      const response = await getProucts();
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
              <h4>{product?.title}</h4>
              <h5>${product?.price ?? 0}</h5>
              <p>{product?.dese}</p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => navigate(`/products/${product?._id}`)}
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
