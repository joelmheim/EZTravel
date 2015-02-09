// To enzure authentication, put this on all request handlers
var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports = ensureAuthenticated;