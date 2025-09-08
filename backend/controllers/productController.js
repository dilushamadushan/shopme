const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
      available: req.body.available ?? true,
    });

    await product.save();
    res.json({ success: true, message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const removeProduct = async (req, res) => {
  await Product.deleteOne({ id: req.params.id });
  res.json({ message: "Product deleted successfully" });
};

module.exports = { addProduct, getAllProducts, removeProduct };
