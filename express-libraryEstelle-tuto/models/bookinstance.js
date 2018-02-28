var mongoose = require("mongoose");

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

module.exports = mongoose.model('BookInstanceModel', BookInstanceModelSchema);
