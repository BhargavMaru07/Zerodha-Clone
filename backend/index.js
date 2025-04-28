require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3333;
const URL = process.env.MONGO_URL;
const app = express();

mongoose
  .connect(URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log("Error in database",e);
  });

app.listen(PORT, () => {
  console.log(`server is listining on ${PORT}`);
});
