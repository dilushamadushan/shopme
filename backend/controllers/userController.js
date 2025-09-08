const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) return res.status(400).json({ success: false, errors: "User already exists" });

  let cart = {};
  for (let i = 0; i < 300; i++) cart[i] = 0;

  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();
  const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
  res.json({ success: true, token });
};

const loginUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.json({ success: false, errors: "Wrong email Id" });

  if (req.body.password !== user.password) return res.json({ success: false, errors: "Wrong Password" });

  const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
  res.json({ success: true, token });
};

module.exports = { registerUser, loginUser };
