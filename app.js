const express = require("express");
const booksRouter = require("./routes/books.router");
const NotFoundError = require("./errors/NotFoundError");
const app = express();

app.use(express.json());
app.use("/api/books", booksRouter);
app.all("/*path", (req, res, next) => {
  res
    .status(404)
    .send({ msg: "The path you're looking for does not exist! </3" });
});

app.use((err, req, res, next) => {
  if (err instanceof NotFoundError) {
    res.status(404).send({ msg: "404: " + err.message });
  } else {
    next(err);
  }
});

module.exports = app;
