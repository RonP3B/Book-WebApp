const sendDefaultMail = require("../helpers/mailerHelpers/sendDefaultMail");
const internalErrorRes = require("../helpers/controllersHelpers/internalErrorRes");
const getSelectValues = require("../helpers/controllersHelpers/getSelectValues");
const getBook = require("../helpers/hooksHelpers/getBook");

module.exports = {
  sendDefaultMail,
  internalErrorRes,
  getSelectValues,
  getBook
};
