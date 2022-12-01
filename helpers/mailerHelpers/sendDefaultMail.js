const { transporter } = require("../../exports/util");
const { Authors } = require("../../exports/models");

const sendDefaultMail = async (id, title) => {
  const authorRes = await Authors.findOne({ where: { id } });
  const { name, email } = authorRes.dataValues;

  transporter.sendMail(
    {
      from: "BookApp",
      to: email,
      subject: "¡Libro publicado exitosamente!",
      html: `Hola ${name}, tu libro <strong>${title}</strong> ha sido publicado en nuestra plataforma.`,
    },
    (err) => {
      if (err) console.log(`Error: ${err}`);
    }
  );
};

module.exports = sendDefaultMail;
