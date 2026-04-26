const express = require("express");
const {
  getBooks: getBooksController,
  getBookById: getBookByIdController,
  postBook: postBookController,
} = require("../controller/books.controller");
const router = express.Router();

router.route("/").get(getBooksController).post(postBookController);
router.route("/:id").get(getBookByIdController);
module.exports = router;
