'use strict';

var mongoose = require('mongoose');
var receiptProvider = require('../lib/receiptprovider');

var should = require('should');
var url = 'localhost';
var dbname = 'dbtest';
var err;

mongoose.connect('mongodb://'+url+'/'+dbname);

describe("ReceiptProvider", function () {

  it ("should connect to db", function () {
      var receiptId = 1;
      receiptProvider.get(receiptId, function(err, document) {
        should(document.receiptId).equal(receiptId);
      });
  });

  it ("should save", function() {
      var receipt = {receiptId: 1, tripId: 2, receipt: "hei"};
      var receiptModel = receiptProvider.model(receipt);
      receiptModel.save(function (err, receipt) {
        should(receipt.receiptId).equal(1); 
   	  });
  });
  
});
