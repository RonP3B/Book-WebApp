const authRouter = require("../routes/auth");
const homeRouter = require("../routes/home");
const booksRouter = require("../routes/books");
const categoriesRouter = require("../routes/categories");
const authorsRouter = require("../routes/authors");
const editorialsRouter = require("../routes/editorials");
const notFoundRouter = require("../routes/notFound");

module.exports = {
  authRouter,
  homeRouter,
  booksRouter,
  notFoundRouter,
  categoriesRouter,
  editorialsRouter,
  authorsRouter
};
