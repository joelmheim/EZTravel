var express = require('express');
var router = express.Router();
var tripProvider = require('../lib/tripprovider-memory').TripProvider;

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

/* GET trips listing. */
router.route('/trips')
.get(function (req, res, next) {
  tripProvider.findAll(function (err, trips) {
    if (err) {
      res.json({message: err});
    }
    res.json(trips);
  });
})
.post(function (req, res, next) {
  tripProvider.save(req.body, function (err) {
    var feedback = err ? err : "Success!";
    res.json({message: feedback});
  });
});

router.route('/trips/:trip_id')
.get(function (req, res, next) {
  tripProvider.findById(req.params.trip_id, function (err, trips) {
    if (err) {
      res.json({message: err});
    }
    res.json(trips);
  });
})
.put(function (req, res, next) {
  next(new Error('Update not implemented yet.'));
})
.delete(function (req, res, next) {
  next(new Error('Delete not implemented yet.'));
});

module.exports = router;
