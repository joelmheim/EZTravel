var express = require('express');
var passport = require('passport');
var SamlStrategy = require('passport-azure-ad').SamlStrategy;
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var receipts = require('./routes/receipts');
var trips = require('./routes/trips');
var ensureAuthenticated = require('./lib/ensure-authenticated');

var app = express();

var config = {
  // required options
  identityMetadata: 'https://login.windows.net/3aa4a235-b6e2-48d5-9195-7fcf05b459b0/federationmetadata/2007-06/federationmetadata.xml',
  loginCallback: 'http://localhost:3000/login/callback/',
  issuer: 'http://localhost:3000/'
};

// array to hold logged in users. State of the art.
var users = [];

var findByEmail = function(email, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.email === email) {
      return fn(null, user);
    }
  }
  return fn(null, null);
};

// Keep a reference to the saml Strategy as we will need it for an eventual logout
var samlStrategy = new SamlStrategy(config, function(profile, done) {
  if (!profile.email) {
    return done(new Error("No email found"), null);
  }
  // asynchronous verification, for effect. Wow!
  process.nextTick(function () {
    findByEmail(profile.email, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        // "Auto-registration"
        users.push(profile);
        return done(null, profile);
      }
      return done(null, user);
    });
  });
});

passport.use(samlStrategy);

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());
app.use(session({ secret: 'dis-hackathon-2015' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/receipts', receipts);
app.use('/api/trips', trips);

app.get('/api/user', function(req, res){
  if (req.isAuthenticated()) {
    res.json({ email: req.user.email, displayName: req.user.displayName });
  }
  else {
    res.statusCode = 401;
    res.json({email: 'null', displayName: 'Unknown'});
  }
});

app.get('/login',
  passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }),
  function(req, res) {
    res.redirect('/');
    //res.send('Authenticated: ' + JSON.stringify(req.user));
  }
);

app.post('/login/callback',
  passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }),
  function(req, res) {
    res.redirect('/');
    //res.send('Authenticated: ' + JSON.stringify(req.user));
  }
);

if (app.get('env') === 'development') {
  console.log('Server running in ' + app.get('env') + ' mode.');

  app.use(express.static(path.join(__dirname, '../client')));
  app.use(express.static(path.join(__dirname, '../client/.tmp')));
  app.use(express.static(path.join(__dirname, '../client/app')));

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

if (app.get('env') == 'production') {
  console.log('Server running in ' + app.get('env') + ' mode.');

  app.use(express.static(path.join(__dirname, '/build')));

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
// //   the user by ID when deserializing.
passport.serializeUser(function(user, done) {
  done(null, user.email);
});

passport.deserializeUser(function(id, done) {
  findByEmail(id, function (err, user) {
    done(err, user);
  });
});

module.exports = app;
