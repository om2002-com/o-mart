import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/register", form);

      console.log("REGISTER RESPONSE:", res.data);

      if (res.data.user && res.data.user._id) {
        localStorage.setItem("userId", res.data.user._id);
        alert("User registered successfully");
        navigate("/");
      } else {
        alert("User registered but userId missing");
      }
    } catch (err) {
      console.log(err.response?.data);
      alert("Error registering user");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <br /><br />

        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <br /><br />

        <input name="email" placeholder="Email" onChange={handleChange} />
        <br /><br />

        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
