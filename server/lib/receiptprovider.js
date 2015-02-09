'use strict';

var ReceiptProvider = (function() {

  var mongoose = require('mongoose');

  var Schema = mongoose.Schema;

  var ReceiptSchema = new Schema({
    receiptId: Number,
    tripId: Number,
    date: Date,
    receipt: String
  });

  var ReceiptModel = mongoose.model('Receipt', ReceiptSchema);

  return {
    save: function (receipt, callback) {
      ReceiptModel.insert(receipt, callback);

    },
    get: function (id, callback) {
      ReceiptModel.findOne({ receiptId: id }, function(err, document) {
        callback(err, document);
      });     
    },
    schema: ReceiptSchema,
    model: ReceiptModel
  };

})();

module.exports = ReceiptProvider;
