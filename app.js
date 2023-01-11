"use strict";

require("dotenv").config();
const express = require("express");
const multer = require("multer");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const csrf = require("csurf");
const csrfProtection = csrf();
const { engine } = require("express-handlebars");
const { databaseObj, imgStorage } = require("./exports/util");
const { Books, Editorials, Authors, Categories, User } = require("./exports/models");
const { locals, redirects } = require("./exports/middlewares");
const { getBook, sendDefaultMail } = require("./exports/helpers");
const {
  authRouter,
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
      json: (obj) => JSON.stringify(obj)
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(multer({ storage: imgStorage }).single("image"));
app.use(session({ secret: "mysecret", resave: true, saveUninitialized: false }));
app.use(flash());
app.use(csrfProtection);
app.use(locals);
app.use(authRouter);
app.use("/books", redirects.isUnauthorized, homeRouter);
app.use("/admin-books", redirects.isUnauthorized, booksRouter);
app.use("/admin-categories", redirects.isUnauthorized, categoriesRouter);
app.use("/admin-authors", redirects.isUnauthorized, authorsRouter);
app.use("/admin-editorials", redirects.isUnauthorized, editorialsRouter);
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
  if (book.authorId !== instance.attributes.authorId)
    sendDefaultMail(book.authorId, book.title);
});

databaseObj
  .sync()
  .then(() => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
