// load all the things we need
var LocalStrategy = require('passport-local').Strategy;
var PassportUtils = require('./passport-utils');

// load up the users model
var User = require('../models/user');
var pupil =require('../models/pupil');
var teacher = require ('../models/teacher');
module.exports = function (passport)
{
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // Update with business and client sign ups

    // used to serialize the user for the session
    passport.serializeUser(function (user, done)
    {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done)
    {
        User.findById(id, function (err, user)
        {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL AUTHENTICATION =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function (req, email, password, done)
        {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

            // asynchronous
            process.nextTick(function ()
            {
                User.findOne({'email': email}, function (err, user)
                {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // if no user is found, return the message
                    if (!user)
                        return done(null, false, req.flash('loginMessage', 'No user found.'));

                    if (!user.validPassword(password))
                        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

                    // all is well, return user
                    else
                        return done(null, user);
                });
            });

        }));

    // =========================================================================
    // LOCAL SIGNUPS =============================================================
    // =========================================================================
    passport.use('teacher-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function (req, email, password, done)
        {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

            // asynchronous
            process.nextTick(function ()
            {

                // if the user is not already logged in:
                if (!req.user)
                {
                    User.findOne({'email': email}, function (err, business)
                    {
                        // if there are any errors, return the error
                        if (err)
                            return done(err);

                        // check to see if there's already a user with that email
                        if (business)
                        {
                            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                        } else
                        {

                            // create the user
                            var newteacher = new teacher();
                            newteacher.role = 'teacher';
                            newteacher.email = email;
                            newteacher.password = newteacher.generateHash(password);
                            newteacher.joinDate = new Date();

                            newteacher.save(function (err)
                            {
                                if (err)
                                    return done(err);

                                return done(null, newteacher);
                            });
                        }

                    });
                    // if the user is logged in but has no local account...
                } else
                {
                    // user is logged in and already has a local account. Ignore sign-up. (You should log out before trying to create a new account, user!)
                    return done(null, req.user);
                }
            });
        }));

    passport.use('pupil-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function (req, email, password, done)
        {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

            // asynchronous
            process.nextTick(function ()
            {
                if(PassportUtils.ValidateEmail(email) == false){
                    return done(null, false, req.flash('signupMessage', 'the email is not valid.'));
                }
                var error = {errorDes : ''};
                if(!PassportUtils.validatePassword(password,error)){
                    return done(null, false, req.flash('signupMessage', error.errorDes));
                }
                if (!req.user)
                {
                    User.findOne({'email': email}, function (err, user)
                    {
                        // if there are any errors, return the error
                        if (err)
                            return done(err);

                        // check to see if theres already a user with that email
                        if (user)
                        {
                            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                        } else
                        {

                            // create the user
                            var newpupil = new pupil();

                            newpupil.email = email;
                            newpupil.role = 'pupil';
                            newpupil.password = newpupil.generateHash(password);
                            newpupil.phone = req.body.phoneNumber;
                            newpupil.lastName = req.body.lastName;
                            newpupil.firstName = req.body.firstName;
                            newpupil.joinDate = new Date();

                            newpupil.save(function (err)
                            {
                                if (err)
                                    return done(err);

                                return done(null, newpupil);
                            });
                        }
                    });
                    // if the user is logged in but has no local account...
                } else
                {
                    // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
                    return done(null, req.user);
                }
            });
        }));
};

