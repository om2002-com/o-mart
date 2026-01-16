import React, { useState } from "react";
import API from "../api/axios";

const ShopDashboard = () => {
  const [product, setProduct] = useState({ name: "", description: "", price: "" });

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/products/add", product);
      alert(res.data.message);
      setProduct({ name: "", description: "", price: "" });
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.error || "Error adding product");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Shop Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required /><br /><br />
        <input name="description" placeholder="Description" value={product.description} onChange={handleChange} required /><br /><br />
        <input name="price" placeholder="Price" value={product.price} onChange={handleChange} required /><br /><br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ShopDashboard;
