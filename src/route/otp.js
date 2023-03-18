const express = require("express");
const { validateOTP } = require("../controller/otp");
const SessionMiddleware = require("../middleware/SessionMiddleware");

const otpRouter = express.Router();

otpRouter.post("/", validateOTP);

module.exports = otpRouter;
