/**
 * Created by MaorDavidzon on 3/9/2017.
 */
/**
 * Created by MaorDavidzon on 3/6/2017.
 */

//var express = require('express');
//var router = express.Router();

//var passport = require('passport');

//router.use(passport.initialize());
//router.use(passport.session()); // persistent login sessions
//require('../config/passport')(passport); // pass passport for configuration

module.exports = function (router, passport) {

    /* GET signup page. */
    router.get('/login', function (req, res, next) {
        res.render('login', { title: 'Altor', loggedIn: 'Logged in', message: req.flash('loginMessage')});
    });

    // process the signup form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/index', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
};

//module.exports = router;