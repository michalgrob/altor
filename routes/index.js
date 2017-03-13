module.exports = function (router, passport) {
    /* GET home page. */
    router.get('/index', function (req, res, next) {
        res.redirect('/');
    });

    router.get('/', function (req, res, next) {
        console.log("Logged in user: " + req.user);
        res.render('index', { title: 'Altor', user: req.user });
    });
};