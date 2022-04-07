const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getStaticProducts,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getStaticProducts);

module.exports = router;
