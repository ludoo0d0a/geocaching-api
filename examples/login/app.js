var express = require('express'),
    passport = require('passport'),
    util = require('util'),
    //GeocachingApi = require('../../lib/geocaching-api'),
    GeocachingApi = require('geocaching-api'),
    morgan = require('morgan'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    expressLayouts = require('express-ejs-layouts'),
    config = require('../../config-api');

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';
var api = null;

/*
var config = {
      consumerKey: "--insert-geocaching-app-id-here--",
      consumerSecret: "--insert-geocaching-app-secret-here--";,
      callbackURL: 'http://localhost:'+port+'/auth/geocaching/callback'
}
*/

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Geocaching profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});


// Use the GeocachingStrategy within GeocachingApi for Passsport.
api = new GeocachingApi(config);

passport.use(api.strategy);

var app = express();

// configure Express
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');
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

app.get('/', function(req, res) {
    var data = '',
        error = '',
        token = api.oauth_token || '{Undefined}';
    res.render('index', { user: req.user, token: token });
});

app.get('/account', ensureAuthenticated, function(req, res) {
    res.render('account', { user: req.user, api: api, oauth: api._tokens || {}, token: req.token || (req.user && req.user.token) || '?' });
});

app.get('/test', ensureAuthenticated, function(req, res) {
    if (api) {
        var data = '',
            error = '',
            token = api.oauth_token || '{Undefined}';
        api.getYourUserProfile({}, function(err, o) {
            if (err) {
                error = JSON.stringify(err);
            } else {
                data = JSON.stringify({ user: o.Profile && o.Profile.User });
            }
            res.render('test', { user: req.user, token: token, data: data, error: error });
        });
    }
});

app.get('/login', function(req, res) {
    res.render('login', { user: req.user, token: req.token || (req.user && req.user.token) });
});

// GET /auth/geocaching
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Geocaching authentication will involve
//   redirecting the user to geocaching.com.  After authorization, Geocaching will
//   redirect the user back to this application at /auth/geocaching/callback
app.get('/auth/geocaching',
    passport.authenticate('geocaching'),
    function(req, res) {
        // The request will be redirected to Geocaching for authentication, so this
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

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.listen(port, function() {
    console.log('Example app for geocaching-api is listening on http://%s:%d', ip, port);
});


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}