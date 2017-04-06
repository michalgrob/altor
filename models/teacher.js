/**
 * Created by michal on 06/04/2017.
 */
var mongoose = require('mongoose');
var User = require('./user');
//var Class =require('./class');

// Define client as a discriminator of user
var teacherSchema = User.discriminator('teacher', new mongoose.Schema({
//class: Class,

}));

// create the model for users and expose it to our app
module.exports = teacherSchema;
