const { logosObj } = require("../../exports/util");

const internalErrorRes = (res) => {
  return res.status(500).render("error", {
    errorMsg: "Ha ocurrido un error interno en el servidor",
    logosObj,
    logo: logosObj.svgInternalError,
  });
};

module.exports = internalErrorRes;
