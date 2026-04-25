const express = require("express");
const booksRouter = require("./routes/books.router");
const app = express();

app.use(express.json());
app.use("/api/books", booksRouter);
app.all("/*path", (req, res, next) => {
  res
    .status(404)
    .send({ msg: "The path you're looking for does not exist! </3" });
});

module.exports = app;
