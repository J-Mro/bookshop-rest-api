const books = require("../data/books");

exports.checkBookExists = async (id) => {
  const book = books.filter((book) => book.id === id);
  return book.length === 1;
};
