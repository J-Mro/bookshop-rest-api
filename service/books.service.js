const { getBooks: getBooksModel } = require("../model/books.model");
exports.getBooks = () => {
  return getBooksModel();
};
