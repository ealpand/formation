var express = require('express');
var router = express.Router();
var author_controller = require('../controllers/author_controller');
var book_controller = require('../controllers/book_controller');
var bookinstance_controller = require('../controllers/bookinstance_controller');
var genre_controller = require('../controllers/genre_controller');
var catalog_controller = require('../controllers/catalog_controller');

/* GET home page. */
router.get('/', catalog_controller.getHome);

/* BOOKS */
router.get('/books/', book_controller.renderAPI);
router.get('/books/:id', book_controller.getById);
// router.post('/books/:id/create', book_controller.create);
// router.put('/books/:id/update', book_controller.update);
// router.delete('/books/:id/delete', book_controller.delete);

module.exports = router;