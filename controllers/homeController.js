const { Editorials, Categories, Authors, Books } = require("../exports/models");
const { internalErrorRes } = require("../exports/helpers");

exports.getHome = async (req, res, next) => {
  try {
    const categoriesRes = await Categories.findAll({ where: { user_id: req.session.user.id } });
    const bookRes = await Books.findAll({
      include: [
        { model: Editorials },
        { model: Categories },
        { model: Authors },
      ],
      where: { user_id: req.session.user.id }
    });

    const categories = categoriesRes.map((res) => res.dataValues);
    const books = bookRes.map((res) => res.dataValues);

    res.render("home/home", {
      books,
      categories,
      noBooksMsg: "No hay libros para mostrar",
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
      where: { id, user_id: req.session.user.id }
    });

    if (!bookRes) return res.redirect("/");

    const book = bookRes.dataValues;

    res.render("home/book-details", { book });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};

exports.postHome = async (req, res, next) => {
  try {
    const { items, title } = req.body;
    const checkboxIDs = items ? items.split(",") : null;
    const categoriesRes = await Categories.findAll({ where: { user_id: req.session.user.id } });
    const categories = categoriesRes.map((res) => res.dataValues);
    let filteredBooks;

    if (checkboxIDs && title) {
      filteredBooks = await Books.findAll({
        where: {
          categoryId: checkboxIDs,
          title: title.toLowerCase(),
          user_id: req.session.user.id
        },
        include: [
          { model: Editorials },
          { model: Categories },
          { model: Authors }
        ]
      });
    }

    else if (checkboxIDs) {
      filteredBooks = await Books.findAll({
        where: { categoryId: checkboxIDs, user_id: req.session.user.id },
        include: [
          { model: Editorials },
          { model: Categories },
          { model: Authors }
        ]
      });
    }

    else if (title) {
      filteredBooks = await Books.findAll({
        where: { title: title.toLowerCase(), user_id: req.session.user.id },
        include: [
          { model: Editorials },
          { model: Categories },
          { model: Authors }
        ]
      });
    }

    else return res.redirect("/");

    const books = filteredBooks.map((res) => res.dataValues);

    const checkboxIDsSet = new Set();
    if (checkboxIDs) checkboxIDs.forEach((item) => checkboxIDsSet.add(item));

    res.render("home/home", {
      books,
      categories,
      noBooksMsg: "No hay libros que cumplan con los filtros",
      post: true,
      filterTitle: title,
      checkboxIDsSet
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
};
