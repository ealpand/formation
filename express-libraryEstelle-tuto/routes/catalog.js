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
router.get('/books/', book_controller.renderHtml);
router.get('/books/:id', book_controller.getById);
router.post('/books/:id/create', book_controller.create);
router.put('/books/:id/update', book_controller.update);
router.delete('/books/:id/delete', book_controller.delete);

/* AUTHORS */
router.get('/authors/', author_controller.renderHtml);
router.get('/author/:id', author_controller.getById);
// router.post('/authors/:id/create', author_controller.create);
// router.put('/authors/:id/update', author_controller.update);
// router.delete('/authors/:id/delete', author_controller.delete);

// /* BOOKINSTANCES */
// router.get('/bookinstances/', bookinstance_controller.getAll);
// router.get('/bookinstances/:id', bookinstance_controller.getById);
// router.post('/bookinstances/:id/create', bookinstance_controller.create);
// router.put('/bookinstances/:id/update', bookinstance_controller.update);
// router.delete('/bookinstances/:id/delete', bookinstance_controller.delete);

// /* GENRE */
// router.get('/genres/', genre_controller.getAll);
// router.get('/genres/:id', genre_controller.getById);
// router.post('/genres/:id/create', genre_controller.create);
// router.put('/genres/:id/update', genre_controller.update);
// router.delete('/genres/:id/delete', genre_controller.delete);

module.exports = router;
