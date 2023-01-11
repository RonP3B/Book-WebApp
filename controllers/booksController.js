const crypto = require("crypto");
const fs = require("fs");
const { Editorials, Categories, Authors, Books } = require("../exports/models");
const { internalErrorRes, getSelectValues } = require("../exports/helpers");

exports.getBooks = async (req, res, next) => {
  try {
    const bookRes = await Books.findAll({
      include: [
        { model: Editorials },
        { model: Categories },
        { model: Authors },
      ],
      where: { user_id: req.session.user.id }
    });

    const books = bookRes.map((res) => res.dataValues);
    res.render("books/admin-books", { books });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getAddBook = async (req, res, next) => {
  try {
    const { editorials, categories, authors } = await getSelectValues(req);

    const noCategories = categories.length === 0;
    const noEditorials = editorials.length === 0;
    const noAuthors = authors.length === 0;

    res.render("books/save-books", {
      edit: false,
      editorials,
      categories,
      authors,
      noAddition: noCategories || noEditorials || noAuthors
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getEditBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const booksRes = await Books.findOne({ where: { id, user_id: req.session.user.id } });

    if (!booksRes) return res.redirect("/admin-books");

    const book = booksRes.dataValues;
    const { editorials, categories, authors } = await getSelectValues(req);
    const imageName = book.image.substring(book.image.indexOf("_") + 1);

    res.render("books/save-books", {
      edit: true,
      book,
      imageName,
      editorials,
      categories,
      authors
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getDeleteBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bookRes = await Books.findOne({ where: { id, user_id: req.session.user.id } });

    if (!bookRes) return res.redirect("/admin-books");

    const name = bookRes.dataValues.title;

    res.render("confirm", {
      page: "books",
      model: "Libro",
      modelMsg: "este libro",
      name,
      id
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postAddBook = async (req, res, next) => {
  try {
    const { title, publish_year, categoryId, authorId, editorialId } = req.body;
    const imageFile = req.file;

    const backendValidation =
      imageFile &&
      publish_year &&
      title &&
      categoryId &&
      authorId &&
      editorialId;

    if (backendValidation) {
      await Books.create({
        id: crypto.randomUUID(),
        user_id: req.session.user.id,
        title: title.toLowerCase(),
        publish_year,
        categoryId,
        authorId,
        editorialId,
        image: imageFile.filename,
      });
    }

    req.flash("msg", "Libro creado exitosamente");
    res.redirect("/admin-books");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postEditBook = async (req, res, next) => {
  try {
    const { id, title, publish_year, categoryId, authorId, editorialId } = req.body;
    const imageFile = req.file;

    if (id && publish_year && title && categoryId && authorId && editorialId) {
      const newValues = {
        title: title.toLowerCase(),
        publish_year,
        categoryId,
        authorId,
        editorialId,
      };

      if (imageFile) newValues.image = imageFile.filename;

      await Books.update(newValues, { where: { id, user_id: req.session.user.id } });
    }

    req.flash("msg", "Libro editado exitosamente");
    res.redirect("/admin-books");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postDeleteBook = async (req, res, next) => {
  try {
    const id = req.body.id;
    const bookRes = await Books.findOne({ where: { id, user_id: req.session.user.id } });

    if (!bookRes) return res.redirect("/admin-books");

    const img = bookRes.dataValues.image;
    fs.unlinkSync(`./public/assets/images/addedImages/${img}`);

    await bookRes.destroy();

    req.flash("msg", "Libro eliminado exitosamente");
    res.redirect("/admin-books");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};
