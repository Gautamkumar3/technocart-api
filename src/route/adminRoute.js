const express = require("express");
const { loginAdmin } = require("../controller/Admin");

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);

module.exports = adminRouter;
