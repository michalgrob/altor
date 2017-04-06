/**
 * Created by michal on 06/04/2017.
 */
var mongoose = require('mongoose');
var User = require('./user');
//var readSession=require('./readSession');


// Define client as a discriminator of user
var pupilSchema = User.discriminator('pupil', new mongoose.Schema({
    grade: Number,
  //  readsSessions: [readSession]
}));

// create the model for users and expose it to our app
//module.exports = pupilSchema;
module.exports = pupilSchema;

