var mongoose = require('mongoose');

var messageSchema = mongoose.Schema(
    {
        from: String,
        to: String,
        read: Boolean,
        content: String
    });

module.exports = mongoose.model('Message', messageSchema);
