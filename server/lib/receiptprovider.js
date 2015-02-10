'use strict';

var ReceiptProvider = (function() {

  var mongoose = require('mongoose');

  var Schema = mongoose.Schema;

  var ReceiptSchema = new Schema({
    user: String,
    receiptId: Number,
    tripId: Number,
    date: Date,
    receipt: String
  });

  var ReceiptModel = mongoose.model('Receipt', ReceiptSchema);

  return {
    findAll: function(user, callback) {
      ReceiptModel.find({user: user}, callback);
    },

    findById: function (user, id, callback) {
      ReceiptModel.findOne({ user: user, receiptId: id }, callback);
    },

    save: function (user, receipts, callback) {
      var receipt = null;
      var receiptModel = null;
      var results = [];
      var total = null;

      if( typeof(receipts.length)=="undefined") {
        receipts = [receipts];
      }

      total = receipts.length;

      for( var i =0;i< receipts.length;i++ ) {
        receipt = receipts[i];
        receipt.user = user;
        var receiptModel = ReceiptModel(receipt);
        receiptModel.save(function(err, savedReceipt) {
          if (err) {
            results.push(receipt);
          } else {
            results.push(savedReceipt);
          }
          if (--total === 0) {
            callback(err, results);
          }
        });
      }
    },
    schema: ReceiptSchema,
    model: ReceiptModel
  };

})();

module.exports = ReceiptProvider;
