module.exports = function (router, passport) {
    /* GET signup page. */
    router.get('/clientSignUp', function (req, res, next) {
        res.render('pages/clientSignUp', { title: 'Altor', user: req.user, message: req.flash('signupMessage') });
    });

    // process the signup form
    router.post('/clientSignUp', passport.authenticate('local-signup', {
        successRedirect: '/index', // redirect to the secure profile section
        failureRedirect: '/clientSignUp', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
}