const express = require("express");
const categoriesController = require("../controllers/categoriesController");

const router = express.Router();

router.get("/", categoriesController.getCategories);
router.get("/add", categoriesController.getAddCategory);
router.get("/edit/:id", categoriesController.getEditCategory);
router.get("/delete/:id", categoriesController.getDeleteCategory);

router.post("/add", categoriesController.postAddCategory);
router.post("/edit", categoriesController.postEditCategory);
router.post("/delete", categoriesController.postDeleteCategory);

module.exports = router;
