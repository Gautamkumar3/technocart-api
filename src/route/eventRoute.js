const express = require("express");
const { addEvent } = require("../controller/Event");

const eventRouter = express.Router();

eventRouter.post("/", addEvent);

module.exports = eventRouter;
