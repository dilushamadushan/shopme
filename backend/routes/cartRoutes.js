
const express = require("express");
const { addToCart, removeFromCart, getCart } = require("../controllers/cartController");
const fetchUser = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/cart", fetchUser, addToCart);
router.post("/removeCart", fetchUser, removeFromCart);
router.post("/getcart", fetchUser, getCart);

module.exports = router;
