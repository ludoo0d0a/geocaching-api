
/**
 * Geocaching API client for Node.js
 * Author: LudoO
 * 
 * Usage :
 * Using ExpressJs and Passport, define api and get Passport's strategy automatically.
 * app.geoapi = new GeocachingApi({
 *    consumerKey: app.config.oauth.geocaching.key,
 *    consumerSecret: app.config.oauth.geocaching.secret
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
 * 
 * 
 * _methods are deprecated
 *
 * TODO : https://api.groundspeak.com/documentation#get-logdrafts
 * 
 * 
 * */


var util = require('util'),
    querystring = require('querystring'),
    GeocachingStrategy = require('passport-geocaching').Strategy,
    //GeocachingStrategy = require('../../passport-geocaching/lib/index').Strategy,
    _ = require('lodash');
//base64_encode = require('base64').encode;

function base64_encode(v) {
    return Buffer.from(v).toString('base64');
}


function Exception(msg, e) {
    this.msg = msg;
    this.e = e;
}

// config values required for app-only auth
var required_for_app_auth = [
    'consumerKey',
    'consumerSecret'
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

var STATUS_CODES_TO_ABORT_ON = [400, 401, 403, 404, 406, 410, 422];

function array_key_exists(key, o) {
    return o && o[key];
}

//Can use momentjs (ASP.Net format supported)
// function parseDate(d){
//     //return '/Date('+(parseInt(d) * 1000)+')/';
//     return new Date(parseInt(d) * 1000);
// }
function formatDate(d) {
    return '/Date(' + (parseInt(d) * 1000) + ')/';
}
function parseBoolean(v) {
    return (v === 'true');
}

/**
 * Constructor
 *
 * @access public
 * @param config
 *   string  oauth_token OAuth token provided by the application
 *   boolean live        production = true, staging = false
 * @return void
 */
var GeocachingApi = function (config) {
    var self = this
    var credentials = {
        consumerKey: config.consumerKey,
        consumerSecret: config.consumerSecret
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
    if (this.config.env === 'live') {
        this.api_url = prod_api_url;
    } else {
        this.api_url = staging_api_url;
    }

    this.strategy = this.config.strategy;

    //Auto define strategy if not available
    if (typeof this.strategy === 'undefined') {
        this.strategy = new GeocachingStrategy(this.config, _.bind(this._verify, this));
        this.strategy.api = this;
    }
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

GeocachingApi.prototype.getYourUserProfile = function (params, cb) {
    return this.getUserProfile('getYourUserProfile', params, cb);
};

/**
 * Get ping service
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetPing
 * @access public
 * @return object
 */
GeocachingApi.prototype.ping = function (cb) {
    return this.getRequest('Ping', null, cb);
};

/**
 * Get Another Users Profile
 *
 * - required param: UserID
 * - optional params: ChallengesData, FavoritePointsData, GeocacheData, PublicProfileData, SouvenirData, TrackableData
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetAnotherUsersProfile
 * @access public
 * @param  array  $params
 * @return object
 */
GeocachingApi.prototype.getAnotherUsersProfile = function (params, cb) {
    return this.getUserProfile('getAnotherUsersProfile', params, cb);
};
/**
 * Get User Profile
 *
 * Internal method for getYourUserProfile or getAnotherUsersProfile
 * - optional params: UserID, FavoritePointsData, GeocacheData, PublicProfileData, ProfileOptions, SouvenirData, ProfileOptions
 *
 * If the method is getYourUserProfile, there are some required params (DeviceInfo) but are useful only for mobile application
 *
 * @access protected
 * @param  string $function
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getUserProfile = function (fn, params, cb) {
    var post_params = {
        ProfileOptions: {}
    };
    if (array_key_exists('UserID', params)) {
        post_params['UserID'] = parseInt(params['UserID']);
    }
    if (array_key_exists('FavoritePointsData', params)) {
        post_params['ProfileOptions']['FavoritePointsData'] = parseBoolean(params['FavoritePointsData']);
    }
    if (array_key_exists('GeocacheData', params)) {
        post_params['ProfileOptions']['GeocacheData'] = parseBoolean(params['GeocacheData']);
    }
    if (array_key_exists('PublicProfileData', params)) {
        post_params['ProfileOptions']['PublicProfileData'] = parseBoolean(params['PublicProfileData']);
    }
    if (array_key_exists('SouvenirData', params)) {
        post_params['ProfileOptions']['SouvenirData'] = parseBoolean(params['SouvenirData']);
    }
    if (array_key_exists('TrackableData', params)) {
        post_params['ProfileOptions']['TrackableData'] = parseBoolean(params['TrackableData']);
    }
    if (array_key_exists('EmailData', params)) {
        post_params['ProfileOptions']['EmailData'] = parseBoolean(params['EmailData']);
    }
    if (fn === 'getYourUserProfile') {
        post_params['DeviceInfo'] = {};
        post_params['DeviceInfo']['ApplicationCurrentMemoryUsage'] = 2048 * 1024;
        post_params['DeviceInfo']['ApplicationPeakMemoryUsage'] = 2048 * 1024;
        post_params['DeviceInfo']['ApplicationSoftwareVersion'] = 'blabla';
        post_params['DeviceInfo']['DeviceManufacturer'] = 'blabla';
        post_params['DeviceInfo']['DeviceName'] = 'blabla';
        post_params['DeviceInfo']['DeviceOperatingSystem'] = 'blabla';
        post_params['DeviceInfo']['DeviceTotalMemoryInMB'] = 2048 * 1024;
        post_params['DeviceInfo']['DeviceUniqueId'] = 'blabla';
        post_params['DeviceInfo']['MobileHardwareVersion'] = 'blabla';
        post_params['DeviceInfo']['WebBrowserVersion'] = 'blabla';
    }
    return this.postRequest(fn, post_params, cb);
}




/**
 * Add Favorite Point To a Cache
 *
 * - required param: referenceCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/AddFavoritePointToCache
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._addFavoritePointToCache = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    var get_params = { referenceCode: params.referenceCode };
    return this.getRequest('addFavoritePointToCache', get_params, cb);
}
/**
 * Add Geocaches To Bookmark List
 *
 * - required params: BookmarkListGuid, CacheCodes
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/AddGeocachesToBookmarkList
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._addGeocachesToBookmarkList = function (params, cb) {
    if (!array_key_exists('BookmarkListGuid', params)) {
        throw new Exception('BookmarkListGuid is missing.');
    }
    if (!array_key_exists('CacheCodes', params)) {
        throw new Exception('CacheCodes is missing.');
    }
    if (!_.isArray(params['CacheCodes'])) {
        throw new Exception('CacheCodes must be an array.');
    }
    var post_params = {
        BookmarkListGuid: params['BookmarkListGuid'],
        CacheCodes: params['CacheCodes']
    };
    return this.postRequest('addGeocachesToBookmarkList', post_params, cb);
}
/**
 * Create Field Note And Publish
 *
 * - required params: referenceCode, WptLogTypeId, UTCDateLogged, Note
 * - optional params: PromoteToLog, FavoriteThisCache, EncryptLogText, UpdatedLatitude, UpdatedLongitude, base64ImageData, FileCaption, FileDescription, FileName
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/CreateFieldNoteAndPublish
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._createFieldNoteAndPublish = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    if (!array_key_exists('WptLogTypeId', params)) {
        throw new Exception('WptLogTypeId is missing.');
    }
    if (!array_key_exists('UTCDateLogged', params)) {
        throw new Exception('UTCDateLogged is missing.');
    }
    if (!array_key_exists('Note', params)) {
        throw new Exception('Note is missing.');
    }
    var post_params = {
        referenceCode: params['referenceCode'],
        WptLogTypeId: params['WptLogTypeId'],
        UTCDateLogged: formatDate(params['UTCDateLogged']), //UTCDateLogged is a timestamp
        Note: params['Note']
    };

    if (array_key_exists('PromoteToLog', params)) {
        post_params['PromoteToLog'] = parseBoolean(params['PromoteToLog']);
    }
    if (array_key_exists('FavoriteThisCache', params)) {
        post_params['FavoriteThisCache'] = parseBoolean(params['FavoriteThisCache']);
    }
    if (array_key_exists('EncryptLogText', params)) {
        post_params['EncryptLogText'] = parseBoolean(params['EncryptLogText']);
    }
    if (array_key_exists('UpdatedLatitude', params)) {
        post_params['UpdatedLatitude'] = parseFloat(params['UpdatedLatitude']);
    }
    if (array_key_exists('UpdatedLongitude', params)) {
        post_params['UpdatedLongitude'] = parseFloat(params['UpdatedLongitude']);
    }
    if (array_key_exists('base64ImageData', params)) {
        post_params['ImageData'] = {
            base64ImageData: base64_encode(params['base64ImageData'])
        };
        if (array_key_exists('FileCaption', params)) {
            post_params['ImageData']['FileCaption'] = params['FileCaption'];
        }
        if (array_key_exists('FileDescription', params)) {
            post_params['ImageData']['FileDescription'] = params['FileDescription'];
        }
        if (array_key_exists('FileName', params)) {
            post_params['ImageData']['FileName'] = params['FileName'];
        }
    }
    return this.postRequest('createFieldNoteAndPublish', post_params, cb);
}


/**
 * CREATE GEOCACHE LOG
This method will create a new log to the specified geocache. It will return the created geocache log.

Path: /v1/geocachelogs
HTTP Method: POST
Response Type: Geocache Log
Response Codes: 201, 400, 401, 404, 409, 429, 500

 * @link https://api.groundspeak.com/documentation#create-geocachelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.createGeocacheLog = function (params, cb) {
    if (!array_key_exists('log', params)) {
        throw new Exception('log is missing.');
    }
   
    return this.postRequest('/v1/geocachelogs', params, cb);
}


/**
 * UPDATE GEOCACHE LOG
This method will update a specified geocache log. It will return the updated geocache log.

Path: /v1/geocachelogs/{referenceCode}
HTTP Method: PUT
Response Type: GeocacheLog
Response Codes: 200, 400, 401, 403, 404, 409, 429, 500
Restrictions: Only owner of geocache log may update the log.

 * @link https://api.groundspeak.com/documentation#update-geocachelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.updateGeocacheLog = function (params, cb) {
    if (!array_key_exists('log', params)) {
        throw new Exception('log is missing.');
    }
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }

    return this.putRequest('/v1/geocachelogs/{referenceCode}', params, cb);
}


/**
 * DELETE GEOCACHE LOG
This method will delete a specified geocache log.

Path: /v1/geocachelogs/{referenceCode}
HTTP Method: DELETE
Response Type: No response body
Response Codes: 204, 400, 401, 403, 409, 429, 500
Restrictions: Only owner of geocache log may delete the log.

 * @link https://api.groundspeak.com/documentation#delete-geocachelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.deleteGeocacheLog = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }

    return this.deleteRequest('/v1/geocachelogs/{referenceCode}', params, cb);
}
/**
 * Create Trackable Log
 *
 * - required params: TrackingNumber, UTCDateLogged, Note, LogType
 * - optional params: referenceCode, TravelBugCode, base64ImageData, FileCaption, FileDescription, FileName
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/CreateTrackableLog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._createTrackableLog = function (params, cb) {
    if (!array_key_exists('TrackingNumber', params)) {
        throw new Exception('TrackingNumber is missing.');
    }
    if (!array_key_exists('UTCDateLogged', params)) {
        throw new Exception('UTCDateLogged is missing.');
    }
    if (!array_key_exists('Note', params)) {
        throw new Exception('Note is missing.');
    }
    if (!array_key_exists('LogType', params)) {
        throw new Exception('LogType is missing.');
    }
    var post_params = {
        TrackingNumber: params['TrackingNumber'],
        UTCDateLogged: formatDate(params['UTCDateLogged']),
        Note: params['Note'],
        LogType: parseInt(params['LogType'])
    };

    if (array_key_exists('base64ImageData', params)) {
        post_params['ImageData'] = {
            base64ImageData: base64_encode(params['base64ImageData'])
        };
        if (array_key_exists('FileCaption', params)) {
            post_params['ImageData']['FileCaption'] = params['FileCaption'];
        }
        if (array_key_exists('FileDescription', params)) {
            post_params['ImageData']['FileDescription'] = params['FileDescription'];
        }
        if (array_key_exists('FileName', params)) {
            post_params['ImageData']['FileName'] = params['FileName'];
        }
    }
    return this.postRequest('createTrackableLog', post_params, cb);
}
/**
 * DELETE GEOCACHE NOTE
This method will delete a specified geocache note

Path: /v1/geocaches/{referenceCode}/notes
HTTP Method: DELETE
Response Type: No response body
Response Codes: 204, 400, 401, 409, 429, 500
Restrictions: Only owner may delete the geocache note.
 *
 * @link https://api.groundspeak.com/documentation#delete-geocachenote
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.deleteGeocacheNote = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.deleteRequest('/v1/geocaches/{referenceCode}/notes ', params, cb);
}
/**
 * Delete User Waypoint
 *
 * - required param: waypointID
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/DeleteUserWaypoint
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._deleteUserWaypoint = function (params, cb) {
    if (!array_key_exists('waypointID', params)) {
        throw new Exception('waypointID is missing.');
    }
    var get_params = {
        waypointID: parseInt(params['waypointID'])
    };
    return this.getRequest('deleteUserWaypoint', get_params, cb);
}
/**
 * Geocode String
 *
 * - required param: GeocodeString
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GeocodeString
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._geocodeString = function (params, cb) {
    if (!array_key_exists('GeocodeString', params)) {
        throw new Exception('GeocodeString is missing.');
    }
    return this.postRequest('geocodeString', params, cb);
}

/**
 * Get API Limits
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetAPILimits
 * @access public
 * @return object
 */
GeocachingApi.prototype._getAPILimits = function (cb) {
    return this.getRequest('getAPILimits', cb);
}
/**
 * GET ATTRIBUTES
This method will fetch all valid attributes

Path: /v1/attributes
HTTP Method: GET
Response Type: Array of Attribute Types
Response Codes: 200, 401, 429, 500
 *
 * @link https://api.groundspeak.com/documentation#get-attributes
 * @access public
 * @return object
 */
GeocachingApi.prototype.getAttribute = function (cb) {
    return this.getRequest('/v1/attributes', cb);
}
/**
 * GET COUNTRIES
This method will fetch all valid countries

Path: /v1//v1/countries
HTTP Method: GET
Response Type: Array of id and name
Response Codes: 200, 401, 500
 * @link https://api.groundspeak.com/documentation#get-countries
 * @access public
 * @return object
 */
GeocachingApi.prototype.getCountries= function (cb) {
    return this.getRequest('/v1/countries', cb);
}
/**
 * GET STATES
This method will fetch all valid states

Path: /v1/states
HTTP Method: GET
Response Type: Array of id, name, and countryId


 * @link https://api.groundspeak.com/documentation#get-states
 * @access public
 * @return object
 */
GeocachingApi.prototype.getStates= function (cb) {
    return this.getRequest('/v1/states', cb);
}
/**
 * GET STATES BY COUNTRY
This method will fetch all valid states of a provided country

Path: /v1/countries/{countryId}/states
HTTP Method: GET
Response Type: Array of id, name, and countryId
Response Codes: 200, 401, 500

 * @link https://api.groundspeak.com/documentation#get-country-states
 * @access public
 * @return object
 */
GeocachingApi.prototype.getStatesByCountry= function (cb) {
    if (!array_key_exists('countryId', params)) {
        throw new Exception('countryId is missing.');
    }
    return this.getRequest('/v1/countries/{countryId}/states', cb);
}
/**
 * GET MEMBERSHIP LEVELS
This method will fetch all valid membership levels

Path: /v1/membershiplevels
HTTP Method: GET
Response Type: Array of id and name
Response Codes: 200, 401, 500

 * @link https://api.groundspeak.com/documentation#get-membership-levels
 * @access public
 * @return object
 */
GeocachingApi.prototype.getMembershipLevels= function (cb) {
    return this.getRequest('/v1/membershiplevels', cb);
}
/**
 * GET REFERENCE CODE
This method will fetch the reference code from an id.

Path: /v1/utilities/referencecode
HTTP Method: GET
Response Type: string
Response Codes: 200, 400, 401, 429, 500

 *
 * @link https://api.groundspeak.com/documentation#get-reference-code
 * @access public
 * @return object
 */
GeocachingApi.prototype.getReferenceCode = function (cb) {
    if (!array_key_exists('id', params)) {
        throw new Exception('id is missing.');
    }
    if (!array_key_exists('codePrefix', params)) {
        throw new Exception('codePrefix is missing.');
    }
    return this.getRequest('/v1/utilities/referencecode', cb);
}
/**
 * Get Bookmark List By Guid
 *
 * - required param: BookmarkListGuid
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetBookmarkListByGuid
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getBookmarkListByGuid = function (params, cb) {
    if (!array_key_exists('BookmarkListGuid', params)) {
        throw new Exception('BookmarkListGuid is missing.');
    }
    var post_params = {
        BookmarkListGuid: params['BookmarkListGuid']
    };
    return this.postRequest('getBookmarkListByGuid', post_params, cb);
}
/**
 * Get Bookmark Lists By User ID
 *
 * - required param: userID
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetBookmarkListsByUserID
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getBookmarkListsByUserID = function (params, cb) {
    if (!array_key_exists('userID', params)) {
        throw new Exception('userID is missing.');
    }
    var get_params = {
        userID: parseInt(params['userID'])
    };
    return this.getRequest('getBookmarkListsByUserID', get_params, cb);
}
/**
 * Get Bookmark Lists For User
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetBookmarkListsForUser
 * @access public
 * @return object
 */
GeocachingApi.prototype._getBookmarkListsForUser = function (cb) {
    return this.getRequest('getBookmarkListsForUser', cb);
}
/**
 * Get Cache Ids Favorited By User
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetCacheIdsFavoritedByUser
 * @access public
 * @return object
 */
GeocachingApi.prototype._getCacheIdsFavoritedByUser = function (cb) {
    return this.getRequest('getCacheIdsFavoritedByUser', cb);
}
/**
 * Get Caches Favorited By User
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetCachesFavoritedByUser
 * @access public
 * @return object
 */
GeocachingApi.prototype._getCachesFavoritedByUser = function (cb) {
    return this.getRequest('getCachesFavoritedByUser', cb);
}
/**
 * Get Full Pocket Query Data
 *
 * Returns a complete Geocache object without those full caches counting against user's cache limit.
 *
 * - required params: pocketQueryGuid, maxItems
 * - optional param: startItem
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetFullPocketQueryData
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getFullPocketQueryData = function (params, cb) {
    if (!array_key_exists('pocketQueryGuid', params)) {
        throw new Exception('pocketQueryGuid is missing.');
    }
    if (!array_key_exists('maxItems', params)) {
        throw new Exception('maxItems is missing.');
    }
    var get_params = {
        pocketQueryGuid: params['pocketQueryGuid'],
        maxItems: parseInt(params['maxItems'])
    };
    if (array_key_exists('startItem', params)) {
        get_params['startItem'] = parseInt(params['startItem']);
    }
    return this.getRequest('getFullPocketQueryData', get_params, cb);
}
/**
 * GET GEOCACHE TYPES
This method will fetch all valid geocache types

Path: /v1/geocachetypes
HTTP Method: GET
Response Type: Array of Geocache Types
Response Codes: 200, 401, 429, 500
 *
 * - https://api.groundspeak.com/documentation#type
 *
 * @link https://api.groundspeak.com/documentation#get-geocache-types
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocacheTypes = function (params, cb) {
    return this.getRequest('/v1/geocachetypes', params, cb);
}
/**
 * GET GEOCOIN TYPES
This method will fetch all valid geocoin types

Path: /v1/trackables/geocointypes
HTTP Method: GET
Response Type: Array of Types
Response Codes: 200, 400, 401, 500


 *
 * - https://api.groundspeak.com/documentation#type
 *
 * @link https://api.groundspeak.com/documentation#get-geocoin-types
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocoinTypes = function (params, cb) {
    return this.getRequest('/v1/trackables/geocointypes', params, cb);
}
/**
 * GET TRACKABLE LOG TYPES
This method will fetch all valid trackable log types

Path: /v1/trackablelogtypes
HTTP Method: GET
Response Type: Array of Trackable Log Types
Response Codes: 200, 401, 500


 *
 * - https://api.groundspeak.com/documentation#type
 *
 * @link https://api.groundspeak.com/documentation#get-trackablelog-types
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackableLogTypes = function (params, cb) {
    return this.getRequest('/v1/trackablelogtypes', params, cb);
}


/**
 * GET GEOCACHE'S LOGS
This method will fetch a specified geocache's logs using the reference code

Path: /v1/geocaches/{referenceCode}/geocachelogs
HTTP Method: GET
Response Type: Array of Geocache Logs
Response Codes: 200, 400, 401, 403, 404, 429, 500
Restrictions: Basic members restriction applies. See Membership Restrictions section for more info.
 *
 * @link https://api.groundspeak.com/documentation#get-geocache-logs
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocacheLogs = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/geocaches/{referenceCode}/geocachelogs', params, cb);
}
/**
 * GET GEOCACHE LOG
This method will fetch the specified geocache log using the reference code

Path: /v1/geocachelogs/{referenceCode}
HTTP Method: GET
Response Type: Geocache Log
Response Codes: 200, 400, 401, 404, 429, 500
Restrictions: Basic members restriction applies. See Membership Restrictions section for more info.
 *
 * @link https://api.groundspeak.com/documentation#get-geocachelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocacheLog = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/geocachelogs/{referenceCode}', params, cb);
}
/**
 * Get Geocache Status
 *
 * - required param: CacheCodes
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetGeocacheStatus
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getGeocacheStatus = function (params, cb) {
    if (!array_key_exists('CacheCodes', params)) {
        throw new Exception('CacheCodes is missing.');
    }
    var post_params = {
        CacheCodes: params['CacheCodes']
    };
    return this.postRequest('getGeocacheStatus', post_params, cb);
}
/**
 * Get Geocache
 *
 * GET GEOCACHE
 * This method will fetch a specified geocache using the reference code
 * 
 * Path: /v1/geocaches/{referenceCode}
 * HTTP Method: GET
 * Response Type: Geocache
 * Response Codes: 200, 400, 401, 403, 404, 429, 500
 *
 * @link https://api.groundspeak.com/documentation#get-geocache
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocache = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/geocaches/{referenceCode}', params, cb);
}
/**
 * GET GEOCACHES
 * This method will fetch the specified geocaches using the reference codes
 * 
 * Path: /v1/geocaches
 * HTTP Method: GET
 * Response Type: Array of Geocaches or Lite Geocaches
 * Response Codes: 200, 400, 401, 403, 429, 500
 *
 * @link https://api.groundspeak.com/documentation#get-geocache
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocaches = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/geocaches', params, cb);
}
/**
 * Get Geocache Types
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetGeocacheTypes
 * @access public
 * @return object
 */
GeocachingApi.prototype._getGeocacheTypes = function (cb) {
    return this.getRequest('getGeocacheTypes', cb);
}
/**
 * GET GEOCACHE LOG TYPES
This method will fetch all valid geocache log types

Path: /v1/geocachelogtypes
HTTP Method: GET
Response Type: Array of Geocache Log Types
Response Codes: 200, 401, 429, 500
 *
 * @link https://api.groundspeak.com/documentation#get-geocachelog-types
 * @access public
 * @return object
 */
GeocachingApi.prototype.getGeocacheTypes = function (cb) {
    return this.getRequest('/v1/geocachelogtypes', cb);
}



/**
 * GET GEOCACHE IMAGES
This method will fetch the images for the specified geocache

Path: /v1/geocaches/{referenceCode}/images
HTTP Method: GET
Response Type: Array of Images
Response Codes: 200, 400, 401, 403, 404, 429, 500


 *
 * @link https://api.groundspeak.com/documentation#get-geocache-images
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocacheImages = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/geocaches/{referenceCode}/images', params, cb);
}

/**
 * GET GEOCACHE LOG IMAGES
This method will fetch a specified geocache log's images using the reference code

Path: /v1/geocachelogs/{referenceCode}/images
HTTP Method: GET
Response Type: Array of Images
Response Codes: 200, 400, 401, 404, 429, 500
Restrictions: Basic members restriction applies. See Membership Restrictions section for more info.
 *
 * @link https://api.groundspeak.com/documentation#get-geocachelog-images
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocacheLogImages = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/geocachelogs/{referenceCode}/images', params, cb);
}
/**
 * ADD GEOCACHE LOG IMAGE
This method will add a new image to the specified geocache log. It will return the added image.

Path: /v1/geocachelogs/{referenceCode}/images
HTTP Method: POST
Response Type: Image
Response Codes: 201, 400, 401, 403, 404, 409, 429, 500
Restrictions: Only owner of geocache log may add an image.
 *
 * @link https://api.groundspeak.com/documentation#create-geocachelog-image
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.addGeocacheLogImages = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    if (!array_key_exists('image', params)) {
        throw new Exception('image is missing.');
    }
    return this.postRequest('/v1/geocachelogs/{referenceCode}/images', params, cb);
}

/**
 * DELETE GEOCACHE LOG IMAGE
This method will delete an image to the specified geocache log.

Path: /v1/geocachelogs/{referenceCode}/images/{imageGuid}
HTTP Method: DELETE
Response Type: No response body
Response Codes: 201, 400, 401, 403, 409, 429, 500
Restrictions: Only owner of geocache log may delete an image.
 *
 * @link https://api.groundspeak.com/documentation#delete-geocachelog-image
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.deleteGeocacheLogImages = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    if (!array_key_exists('imageGuid', params)) {
        throw new Exception('imageGuid is missing.');
    }
    return this.deleteRequest('/v1/geocachelogs/{referenceCode}/images/{imageGuid}', params, cb);
}
/**
 * Get Membership Types
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetMembershipTypes
 * @access public
 * @return object
 */
GeocachingApi.prototype._getMembershipTypes = function (cb) {
    return this.getRequest('getMembershipTypes', cb);
}

/**
 * Get Owned Trackables
 *
 * - required params: StartIndex, take
 * - optional params: TrackableLogsCount, CollectionOnly
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetOwnedTrackables
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getOwnedTrackables = function (params, cb) {
    if (!array_key_exists('StartIndex', params)) {
        throw new Exception('StartIndex is missing.');
    }
    if (!array_key_exists('take', params)) {
        throw new Exception('take is missing.');
    }
    var post_params = {};
    post_params['StartIndex'] = parseInt(params['StartIndex']);
    post_params['take'] = parseInt(params['take']);
    if (array_key_exists('TrackableLogsCount', params)) {
        post_params['TrackableLogsCount'] = parseInt(params['TrackableLogsCount']);
    }
    if (array_key_exists('CollectionOnly', params)) {
        post_params['CollectionOnly'] = parseBoolean(params['CollectionOnly']);
    }
    return this.postRequest('getOwnedTrackables', post_params, cb);
}
/**
 * Get Pocket Query Data
 *
 * - required params: pocketQueryGuid, maxItems
 * - optional params: startItem, gcListOnly
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetPocketQueryData
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getPocketQueryData = function (params, cb) {
    if (!array_key_exists('pocketQueryGuid', params)) {
        throw new Exception('pocketQueryGuid is missing.');
    }
    if (!array_key_exists('maxItems', params)) {
        throw new Exception('maxItems is missing.');
    }
    var get_params = {};
    get_params['pocketQueryGuid'] = params['pocketQueryGuid'];
    get_params['maxItems'] = parseInt(params['maxItems']);
    if (array_key_exists('startItem', params)) {
        get_params['startItem'] = parseInt(params['startItem']);
    }
    if (array_key_exists('gcListOnly', params)) {
        get_params['gcListOnly'] = parseBoolean(params['gcListOnly']) ? 'true' : 'false';
    }
    return this.getRequest('getPocketQueryData', get_params, cb);
}
/**
 * Get Pocket Query List
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetPocketQueryList
 * @access public
 * @return object
 */
GeocachingApi.prototype._getPocketQueryList = function (cb) {
    return this.getRequest('getPocketQueryList', cb);
}
/**
 * Get Pocket Query Zipped File
 *
 * - required param: pocketQueryGuid
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetPocketQueryZippedFile
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getPocketQueryZippedFile = function (params, cb) {
    if (!array_key_exists('pocketQueryGuid', params)) {
        throw new Exception('pocketQueryGuid is missing.');
    }
    var get_params = {
        pocketQueryGuid: params['pocketQueryGuid']
    };
    return this.getRequest('getPocketQueryZippedFile', get_params, cb);
}
/**
 * Get Site Stats
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetSiteStats
 * @access public
 * @return object
 */
GeocachingApi.prototype._getSiteStats = function (cb) {
    return this.getRequest('getSiteStats', cb);
}
/**
 * Get Status Messages
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetStatusMessages
 * @access public
 * @return object
 */
GeocachingApi.prototype._getStatusMessages = function (cb) {
    return this.getRequest('getStatusMessages', cb);
}
/**
 * GET TRACKABLE'S LOGS
This method will fetch a specified trackable's logs

Path: /v1/trackables/{referenceCode}/trackablelogs
HTTP Method: GET
Response Type: Array of Trackable Logs
Response Codes: 200, 400, 401, 404, 429, 500
 *
 * @link https://api.groundspeak.com/documentation#get-trackable-logs
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackableLogs = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/trackables/{referenceCode}/trackablelogs', params, cb);
}
/**
 * GET TRACKABLE LOG
This method will fetch the specified trackable log

Path: /v1/trackablelogs/{referenceCode}
HTTP Method: GET
Response Type: Trackable Log
Response Codes: 200, 400, 401, 404, 500

 *
 * @link https://api.groundspeak.com/documentation#get-trackablelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackableLog = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/trackablelogs/{referenceCode}', params, cb);
}
/**
 * GET TRACKABLE LOG IMAGES
This method will fetch a specified trackable log's images

Path: /v1/trackablelogs/{referenceCode}/images
HTTP Method: GET
Response Type: Array of Images
Response Codes: 200, 400, 401, 404, 500

 *
 * @link https://api.groundspeak.com/documentation#get-trackablelog-images
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackableLogimages = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/trackablelogs/{referenceCode}/images', params, cb);
}
/**
 * CREATE TRACKABLE LOG
This method will create a new log to the specified trackable. It will return the created trackable log.

Path: /v1/trackablelogs
HTTP Method: POST
Response Type: Trackable Log
Response Codes: 201, 400, 401, 404, 409, 500

 *
 * @link https://api.groundspeak.com/documentation#create-trackablelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.createTrackableLog = function (params, cb) {
    if (!array_key_exists('log', params)) {
        throw new Exception('log is missing.');
    }
    return this.postRequest('/v1/trackablelogs', params, cb);
}
/**
 * ADD TRACKABLE LOG IMAGE
This method will add a new image to the specified trackable log. It will return the added image.

Path: /v1/trackablelogs/{referenceCode}/images
HTTP Method: POST
Response Type: Image
Response Codes: 201, 400, 401, 403, 404, 409, 500
Restrictions: Only owner of trackable log may add an image.

 *
 * @link https://api.groundspeak.com/documentation#create-trackablelog-image
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.createTrackableLogImage = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    if (!array_key_exists('image', params)) {
        throw new Exception('image is missing.');
    }
    return this.postRequest('/v1/trackablelogs/{referenceCode}/images', params, cb);
}
/**
 * UPDATE TRACKABLE LOG
This method will update a specified trackable log. It will return the updated trackable log.

Path: /v1/trackablelogs/{referenceCode}
HTTP Method: PUT
Response Type: TrackableLog
Response Codes: 200, 400, 401, 403, 404, 409, 500
Restrictions: Only owner of trackable log may update the log.
 *
 * @link https://api.groundspeak.com/documentation#update-trackablelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.updateTrackableLog = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.putRequest('/v1/trackablelogs/{referenceCode}', params, cb);
}
/**
 * DELETE TRACKABLE LOG
This method will delete a specified trackable log.

Path: /v1/trackablelogs/{referenceCode}
HTTP Method: DELETE
Response Type: No response body
Response Codes: 204, 400, 401, 403, 409, 500
Restrictions: Only owner of trackable log may delete the log.

 *
 * @link https://api.groundspeak.com/documentation#delete-trackablelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.deleteTrackableLog = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.deleteRequest('/v1/trackablelogs/{referenceCode}', params, cb);
}
/**
 * DELETE TRACKABLE LOG IMAGE
This method will delete an image to the specified trackable log.

Path: /v1/trackablelogs/{referenceCode}/images/{imageGuid}
HTTP Method: DELETE
Response Type: No response body
Response Codes: 201, 400, 401, 403, 409, 500
Restrictions: Only owner of trackable log may delete an image.

 *
 * @link https://api.groundspeak.com/documentation#delete-trackablelog-image
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.deleteTrackableLogImage = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    if (!array_key_exists('imageGuid', params)) {
        throw new Exception('imageGuid is missing.');
    }
    return this.deleteRequest('/v1/trackablelogs/{referenceCode}/images/{imageGuid}', params, cb);
}
/**
 * CREATE TRACKABLE LOG
This method will create a new log to the specified trackable. It will return the created trackable log.

Path: /v1/trackablelogs
HTTP Method: POST
Response Type: Trackable Log
Response Codes: 201, 400, 401, 404, 409, 500

 *
 * @link https://api.groundspeak.com/documentation#create-trackablelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.createTrackableLog = function (params, cb) {
    if (!array_key_exists('log', params)) {
        throw new Exception('log is missing.');
    }
    return this.postRequest('/v1/trackablelogs', params, cb);
}
/**
 * Get Trackables By TB Code
 *
 * - required param: tbCode
 * - optional param: trackableLogCount
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetTrackablesByTBCode
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getTrackablesByTBCode = function (params, cb) {
    if (!array_key_exists('tbCode', params)) {
        throw new Exception('tbCode is missing.');
    }
    var get_params = {
        tbCode: params['tbCode']
    };
    if (array_key_exists('trackableLogCount', params)) {
        get_params['trackableLogCount'] = parseInt(params['trackableLogCount']);
    }
    return this.getRequest('getTrackablesByTBCode', get_params, cb);
}
/**
 * Get Trackables By Tracking Number
 *
 * - required param: trackingNumber
 * - optional param: trackableLogCount
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetTrackablesByTrackingNumber
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getTrackablesByTrackingNumber = function (params, cb) {
    if (!array_key_exists('trackingNumber', params)) {
        throw new Exception('trackingNumber is missing.');
    }
    var get_params = {
        trackingNumber: params['trackingNumber']
    };
    if (array_key_exists('trackableLogCount', params)) {
        get_params['trackableLogCount'] = parseInt(params['trackableLogCount']);
    }
    return this.getRequest('getTrackablesByTrackingNumber', get_params, cb);
}
/**
 * GET GEOCACHE'S TRACKABLES
This method will fetch a specified geocache's trackables

Path: /v1/geocaches/{referenceCode}/trackables
HTTP Method: GET
Response Type: Array of Trackables
Response Codes: 200, 400, 401, 403, 404, 429, 500
Restrictions: Basic members restriction applies. See Membership Restrictions section for more info.
 *
 * @link https://api.groundspeak.com/documentation#get-geocache-trackables
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocacheTrackables = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/geocaches/{referenceCode}/trackables', params, cb);
}
/**
 * GET TRACKABLE
This method will fetch the specified trackable

Path: /v1/trackables/{referenceCode}
HTTP Method: GET
Response Type: Trackable
Response Codes: 200, 400, 401, 404, 500
 *
 * @link https://api.groundspeak.com/documentation#get-trackable
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackable = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/trackables/{referenceCode}', params, cb);
}
/**
 * GET TRACKABLES
This method will fetch either the requested trackables or the calling user's trackables in their possession.

Path: /v1/trackables
HTTP Method: GET
Response Type: Array of Trackables
Response Codes: 200, 400, 401, 404, 500
 *
 * @link https://api.groundspeak.com/documentation#get-users-trackables
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackables = function (params, cb) {
    return this.getRequest('/v1/trackables', params, cb);
}
/**
 * GET TRACKABLE IMAGES
This method will fetch a specified trackable's images

Path: /v1/trackables/{referenceCode}/images
HTTP Method: GET
Response Type: Array of Images
Response Codes: 200, 400, 401, 404, 500
 *
 * @link https://api.groundspeak.com/documentation#get-trackable-images
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackableImages = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    return this.getRequest('/v1/trackables/{referenceCode}/images', params, cb);
}



/**
 * Get Trackable Travel List
 *
 * - required param: tbCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetTrackableTravelList
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getTrackableTravelList = function (params, cb) {
    if (!array_key_exists('tbCode', params)) {
        throw new Exception('tbCode is missing.');
    }
    var get_params = {
        tbCode: params['tbCode']
    };
    return this.getRequest('getTrackableTravelList', get_params, cb);
}
/**
 * Get User Gallery
 *
 * - required params: Username, StartIndex, take
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUserGallery
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getUserGallery = function (params, cb) {
    if (!array_key_exists('Username', params)) {
        throw new Exception('Username is missing.');
    }
    if (!array_key_exists('StartIndex', params)) {
        throw new Exception('StartIndex is missing.');
    }
    if (!array_key_exists('take', params)) {
        throw new Exception('take is missing.');
    }
    var post_params = {
        Username: params['Username'],
        StartIndex: parseInt(params['StartIndex']),
        take: parseInt(params['take'])
    };
    return this.postRequest('getUserGallery', post_params, cb);
}
/**
 * Get Users Cache Counts
 *
 * - required param: Usernames
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersCacheCounts
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getUsersCacheCounts = function (params, cb) {
    if (!array_key_exists('Usernames', params)) {
        throw new Exception('Usernames is missing.');
    }
    if (!_.isArray(params['Usernames'])) {
        throw new Exception('Usernames must be an array.');
    }
    var post_params = {
        Usernames: params['Usernames']
    };
    return this.postRequest('getUsersCacheCounts', post_params, cb);
}
/**
 * Get Users Cache Notes
 *
 * - required param: maxPerPage
 * - optional param: startIndex
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersCacheNotes
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getUsersCacheNotes = function (params, cb) {
    if (!array_key_exists('maxPerPage', params)) {
        throw new Exception('maxPerPage is missing.');
    }
    var get_params = {
        maxPerPage: parseInt(params['maxPerPage'])
    };
    if (array_key_exists('startIndex', params)) {
        get_params['startIndex'] = parseInt(params['startIndex']);
    }
    return this.getRequest('getUsersCacheNotes', get_params, cb);
}
/**
 * Get Users Favorite Points
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersFavoritePoints
 * @access public
 * @return object
 */
GeocachingApi.prototype._getUsersFavoritePoints = function (cb) {
    return this.getRequest('getUsersFavoritePoints', cb);
}
/**
 * Get Users Geocache Logs
 *
 * - required params: Username, LogTypes, take
 * - optional params: StartIndex, EndDate, StartDate, ExcludeArchived
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersGeocacheLogs
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getUsersGeocacheLogs = function (params, cb) {
    if (!array_key_exists('Username', params)) {
        throw new Exception('Username is missing.');
    }
    if (!array_key_exists('LogTypes', params)) {
        throw new Exception('LogTypes is missing.');
    }
    if (!_.isArray(params['LogTypes'])) {
        throw new Exception('LogTypes must be an array.');
    }
    if (!array_key_exists('take', params)) {
        throw new Exception('take is missing.');
    }
    var post_params = {
        take: parseInt(params['take'])
    };
    if (array_key_exists('StartIndex', params)) {
        post_params['StartIndex'] = parseInt(params['StartIndex']);
    }
    post_params['Username'] = params['Username'];
    post_params['LogTypes'] = params['LogTypes'];
    if (array_key_exists('EndDate', params)) {
        _.merge(post_params, {
            Range: {
                EndDate: formatDate(params['EndDate'])
            }
        });
        //post_params['Range']['EndDate'] = formatDate(params['EndDate'] );
    } //EndDate is a timestamp
    if (array_key_exists('StartDate', params)) {
        _.merge(post_params, {
            Range: {
                StartDate: formatDate(params['StartDate'])
            }
        });
        //post_params['Range']['StartDate'] = formatDate(params['StartDate'] );
    } //StartDate is a timestamp
    if (array_key_exists('ExcludeArchived', params)) {
        post_params['ExcludeArchived'] = parseBoolean(params['ExcludeArchived']);
    }
    return this.postRequest('getUsersGeocacheLogs', post_params, cb);
}
/**
 * Get Users Trackables
 *
 * - required param: take
 * - optional params: StartIndex, TrackableLogsCount, CollectionOnly
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersTrackables
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getUsersTrackables = function (params, cb) {
    if (!array_key_exists('take', params)) {
        throw new Exception('take is missing.');
    }
    var post_params = {
        take: parseInt(params['take'])
    };
    if (array_key_exists('StartIndex', params)) {
        post_params['StartIndex'] = parseInt(params['StartIndex']);
    }
    if (array_key_exists('TrackableLogsCount', params)) {
        post_params['TrackableLogsCount'] = parseInt(params['TrackableLogsCount']);
    }
    if (array_key_exists('CollectionOnly', params)) {
        post_params['CollectionOnly'] = parseBoolean(params['CollectionOnly']);
    }
    return this.postRequest('getUsersTrackables', post_params, cb);
}
/**
 * Get Users Who Favorited Cache
 *
 * - required param: referenceCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersWhoFavoritedCache
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getUsersWhoFavoritedCache = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    var get_params = {
        referenceCode: params['referenceCode']
    };
    return this.getRequest('getUsersWhoFavoritedCache', get_params, cb);
}
/**
 * Get User Waypoints
 *
 * - required param: referenceCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUserWaypoints
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._getUserWaypoints = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    var get_params = {
        referenceCode: params['referenceCode']
    };
    return this.getRequest('getUserWaypoints', get_params, cb);
}
/**
 * Get Wpt Log Types
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetWptLogTypes
 * @access public
 * @return object
 */
GeocachingApi.prototype._getWptLogTypes = function (cb) {
    return this.getRequest('getWptLogTypes', cb);
}

/**
 * Remove Favorite Point From Cache
 *
 * - required param: referenceCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/RemoveFavoritePointFromCache
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._removeFavoritePointFromCache = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    var get_params = {
        referenceCode: params['referenceCode']
    };
    return this.getRequest('removeFavoritePointFromCache', get_params, cb);
}
/**
 * Save User Waypoint
 *
 * - required params: referenceCode, Latitude, Longitude
 * - optional param: Description, ID, IsCorrectedCoordinate, AssociatedAdditionalWaypoint, IsUserCompleted
 * *Note* The ID field in the request should only be set with an ID returned from the service (when you are updating a waypoint)
 * Otherwise this field should be left null.
 * Possible status codes:
 *     GetStatusOk - 0,
 *     GetFailStatus - 1,
 *     GetNotAuthorizedStatus - 2,
 *     GetGeocacheCodeIsNotValid - 12,
 *     GetInvalidInputsStatus - 100,
 *     GetCorrectedCoordinatesNotSupportedWithoutCacheId - 154,
 *     GetCannotSupportMoreThanOneCorrectedCoordinatesPerGeocache - 155
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/SaveUserWaypoint
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._saveUserWaypoint = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    if (!array_key_exists('Latitude', params)) {
        throw new Exception('Latitude is missing.');
    }
    if (!array_key_exists('Longitude', params)) {
        throw new Exception('Longitude is missing.');
    }
    var post_params = {
        referenceCode: params['referenceCode'],
        Latitude: parseFloat(params['Latitude']),
        Longitude: parseFloat(params['Longitude'])
    };

    if (array_key_exists('Description', params)) {
        post_params['Description'] = params['Description'];
    }
    if (array_key_exists('ID', params)) {
        post_params['ID'] = parseInt(params['ID']);
    }
    if (array_key_exists('IsCorrectedCoordinate', params)) {
        post_params['IsCorrectedCoordinate'] = parseBoolean(params['IsCorrectedCoordinate']);
    }
    if (array_key_exists('AssociatedAdditionalWaypoint', params)) {
        post_params['AssociatedAdditionalWaypoint'] = params['AssociatedAdditionalWaypoint'];
    }
    if (array_key_exists('IsUserCompleted', params)) {
        post_params['IsUserCompleted'] = parseBoolean(params['IsUserCompleted']);
    }
    return this.postRequest('saveUserWaypoint', post_params, cb);
}
/**
/**
 * Search For Souvenirs By Public Guid
 *
 * - required param: PublicGuid
 * - optional param: ExistingSouvenirIDs
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/SearchForSouvenirsByPublicGuid
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._searchForSouvenirsByPublicGuid = function (params, cb) {
    if (!array_key_exists('PublicGuid', params)) {
        throw new Exception('PublicGuid is missing.');
    }
    var post_params = {
        PublicGuid: params['PublicGuid']
    };
    if (array_key_exists('ExistingSouvenirIDs', params)) {
        post_params['ExistingSouvenirIDs'] = params['ExistingSouvenirIDs'];
    }
    return this.postRequest('searchForSouvenirsByPublicGuid', post_params, cb);
}
/**
 * UPSERT GEOCACHE NOTE
This method will add or update a note to the specified geocache. It will return the inserted or updated geocache note.

Path: /v1/geocaches/{referenceCode}/notes
HTTP Method: PUT
Response Type: string
Response Codes: 200, 400, 401, 403, 404, 409, 429, 500
Restrictions: Only owner may update the note.
 *
 * @link https://api.groundspeak.com/documentation#upsert-geocachenote
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.upsertGeocacheNote = function (params, cb) {
    if (!array_key_exists('referenceCode', params)) {
        throw new Exception('referenceCode is missing.');
    }
    if (!array_key_exists('note', params)) {
        throw new Exception('note is missing.');
    }
    return this.postRequest('/v1/geocaches/{referenceCode}/notes', params, cb);
}
/**
 * Upload Image To Geocache Log
 *
 * - required params: LogGuid, base64ImageData
 * - optional params: FileCaption, FileDescription, FileName
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/UploadImageToGeocacheLog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._uploadImageToGeocacheLog = function (params, cb) {
    if (!array_key_exists('LogGuid', params)) {
        throw new Exception('LogGuid is missing.');
    }
    if (!array_key_exists('base64ImageData', params)) {
        throw new Exception('base64ImageData is missing.');
    }
    var post_params = {
        LogGuid: params['LogGuid'],
        ImageData: {
            base64ImageData: base64_encode(params['base64ImageData'])
        }
    }
    if (array_key_exists('FileCaption', params)) {
        post_params['ImageData']['FileCaption'] = params['FileCaption'];
    }
    if (array_key_exists('FileDescription', params)) {
        post_params['ImageData']['FileDescription'] = params['FileDescription'];
    }
    if (array_key_exists('FileName', params)) {
        post_params['ImageData']['FileName'] = params['FileName'];
    }
    return this.postRequest('uploadImageToGeocacheLog', post_params, cb);
}
/**
 * Upload Image To Trackable Log
 *
 * - required params: LogGuid, base64ImageData
 * - optional params: FileCaption, FileDescription, FileName
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/UploadImageToTrackableLog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype._uploadImageToTrackableLog = function (params, cb) {
    if (!array_key_exists('LogGuid', params)) {
        throw new Exception('LogGuid is missing.');
    }

    if (!array_key_exists('base64ImageData', params)) {
        throw new Exception('base64ImageData is missing.');
    }
    var post_params = {
        LogGuid: params['LogGuid'],
        ImageData: {
            base64ImageData: base64_encode(params['base64ImageData'])
        }
    };
    if (array_key_exists('FileCaption', params)) {
        post_params['ImageData']['FileCaption'] = params['FileCaption'];
    }
    if (array_key_exists('FileDescription', params)) {
        post_params['ImageData']['FileDescription'] = params['FileDescription'];
    }
    if (array_key_exists('FileName', params)) {
        post_params['ImageData']['FileName'] = params['FileName'];
    }
    return this.postRequest('uploadImageToTrackableLog', post_params, cb);
}



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

// GeocachingApi.prototype.getRequest = function (request, params, done) {
//     //optional params
//     if (typeof done === 'undefined') {
//         done = params;
//         params = null;
//     }
//     //return this.request('GET', request, params, callback)
//     return new Promise((resolve, reject) => {
//         var url = this.getUrl(request);
//         //TODO : should I treat params into url ?
//         this.strategy._oauth._performSecureRequest(this.oauth_token, this.oauth_token_secret, 'GET', url, null, "", 'application/json', function (err, body, res) {
//             //this.strategy._oauth.get(url, this.oauth_token, this.oauth_token_secret, function (err, body, res) {
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
GeocachingApi.prototype.getRequest = function (request, post_body, done) {
    return this.genericRequest('get', request, post_body, done);
}
GeocachingApi.prototype.postRequest = function (request, post_body, done) {
    return this.genericRequest('post', request, post_body, done);
}
GeocachingApi.prototype.deleteRequest = function (request, post_body, done) {
    return this.genericRequest('delete', request, post_body, done);
}
GeocachingApi.prototype.putRequest = function (request, post_body, done) {
    return this.genericRequest('put', request, post_body, done);
}

GeocachingApi.prototype.genericRequest = function (method, request, post_body, done) {
    //return this.request('POST', request, params, callback)
    return new Promise((resolve, reject) => {
        var url = this.getUrl(request);
        post_body.AccessToken = this.oauth_token;
        this.strategy._oauth[method](url, this.oauth_token, this.oauth_token_secret, JSON.stringify(post_body), 'application/json', function (err, body, res) {
            if (err) {
                reject(err)
            } else {
                parseResonse(err, body, res, function (err, json) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(json);
                    }
                    if (done) {
                        done(err, json);
                    }
                });
            }
        });
    });

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
            var err_msg = util.format('GeocachingApi config must include `%s`.', req_key)
            throw new Error(err_msg)
        }
    })
}

module.exports = GeocachingApi