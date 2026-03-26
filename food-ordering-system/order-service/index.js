const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Order Service Running");
});

const PORT = process.env.PORT || 8083;

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});
