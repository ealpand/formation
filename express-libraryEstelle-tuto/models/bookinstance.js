var mongoose = require("mongoose");
var moment = require("moment");

var Schema = mongoose.Schema;

var BookInstanceModelSchema = new Schema({
    book : { type: Schema.Types.ObjectId, ref: 'BookModel'},
    imprint: String,
    status: {type : String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    dueBack: Date,
});
BookInstanceModelSchema.virtual('url').get(function () {
  return '/catalog/bookInstance/'+ this._id;
});
BookInstanceModelSchema.virtual('due_back_formatted').get(function () {
  return moment(this.dueBack).format('MMMM Do, YYYY');
});

module.exports = mongoose.model('BookInstanceModel', BookInstanceModelSchema);
