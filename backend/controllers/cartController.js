const User = require("../models/User");

const addToCart = async (req, res) => {
  let userData = await User.findById(req.user.id);
  userData.cartData[req.body.itemId] += 1;
  await User.findByIdAndUpdate(req.user.id, { cartData: userData.cartData });
  res.json({ success: true, message: "Added" });
};

const removeFromCart = async (req, res) => {
  let userData = await User.findById(req.user.id);
  if (userData.cartData[req.body.itemId] > 0) userData.cartData[req.body.itemId] -= 1;
  await User.findByIdAndUpdate(req.user.id, { cartData: userData.cartData });
  res.json({ success: true, message: "Removed" });
};

const getCart = async (req, res) => {
  let userData = await User.findById(req.user.id);
  res.json(userData.cartData);
};

module.exports = { addToCart, removeFromCart, getCart };
