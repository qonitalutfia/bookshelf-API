const allBooks = require('../allBooks');

const detailBooks = (req, h) => {
  const { bookId } = req.params;

  const data = allBooks.filter((book) => book.id === bookId)[0];
  if (data !== undefined) {
    return {
      status: 'success',
      data: {
        book: data,
      },
    };
  }
  const res = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  res.code(404);
  return res;
};

module.exports = detailBooks;
