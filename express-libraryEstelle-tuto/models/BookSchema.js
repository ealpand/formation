var Schema = mongoose.Schema;

var BookModelSchema = new Schema({
    title:  {
        type: String,
        required: true,
    },
    author: { type: Schema.Types.ObjectId, ref: 'AuthorModel' },
    summary: { type :String, required:true, max: 1000},
    ISBN: { type :String, required:true},
    genders: [{ type: Schema.Types.ObjectId, ref: 'GenderModel' }]
});

BookModelSchema.virtual('url').get(function () {
  return '/catalog/book/'+ this._id;
});

module.exports = mongoose.model('BookModel', BookModelSchema);