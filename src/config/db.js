const mongoose = require("mongoose");
require("dotenv").config();


const dbConnect = async () => {
  return mongoose.connect(`${process.env.URL}/technocart`);
};

module.exports = dbConnect;
