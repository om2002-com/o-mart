const express = require("express");
const Shop = require("../models/Shop");

const router = express.Router();

// REGISTER SHOP
router.post("/register", async (req, res) => {
  try {
    const shop = new Shop(req.body);
    await shop.save();
    res.status(201).json({ message: "Shop Registered, waiting for approval" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

