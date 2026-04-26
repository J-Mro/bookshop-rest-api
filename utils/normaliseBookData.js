const books = require("../data/books");
const InvalidKeyError = require("../errors/InvalidKeyError");

exports.normaliseBookData = (book) => {
  const validKeys = ["title", "author", "genre", "available"];
  const normalisedBook = {};
  for (const key in book) {
    if (!validKeys.includes(key))
      throw new InvalidKeyError("Invalid key submitted");
  }
  if (Object.keys(book).length !== 3)
    throw InvalidKeyError(
      "Your request does not match the shape of book data in our dataset",
    );
  if (book.title.replaceAll(" ", "") === "")
    throw new InvalidKeyError("request body must have a book title");
  if (book.author.replaceAll(" ", "") === "")
    throw new InvalidKeyError("request body must have an author");
  if (book.genre.replaceAll(" ", "") === "")
    throw new InvalidKeyError("request body must have a genre");
  normalisedBook.id = books.length + 1;
  normalisedBook.title = book.title;
  normalisedBook.author = book.author;
  normalisedBook.genre = book.genre;
  normalisedBook.available = true;
  return normalisedBook;
};
