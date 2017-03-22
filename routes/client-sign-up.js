module.exports = function (router, passport) {
    /* GET signup page. */
    router.get('/client-sign-up', function (req, res, next) {
        res.render('pages/client-sign-up', { title: 'Altor', user: req.user, message: req.flash('signupMessage') });
    });

    // process the signup form
    router.post('/client-sign-up', passport.authenticate('client-signup', {
        successRedirect: '/index', // redirect to the secure profile section
        failureRedirect: '/client-sign-up', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

};