const mongoose = require("mongoose");
const Order = require("./orderModel");

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      messsage: "all orders found",
      orders,
    });
  } catch (error) {
    console.log(error);
  }
};
const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.find({ _id: req.params.orderId });
    res.status(200).json({
      messsage: "got an order",
      orderId: req.params.orderId,
      order,
    });
  } catch (error) {
    console.log(error);
  }
};

const postOrder = async (req, res, next) => {
  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    quantity: req.body.quantity,
    product: req.body.productId,
  });
  try {
    const savedOrder = await order.save();
    res.status(200).json({
      messsage: "order saved successfully",
      order: savedOrder,
    });
  } catch (err) {
    console.error(err);
  }
};
const patchOrder = async (req, res, next) => {
  const toBeUpdatedvalues = req.body.order;
  try {
    const updatedOrder = await Order.updateOne({ _id: req.params.orderId });
    res.status(200).json({
      messsage: "update order request",
      updatedOrder,
    });
  } catch (err) {
    console.log({
      message: "Order could not be updated successfully",
    });
  }
};
const deleteOrder = (req, res, next) => {
  res.status(200).json({
    messsage: "delete order request",
  });
};

module.exports = {
  getOrders,
  getOrderById,
  postOrder,
  patchOrder,
  deleteOrder,
};
