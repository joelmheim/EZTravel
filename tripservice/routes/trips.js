var express = require('express');
var router = express.Router();
var tripProvider = require('../tripprovider-memory').TripProvider;

/* GET trips listing. */
router.get('/', function(req, res, next) {
  tripProvider.findAll(function (err, trips) {
    res.send(trips);
  });
});

module.exports = router;
