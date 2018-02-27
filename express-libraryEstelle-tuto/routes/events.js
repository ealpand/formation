var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Events');
});

/* GET users listing. */
router.get('/new/', function(req, res, next) {
  res.send('We could create a new event');
});

module.exports = router;
