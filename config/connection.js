const mongoose = require("mongoose");

module.exports = mongoose
  .connect("mongodb://localhost:27017/social-network")
  .then(() => {
    console.log("MongoDB Connected!");
  });
