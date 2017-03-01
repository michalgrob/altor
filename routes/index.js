var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('maor', { title: 'Express', sender: 'MAor' });
});

module.exports = router;
