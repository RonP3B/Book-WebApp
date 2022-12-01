const express = require("express");
const editorialsController = require("../controllers/editorialsController");

const router = express.Router();

router.get("/", editorialsController.getEditorials);
router.get("/add", editorialsController.getAddEditorial);
router.get("/edit/:id", editorialsController.getEditEditorial);
router.get("/delete/:id", editorialsController.getDeleteEditorial);
router.post("/add", editorialsController.postAddEditorial);
router.post("/edit", editorialsController.postEditEditorial);
router.post("/delete", editorialsController.postDeleteEditorial);

module.exports = router;
