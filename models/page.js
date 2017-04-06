/**
 * Created by michal on 06/04/2017.
 */
// load the things we need
var mongoose = require('mongoose');

var fs = require('fs');

// define the schema for our user model

var pageSchema = new mongoose.Schema({
    pageText: String,
   // img: { data: Buffer, contentType: String }
});



// create the model for users and expose it to our app



var Page = mongoose.model('page', pageSchema);
module.exports = Page;


