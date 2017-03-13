module.exports = function (router, passport) {
    var User = require('../models/user');

    router.get('/admin', isAdmin ,function (req, res, next) {
        res.render('admin', {title: 'Altor', user: req.user, eUsers: User});
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
