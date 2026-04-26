const {
  getBooks: getBooksModel,
  getBookById: getBookByIdModel,
  postBook: postBookModel,
} = require("../model/books.model");
const { checkBookExists } = require("../utils/checkBookExists");
const NotFoundError = require("../errors/NotFoundError");
exports.getBooks = () => {
  return getBooksModel();
};

exports.getBookById = async (id) => {
  const bookExists = await checkBookExists(id);
  if (!bookExists) {
    throw new NotFoundError("The book you're looking for was not found");
  } else {
    return getBookByIdModel(id);
  }
};

exports.postBook = async (book) => {
  const response = await postBookModel(book);
  return response;
};
