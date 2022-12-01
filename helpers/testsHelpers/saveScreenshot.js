const fs = require("fs");

const saveScreenshot = (driver, imgFileName) => {
  driver
    .takeScreenshot()
    .then((img) =>
      fs.writeFileSync(`./report/screenshots/${imgFileName}`, img, "base64")
    )
    .catch((err) => console.log(err));
};

module.exports = saveScreenshot;
