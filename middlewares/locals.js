const { logosObj } = require("../exports/util");

const locals = (req, res, next) => {
  const messages = req.flash("msg");

  res.locals.csrfToken = req.csrfToken();
  res.locals.logosObj = logosObj;
  res.locals.messages = messages;
  res.locals.isAuthenticated = req.session.isAuthenticated;

  next();
}

module.exports = locals;