const express = require("express");
const {
  getBooks: getBooksController,
  getBookById: getBookByIdController,
} = require("../controller/books.controller");
const router = express.Router();

router.route("/").get(getBooksController);
router.route("/:id").get(getBookByIdController);
module.exports = router;
