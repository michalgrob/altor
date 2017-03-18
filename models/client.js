var mongoose = require('mongoose');
var User = require('./user');

// Define client as a discriminator of user
var clientSchema = User.discriminator('client', new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String
}));

// create the model for users and expose it to our app
module.exports = clientSchema;
