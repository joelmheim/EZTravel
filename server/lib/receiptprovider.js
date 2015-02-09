'use strict';
var ReceiptProvider = (function () {
  
  return {
    save: function (receipt, callback) {
      callback(null, receipt);
      return 0;
    }
  };

})();
exports.ReceiptProvider = ReceiptProvider;
