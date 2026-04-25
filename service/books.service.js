const {
  getBooks: getBooksModel,
  getBookById: getBookByIdModel,
} = require("../model/books.model");
exports.getBooks = () => {
  return getBooksModel();
};

exports.getBookById = (id) => {
  return getBookByIdModel(id);
};
