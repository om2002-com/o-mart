import React from "react";
import API from "../api/axios";

const Cart = ({ cart, setCart }) => {

  const placeOrder = async () => {
    try {
      const orderData = {
        userId: localStorage.getItem("userId"), // saved after login/register
        shopId: cart[0].shopId,
        products: cart.map((item) => ({
          productId: item._id,
          quantity: 1
        }))
      };

      const res = await API.post("/orders", orderData);
      alert(res.data.message);
      setCart([]); // clear cart
    } catch (err) {
      console.log(err.response?.data);
      alert("Error placing order");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
          ))}

          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;
