const express = require("express");
const { addProduct, getAllProducts, removeProduct } = require("../controllers/productController");
const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/allproduct", getAllProducts);
router.delete("/removeproduct/:id", removeProduct);

module.exports = router;
