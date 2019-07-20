
/**
 * Geocaching API client for Node.js
 * Author: LudoO
 * 
 * Usage :
 * Using ExpressJs and Passport, define api and get Passport's strategy automatically.
 * app.geoapi = new GeocachingApi({
 *    clientID: app.config.oauth.geocaching.key,
 *    clientSecret: app.config.oauth.geocaching.secret
 *  });
 *  passport.use(app.geoapi.strategy);
 * 
 * In routing, use middleware securized to restoreOauth tokens (previously saved into db): 
 * app.get('/list/caches/', app.geoapi.securized, require('./views/list/index').find);
 * 
 * 
 * Node.js port of the Geocaching API client from the very good PHP implementation by Surfoo
 * https://github.com/Surfoo/geocaching-api/blob/master/src/Geocaching/Api/GeocachingApi.php
 * http://geocaching.vaguelibre.net/api/docs/classes/Geocaching.Api.AbstractGeocachingApi.html#method_getMoreGeocaches
 * 
 * */
var util = require('util'),
    querystring = require('querystring'),
    GeocachingStrategy = require('passport-geocaching').Strategy,
    //GeocachingStrategy = require('../../passport-geocaching/lib/index').Strategy,
    _ = require('lodash');

var GeocachingApiV10 = require('./swagger-index');

var apiVersion = '1'; // {String} The requested API version

function Exception(msg, e) {
    this.msg = msg;
    this.e = e;
}

// config values required for app-only auth
var required_for_app_auth = [
    'clientID',
    'clientSecret'
];

/**searchForGeocaches
 * Staging URL of Groundspeak API
 *
 * @access var
 * @var string $staging_api_url
 */
var staging_api_url = 'https://staging.api.groundspeak.com/%s';
/**
 * Production URL of Groundspeak API
 *
 * @access var
 * @var string $prod_api_url
 */
var prod_api_url = 'https://api.groundspeak.com/%s';

/**
 * Constructor
 *
 * @access public
 * @param config
 *   string  oauth_token OAuth token provided by the application
 *   boolean prod        production = true, staging = false
 * @return void
 */
var GeocachingApi = function (config) {
    var self = this
    var credentials = {
        clientID: config.clientID,
        clientSecret: config.clientSecret
    }
    /**
     * Log API requests in a file
     *
     * @access var
     * @var string $log
     */
    this.logging = false;
    /**
     * API URL
     *
     * @access var
     * @var string $api_url
     */
    this.api_url = null;

    this._validateConfigOrThrow(config);
    this.config = config;

    this.http_headers = { 'Content-Type': 'application/json' };
    if (this.config.env === 'prod') {
        this.api_url = prod_api_url;
    } else {
        this.api_url = staging_api_url;
    }

    this.strategy = this.config.strategy;

    //Auto define strategy if not available
    if (typeof this.strategy === 'undefined') {
        this.strategy = new GeocachingStrategy(this.config, _.bind(this._verify, this));
        // this.strategy.api = this;
    }
}

GeocachingApi.prototype.GeocachingApiV10 = GeocachingApiV10;

GeocachingApi.prototype.getYourUserProfile = function (params, cb){
    // var callback = function (error, data, response) {
    //     if (error) {
    //         console.error(error);
    //     } else {
    //         console.info('API called successfully.');
    //         console.log(data);
    //     }
    // };
    var usersApi = new GeocachingApiV10.UsersApi();
    usersApi.usersGetUser('me', apiVersion, cb);
};

//Middleware for Express to set user credentails retrieved from storage
GeocachingApi.prototype.securized = function (req, res, next) {
    if (!req.app.geoapi) {
        res.status(500).json({ error: 'Geocaching API not defined' });
        return next(new Error('Geocaching API not defined'));
    }

    if (!req.user) {
        res.status(500).json({ error: 'User not logged' });
        return next(new Error('User Geocaching not logged'));
    }

    if (!_.get(req, 'user.token')) {
        res.status(500).json({ error: 'User Geocaching not logged' });
        return next(new Error('User Geocaching not logged'));
    }

    //in middleware or at loginuser (serializeuser passport)
    if (req.user) {
        req.app.geoapi.setAuth(req.user.token, req.user.tokensecret);
    }
    next();
}

//Warning : scope change
GeocachingApi.prototype.setAuth = function (token, tokenSecret) {
    if (token) {
        this.oauth_token = token;
        this.oauth_token_secret = tokenSecret;
    }
}

