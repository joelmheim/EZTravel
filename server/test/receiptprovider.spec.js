'use strict';

var should = require('should');

describe("ReceiptProvider", function () {
  it ("should connect to db", function () {
	var receiptProvider = require('../lib/receiptprovider').ReceiptProvider;
    
    //expect(tripProvider.findAll().length).to.equal(4);
  });

  it ("should be postable", function() {
  	var receiptProvider = require('../lib/receiptprovider').ReceiptProvider;

  	var receipt = {key: "val"};

	receiptProvider.save(receipt, function (err) {
  	});

  })

  it ("should post and return non null id", function() {
  	var receiptProvider = require('../lib/receiptprovider').ReceiptProvider;

  	var receipt = {key: "val"};

	var id = receiptProvider.save(receipt, function (err) {
  	});

	should(id!=null).be.true;

  })
  
});
