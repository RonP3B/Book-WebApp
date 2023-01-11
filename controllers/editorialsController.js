const { Editorials } = require("../exports/models");
const { internalErrorRes } = require("../exports/helpers");
const crypto = require("crypto");

exports.getEditorials = async (req, res, next) => {
  try {
    const EditorialsRes = await Editorials.findAll({ where: { user_id: req.session.user.id } });
    const editorials = EditorialsRes.map((res) => res.dataValues);
    res.render("editorials/admin-editorials", { editorials });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getAddEditorial = (req, res, next) => {
  res.render("editorials/save-editorial", { edit: false });
};

exports.getEditEditorial = async (req, res, next) => {
  try {
    const id = req.params.id;
    const editorialsRes = await Editorials.findOne({
      where: { id, user_id: req.session.user.id }
    });

    if (!editorialsRes) return res.redirect("/admin-editorials");

    const editorial = editorialsRes.dataValues;

    res.render("editorials/save-editorial", { edit: true, editorial });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getDeleteEditorial = async (req, res, next) => {
  try {
    const id = req.params.id;
    const editorialsRes = await Editorials.findOne({
      where: { id, user_id: req.session.user.id }
    });

    if (!editorialsRes) return res.redirect("/admin-editorials");

    const { name } = editorialsRes.dataValues;

    res.render("confirm", {
      isNotBook: true,
      page: "editorials",
      model: "Editorial",
      modelMsg: "esta editorial",
      name,
      id,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postAddEditorial = async (req, res, next) => {
  try {
    const { name, phone, country } = req.body;

    if (phone && name && country) {
      await Editorials.create({
        id: crypto.randomUUID(),
        user_id: req.session.user.id,
        name,
        phone,
        country
      });
    }

    req.flash("msg", "Editorial creada exitosamente");
    res.redirect("/admin-editorials");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postEditEditorial = async (req, res, next) => {
  try {
    const { name, phone, country, id } = req.body;

    if (name && phone && country && id) {
      await Editorials.update(
        { name, phone, country },
        { where: { id, user_id: req.session.user.id } }
      );
    }

    req.flash("msg", "Editorial editada exitosamente");
    res.redirect("/admin-editorials");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postDeleteEditorial = async (req, res, next) => {
  try {
    const id = req.body.id;
    await Editorials.destroy({ where: { id, user_id: req.session.user.id } });
    req.flash("msg", "Editorial eliminada exitosamente");
    res.redirect("/admin-editorials");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};
