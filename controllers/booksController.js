const crypto = require("crypto");
const fs = require("fs");
const { logosObj } = require("../exports/util");
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
    });

    const books = bookRes.map((res) => res.dataValues);

    res.render("books/admin-books", {
      logosObj,
      books,
      noBooks: books.length === 0,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getAddBook = async (req, res, next) => {
  try {
    const { editorials, categories, authors } = await getSelectValues();

    const noCategories = categories.length === 0;
    const noEditorials = editorials.length === 0;
    const noAuthors = authors.length === 0;

    res.render("books/save-books", {
      logosObj,
      edit: false,
      editorials,
      categories,
      authors,
      noEditorials,
      noAuthors,
      noCategories,
      noAddition: noCategories || noEditorials || noAuthors,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getEditBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const booksRes = await Books.findOne({ where: { id } });

    if (!booksRes) return res.redirect("/admin-books");

    const book = booksRes.dataValues;
    const { editorials, categories, authors } = await getSelectValues();
    const imageName = book.image.substring(book.image.indexOf("_") + 1);

    res.render("books/save-books", {
      logosObj,
      edit: true,
      book,
      imageName,
      editorials,
      categories,
      authors,
      noAddition: false,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getDeleteBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bookRes = await Books.findOne({ where: { id } });

    if (!bookRes) return res.redirect("/admin-books");

    const name = bookRes.dataValues.title;

    res.render("confirm", {
      logosObj,
      cascade: false,
      page: "books",
      model: "Libro",
      modelMsg: "este libro",
      name,
      id,
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
        title: title.toLowerCase(),
        publish_year,
        categoryId,
        authorId,
        editorialId,
        image: imageFile.filename,
      });
    }

    res.redirect("/admin-books");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postEditBook = async (req, res, next) => {
  try {
    const { id, title, publish_year, categoryId, authorId, editorialId } =
      req.body;
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

      await Books.update(newValues, { where: { id } });
    }

    res.redirect("/admin-books");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postDeleteBook = async (req, res, next) => {
  try {
    const id = req.body.id;
    const bookRes = await Books.findOne({ where: { id } });

    if (!bookRes) return res.redirect("/admin-books");

    const img = bookRes.dataValues.image;
    fs.unlinkSync(`./public/assets/images/addedImages/${img}`);

    await Books.destroy({ where: { id } });
    res.redirect("/admin-books");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};
