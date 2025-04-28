const {model} = require('mongoose')
const {HoldingSchema} = require('../schemas/HoldingsSchema')

const Holding = model ('Holding',HoldingSchema);

module.exports = Holding