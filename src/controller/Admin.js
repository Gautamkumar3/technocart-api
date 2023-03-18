const AdminModal = require("../modal/Admin");
const secretKey = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(404)
      .send({ status: "warning", message: `email or password is missing` });
  }
  try {
    const admin = await AdminModal.findOne({ email, password });
    if (!admin) {
      res.status(401).send({ status: "error", message: "Invalid Credentials" });
    } else {
      const token = jwt.sign(
        { email: admin.email, password: admin.name, role: "admin" },
        "sdfsderwerw3454353'34.,m34",
        { expiresIn: "1 day" }
      );
      res.status(200).send({
        status: "success",
        message: "Login successfull",
        token: token,
      });
    }
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

module.exports = {
  loginAdmin,
};
