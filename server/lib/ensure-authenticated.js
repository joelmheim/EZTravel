// To enzure authentication, put this on all request handlers
var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

var ensureAuthenticatedApi = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.statusCode = 401;
  res.json({message: "Unauthenticated user"});
};


module.exports = {webauth: ensureAuthenticated, apiauth: ensureAuthenticatedApi};