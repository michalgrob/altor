module.exports = function (router, passport) {
    var User = require('../models/user');

    router.get('/del-user', function (req, res)
    {
        var email = req.query.email; // $_GET["id"]
        User.findOne({'email': email}, function (err, user)
        {
            if(err) {
                res.redirect('/error');
            }

            if (user.email == email)
            {
                user.remove();
            }
        });
        res.redirect('/admin');
    });

    router.get('/admin', isAdmin ,function (req, res) {
        User.find({}, function(err,users) {
            res.render('pages/admin', {title: 'Altor', user: req.user, eUser:users});
         });});

    // router.get('/getAllUsers', isAdmin ,function (req, res, next) {
    //     User.find({}, function(err,users){
    //         res.send(users[4].local.email);
    //     });
    // });

    function isAdmin(req, res, next) {
        // getAllUsers();

        if(req.user)
        {
            if (req.user.email==="admin")
                next();
            return;
        }
        res.redirect('/');
    }
};
