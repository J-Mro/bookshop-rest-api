const books = require("../data/books");

exports.getBooks = () => {
  return books;
};

exports.getBookById = (id) => {
  const bookById = books.filter((book) => book.id === id);
  return bookById[0];
};
