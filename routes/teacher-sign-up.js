module.exports = function (router, passport) {
    /* GET signup page. */
    router.get('/teacher-sign-up', function (req, res, next) {
        res.render('pages/teacher-sign-up', { title: 'Readem', user: req.user, message: req.flash('signupMessage') });
    });

    // process the signup form
    router.post('/teacher-sign-up', passport.authenticate('teacher-signup', {
        successRedirect: '/index', // redirect to the secure profile section
        failureRedirect: '/teacher-sign-up', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
};