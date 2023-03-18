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

partnerRouter.post("/", AdminMiddleWare, addPartner);
partnerRouter.post("/login", partnerLogin);
partnerRouter.get("/", getPartnerData);
partnerRouter.patch("/:id", AdminMiddleWare, updatePartnerData);
partnerRouter.delete("/:id", AdminMiddleWare, deletePartnerData);

module.exports = partnerRouter;
