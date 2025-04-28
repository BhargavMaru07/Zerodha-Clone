const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const Position = model("Position", HoldingSchema);

module.exports = Position;
