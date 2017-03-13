module.exports = function (router) {
    /* GET users listing. */
    router.get('/users', function (req, res, next) {
        res.send('req: ' + req + ' res: ' + res + ' next: ' + next);
    });
};
