var async = require('async');

var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

function getAllData(){
    return Book.find({}, 'title author').populate('author');
}

exports.renderAPI = function(req, res, next){
    getAllData().exec(function (err, list_books) {
    if (err) { return next(err); }
        //Successful, so render
        res.send(list_books);
    });
}

exports.renderHtml = function(req, res, next){
    getAllData().exec(function (err, list_books) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('books', {books_list: list_books });
    });
}

exports.getById = function(req, res, next){
    async.parallel({
        bookdetail: function(callback) {
            Book.findById({_id: req.params.id})
            .populate('author')
            .populate('genre')
            .exec(callback);
        },
        bookinstances: function(callback) {
            BookInstance.find({_book: Book})
            .exec(callback);
        }
    }, function(err, results ) {
        res.render('book_detail', {title: 'Livre : ', book: results.bookdetail, book_instances: results.bookinstances});
    });

} 
exports.create = function(req, res, next){
    res.send(`Livre id : ${req.params.id}` );
}
exports.update = function(req, res, next){
    res.send(`Livre id : ${req.params.id}` );
} 
exports.delete = function(req, res, next){
    res.send(`Livre id : ${req.params.id}` );
} 
