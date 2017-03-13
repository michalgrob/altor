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
    router.get('/clientSignUp', function (req, res, next) {
        res.render('clientSignUp', { title: 'Altor', user: req.user, message: req.flash('signupMessage') });
    });

    // process the signup form
    router.post('/clientSignUp', passport.authenticate('local-signup', {
        successRedirect: '/index', // redirect to the secure profile section
        failureRedirect: '/clientSignUp', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
}
//module.exports = router;