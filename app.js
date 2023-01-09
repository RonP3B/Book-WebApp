"use strict";

require("dotenv").config();
const express = require("express");
const multer = require("multer");
const path = require("path");
const { engine } = require("express-handlebars");
const { databaseObj, imgStorage } = require("./exports/util");
const { Books, Editorials, Authors, Categories } = require("./exports/models");
const { getBook, sendDefaultMail } = require("./exports/helpers");
const {
  homeRouter,
  notFoundRouter,
  booksRouter,
  categoriesRouter,
  editorialsRouter,
  authorsRouter,
} = require("./exports/routes");

const app = express();
const port = process.env.PORT || 5000;

app.engine(
  "hbs",
  engine({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs",
    helpers: {
      equal: (a, b) => a === b,
      contains: (set, item) => set.has(item),
      getYear: (date) => date.toString().split(" ")[3],
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(multer({ storage: imgStorage }).single("image"));
app.use(homeRouter);
app.use("/admin-books", booksRouter);
app.use("/admin-categories", categoriesRouter);
app.use("/admin-authors", authorsRouter);
app.use("/admin-editorials", editorialsRouter);
app.use(notFoundRouter);

Categories.hasMany(Books, { onDelete: "CASCADE" });
Authors.hasMany(Books, { onDelete: "CASCADE" });
Editorials.hasMany(Books, { onDelete: "CASCADE" });

Books.belongsTo(Categories, { constraint: true });
Books.belongsTo(Authors, { constraint: true });
Books.belongsTo(Editorials, { constraint: true });

Books.afterCreate(async (book, options) => {
  sendDefaultMail(book.authorId, book.title);
});

Books.beforeBulkUpdate(async (instance, options) => {
  const book = await getBook(instance.where.id);

  if (book.authorId !== instance.attributes.authorId) {
    sendDefaultMail(book.authorId, book.title);
  }
});

databaseObj
  .sync()
  .then(() => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
