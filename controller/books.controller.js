const { getBooks: getBooksService } = require("../service/books.service");

exports.getBooks = async (req, res, next) => {
  try {
    const books = await getBooksService();
    res.status(200).send(books);
  } catch (err) {
    next(err);
  }
};
