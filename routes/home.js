const express = require("express");
const homeController = require("../controllers/homeController");

const router = express.Router();

router.get("", homeController.getHome);
router.get("/details/:id", homeController.getBookDetails);
router.post("/filter", homeController.postHome);

module.exports = router;
