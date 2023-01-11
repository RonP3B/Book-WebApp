const { logosObj } = require("../exports/util");

exports.getNotFound = (req, res, next) => {
  res.status(404).render("error", {
    errorMsg: "Página no encontrada",
    logo: logosObj.svg404
  });
};
