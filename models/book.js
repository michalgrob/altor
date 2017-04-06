/**
 * Created by michal on 06/04/2017.
 */
// load the things we need
var mongoose = require('mongoose');
//var page = require('./page');
// define the schema for our user model

var bookSchema = new mongoose.Schema({
name: String,
pages : [String]
});
//
// bookSchema.pre('save', function(next) {
//
//     var length=this.pages.length;
//     for(var i=0;i<length;i++){
//         var currPage=this.pages[i].save(function(err) {
//             if (err) throw err;
//             //console.log('inter saved successfully!');
//         });
//     }
// });

// create the model for users and expose it to our app
module.exports =mongoose.model('book', bookSchema);




/*var Gift = mongoose.model('Gift', giftSchema);
 module.exports = Gift;*/