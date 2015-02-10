'use strict';

var mongoose = require('mongoose');
var receiptProvider = require('../lib/receiptprovider');

var should = require('should');
var url = 'localhost';
var dbname = 'receipttest';
var err;

mongoose.connect('mongodb://'+url+'/'+dbname);

describe("ReceiptProvider", function () {

    beforeEach(function(done){
        var receipt = null;
        var user = 'test@statoil.com';

        var receipts = [
            {receiptId: 1, tripId: '21145000', receipt: 'CHOT'},
            {receiptId: 2, tripId: '21145000', receipt: 'TAXI'}

        ];
        receiptProvider.save(user, receipts, function (err, doc) {
            done();
        });

    });

    /*
     * afterEach Method
     *
     * Just like the beforeEach, afterEach is run after Mocha has completed
     * running it's queue.
     */

    afterEach(function(done){
        receiptProvider.model.collection.remove(function () {
            done();
        });

    });

    it ("should find receipt by id", function () {
        var user = 'test@statoil.com';
        var receiptId = 1;
        receiptProvider.findById(user, receiptId, function(err, receipt) {
            if (err) {
                fail(err);
            }
            should(receipt.user).equal(user);
            should(receipt.receiptId).equal(receiptId);
        });
    });

    it ("should find all receipts", function () {
        var user = 'test@statoil.com';
        receiptProvider.findAll(user, function (err, receipts) {
            should(receipts.length).equal(2);
            should(receipts[0].user).equal(user);
        });
    });

    it ("should save", function() {
        var user = 'test@statoil.com';
        var receipt = {receiptId: 3, tripId: '21145004', receipt: "CHOT"};
        receiptProvider.save(user, receipt, function (err, receipts) {
            should(receipts[0].receiptId).equal(3);
            should(receipts[0].user).equal(user);
        });
    });

});
