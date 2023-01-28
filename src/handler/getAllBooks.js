const allBooks = require('../allBooks');

const getAllBooks = (req, h) => {
  const { name, reading, finished } = req.query;
  if (name) {
    const data = allBooks.filter((book) => book.name.toLowerCase() === name.toLowerCase());
    const res = h.response({
      status: 'success',
      data: {
        books: data.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }

  if (reading) {
    const data = allBooks.filter((book) => Number(book.reading) === reading);
    const res = h.response({
      status: 'success',
      data: {
        books: data.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }

  if (finished) {
    const data = allBooks.filter((book) => Number(book.finished) === finished);
    const res = h.response({
      status: 'success',
      data: {
        books: data.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }

  if (!name && !reading && !finished) {
    const res = h.response({
      status: 'success',
      data: {
        books: allBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    res.code(200);
    return res;
  }
};

module.exports = getAllBooks;
