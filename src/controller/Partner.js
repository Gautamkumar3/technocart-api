const PartnerModal = require("../modal/Partner");
const nodemailer = require("nodemailer");
require("dotenv").config();
const OtpModal = require("../modal/OTP");

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
  const { page = 1, limit = 10 } = req.query;
  try {
    let length = await PartnerModal.find();
    let data = await PartnerModal.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res
      .status(200)
      .send({ status: "success", data: data, length: length.length });
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

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "technocart341998@gmail.com",
    pass: "kfkrkztmrqvpapjv",
  },
});

const sendMail = (email, otp) => {
  transport
    .sendMail({
      to: email,
      from: "technocart341998@gmail.com",
      subject: "Welcome",
      text: `Hello User,
              
            Welcome !!!
            You Succesfully register to Our Website your otp is ${otp}
                
            Regards
            Technocart
      `,
    })
    .catch((e) => {
      console.log(e.message, "error");
    });
};
let otp;

function deleteOtp(otp) {
  setTimeout(async () => {
    let data = await OtpModal.deleteOne({ otp });
    console.log(data, "deleteddata");
  }, 120000);
}

const partnerLogin = async (req, res) => {
  const { email } = req.body;

  otp = Math.floor(Math.random() * 90000) + 10000;
  try {
    let partnerData = await PartnerModal.findOne({ Partner_email: email });
    if (partnerData) {
      sendMail(email, otp);
      let data = new OtpModal({ otp });
      await data.save();
      deleteOtp(otp);
      res.status(200).send({ msg: "Login successfull", otp: otp });
    } else {
      res.status(404).send("No partner found");
    }
  } catch (er) {
    res.status(401).send({ status: "error", msg: er.message });
  }
};

module.exports = {
  addPartner,
  getPartnerData,
  updatePartnerData,
  deletePartnerData,
  partnerLogin,
};
