import React, { useState } from "react";
import API from "../api/axios";

const ShopRegister = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/shops/register", form);
      alert(res.data.message);
      setForm({ name: "", phone: "", email: "", password: "" });
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.error || "Error registering shop");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Shop Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Shop Name" value={form.name} onChange={handleChange} required /><br /><br />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required /><br /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br /><br />
        <input name="password" placeholder="Password" value={form.password} onChange={handleChange} type="password" required /><br /><br />
        <button type="submit">Register Shop</button>
      </form>
    </div>
  );
};

export default ShopRegister;
