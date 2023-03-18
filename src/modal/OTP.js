const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  otp: {
    type: Number,
  },
});

const OTP = mongoose.model("otp", OtpSchema);

module.exports = OTP;
