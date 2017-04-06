/**
 * Created by michal on 06/04/2017.
 */
// load the things we need
var mongoose = require('mongoose');
var PassportUtils = require('../config/passport-utils');

// define the schema for our user model

var bookSchema = new mongoose.Schema({
name: String

});



// create the model for users and expose it to our app
module.exports = bookSchema;
module.exports = mongoose.model('Book', bookSchema);
