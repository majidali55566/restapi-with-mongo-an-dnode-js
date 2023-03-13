const express = require("express");
const {
  getOrderById,
  getOrders,
  postOrder,
  patchOrder,
  deleteOrder,
} = require("../../model/order");

const router = express.Router();

router.get("/", getOrders);
router.post("/", postOrder);
router.get("/:orderId", getOrderById);
router.patch("/:orderId", patchOrder);
router.delete("/:orderId", deleteOrder);
module.exports = router;
