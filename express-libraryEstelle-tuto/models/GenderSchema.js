var Schema = mongoose.Schema;

var GenderModelSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100
      }
});

GenderModelSchema.virtual('url').get(function () {
  return '/catalog/genre/'+ this._id;
});

module.exports = mongoose.model('GenderModel', GenderModelSchema);
