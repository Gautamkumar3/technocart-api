const session = require("express-session");

const SessionMiddleware = (req, res, next) => {
  if (!req.session.value) {
    req.session.value = "session created";
    next();
  } else {
    res.status(401).send("something went wrong");
  }
};

module.exports = SessionMiddleware;
