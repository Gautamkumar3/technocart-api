const OtpModal = require("../modal/OTP");

const validateOTP = async (req, res) => {
  const { otp } = req.body;
  console.log(otp);
  try {
    let validate = await OtpModal.findOne({ otp: otp });
   
    if (validate) {
      req.session.value = "session created";
      res.status(200).send({
        status: "success",
        msg: "otp validated",
        session: "session created",
      });
    } else {
      res
        .status(404)
        .send({ status: "error", msg: "OTP is incorrect please try again" });
    }
  } catch (er) {
    res.status(404).send({ status: "error", msg: er.message });
  }
};

const checkSession = (req, res) => {
  if ((req.session.value = "session created")) {
    req.session.destroy();
  } else {
    res.status(404).send(req.session.value);
  }
};

module.exports = {
  validateOTP,
};
