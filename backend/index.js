require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const {holdings} = require('../dashboard/src/data/data')
const {positions} = require('../dashboard/src/data/data')
const Holding = require('./model/HoldingsModel')
const Position = require("./model/PositionsModel");
const { json } = require("body-parser");

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


// //dumy data route
// //holding
// app.get('/addHoldings',async(req,res)=>{
//   try {
//     await Holding.insertMany(holdings)
//     console.log("holding inserted");
//     res.send("done")
//   } catch (error) {
//     console.error('error in insertion',error)
//   }
// })

//position
app.get('/addPositions',async(req,res)=>{
  try {
    await Position.insertMany(positions);
    console.log("positions inserted");
    res.send("done")
  } catch (error) {
    console.error('error in insertion',error)
  }
})

app.get('/allHoldings',async(req,res)=>{
    let allHoldings = await Holding.find({});
    res.json(allHoldings);
})

app.get('/allPositions',async(req,res)=>{
    let allPosition = await Position.find({});
    res.json(allPosition);
})

app.listen(PORT, () => {
  console.log(`server is listining on ${PORT}`);
});
