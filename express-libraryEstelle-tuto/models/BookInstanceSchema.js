var Schema = mongoose.Schema;

var BookInstanceModelSchema = new Schema({
    book : { type: Schema.Types.ObjectId, ref: 'BookModel'},
    imprint: String,
    status: int,
    dueBack: Date,
});
BookInstanceModelSchema.virtual('url').get(function () {
  return '/catalog/bookInstance/'+ this._id;
});

module.exports = mongoose.model('BookInstanceModel', BookInstanceModelSchema);
