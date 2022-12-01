const { Editorials } = require("../exports/models");
const { logosObj } = require("../exports/util");
const { internalErrorRes } = require("../exports/helpers");
const sequelize = require("sequelize");
const crypto = require("crypto");

exports.getEditorials = async (req, res, next) => {
  try {
    const EditorialsRes = await Editorials.findAll();
    const editorials = EditorialsRes.map((res) => res.dataValues);

    res.render("editorials/admin-editorials", {
      logosObj,
      editorials,
      noEditorials: editorials.length === 0,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getAddEditorial = (req, res, next) => {
  res.render("editorials/save-editorial", { logosObj, edit: false });
};

exports.getEditEditorial = async (req, res, next) => {
  try {
    const id = req.params.id;
    const editorialsRes = await Editorials.findOne({ where: { id } });

    if (!editorialsRes) return res.redirect("/admin-editorials");

    const editorial = editorialsRes.dataValues;

    res.render("editorials/save-editorial", {
      logosObj,
      edit: true,
      editorial,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getDeleteEditorial = async (req, res, next) => {
  try {
    const id = req.params.id;
    const editorialsRes = await Editorials.findOne({ where: { id } });

    if (!editorialsRes) return res.redirect("/admin-editorials");

    const { name, related_books } = editorialsRes.dataValues;

    res.render("confirm", {
      logosObj,
      cascade: related_books > 0,
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
        name,
        phone,
        country,
        related_books: 0,
      });
    }

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
      await Editorials.update({ name, phone, country }, { where: { id } });
    }

    res.redirect("/admin-editorials");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postDeleteEditorial = async (req, res, next) => {
  try {
    const id = req.body.id;
    await Editorials.destroy({ where: { id } });
    res.redirect("/admin-editorials");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};
