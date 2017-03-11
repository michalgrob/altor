//var express = require('express');
//var router = express.Router();
module.exports = function (router) {
    /* GET users listing. */
    router.get('/users', function (req, res, next) {
        res.send('req: ' + req + ' res: ' + res + ' next: ' + next);
    });
};
//module.exports = router;
