const express = require("express");
const {
  getBooks: getBooksController,
  getBookById: getBookByIdController,
  postBook: postBookController,
  patchBook: patchBookController,
} = require("../controller/books.controller");
const router = express.Router();

router.route("/").get(getBooksController).post(postBookController);
router.route("/:id").get(getBookByIdController).patch(patchBookController);
module.exports = router;
