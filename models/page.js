/**
 * Created by michal on 06/04/2017.
 */
// load the things we need
var mongoose = require('mongoose');
var PassportUtils = require('../config/passport-utils');
var fs = require('fs');

// define the schema for our user model

var pageSchema = new mongoose.Schema({
    pageText: String,
    img: { data: Buffer, contentType: String }
});



// create the model for users and expose it to our app
module.exports = pageSchema;
module.exports = mongoose.model('Book', pageSchema);

var Book = mongoose.model('Book', pageSchema);

