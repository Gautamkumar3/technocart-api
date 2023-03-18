const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const AdminMiddleWare = (req, res, next) => {
  const { token } = req.headers;

  let decodedToken = jwt.decode(token, secretKey);

  if (decodedToken.role === "admin") {
    next();
  } else {
    res
      .status(403)
      .send("Your are not authenticated for perform this operation");
  }
};

module.exports = AdminMiddleWare;
