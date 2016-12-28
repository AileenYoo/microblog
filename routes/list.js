var express = require('express');
var router = express.Router();

/* GET list page. */
router.get('/', function(req, res, next) {
  res.render('list', {title:'list', items:[000, 'aa', 'express','nodejs']});
});

module.exports = router;