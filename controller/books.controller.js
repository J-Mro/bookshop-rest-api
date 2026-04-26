const books = require("../data/books");
const { normaliseBookData } = require("../utils/normaliseBookData");
const NotFoundError = require("../errors/NotFoundError");
const {
  getBooks: getBooksService,
  getBookById: getBookByIdService,
  postBook: postBookService,
  patchBook: patchBookService,
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
    const normBookId = +id;
    const book = await getBookByIdService(normBookId);
    res.status(200).send(book);
  } catch (err) {
    next(err);
  }
};

exports.postBook = async (req, res, next) => {
  try {
    const book = req.body;
    const normalisedBook = normaliseBookData(book);
    const response = await postBookService(normalisedBook);
    res.status(201).send(response);
  } catch (err) {
    next(err);
  }
};

exports.patchBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { available } = req.body;
    const updatedBook = await patchBookService(id, available);
    res.status(201).send(updatedBook);
  } catch (err) {
    next(err);
  }
};
