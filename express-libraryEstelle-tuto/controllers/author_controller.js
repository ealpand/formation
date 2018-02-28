var async = require('async');

var Author = require('../models/author');

function getAllData(){
    return Author.find({});
}

exports.renderAPI = function(req, res, next){
    getAllData().exec(function (err, list_authors) {
    if (err) { return next(err); }
        //Successful, so render
        res.send(list_authors);
    });
}

exports.renderHtml = function(req, res, next){
    getAllData().exec(function (err, list_authors) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('authors', {authors_list: list_authors });
    });
}

exports.getById = function(req, res, next){
    Author.findById({_id: req.params.id})
    .exec(function(err, results ) {
        res.render('author_detail', {author: results});
    });
} 