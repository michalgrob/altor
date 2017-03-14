// load the things we need
var mongoose = require('mongoose');
var Mixed = mongoose.Schema.Types.Mixed;
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

// create the model for users and expose it to our app
module.exports = mongoose.model('Business', businessSchema);
