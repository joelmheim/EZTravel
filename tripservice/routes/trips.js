var express = require('express');
var router = express.Router();
var tripProvider = require('../tripprovider-memory').TripProvider;

/* GET trips listing. */
router.get('/', function(req, res, next) {
  tripProvider.findAll(function (err, trips) {
    if (err) {
      res.json({message: err});
    }
    res.json(trips);
  });
});

module.exports = router;
