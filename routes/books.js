const express = require("express");
const booksController = require("../controllers/booksController");

const router = express.Router();

router.get("/", booksController.getBooks);
router.get("/add", booksController.getAddBook);
router.get("/edit/:id", booksController.getEditBook);
router.get("/delete/:id", booksController.getDeleteBook);

router.post("/add", booksController.postAddBook);
router.post("/edit", booksController.postEditBook);
router.post("/delete", booksController.postDeleteBook);

module.exports = router;
