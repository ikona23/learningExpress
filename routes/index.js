var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  author: "devAtman",
  name: "Flouro",
  surname: "Matics"
  });
});

var tTitle = "hello"

module.exports = router;
