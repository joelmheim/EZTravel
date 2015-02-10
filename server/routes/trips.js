var express = require('express');
var router = express.Router();
var tripProvider = require('../lib/tripprovider-memory');
var ensureAuthenticatedApi = require("../lib/ensure-authenticated").apiauth;

function getUser(req) {
    return req.user.email.toLowerCase();
}

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

/* GET trips listing. */
router.route('/')
    .get(ensureAuthenticatedApi, function (req, res, next) {
        tripProvider.findAll(getUser(req), function (err, trips) {
            if (err) {
                res.json({message: err});
            }
            res.json(trips);
        });
    })
    .post(ensureAuthenticatedApi, function (req, res, next) {
        tripProvider.save(getUser(req), req.body, function (err) {
            var feedback = err ? err : "Success!";
            res.json({message: feedback});
        });
    });

router.route('/:trip_id')
    .get(ensureAuthenticatedApi, function (req, res, next) {
        tripProvider.findById(getUser(req), req.params.trip_id, function (err, trips) {
            if (err) {
                res.json({message: err});
            }
            res.json(trips);
        });
    })
    .put(ensureAuthenticatedApi, function (req, res, next) {
        next(new Error('Update not implemented yet.'));
    })
    .delete(ensureAuthenticatedApi, function (req, res, next) {
        next(new Error('Delete not implemented yet.'));
    });

module.exports = router;
