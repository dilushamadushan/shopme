require('dotenv').config();

const port = process.env.PORT;

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { type } = require('os');

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Welcome to E-commerce API");
})

const storage = multer.diskStorage({
  destination: "./upload",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

app.use("/upload", express.static("upload"));

app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }

  res.json({
    success: 1,
    image: `http://localhost:${port}/upload/${req.file.filename}`,
  });
});

const Product = mongoose.model("product", {
  id : {
    type : Number,
    required : true,
  },
  name : {
    type : String,
    required : true,
  },
  image : {
    type : String,
    required : true,
  },
  category : {
    type : String,
    required : true,
  },
  new_price : {
    type : Number,
    required : true,
  },old_price : {
    type : Number,
    required : true,
  },
  date : {
    type : Date,
    default : Date.now,
  },
  available : {
    type : Boolean,
    default : true,
  },
})

app.post("/addproduct", async (req, res) => {
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
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.delete("/removeproduct/:id", async (req, res) => {
  const id = req.params.id;
  await Product.deleteOne({id: id});
  res.json({ message: "Product deleted successfully" });
})

app.get("/allproduct", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
})

mongoose.connect(`${process.env.MONGO_URL}`);

app.listen(port, (error) => {
    if(!error){
        console.log("Server is running on port " + port);
    }else{
        console.log("Error occurred, server can't start", error);
    }
})