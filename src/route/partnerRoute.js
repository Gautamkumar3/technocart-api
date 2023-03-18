const express = require("express");
const {
  addPartner,
  getPartnerData,
  updatePartnerData,
  deletePartnerData,
  partnerLogin,
} = require("../controller/Partner");
const AdminMiddleWare = require("../middleware/AdminMiddleware");

const partnerRouter = express.Router();

partnerRouter.post("/", addPartner);
partnerRouter.post("/login", partnerLogin);
partnerRouter.get("/", getPartnerData);
partnerRouter.patch("/:id", updatePartnerData);
partnerRouter.delete("/:id", deletePartnerData);

module.exports = partnerRouter;
