
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

import {GeoToursApi,
GeocacheLogsApi,
GeocacheNotesApi,
GeocachesApi,
HQPromotionsApi,
ListsApi,
LogDraftsApi,
ReferenceDataApi,
StatusApi,
TrackableLogsApi,
TrackablesApi,
UserWaypointsApi,
UsersApi,
UtilitiesApi,
FriendsApi,
ApiClient} from './Api-v10';
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
var staging_api_url = 'https://staging.api.groundspeak.com';
/**
 * Production URL of Groundspeak API
 *
 * @access var
 * @var string $prod_api_url
 */
var prod_api_url = 'https://api.groundspeak.com';

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

    // Token to pass from Passport to Geocaching API
    this.oauth_token = null;
    this.oauth_token_secret = null;

    this._validateConfigOrThrow(config);
    this.config = config;

    this.http_headers = { 'Content-Type': 'application/json' };
    if (this.config.env === 'prod') {
        this.api_url = prod_api_url;
    } else {
        this.api_url = staging_api_url;
    }

    this.apiClient = new ApiClient({}); // ApiClient.default(); //
    this.apiClient.authentications = {
        'AccessToken': { type: 'oauth2', 'in': 'header', name: 'AccessToken' }
    };
    this.apiClient.defaultHeaders = { 'X-Source': 'geocaching-api' };
    this.apiClient.basePath = this.api_url.replace(/\/+$/, '');

    this.strategy = this.config.strategy;
}

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
        // this.oauth_token_secret = tokenSecret;
        this.apiClient.authentications.AccessToken.accessToken = token;
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

// For internal access to generated Swagger API if required
// GeocachingApi.prototype.GeocachingApiV10 = GeocachingApiV10;

GeocachingApi.prototype.getYourUserProfile = function (opts, cb) {
    opts=opts||{};
    var usersApi = new UsersApi(opts.apiClient || this.apiClient);
    return usersApi.usersGetUser('me', apiVersion, {
        fields: opts.fields || 'referenceCode,findCount,hideCount,favoritePoints,username,membershipLevelId,avatarUrl,profileText,homeCoordinates'
    }, cb);
};

/** 
 * Map all API to wrap apiClient config
*/
GeocachingApi.prototype.UsersApi = function (opts) {
    return new UsersApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.FriendsApi = function (opts) {
    return new FriendsApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.GeocacheLogsApi = function (opts) {
    return new GeocacheLogsApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.GeocacheNotesApi = function (opts) {
    return new GeocacheNotesApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.ListsApi = function (opts) {
    return new ListsApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.LogDraftsApi = function (opts) {
    return new LogDraftsApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.ReferenceDataApi = function (opts) {
    return new ReferenceDataApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.StatusApi = function (opts) {
    return new StatusApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.TrackableLogsApi = function (opts) {
    return new TrackableLogsApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.TrackablesApi = function (opts) {
    return new TrackablesApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.UserWaypointsApi = function (opts) {
    return new UserWaypointsApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.UsersApi = function (opts) {
    return new UsersApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.UtilitiesApi = function (opts) {
    return new UtilitiesApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.GeoToursApi = function (opts) {
    return new GeoToursApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.GeocachesApi = function (opts) {
    return new GeocachesApi(opts && opts.apiClient || this.apiClient);
};
GeocachingApi.prototype.HQPromotionsApi = function (opts) {
    return new HQPromotionsApi(opts && opts.apiClient || this.apiClient);
};

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
            var err_msg = format('GeocachingApi config must include `%s`.', req_key)
            throw new Error(err_msg)
        }
    })
}


// exports = module.exports = GeocachingApi
export default GeocachingApi;