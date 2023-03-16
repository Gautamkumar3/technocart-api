const PartnerModal = require("../modal/Partner");
const nodemailer = require("nodemailer");
require("dotenv").config();

const addPartner = async (req, res) => {
  try {
    let data = new PartnerModal({ ...req.body });
    await data.save();
    res.status(200).send({ status: "success", data: data });
  } catch (er) {
    res.status(403).send({ status: "error", msg: er.message });
  }
};

const getPartnerData = async (req, res) => {
  try {
    let data = await PartnerModal.find();
    res.status(200).send({ status: "success", data: data });
  } catch (er) {
    res.status(401).send({ status: "error", msg: er.message });
  }
};

const updatePartnerData = async (req, res) => {
  let { id } = req.params;
  try {
    let updatedData = await PartnerModal.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.status(200).send({ message: "success", data: updatedData });
  } catch (er) {
    res.status(401).send({ status: "error", msg: er.message });
  }
};

const deletePartnerData = async (req, res) => {
  let { id } = req.params;
  try {
    let deletedData = await PartnerModal.findByIdAndDelete(id);
    res.status(200).send({ message: "success", data: deletedData });
  } catch (er) {
    res.status(401).send({ status: "error", msg: er.message });
  }
};

const partnerLogin = async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(Math.random() * 100000);

  try {
    let partnerData = await PartnerModal.findOne({ Partner_email: email });
    if (partnerData) {
      res.status(200).send("Login successfull");
    } else {
      res.status(404).send("No partner found");
    }
  } catch (er) {
    res.status(401).send({ status: "error", msg: er.message });
  }

  // const transport = nodemailer.createTransport({
  //   service: "gmail",
  //   host: "smtp.gmail.com",
  //   secure: false,
  //   auth: {
  //     user: `${process.env.EMAIL}`,
  //     password: `${process.env.PASSWORD}`,
  //   },
  // });

  // let details = {
  //   from: `${process.env.EMAIL}`,
  //   to: email,
  //   subject: "OTP",
  //   html: `Hello ${email}, this is your OTP : ${otp}`,
  // };

  // transport.sendMail(details, function (err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Email sent successfully");
  //   }
  // });
};

module.exports = {
  addPartner,
  getPartnerData,
  updatePartnerData,
  deletePartnerData,
  partnerLogin,
};
