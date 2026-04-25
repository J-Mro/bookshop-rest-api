const express = require("express");
const {
  getBooks: getBooksController,
} = require("../controller/books.controller");
const router = express.Router();

router.route("/").get(getBooksController);
module.exports = router;
