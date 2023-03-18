const express = require("express");
const { addEvent, getAllEvent } = require("../controller/Event");

const eventRouter = express.Router();

eventRouter.post("/", addEvent);
eventRouter.get("/", getAllEvent);

module.exports = eventRouter;
