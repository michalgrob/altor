//var express = require('express');
//var router = express.Router();


module.exports = function (router, passport) {
    /* GET home page. */
    router.get('/index', function (req, res, next) {
        console.log("Logged in user: " + req.user);
        res.render('index', { title: 'Altor', user: req.user });
    });
};

//module.exports = router;

// route middleware to ensure user is logged in
//function isLoggedIn(req, res, next) {
//    if (req.isAuthenticated())
//        return next();

//    res.redirect('/');
//}


