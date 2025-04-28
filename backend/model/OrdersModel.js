const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const Order = model("Order", HoldingSchema);

module.exports = Order;
