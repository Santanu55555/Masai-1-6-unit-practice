import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [productData, setProductData] = useState({
    image: null,
    name: null,
    price: null,
    category: null,
  });

  const postProduct = async () => {
    try {
      await axios.post(
        `http://localhost:8080/${
          productData.category === "mobile" ||
          productData.category === "laptop" ||
          productData.category === "watch"
            ? productData.category
            : "products"
        }`,
        productData
      );
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  const handleChange = (e) => {
    return setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct()

  };
  return (
    <div>
      <input
        type="text"
        name="image"
        placeholder="img"
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="category"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddProduct;
