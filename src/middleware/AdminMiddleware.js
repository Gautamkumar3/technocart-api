const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const AdminMiddleWare = (req, res, next) => {
  const { token } = req.headers;
  console.log(token);
  let decodedToken = jwt.decode(token, secretKey);
  console.log(decodedToken);

  if (decodedToken.role === "admin") {
    next();
  } else {
    res
      .status(403)
      .send("Your are not authenticated for perform this operation");
  }
};

module.exports = AdminMiddleWare;
