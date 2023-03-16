const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const mongoose = require("mongoose");
const eventRouter = require("./route/eventRoute");
const partnerRouter = require("./route/partnerRoute");
const adminRouter = require("./route/adminRoute");
mongoose.set("strictQuery", true);
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to technocart");
});
app.use("/event", eventRouter);
app.use("/partner", partnerRouter);
app.use("/admin", adminRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
