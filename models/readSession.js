/**
 * Created by michal on 06/04/2017.
 */
// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var book= require('./book');


var readSessionSchema = new Schema({
    book: book,
   // progressPrecent: Number,
    wrongWords: [String],
    created_at: Date,
    updated_at: Date
});

readSessionSchema.pre('save', function(next) {
    var self = this;
    var currentDate = new Date();

    // change the updated_at field to current date
    self.updated_at = currentDate;
    // if created_at doesn't exist, add to that field
    if (!self.created_at)
        self.created_at = currentDate;

});


module.exports = readSessionSchema;
// create the model for users and expose it to our app
module.exports = mongoose.model('ReadSession', readSessionSchema);

