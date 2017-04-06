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
//var Page=require('../models/page');

module.exports = function (router, passport) {

    /* GET signup page. */
  //  router.get('/login', function (req, res, next) {
   //     res.render('pages/login', { title: 'Altor', user: req.user, message: req.flash('loginMessage')});
  //  });

    router.get('/booksListPage', function(req,res){

      /*  Book.find({},function(err,orders) {
            if (err) throw err;
            var orders_json = [];
            orders.forEach(function(order) {
                orders_json.push({  pages:orfe});
            });


        });*/
            res.render('pages/booksListPage', { title: 'Readem', user: req.user});//,{orders: orders_json}
    });

};
