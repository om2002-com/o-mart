const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const shopRoutes = require("./routes/shopRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/products", productRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("O-mart api is running");
});

console.log("MONGO_URI:", process.env.MONGO_URI);

// DB + SERVER
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5001, () =>
      console.log("Server running on http://localhost:5001")
    );
  })
  .catch((err) => console.log(err));
