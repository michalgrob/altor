/**
 * Created by dell on 14/03/2017.
 */
var LocalStrategy    = require('passport-local').Strategy;

// load up the user model
var Client       = require('../../models/client');

module.exports = function(passport) {

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
    passport.use('client-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function(req, email, password, done) {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

            // asynchronous
            process.nextTick(function() {
                // TODO: Validate email
                if (!req.user) {
                    Client.findOne({ 'email' :  email }, function(err, user) {
                        // if there are any errors, return the error
                        if (err)
                            return done(err);

                        // check to see if theres already a user with that email
                        if (user) {
                            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                        } else {

                            // create the user
                            var newClient = new Client();

                            newClient.email    = email;
                            newClient.password = newClient.generateHash(password);
                            newClient.phone = "053-526236";
                            newClient.joinDate = new Date();

                            newClient.save(function(err) {
                                if (err)
                                    return done(err);

                                return done(null, newClient);
                            });
                        }
                    });
                    // if the user is logged in but has no local account...
                } else {
                    // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
                    return done(null, req.user);
                }
            });
        }));
};
