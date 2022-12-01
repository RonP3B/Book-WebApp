const sendDefaultMail = require("../helpers/mailerHelpers/sendDefaultMail");
const internalErrorRes = require("../helpers/controllersHelpers/internalErrorRes");
const getSelectValues = require("../helpers/controllersHelpers/getSelectValues");
const getBook = require("../helpers/hooksHelpers/getBook");
const saveScreenshot = require("../helpers/testsHelpers/saveScreenshot");
const getLastRecord = require("../helpers/testsHelpers/getLastRecord");

module.exports = {
  sendDefaultMail,
  internalErrorRes,
  getSelectValues,
  getBook,
  saveScreenshot,
  getLastRecord,
};
