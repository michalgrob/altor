// load the things we need
var mongoose = require('mongoose');
var Mixed = mongoose.Schema.Types.Mixed;
var passwordUtils = require('../config/password-utils');

// define the schema for our user model
var businessSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    location: {
        country: String,
        city: String,
        street: String,
        number: Number
    },
    joinDate: Date,
    photos: [Mixed],
    category: String,
    active: Boolean
});

businessSchema.methods.generateHash = passwordUtils.generateHash;

// checking if password is valid
businessSchema.methods.validPassword = passwordUtils.validPassword;

// create the model for users and expose it to our app
module.exports = mongoose.model('Business', businessSchema);
