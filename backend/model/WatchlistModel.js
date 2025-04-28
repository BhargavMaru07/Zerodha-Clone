const { model } = require("mongoose");
const { WatchlistSchema } = require("../schemas/WatchlistSchema");

const Watchlist = model("Watchlist", WatchlistSchema);

module.exports = Watchlist;
