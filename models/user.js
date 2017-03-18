// load the things we need
var mongoose = require('mongoose');
var PassportUtils = require('../config/passport-utils');

// define the schema for our user model
var userSchema = new mongoose.Schema({
    email: String,
    password: String
},  // Defining the user's role as the discriminator
    { discriminatorKey: 'role' });

// generating a hash
userSchema.methods.generateHash = PassportUtils.generateHash;

// checking if password is valid
userSchema.methods.validPassword = PassportUtils.validPassword;

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
