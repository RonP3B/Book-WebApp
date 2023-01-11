const { transporter } = require("../../exports/util");

const sendConfirmationCode = (code, userEmail) => {
  transporter.sendMail(
    {
      from: "BookApp",
      to: userEmail,
      subject: "Código de confirmación",
      html: `<strong>${code}<strong>`
    },

    (err) => {
      if (err) console.log(`Error: ${err}`);
    }
  );
}

module.exports = sendConfirmationCode;