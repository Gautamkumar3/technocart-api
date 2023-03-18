const mongoose = require("mongoose");
const validator = require("validator");

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: [validator.isEmail, "Please enter valid email address"],
    },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;
