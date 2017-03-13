/**
 * Created by eylon on 13/03/2017.
 */
module.exports = function (router)
{
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
}