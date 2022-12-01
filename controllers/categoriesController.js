const { logosObj } = require("../exports/util");
const { Categories } = require("../exports/models");
const { internalErrorRes } = require("../exports/helpers");
const crypto = require("crypto");

exports.getCategories = async (req, res, next) => {
  try {
    const categoriesRes = await Categories.findAll();
    const categories = categoriesRes.map((res) => res.dataValues);

    res.render("categories/admin-categories", {
      logosObj,
      categories,
      noCategories: categories.length === 0,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getAddCategory = (req, res, next) => {
  res.render("categories/save-category", { logosObj, edit: false });
};

exports.getEditCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const categoriesRes = await Categories.findOne({ where: { id } });

    if (!categoriesRes) return res.redirect("/admin-categories");

    const category = categoriesRes.dataValues;

    res.render("categories/save-category", {
      logosObj,
      edit: true,
      category,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getDeleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const categoriesRes = await Categories.findOne({ where: { id } });

    if (!categoriesRes) return res.redirect("/admin-categories");

    const { name, related_books } = categoriesRes.dataValues;

    res.render("confirm", {
      logosObj,
      cascade: related_books > 0,
      page: "categories",
      model: "Categoría",
      modelMsg: "esta categoría",
      name,
      id,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postAddCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (name && description) {
      await Categories.create({
        id: crypto.randomUUID(),
        name,
        description,
        related_books: 0,
      });
    }

    res.redirect("/admin-categories");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postEditCategory = async (req, res, next) => {
  try {
    const { id, name, description } = req.body;

    if (id && name && description) {
      await Categories.update({ name, description }, { where: { id } });
    }

    res.redirect("/admin-categories");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postDeleteCategory = async (req, res, next) => {
  try {
    const id = req.body.id;
    await Categories.destroy({ where: { id } });
    res.redirect("/admin-categories");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};
