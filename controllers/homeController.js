const { logosObj } = require("../exports/util");
const { Editorials, Categories, Authors, Books } = require("../exports/models");
const { internalErrorRes } = require("../exports/helpers");

exports.getHome = async (req, res, next) => {
  try {
    const categoriesRes = await Categories.findAll();
    const bookRes = await Books.findAll({
      include: [
        { model: Editorials },
        { model: Categories },
        { model: Authors },
      ],
    });

    const categories = categoriesRes.map((res) => res.dataValues);
    const books = bookRes.map((res) => res.dataValues);

    res.render("home/home", {
      logosObj,
      books,
      categories,
      noBooks: books.length === 0,
      noBooksMsg: "No hay libros para mostrar",
      noCategories: categories.length === 0,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.getBookDetails = async (req, res, next) => {
  try {
    const id = req.params.id;

    const bookRes = await Books.findOne({
      include: [
        { model: Editorials },
        { model: Categories },
        { model: Authors },
      ],
      where: { id },
    });

    if (!bookRes) return res.redirect("/");

    const book = bookRes.dataValues;

    res.render("home/book-details", { logosObj, book });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postHome = async (req, res, next) => {
  try {
    const { items, title } = req.body;
    const checkboxIDs = items ? items.split(",") : null;
    const categoriesRes = await Categories.findAll();
    const categories = categoriesRes.map((res) => res.dataValues);
    let filteredBooks;

    //El usuario filtra por titulo y categorías
    if (checkboxIDs && title) {
      filteredBooks = await Books.findAll({
        where: { categoryId: checkboxIDs, title: title.toLowerCase() },
        include: [
          { model: Editorials },
          { model: Categories },
          { model: Authors },
        ],
      });
    }

    //El usuario filtra solo por categorías
    else if (checkboxIDs) {
      filteredBooks = await Books.findAll({
        where: { categoryId: checkboxIDs },
        include: [
          { model: Editorials },
          { model: Categories },
          { model: Authors },
        ],
      });
    }

    //El usuario filtra solo por titulo
    else if (title) {
      filteredBooks = await Books.findAll({
        where: { title: title.toLowerCase() },
        include: [
          { model: Editorials },
          { model: Categories },
          { model: Authors },
        ],
      });
    }

    //El usuario puso mano en la validacion frontend
    else return res.redirect("/");

    const books = filteredBooks.map((res) => res.dataValues);

    const checkboxIDsSet = new Set();
    if (checkboxIDs) checkboxIDs.forEach((item) => checkboxIDsSet.add(item));

    res.render("home/home", {
      logosObj,
      books,
      categories,
      noBooks: books.length === 0,
      noBooksMsg: "No hay libros que cumplan con los filtros",
      noCategories: categories.length === 0,
      post: true,
      filterTitle: title,
      checkboxIDsSet,
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};
