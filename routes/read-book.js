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
var Page=require('../models/page');
var similarity = require("similarity");

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
            res.render('pages/booksListPage', { title: 'Readem', user: req.user,  book: {
                "name": "מה אפשר לעשות בעלה?",
                "pages": [

                    "גמד אחד בשם אלדד יצא לטיל ביער עד",
                ]}});//,{orders: orders_json}
    });



    router.get('/getResult', function (req, res)
    {
        var expRes = req.query.expRes; // $_GET["id"]
        Page.findOne({}, function (err, page)
        {
            if(similarity(expRes,page.pageText) > 0.1){
                console.log('great');
                res.render('pages/booksListPage',{title:'greate', user:req.user, book:{
                    "name": "",
                    "pages":["אתה תותח"]
                }})
            }else{
                console.log('bad');
            }

        });

    });

};
