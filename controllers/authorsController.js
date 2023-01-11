const { internalErrorRes } = require("../exports/helpers");
const { Authors } = require("../exports/models");
const crypto = require("crypto");

exports.getAuthors = async (req, res, next) => {
  try {
    const authorsRes = await Authors.findAll({ where: { user_id: req.session.user.id } });
    const authors = authorsRes.map((res) => res.dataValues);
    res.render("authors/admin-authors", { authors });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getAddAuthor = (req, res, next) => {
  res.render("authors/save-author", { edit: false });
};

exports.getEditAuthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const authorsRes = await Authors.findOne({ where: { id, user_id: req.session.user.id } });

    if (!authorsRes) return res.redirect("/admin-authors");

    const author = authorsRes.dataValues;

    res.render("authors/save-author", { edit: true, author });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getDeleteAuthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const authorsRes = await Authors.findOne({ where: { id, user_id: req.session.user.id } });

    if (!authorsRes) return res.redirect("/admin-authors");

    const { name } = authorsRes.dataValues;

    res.render("confirm", {
      isNotBook: true,
      page: "authors",
      model: "Autor",
      modelMsg: "este autor",
      name,
      id,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postAddAuthor = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    if (name && email) {
      await Authors.create({
        id: crypto.randomUUID(),
        user_id: req.session.user.id,
        name,
        email
      });
    }

    req.flash("msg", "Autor creado exitosamente");
    res.redirect("/admin-authors");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postEditAuthor = async (req, res, next) => {
  try {
    const { id, name, email } = req.body;

    if (id && name && email) {
      await Authors.update(
        { name, email },
        { where: { id, user_id: req.session.user.id } }
      );
    }

    req.flash("msg", "Autor editado exitosamente");
    res.redirect("/admin-authors");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postDeleteAuthor = async (req, res, next) => {
  try {
    const id = req.body.id;
    await Authors.destroy({ where: { id, user_id: req.session.user.id } });
    req.flash("msg", "Autor eliminado exitosamente");
    res.redirect("/admin-authors");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};
