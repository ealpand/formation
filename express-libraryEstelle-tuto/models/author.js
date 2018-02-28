var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var moment = require('moment');
var dateUtils = require('../utils/dateUtils');

var AuthorSchema = new Schema({
    first_name: { type :String, required:true},
    family_name: { type :String, required:true},
    date_of_birth: { type :Date},
    date_of_death: { type :Date},

});

AuthorSchema.virtual('url').get(function () {
  return '/catalog/author/'+ this._id;
});

AuthorSchema.virtual('name').get(function () {
  return `${this.first_name} ${this.family_name}` ;
});

AuthorSchema.virtual('lifespan').get(function () {
  return dateUtils.lifespan(this.date_of_birth, this.date_of_death) ;
});

AuthorSchema.virtual('date_of_birth_formatted').get(function () {
  return moment(this.date_of_birth).format('MMMM Do, YYYY');
});

AuthorSchema.virtual('date_of_death_formatted').get(function () {
  return moment(this.date_of_death).format('MMMM Do, YYYY');
});

module.exports = mongoose.model('AuthorModel', AuthorSchema);