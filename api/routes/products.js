const express = require("express");
const Product = require("../model/product");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find().select("name price _id");

    res.status(200).json({ count: products.length, products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  try {
    const savedPost = await product.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:productId", async (req, res, next) => {
  const id = req.params.productId;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.patch("/:productId", async (req, res, next) => {
  const id = req.params.productId;
  try {
    const updated = await Product.updateOne(
      { _id: id },
      { $set: { price: req.body.price } }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/:productId", async (req, res, next) => {
  const id = req.params.productId;

  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: id });
    res
      .status(200)
      .json({ message: "product deleted successfully", deletedProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
