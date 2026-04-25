const {
  getBooks: getBooksService,
  getBookById: getBookByIdService,
} = require("../service/books.service");

exports.getBooks = async (req, res, next) => {
  try {
    const books = await getBooksService();
    res.status(200).send(books);
  } catch (err) {
    next(err);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await getBookByIdService(id);
    res.status(200).send(book);
  } catch (err) {
    next(err);
  }
};
