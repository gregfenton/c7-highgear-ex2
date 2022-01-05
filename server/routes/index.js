var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express for Calgarians!!!' });
});

router.get('/slow', (req, res, next) => {
  let delay = 1000 + Math.ceil(Math.random() * 2000);
  setTimeout(() => {
    let secs = new Date().getTime();
    res.json({ currentTime: secs, delayTime: delay });
  }, delay);
});

module.exports = router;
