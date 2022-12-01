const express = require("express");
const authorsController = require("../controllers/authorsController");

const router = express.Router();

router.get("/", authorsController.getAuthors);
router.get("/add", authorsController.getAddAuthor);
router.get("/delete/:id", authorsController.getDeleteAuthor);
router.get("/edit/:id", authorsController.getEditAuthor);

router.post("/add", authorsController.postAddAuthor);
router.post("/edit", authorsController.postEditAuthor);
router.post("/delete", authorsController.postDeleteAuthor);

module.exports = router;
