const mongoose = require("mongoose");
const validator = require("validator");


const PartnerSchema = new mongoose.Schema({
  Partner_name: {
    type: String,
    required: [true, "Partner name is missing"],
  },
  Partner_email: {
    type: String,
    required: [true, "Partner email is missing"],
    unique: [true, "Email id must be unique"],
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  Login_link: {
    type: String,
  },
});

PartnerSchema.pre("save", function (next) {
  let name = this.Partner_name;
  let pname = name.split(" ").join("").toLowerCase();
  this.Login_link = `${"https://technocart.vercel.app"}/${pname}/login`;
  next();
});

const Partner = mongoose.model("partner", PartnerSchema);

module.exports = Partner;
