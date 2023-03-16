const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
  try {
    if (email === "admin@gmail.com" && password === "12345678") {
      res.status(200).send({ status: "success", msg: "login successfull" });
    } else {
      res.status(404).send({ status: "false", msg: "login failed" });
    }
  } catch (er) {
    res.status(401).send({ status: "error", msg: er.message });
  }
};
module.exports = {
  loginAdmin,
};
