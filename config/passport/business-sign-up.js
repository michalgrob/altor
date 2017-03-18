/**
 * Created by dell on 14/03/2017.
 */
var LocalStrategy    = require('passport-local').Strategy;

// load up the user model
var Business       = require('../../models/business');

module.exports = function(passport) {
// =========================================================================
// Business Sign up ============================================================
// =========================================================================
    passport.use('business-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function (req, email, password, done) {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

            // asynchronous
            process.nextTick(function () {
                // TODO: Add input email format validation
                // if the user is not already logged in:
                if (!req.user) {
                    Business.findOne({'email': email}, function (err, business) {
                        // if there are any errors, return the error
                        if (err)
                            return done(err);

                        // check to see if there's already a user with that email
                        if (business) {
                            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                        } else {

                            // create the user
                            var newBusiness = new Business();
                            newBusiness.role = 'business';
                            newBusiness.email = email;
                            newBusiness.password = newBusiness.generateHash(password);
                            newBusiness.joinDate = new Date();

                            newBusiness.save(function (err) {
                                if (err)
                                    return done(err);

                                return done(null, newBusiness);
                            });
                        }

                    });
                    // if the user is logged in but has no local account...
                } else {
                    // user is logged in and already has a local account. Ignore sign-up. (You should log out before trying to create a new account, user!)
                    return done(null, req.user);
                }
            });
        }));
};