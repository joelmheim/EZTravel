var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var receiptProvider = require('../lib/receiptprovider');

var should = require('should');
var url = 'localhost';
var dbname = 'receipts';
var err;

mongoose.connect('mongodb://'+url+'/'+dbname);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
        
    var receiptModel = receiptProvider.model(req.body);
    receiptModel.save(function (err, receipt) {
        if (err) {
            console.log(err);
            res.status(500);
            res.json({message: err});
        }
        else {
            res.json({message: 'success'});
        }

      });

});

module.exports = router;
