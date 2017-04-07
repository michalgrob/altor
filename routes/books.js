/*var books  = require('../models/book');
 module.exports = function (router) {
 /* GET signup page.
 router.get('/booksListPage', function (req, res, next) {
 books.find({},function(err,books) {
 if (err) throw err;
 var books_json = [];
 orders.forEach(function(order) {
 books_json.push({ interest: order.name});
 });

 res.render('pages/booksListPage', { title: 'your Book Options', books: books_json });
 });

 // process the signup form
 })*/
var mongoose = require('mongoose');
var Book = require('../models/book');
var Page=require('../models/page');
var similarity = require("similarity");
module.exports = function (router, passport) {


    router.get('/books/leaf', function(req,res){
        res.render('pages/book', { title: 'Readem', user: req.user, book: {
            "name": "מה אפשר לעשות בעלה?",
            "pages": [
                "אולי אבנה ממנו סירה, ואפליג בשלולית עמוקה",
                "גמד אחד בשם אלדד יצא לטיל ביער עד",
                "החל לצעד לו ולשרק ואז לפתע לא רחוק מתחת עץ מצא עלה גדול ירוק",
                "אלדד אז אמר מעניין מה אפשר לעשות בעלה שנשר"
            ]}});
    });



};

