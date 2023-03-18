const express = require("express");
const { validateOTP } = require("../controller/otp");

const otpRouter = express.Router();

otpRouter.post("/", validateOTP);

module.exports = otpRouter;
