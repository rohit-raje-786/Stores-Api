require("dotenv").config();

const connectdb = require("./db/connectdb");

const Product = require("./models/products");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectdb(process.env.MONGODB_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Succesfully connected to db");
  } catch (e) {
    console.log(e);
  }
};

start();
