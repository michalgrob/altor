/**
 * Created by michal on 06/04/2017.
 */
// load the things we need
var mongoose = require('mongoose');
var PassportUtils = require('../config/passport-utils');
var teacher=require('./teacher');
var pupil=require('./pupil');

// define the schema for our user model

var classSchema = new mongoose.Schema({
    schoolName: String,
    grade: String,
    teacher: teacher,
    pupils: [pupil],

    });


module.exports = classSchema;
// create the model for users and expose it to our app

module.exports = mongoose.model('Class', classSchema);
