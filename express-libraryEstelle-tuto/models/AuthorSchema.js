
var Schema = mongoose.Schema;
var moment = require('moment');
var dateUtils = require('../utils/dateUtils');

var AuthorSchema = new Schema({
    firstName: { type :String, required:true},
    lastName: { type :String, required:true},
    dateOfBirth: { type :Date},
    dateOfDeath: { type :Date},

});

AuthorSchema.virtual('url').get(function () {
  return '/catalog/author/'+ this._id;
});

AuthorSchema.virtual('name').get(function () {
  return '${this.firstName} ${this.lastName}' ;
});

AuthorSchema.virtual('lifespan').get(function () {
  return dateUtils.lifespan(this.dateOfBirth, this.dateOfDeath) ;
});

module.exports = mongoose.model('AuthorModel', AuthorSchema);