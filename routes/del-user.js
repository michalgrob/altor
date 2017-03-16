module.exports = function (router, passport) {
    var User = require('../models/user');

    router.get('/del-user' ,function (req, res) {
        var email = req.query.email; // $_GET["id"]
        User.find({}, function(err,users) {
            users.forEach(function(user){
                if(user.local.email == email){
                    user.remove();
                }
            })
            res.render('pages/admin', {title: 'Altor', user: req.user, eUser:users});
         });});


};
