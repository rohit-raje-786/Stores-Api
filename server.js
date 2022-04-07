require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connectdb");

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");

const products = require("./routes/products");

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>");
});

app.use("/api/v1/products", products);

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const start = async () => {
  try {
    let res = await connectDB(process.env.MONGODB_URI);
    if (res) {
      console.log("Succesfully connected to db");
    }
    app.listen(PORT, () => {
      console.log(`App listening to port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
