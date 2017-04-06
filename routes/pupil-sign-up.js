module.exports = function (router, passport) {
    /* GET signup page. */
    router.get('/pupil-sign-up', function (req, res, next) {
        res.render('pages/pupil-sign-up', { title: 'Altor', user: req.user, message: req.flash('signupMessage') });
    });

    // process the signup form
    router.post('/pupil-sign-up', passport.authenticate('pupil-signup', {
        successRedirect: '/index', // redirect to the secure profile section
        failureRedirect: '/pupil-sign-up', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

};