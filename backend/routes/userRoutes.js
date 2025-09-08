const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

router.post("/auth", registerUser);
router.post("/login", loginUser);

module.exports = router;
