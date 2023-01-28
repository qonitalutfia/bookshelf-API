const Hapi = require('@hapi/hapi');
const deleteBooks = require('./handler/deleteBooks');
const detailBooks = require('./handler/detailBooks');
const addBooks = require('./handler/addBooks');
const getAllBooks = require('./handler/getAllBooks');
const editBooks = require('./handler/editBooks');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route({
    method: 'POST',
    path: '/books',
    handler: addBooks,
  });

  server.route({
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  });

  server.route({
    method: 'GET',
    path: '/books/{bookId}',
    handler: detailBooks,
  });

  server.route({
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooks,
  });

  server.route({
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooks,
  });

  await server.start();
  // eslint-disable-next-line no-console
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
  process.exit(1);
});

init();