GeocachingApi.prototype._verify = function (token, tokenSecret, profile, done) {
    //Saved for later usage on REST calls
    // this.strategy.api.setAuth(token, tokenSecret);
    this.setAuth(token, tokenSecret);

    // asynchronous verification, for effect...
    //process.nextTick(function () {

    // To keep the example simple, the user's Geocaching profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the Geocaching account with a user record in your database,
    // and return that user instead.
    var user = profile;

    return done(null, user, {
        accessToken: token,
        refreshToken: tokenSecret,
        profile: profile
    });
    //});
}

// GeocachingApi.prototype.getYourUserProfile = function (params, cb) {
//     return this.getUserProfile('getYourUserProfile', params, cb);
// };



/**
 * Check the status of the POST or GET request in JSON
 *
 * @access protected
 * @param  object $content
 * @return void
 */
GeocachingApi.prototype.checkRequestStatus = function (content) {
    if (!(content && content.Status && content.Status.StatusCode)) {
        throw new Exception(content.Status.StatusMessage, content.Status.StatusCode);
    }
}

GeocachingApi.prototype.getUrl = function (request) {
    var qparams = { format: 'json', AccessToken: this.oauth_token };
    //var qparams = {format: 'json'};
    var query_string = '?' + querystring.stringify(qparams);
    var path = util.format(this.api_url, _.upperFirst(request)) + query_string;
    return path;
}
function parseResonse(err, body, res, done) {
    if (err) { return done(new Exception('failed to fetch data', err)); }
    try {
        var json = JSON.parse(body);

        if (json.Status && json.Status.StatusCode > 0) {
            throw new Exception('Failed to access api : ' + json.Status.StatusMessage, json.Status);
        }
        done(null, json);
    } catch (e) {
        done(e);
    }
}

GeocachingApi.prototype.getRequest = function (request, params, done) {
    //optional params
    if (typeof done === 'undefined') {
        done = params;
        params = null;
    }
    //return this.request('GET', request, params, callback)
    return new Promise((resolve, reject) => {
        var url = this.getUrl(request);
        //TODO : should I treat params into url ?
        this.strategy._oauth._performSecureRequest(this.oauth_token, this.oauth_token_secret, 'GET', url, null, "", 'application/json', function (err, body, res) {
            //this.strategy._oauth.get(url, this.oauth_token, this.oauth_token_secret, function (err, body, res) {
            if (err) {
                reject(err)
            } else {
                parseResonse(err, body, res, function (err, json) {
                    resolve(json);
                    if (done) {
                        done(err, json);
                    }
                });
            }
        });
    });
}

// GeocachingApi.prototype.postRequest = function (request, post_body, done) {
//     //return this.request('POST', request, params, callback)
//     return new Promise((resolve, reject) => {
//         var url = this.getUrl(request);
//         post_body.AccessToken = this.oauth_token;
//         this.strategy._oauth.post(url, this.oauth_token, this.oauth_token_secret, JSON.stringify(post_body), 'application/json', function (err, body, res) {
//             if (err) {
//                 reject(err)
//             } else {
//                 parseResonse(err, body, res, function (err, json) {
//                     resolve(json);
//                     if (done) {
//                         done(err, json);
//                     }
//                 });
//             }
//         });
//     });
// }


/**
 * Enable or disable log messages
 *
 * @param  string directory
 * @return void
 */
GeocachingApi.prototype.setLogging = function (directory) {
    if (directory) {
        //this.logger = new Logger('api');
        this.logging = true;
        //this.logger.pushHandler(new StreamHandler(directory+'/groundspeak_api.log', Logger::DEBUG));
    }
    if (this.logging && !directory) {
        //unset(this.logger);
        this.logging = false;
    }
}
/**
 * Log informations into the log file
 *
 * @param  string $infos
 * @param  array  $obj
 * @return void
 */
GeocachingApi.prototype.log = function ($infos, obj) {
    if (!this.logging) {
        return false;
    }
    //this.logger.addDebug($infos.": ".var_export(obj, true));
}

//
// Check that the required auth credentials are present in `config`.
// @param {Object}  config  Object containing credentials for REST API auth
//
GeocachingApi.prototype._validateConfigOrThrow = function (config) {
    //check config for proper format
    if (typeof config !== 'object') {
        throw new TypeError('config must be object, got ' + typeof config)
    }

    var required_keys = required_for_app_auth
    required_keys.forEach(function (req_key) {
        if (!config[req_key]) {
            var err_msg = util.format('GeocachingApi config must include `%s`.', req_key)
            throw new Error(err_msg)
        }
    })
}


exports = module.exports = GeocachingApi