const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    messsage: "get order request",
  });
});
router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(200).json({
    messsage: "post order request",
    order,
  });
});
router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    messsage: "get id order request",
  });
});
router.post("/:orderId", (req, res, next) => {
  res.status(200).json({
    messsage: "post id order request",
  });
});

router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    messsage: "update order request",
  });
});
router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    messsage: "delete order request",
  });
});
module.exports = router;
