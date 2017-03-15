module.exports = function (router, passport) {
    var User = require('../models/user');

    router.get('/admin', isAdmin ,function (req, res, next) {
        res.render('pages/admin', {title: 'Altor', user: req.user});
    });
    router.get('/getAllUsers', isAdmin ,function (req, res, next) {
        User.find({}, function(err,users){
            res.send("fffff");
            //users[0].local.email
        });
    });
    function isAdmin(req, res, next) {
        // getAllUsers();

        if(req.user)
        {
            if (req.user.local.email==="admin")
                next();
        }
        res.redirect('/');
    }
    //
    // function getAllUsers()
    // {
    //     var result;
    //
    //     var query = User.find({}, function(err, users){
    //         //users.forEach(function(user){console.log(user.local.email)});
    //         result=users;
    //     });
    //     result.forEach(function(user){console.log(user.local.email)});
    // }
};
