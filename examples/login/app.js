var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , GeocachingStrategy = require('passport-geocaching').Strategy
  , GeocachingApi = require('../../lib/geocaching-api')
  , morgan = require('morgan')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , methodOverride = require('method-override')
  , expressLayouts=require('express-ejs-layouts')
  , config1 = require('../../config2');

var port = process.env.PORT || 3000;
var GEOCACHING_APP_ID = "--insert-geocaching-app-id-here--"
var GEOCACHING_APP_SECRET = "--insert-geocaching-app-secret-here--";

var callbackURL = 'http://localhost:'+port+'/auth/geocaching/callback';

var api = null;

if (config1){
  GEOCACHING_APP_ID = config1.consumer_key;
  GEOCACHING_APP_SECRET = config1.consumer_secret ;
  callbackURL = config1.callbackURL; 
}
// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Facebook profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the GeocachingStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Facebook
//   profile), and invoke a callback with a user object.

api = new GeocachingApi({
      consumer_key: GEOCACHING_APP_ID,
      consumer_secret: GEOCACHING_APP_SECRET,
//     //You can skip profile request access
//     //skipUserProfile: true,
     callbackURL: callbackURL
});

var strategy = api.strategy;

// var strategy = new GeocachingStrategy({
//     consumerKey: GEOCACHING_APP_ID,
//     consumerSecret: GEOCACHING_APP_SECRET,
  
//     //You can skip profile request access
//     //skipUserProfile: true,
    
//     callbackURL: callbackURL
//   },
//   function(token, tokenSecret, profile, done) {
    
//     // //returns accesstoken to be displayed
//     // profile.token = token;
//     // profile.tokenSecret = tokenSecret;
    
//     api = new GeocachingApi({
//       consumer_key: GEOCACHING_APP_ID,
//       consumer_secret: GEOCACHING_APP_SECRET,
//       oauth_token: token,
//       oauth_token_secret: tokenSecret,
//       strategy: strategy
//     });
//     api._tokens = {
//       token: token,
//       tokenSecret: tokenSecret
//     };
    
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
      
//       // To keep the example simple, the user's Facebook profile is returned to
//       // represent the logged-in user.  In a typical application, you would want
//       // to associate the Facebook account with a user record in your database,
//       // and return that user instead.
//       return done(null, profile);
//   });
// });
  
passport.use(strategy);

var app = express();

// configure Express
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(morgan('combined'))
app.use(cookieParser());
app.use(bodyParser.json());

app.use(methodOverride());
app.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index', { user: req.user, token:'' });
});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user, oauth: api._tokens, token: req.token || (req.user && req.user.token) || '?' });
});

app.get('/test', ensureAuthenticated, function(req, res){
  if (api){
    var tests = {
      test1: {}
    };
    api.getYourUserProfile({}, function(err , data){
      tests.test1 = {user: data.Profile.User};
      res.render('test', { user: req.user, token: req.token || (req.user && req.user.token) || '?', tests: JSON.stringify(tests) });
    });
  }
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user, token: req.token || (req.user && req.user.token) });
});

// GET /auth/geocaching
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Facebook authentication will involve
//   redirecting the user to geocaching.com.  After authorization, Facebook will
//   redirect the user back to this application at /auth/geocaching/callback
app.get('/auth/geocaching',
  passport.authenticate('geocaching'),
  function(req, res){
    // The request will be redirected to Facebook for authentication, so this
    // function will not be called.
  });

// GET /auth/geocaching/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/geocaching/callback', 
  passport.authenticate('geocaching', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(port);


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
