var mongoose = require('mongoose');
var user = require('./user');

// Define client as a discriminator of user
var businessSchema = user.discriminator('business', mongoose.Schema({
    phone: String,
    location: {
        country: String,
        city: String,
        street: String,
        number: Number
    },
    joinDate: Date,
    category: String,
    active: Boolean
}));

// create the model for users and expose it to our app
module.exports = businessSchema;
