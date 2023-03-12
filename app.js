const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDb = require("./config/dbConn");
const cors = require("cors");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

//connect to db
connectDb();

//morgan middleware for logging
app.use(morgan("dev"));

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handling Cors errors by emplemeting middleware
app.use(cors());

//routes which handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

//Error handling=============
app.use((req, res, next) => {
  const error = new Error("Not found!!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
