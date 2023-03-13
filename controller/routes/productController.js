const express = require("express");
const {
  getProduct,
  getProductById,
  postProduct,
  patchOneProductById,
  deleteProductById,
} = require("../../model/product");
const router = express.Router();

router.get("/", getProduct);

router.post("/", postProduct);

router.get("/:productId", getProductById);
router.patch("/:productId", patchOneProductById);
router.delete("/:productId", deleteProductById);
module.exports = router;
