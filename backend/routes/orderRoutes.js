const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// PLACE ORDER
router.post("/place", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET ORDERS OF USER
router.get("/user/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET ORDERS OF SHOP
router.get("/shop/:shopId", async (req, res) => {
  try {
    const orders = await Order.find({ shopId: req.params.shopId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
