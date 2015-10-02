
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
 * */
var util = require('util'),
    querystring = require('querystring'),
    GeocachingStrategy = require('passport-geocaching').Strategy,
    //GeocachingStrategy = require('../../passport-geocaching/lib/index').Strategy,
    _ = require('lodash'),
    base64_encode = require('base64').encode;

function Exception(msg, e){
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
var staging_api_url = 'https://staging.api.groundspeak.com/Live/V6Beta/geocaching.svc/%s';
/**
 * Production URL of Groundspeak API
 *
 * @access var
 * @var string $live_api_url
 */
var live_api_url    = 'https://api.groundspeak.com/LiveV6/geocaching.svc/%s';

var STATUS_CODES_TO_ABORT_ON = [ 400, 401, 403, 404, 406, 410, 422 ];

function array_key_exists(key, o){
    return o && o[key];
}

//Can use momentjs (ASP.Net format supported)
// function parseDate(d){
//     //return '/Date('+(parseInt(d) * 1000)+')/';
//     return new Date(parseInt(d) * 1000);
// }
function formatDate(d){
  return '/Date('+(parseInt(d) * 1000)+')/';
}
function parseBoolean(v){
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
var GeocachingApi= function(config) {
    var self = this
    var credentials = {
        consumerKey       : config.consumerKey,
        consumerSecret    : config.consumerSecret
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

    this.http_headers  = {'Content-Type': 'application/json'};
    if (this.config.live) {
        this.api_url = live_api_url;
    } else {
        this.api_url = staging_api_url;
    }
    
    this.strategy = this.config.strategy;
    
    //Auto define strategy if not available
    if (typeof this.strategy ==='undefined'){
        this.strategy = new GeocachingStrategy(this.config, _.bind(this._verify, this));
        this.strategy.api = this;
    }
}

//Middleware for Express to set user credentails retrieved from storage
GeocachingApi.prototype.securized = function(req, res, next){
    if (!req.app.geoapi){
    	res.status(500).json({error:'Geocaching API not defined'});
    	return next(new Error('Geocaching API not defined'));
    }
    
    if (!req.user){
      res.status(500).json({error:'User not logged'});
      return next(new Error('User Geocaching not logged'));
    }
      
    if (!_.get(req, 'user.token')){
    	res.status(500).json({error:'User Geocaching not logged'});
    	return next(new Error('User Geocaching not logged'));
    }
    
    //in middleware or at loginuser (serializeuser passport)
    if (req.user){
    	req.app.geoapi.setAuth(req.user.token, req.user.tokensecret);
    }
    next();
}

//Warning : scope change
GeocachingApi.prototype.setAuth = function(token, tokenSecret){
    if (token){
        this.oauth_token = token;
        this.oauth_token_secret = tokenSecret;
    }
}

GeocachingApi.prototype._verify = function(token, tokenSecret, profile, done){
    //Saved for later usage on REST calls
    // this.strategy.api.setAuth(token, tokenSecret);
     this.setAuth(token, tokenSecret);
    
    // asynchronous verification, for effect...
    //process.nextTick(function () {
      
      // To keep the example simple, the user's Geocaching profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Geocaching account with a user record in your database,
      // and return that user instead.
      return done(null, false, {
          accessToken: token,
          refreshToken: tokenSecret,
          profile: profile
        });
  //});
}

GeocachingApi.prototype.getYourUserProfile = function(params, cb)
{
    return this.getUserProfile('getYourUserProfile', params, cb);
};

/**
 * Get ping service
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetPing Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.ping = function(cb)
{
    return this.getRequest('Ping', null, cb);
};

/**
 * Get Another Users Profile
 *
 * - required param: UserID
 * - optional params: ChallengesData, FavoritePointsData, GeocacheData, PublicProfileData, SouvenirData, TrackableData
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetAnotherUsersProfile Documentation by Groundspeak
 * @access public
 * @param  array  $params
 * @return object
 */
GeocachingApi.prototype.getAnotherUsersProfile = function(params, cb)
{
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
GeocachingApi.prototype.getUserProfile = function(fn, params, cb)
{
    var post_params = {
        ProfileOptions: {}
    };
    if (array_key_exists('UserID', params)) {
        post_params['UserID'] = parseInt(params['UserID']);
    }
    if (array_key_exists('FavoritePointsData', params)) {
        post_params['ProfileOptions']['FavoritePointsData'] = parseBoolean( params['FavoritePointsData']);
    }
    if (array_key_exists('GeocacheData', params)) {
        post_params['ProfileOptions']['GeocacheData'] = parseBoolean(params['GeocacheData']);
    }
    if (array_key_exists('PublicProfileData', params)) {
        post_params['ProfileOptions']['PublicProfileData'] = parseBoolean(params['PublicProfileData']);
    }
    if (array_key_exists('SouvenirData', params)) {
        post_params['ProfileOptions']['SouvenirData'] = parseBoolean( params['SouvenirData']);
    }
    if (array_key_exists('TrackableData', params)) {
        post_params['ProfileOptions']['TrackableData'] = parseBoolean(params['TrackableData']);
    }
    if (array_key_exists('EmailData', params)) {
        post_params['ProfileOptions']['EmailData'] = parseBoolean(params['EmailData']);
    }
    if (fn === 'getYourUserProfile') {
        post_params['DeviceInfo'] = {};
        post_params['DeviceInfo']['ApplicationCurrentMemoryUsage'] = 2048*1024;
        post_params['DeviceInfo']['ApplicationPeakMemoryUsage']    = 2048*1024;
        post_params['DeviceInfo']['ApplicationSoftwareVersion']    = 'blabla';
        post_params['DeviceInfo']['DeviceManufacturer']            = 'blabla';
        post_params['DeviceInfo']['DeviceName']                    = 'blabla';
        post_params['DeviceInfo']['DeviceOperatingSystem']         = 'blabla';
        post_params['DeviceInfo']['DeviceTotalMemoryInMB']         = 2048*1024;
        post_params['DeviceInfo']['DeviceUniqueId']                = 'blabla';
        post_params['DeviceInfo']['MobileHardwareVersion']         = 'blabla';
        post_params['DeviceInfo']['WebBrowserVersion']             = 'blabla';
    }
    return this.postRequest(fn, post_params, cb);
}




/**
 * Add Favorite Point To a Cache
 *
 * - required param: cacheCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/AddFavoritePointToCache Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.addFavoritePointToCache= function(params, cb)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {cacheCode: params.cacheCode};
    return this.getRequest('addFavoritePointToCache', get_params, cb);
}
/**
 * Add Geocaches To Bookmark List
 *
 * - required params: BookmarkListGuid, CacheCodes
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/AddGeocachesToBookmarkList Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.addGeocachesToBookmarkList= function(params, cb)
{
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
 * - required params: CacheCode, WptLogTypeId, UTCDateLogged, Note
 * - optional params: PromoteToLog, FavoriteThisCache, EncryptLogText, UpdatedLatitude, UpdatedLongitude, base64ImageData, FileCaption, FileDescription, FileName
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/CreateFieldNoteAndPublish Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.createFieldNoteAndPublish= function(params, cb)
{
    if (!array_key_exists('CacheCode', params)) {
        throw new Exception('CacheCode is missing.');
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
        CacheCode: params['CacheCode'],
        WptLogTypeId: params['WptLogTypeId'],
        UTCDateLogged: formatDate( params['UTCDateLogged']) , //UTCDateLogged is a timestamp
        Note: params['Note']
    };
    
    if (array_key_exists('PromoteToLog', params)) {
        post_params['PromoteToLog'] = parseBoolean(params['PromoteToLog']);
    }
    if (array_key_exists('FavoriteThisCache', params)) {
        post_params['FavoriteThisCache'] = parseBoolean(params['FavoriteThisCache'] );
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
 * Create Trackable Log
 *
 * - required params: TrackingNumber, UTCDateLogged, Note, LogType
 * - optional params: CacheCode, TravelBugCode, base64ImageData, FileCaption, FileDescription, FileName
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/CreateTrackableLog Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.createTrackableLog= function(params, cb)
{
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
 * Delete Cache Note
 *
 * - required param: cacheCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/DeleteCacheNote Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.deleteCacheNote= function(params, cb)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('deleteCacheNote', get_params, cb);
}
/**
 * Delete User Waypoint
 *
 * - required param: waypointID
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/DeleteUserWaypoint Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.deleteUserWaypoint= function(params, cb)
{
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
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GeocodeString Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.geocodeString= function(params, cb)
{
    if (!array_key_exists('GeocodeString', params)) {
        throw new Exception('GeocodeString is missing.');
    }
    var post_params = {
        GeocodeString: params['GeocodeString']
    };
    return this.postRequest('geocodeString', post_params, cb);
}

/**
 * Get API Limits
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetAPILimits Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getAPILimits= function(cb)
{
    return this.getRequest('getAPILimits', cb);
}
/**
 * Get Attribute Types Data
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetAttributeTypesData Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getAttributeTypesData= function(cb)
{
    return this.getRequest('getAttributeTypesData', cb);
}
/**
 * Get Bookmark List By Guid
 *
 * - required param: BookmarkListGuid
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetBookmarkListByGuid Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getBookmarkListByGuid= function(params, cb)
{
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
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetBookmarkListsByUserID Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getBookmarkListsByUserID= function(params, cb)
{
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
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetBookmarkListsForUser Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getBookmarkListsForUser= function(cb)
{
    return this.getRequest('getBookmarkListsForUser', cb);
}
/**
 * Get Cache Ids Favorited By User
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetCacheIdsFavoritedByUser Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getCacheIdsFavoritedByUser= function(cb)
{
    return this.getRequest('getCacheIdsFavoritedByUser', cb);
}
/**
 * Get Caches Favorited By User
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetCachesFavoritedByUser Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getCachesFavoritedByUser= function(cb)
{
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
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetFullPocketQueryData Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getFullPocketQueryData= function(params, cb)
{
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
 * Get Geocache Data Types
 *
 * - optional params: geocacheTypes, logTypes, attributeTypes
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetGeocacheDataTypes Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocacheDataTypes= function(params, cb)
{
    var get_params = {};
    if (array_key_exists('geocacheTypes', params)) {
        get_params['geocacheTypes'] = parseBoolean(params['geocacheTypes']) ? 'true': 'false';
    }
    if (array_key_exists('logTypes', params)) {
        get_params['logTypes'] = parseBoolean(params['logTypes']) ? 'true': 'false';
    }
    if (array_key_exists('attributeTypes', params)) {
        get_params['attributeTypes'] = parseBoolean( params['attributeTypes']) ? 'true': 'false';
    }
    return this.getRequest('getGeocacheDataTypes', get_params, cb);
}
/**
 * Get Geocache Logs By Cache Code
 *
 * - required params: cacheCode, maxPerPage
 * - optional param: startIndex
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetGeocacheLogsByCacheCode Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocacheLogsByCacheCode= function(params, cb)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    if (!array_key_exists('maxPerPage', params)) {
        throw new Exception('maxPerPage is missing.');
    }
    var get_params = {};
    get_params['cacheCode'] = params['cacheCode'];
    get_params['maxPerPage'] = parseInt(params['maxPerPage']);
    if (array_key_exists('startIndex', params)) {
        get_params['startIndex'] = parseInt(params['startIndex']);
    }
    return this.getRequest('getGeocacheLogsByCacheCode', get_params, cb);
}
/**
 * Get Geocache Status
 *
 * - required param: CacheCodes
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetGeocacheStatus Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getGeocacheStatus= function(params, cb)
{
    if (!array_key_exists('CacheCodes', params)) {
        throw new Exception('CacheCodes is missing.');
    }
    var post_params = {
        CacheCodes: params['CacheCodes']
    };
    return this.postRequest('getGeocacheStatus', post_params, cb);
}
/**
 * Get Geocache Types
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetGeocacheTypes Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getGeocacheTypes= function(cb)
{
    return this.getRequest('getGeocacheTypes', cb);
}
/**
 * Get Images For Geocache
 *
 * - required param: cacheCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetImagesForGeocache Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getImagesForGeocache= function(params, cb)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('getImagesForGeocache', get_params, cb);
}
/**
 * Get Membership Types
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetMembershipTypes Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getMembershipTypes= function(cb)
{
    return this.getRequest('getMembershipTypes', cb);
}
/**
 * Get More Geocaches
 *
 * - required params: IsLite, StartIndex, MaxPerPage, GeocacheLogCount, TrackableLogCount
 * - optional param: IsSummaryOnly
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetMoreGeocaches Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getMoreGeocaches= function(params, cb)
{
    if (!array_key_exists('IsLite', params)) {
        throw new Exception('IsLite is missing.');
    }
    if (!array_key_exists('StartIndex', params)) {
        throw new Exception('StartIndex is missing.');
    }
    if (!array_key_exists('MaxPerPage', params)) {
        throw new Exception('MaxPerPage is missing.');
    }
    if (!array_key_exists('GeocacheLogCount', params)) {
        throw new Exception('GeocacheLogCount is missing.');
    }
    if (!array_key_exists('TrackableLogCount', params)) {
        throw new Exception('TrackableLogCount is missing.');
    }
    var post_params = {};
    post_params['IsLite'] = parseBoolean( params['IsLite']);
    post_params['StartIndex'] = parseInt(params['StartIndex']);
    post_params['MaxPerPage'] = parseInt(params['MaxPerPage']);
    post_params['GeocacheLogCount'] = parseInt(params['GeocacheLogCount']);
    post_params['TrackableLogCount'] = parseInt(params['TrackableLogCount']);
    post_params['IsSummaryOnly'] = parseBoolean( params['IsSummaryOnly']);
    return this.postRequest('getMoreGeocaches', post_params, cb);
}
/**
 * Get Owned Trackables
 *
 * - required params: StartIndex, MaxPerPage
 * - optional params: TrackableLogsCount, CollectionOnly
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetOwnedTrackables Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getOwnedTrackables= function(params, cb)
{
    if (!array_key_exists('StartIndex', params)) {
        throw new Exception('StartIndex is missing.');
    }
    if (!array_key_exists('MaxPerPage', params)) {
        throw new Exception('MaxPerPage is missing.');
    }
    var post_params = {};
    post_params['StartIndex'] = parseInt(params['StartIndex']);
    post_params['MaxPerPage'] = parseInt(params['MaxPerPage']);
    if (array_key_exists('TrackableLogsCount', params)) {
        post_params['TrackableLogsCount'] = parseInt( params['TrackableLogsCount']);
    }
    if (array_key_exists('CollectionOnly', params)) {
        post_params['CollectionOnly'] = parseBoolean( params['CollectionOnly']);
    }
    return this.postRequest('getOwnedTrackables', post_params, cb);
}
/**
 * Get Pocket Query Data
 *
 * - required params: pocketQueryGuid, maxItems
 * - optional params: startItem, gcListOnly
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetPocketQueryData Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getPocketQueryData= function(params, cb)
{
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
        get_params['gcListOnly'] = parseBoolean( params['gcListOnly']) ? 'true': 'false';
    }
    return this.getRequest('getPocketQueryData', get_params, cb);
}
/**
 * Get Pocket Query List
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetPocketQueryList Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getPocketQueryList= function(cb)
{
    return this.getRequest('getPocketQueryList', cb);
}
/**
 * Get Pocket Query Zipped File
 *
 * - required param: pocketQueryGuid
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetPocketQueryZippedFile Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getPocketQueryZippedFile= function(params, cb)
{
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
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetSiteStats Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getSiteStats= function(cb)
{
    return this.getRequest('getSiteStats', cb);
}
/**
 * Get Status Messages
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetStatusMessages Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getStatusMessages= function(cb)
{
    return this.getRequest('getStatusMessages', cb);
}
/**
 * Get Trackable Logs By TB Code
 *
 * - required params: tbCode, maxPerPage
 * - optional param: startIndex
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetTrackableLogsByTBCode Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackableLogsByTBCode= function(params, cb)
{
    if (!array_key_exists('tbCode', params)) {
        throw new Exception('tbCode is missing.');
    }
    if (!array_key_exists('maxPerPage', params)) {
        throw new Exception('maxPerPage is missing.');
    }
    var get_params = {
        tbCode: params['tbCode'],
        maxPerPage: parseInt(params['maxPerPage'])
    };
    if (array_key_exists('startIndex', params)) {
        get_params['startIndex'] = parseInt(params['startIndex']);
    }
    return this.getRequest('getTrackableLogsByTBCode', get_params, cb);
}
/**
 * Get Trackables By TB Code
 *
 * - required param: tbCode
 * - optional param: trackableLogCount
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetTrackablesByTBCode Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackablesByTBCode= function(params, cb)
{
    if (!array_key_exists('tbCode', params)) {
        throw new Exception('tbCode is missing.');
    }
    var get_params = {
        tbCode: params['tbCode']
    };
    if (array_key_exists('trackableLogCount', params)) {
        get_params['trackableLogCount'] = parseInt( params['trackableLogCount']);
    }
    return this.getRequest('getTrackablesByTBCode', get_params, cb);
}
/**
 * Get Trackables By Tracking Number
 *
 * - required param: trackingNumber
 * - optional param: trackableLogCount
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetTrackablesByTrackingNumber Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackablesByTrackingNumber= function(params, cb)
{
    if (!array_key_exists('trackingNumber', params)) {
        throw new Exception('trackingNumber is missing.');
    }
    var get_params = {
        trackingNumber: params['trackingNumber']
    };
    if (array_key_exists('trackableLogCount', params)) {
        get_params['trackableLogCount'] = parseInt( params['trackableLogCount']);
    }
    return this.getRequest('getTrackablesByTrackingNumber', get_params, cb);
}
/**
 * Get Trackables In Cache
 *
 * - required params: cacheCode, maxPerPage
 * - optional params: startIndex, trackableLogCount
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetTrackablesInCache Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackablesInCache= function(params, cb)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    if (!array_key_exists('maxPerPage', params)) {
        throw new Exception('maxPerPage is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode'],
        maxPerPage: parseInt(params['maxPerPage'])
    };
    if (array_key_exists('startIndex', params)) {
        get_params['startIndex'] = parseInt(params['startIndex']);
    }
    if (array_key_exists('trackableLogCount', params)) {
        get_params['trackableLogCount'] = parseInt( params['trackableLogCount']);
    }
    return this.getRequest('getTrackablesInCache', get_params, cb);
}
/**
 * Get Trackable Travel List
 *
 * - required param: tbCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetTrackableTravelList Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getTrackableTravelList= function(params, cb)
{
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
 * - required params: Username, StartIndex, MaxPerPage
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUserGallery Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getUserGallery= function(params, cb)
{
    if (!array_key_exists('Username', params)) {
        throw new Exception('Username is missing.');
    }
    if (!array_key_exists('StartIndex', params)) {
        throw new Exception('StartIndex is missing.');
    }
    if (!array_key_exists('MaxPerPage', params)) {
        throw new Exception('MaxPerPage is missing.');
    }
    var post_params = {
        Username: params['Username'],
        StartIndex: parseInt(params['StartIndex']),
        MaxPerPage: parseInt(params['MaxPerPage'])
    };
    return this.postRequest('getUserGallery', post_params, cb);
}
/**
 * Get Users Cache Counts
 *
 * - required param: Usernames
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersCacheCounts Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getUsersCacheCounts= function(params, cb)
{
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
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersCacheNotes Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getUsersCacheNotes= function(params, cb)
{
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
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersFavoritePoints Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getUsersFavoritePoints= function(cb)
{
    return this.getRequest('getUsersFavoritePoints', cb);
}
/**
 * Get Users Geocache Logs
 *
 * - required params: Username, LogTypes, MaxPerPage
 * - optional params: StartIndex, EndDate, StartDate, ExcludeArchived
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersGeocacheLogs Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getUsersGeocacheLogs= function(params, cb)
{
    if (!array_key_exists('Username', params)) {
        throw new Exception('Username is missing.');
    }
    if (!array_key_exists('LogTypes', params)) {
        throw new Exception('LogTypes is missing.');
    }
    if (!_.isArray(params['LogTypes'])) {
        throw new Exception('LogTypes must be an array.');
    }
    if (!array_key_exists('MaxPerPage', params)) {
        throw new Exception('MaxPerPage is missing.');
    }
    var post_params = {
        MaxPerPage: parseInt(params['MaxPerPage'])
    };
    if (array_key_exists('StartIndex', params)) {
        post_params['StartIndex'] = parseInt(params['StartIndex']);
    }
    post_params['Username'] = params['Username'];
    post_params['LogTypes'] = params['LogTypes'];
    if (array_key_exists('EndDate', params)) {
        _.merge(post_params, {
            Range: {
                EndDate: formatDate(params['EndDate'] )
            }
        } );
        //post_params['Range']['EndDate'] = formatDate(params['EndDate'] );
    } //EndDate is a timestamp
    if (array_key_exists('StartDate', params)) {
         _.merge(post_params, {
            Range: {
                StartDate: formatDate(params['StartDate'] )
            }
        } );
        //post_params['Range']['StartDate'] = formatDate(params['StartDate'] );
    } //StartDate is a timestamp
    if (array_key_exists('ExcludeArchived', params)) {
        post_params['ExcludeArchived'] = parseBoolean( params['ExcludeArchived']);
    }
    return this.postRequest('getUsersGeocacheLogs', post_params, cb);
}
/**
 * Get Users Trackables
 *
 * - required param: MaxPerPage
 * - optional params: StartIndex, TrackableLogsCount, CollectionOnly
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersTrackables Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getUsersTrackables= function(params, cb)
{
    if (!array_key_exists('MaxPerPage', params)) {
        throw new Exception('MaxPerPage is missing.');
    }
    var post_params = {
        MaxPerPage: parseInt(params['MaxPerPage'])
    };
    if (array_key_exists('StartIndex', params)) {
        post_params['StartIndex'] = parseInt(params['StartIndex']);
    }
    if (array_key_exists('TrackableLogsCount', params)) {
        post_params['TrackableLogsCount'] = parseInt( params['TrackableLogsCount']);
    }
    if (array_key_exists('CollectionOnly', params)) {
        post_params['CollectionOnly'] = parseBoolean( params['CollectionOnly']);
    }
    return this.postRequest('getUsersTrackables', post_params, cb);
}
/**
 * Get Users Who Favorited Cache
 *
 * - required param: cacheCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersWhoFavoritedCache Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getUsersWhoFavoritedCache= function(params, cb)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('getUsersWhoFavoritedCache', get_params, cb);
}
/**
 * Get User Waypoints
 *
 * - required param: cacheCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUserWaypoints Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getUserWaypoints= function(params, cb)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('getUserWaypoints', get_params, cb);
}
/**
 * Get Wpt Log Types
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetWptLogTypes Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getWptLogTypes= function(cb)
{
    return this.getRequest('getWptLogTypes', cb);
}

/**
 * Remove Favorite Point From Cache
 *
 * - required param: cacheCode
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/RemoveFavoritePointFromCache Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.removeFavoritePointFromCache= function(params, cb)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('removeFavoritePointFromCache', get_params, cb);
}
/**
 * Save User Waypoint
 *
 * - required params: CacheCode, Latitude, Longitude
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
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/SaveUserWaypoint Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.saveUserWaypoint= function(params, cb)
{
    if (!array_key_exists('CacheCode', params)) {
        throw new Exception('CacheCode is missing.');
    }
    if (!array_key_exists('Latitude', params)) {
        throw new Exception('Latitude is missing.');
    }
    if (!array_key_exists('Longitude', params)) {
        throw new Exception('Longitude is missing.');
    }
    var post_params = {
        CacheCode: params['CacheCode'],
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
        post_params['IsCorrectedCoordinate'] = parseBoolean( params['IsCorrectedCoordinate']);
    }
    if (array_key_exists('AssociatedAdditionalWaypoint', params)) {
        post_params['AssociatedAdditionalWaypoint'] = params['AssociatedAdditionalWaypoint'];
    }
    if (array_key_exists('IsUserCompleted', params)) {
        post_params['IsUserCompleted'] = parseBoolean( params['IsUserCompleted']);
    }
    return this.postRequest('saveUserWaypoint', post_params, cb);
}
/**
 * Search For Geocaches
 *
 * - required params: DistanceInMeters && PointRadiusLatitude && PointRadiusLongitude OR CacheCode, MaxPerPage
 * - optional params: IsLite, StartIndex, MaxPerPage, GeocacheLogCount, TrackableLogCount, NotFoundByUsers, MinTerrain,
 * MaxTerrain, GeocacheName, MinDifficulty, MaxDifficulty, CacheCodes, GeocacheTypeIds, GeocacheContainerSizeIds,
 * Archived, Available, Premium, Published, MinFavoritePoints, MaxFavoritePoints, HiddenByUsers, NotHiddenByUsers, BottomRightLatitude,
 * BottomRightLongitude, TopLeftLatitude, TopLeftLongitude, BookmarkListIDs, ExcludeIgnoreList, MinTrackables, MaxTrackables,
 * UserNameFieldNotesFinds, StartDatePublished, EndDatePublished, StateIds, CountryIds, RecommendedOriginLatitude, RecommendedOriginLongitude,
 * StartDateEvent, EndDateEvent, AscendingOrder, SortFilterId, IsSummaryOnly, SortPointLatitude, SortPointLongitude
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/SearchForGeocaches Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.searchForGeocaches= function(params, cb)
{
    var post_params = {};
    if (array_key_exists('IsLite', params)) {
        post_params['IsLite'] = parseBoolean( params['IsLite']);
    }
    if (array_key_exists('MaxPerPage', params)) {
        post_params['MaxPerPage'] = parseInt(params['MaxPerPage']);
    }
    if (array_key_exists('GeocacheLogCount', params)) {
        post_params['GeocacheLogCount'] = parseInt(params['GeocacheLogCount']);
    }
    if (array_key_exists('TrackableLogCount', params)) {
        post_params['TrackableLogCount'] = parseInt(params['TrackableLogCount']);
    }
    if (array_key_exists('DistanceInMeters', params)) {
        _.merge(post_params, {
            PointRadius: {
                DistanceInMeters: parseInt(params['DistanceInMeters'])
            }
        } );
        //post_params['PointRadius']['DistanceInMeters'] = parseInt(params['DistanceInMeters']);
    }
    if (array_key_exists('PointRadiusLatitude', params)) {
        _.merge(post_params, {
            PointRadius: {
                Point: {
                    Latitude: parseFloat(params['PointRadiusLatitude'])
                }
            }
        } );
        //post_params['PointRadius']['Point']['Latitude'] = parseFloat(params['PointRadiusLatitude']);
    }
    if (array_key_exists('PointRadiusLongitude', params)) {
        _.merge(post_params, {
            PointRadius: {
                Point: {
                    Longitude: parseFloat(params['PointRadiusLongitude'])
                }
            }
        } );
        //post_params['PointRadius']['Point']['Longitude'] = parseFloat(params['PointRadiusLongitude']);
    }
    if (array_key_exists('NotFoundByUsers', params) && _.isArray(params['NotFoundByUsers'])) {
        _.merge(post_params, {
            NotFoundByUsers: {
                UserNames: params['NotFoundByUsers']
            }
        } );
        //post_params['NotFoundByUsers']['UserNames'] = params['NotFoundByUsers'];
    }
    if (array_key_exists('MinTerrain', params)) {
        _.merge(post_params, {
            Terrain: {
                MinTerrain: parseFloat(params['MinTerrain'])
            }
        } );
        //post_params['Terrain']['MinTerrain'] = parseFloat(params['MinTerrain']);
    }
    if (array_key_exists('MaxTerrain', params)) {
        _.merge(post_params, {
            Terrain: {
                MaxTerrain: parseFloat(params['MaxTerrain'])
            }
        } );
        //post_params['Terrain']['MaxTerrain'] = parseFloat(params['MaxTerrain']);
    }
    if (array_key_exists('GeocacheName', params)) {
        _.merge(post_params, {
            GeocacheName: {
                GeocacheName: params['GeocacheName']
            }
        } );
    }
    if (array_key_exists('MinDifficulty', params)) {
        _.merge(post_params, {
            Difficulty: {
                MinDifficulty: parseFloat(params['MinDifficulty'])
            }
        } );
        //post_params['Difficulty']['MinDifficulty'] = parseFloat(params['MinDifficulty']);
    }
    if (array_key_exists('MaxDifficulty', params)) {
        _.merge(post_params, {
            Difficulty: {
                MaxDifficulty: parseFloat(params['MinDifficulty'])
            }
        } );
        //post_params['Difficulty']['MaxDifficulty'] = parseFloat(params['MaxDifficulty']);
    }
    if (array_key_exists('CacheCodes', params) && _.isArray(params['CacheCodes'])) {
        _.merge(post_params, {
            CacheCode: {
                CacheCodes: params['CacheCodes']
            }
        } );
        //post_params['CacheCode']['CacheCodes'] = params['CacheCodes'];
    }
    if (array_key_exists('GeocacheTypeIds', params) && _.isArray(params['GeocacheTypeIds'])) {
        _.merge(post_params, {
            GeocacheType: {
                GeocacheTypeIds: params['GeocacheTypeIds']
            }
        } );
        //post_params['GeocacheType']['GeocacheTypeIds'] = params['GeocacheTypeIds'];
    }
    if (array_key_exists('GeocacheContainerSizeIds', params) && _.isArray(params['GeocacheContainerSizeIds'])) {
        _.merge(post_params, {
            GeocacheContainerSize: {
                GeocacheContainerSizeIds: params['GeocacheContainerSizeIds']
            }
        } );
        //post_params['GeocacheContainerSize']['GeocacheContainerSizeIds'] = params['GeocacheContainerSizeIds'];
    }
    if (array_key_exists('Archived', params)) {
        _.merge(post_params, {
            GeocacheExclusions: {
                Archived: parseBoolean(params['Archived'])
            }
        } );
        //post_params['GeocacheExclusions']['Archived'] = parseBoolean( params['Archived']);
    }
    if (array_key_exists('Available', params)) {
        _.merge(post_params, {
            GeocacheExclusions: {
                Available: parseBoolean(params['Available'])
            }
        } );
        //post_params['GeocacheExclusions']['Available'] = parseBoolean( params['Available']);
    }
    if (array_key_exists('HasCorrectedCoordinates', params)) {
        _.merge(post_params, {
            GeocacheExclusions: {
                HasCorrectedCoordinates: parseBoolean(params['HasCorrectedCoordinates'])
            }
        } );
        //post_params['GeocacheExclusions']['HasCorrectedCoordinates'] = parseBoolean( params['HasCorrectedCoordinates']);
    }
    if (array_key_exists('HasPersonalCacheNote', params)) {
        _.merge(post_params, {
            GeocacheExclusions: {
                HasPersonalCacheNote: parseBoolean(params['HasPersonalCacheNote'])
            }
        } );
        //post_params['GeocacheExclusions']['HasPersonalCacheNote'] = parseBoolean( params['HasPersonalCacheNote']);
    }
    if (array_key_exists('Premium', params)) {
        _.merge(post_params, {
            GeocacheExclusions: {
                Premium: parseBoolean(params['Premium'])
            }
        } );
        //post_params['GeocacheExclusions']['Premium'] = parseBoolean( params['Premium']);
    }
    if (array_key_exists('Published', params)) {
        _.merge(post_params, {
            GeocacheExclusions: {
                Published: parseBoolean(params['Published'])
            }
        } );
        //post_params['GeocacheExclusions']['Published'] = parseBoolean( params['Published']);
    }
    if (array_key_exists('MinFavoritePoints', params)) {
        _.merge(post_params, {
            FavoritePoints: {
                MinFavoritePoints: parseInt(params['MinFavoritePoints'])
            }
        } );
        //post_params['FavoritePoints']['MinFavoritePoints'] = parseInt(params['MinFavoritePoints']);
    }
    if (array_key_exists('MaxFavoritePoints', params)) {
        _.merge(post_params, {
            FavoritePoints: {
                MaxFavoritePoints: parseInt(params['MaxFavoritePoints'])
            }
        } );
        //post_params['FavoritePoints']['MaxFavoritePoints'] = parseInt(params['MaxFavoritePoints']);
    }
    if (array_key_exists('HiddenByUsers', params) && _.isArray(params['HiddenByUsers'])) {
        _.merge(post_params, {
            HiddenByUsers: {
                UserNames: params['HiddenByUsers']
            }
        } );
        //post_params['HiddenByUsers']['UserNames'] = params['HiddenByUsers'];
    }
    if (array_key_exists('NotHiddenByUsers', params) && _.isArray(params['NotHiddenByUsers'])) {
        _.merge(post_params, {
            NotHiddenByUsers: {
                UserNames: params['NotHiddenByUsers']
            }
        } );
        //post_params['NotHiddenByUsers']['UserNames'] = params['NotHiddenByUsers'];
    }
    if (array_key_exists('BottomRightLatitude', params)) {
        _.merge(post_params, {
            Viewport: {
                BottomRight: {
                    Latitude: parseFloat(params['BottomRightLatitude'])
                }
            }
        } );
        //post_params['Viewport']['BottomRight']['Latitude'] = parseFloat(params['BottomRightLatitude']);
    }
    if (array_key_exists('BottomRightLongitude', params)) {
        _.merge(post_params, {
            Viewport: {
                BottomRight: {
                    Longitude: parseFloat(params['BottomRightLongitude'])
                }
            }
        } );
        //post_params['Viewport']['BottomRight']['Longitude'] = parseFloat(params['BottomRightLongitude']);
    }
    if (array_key_exists('TopLeftLatitude', params)) {
        _.merge(post_params, {
            Viewport: {
                TopLeft: {
                    Latitude: parseFloat(params['TopLeftLatitude'])
                }
            }
        } );
        //post_params['Viewport']['TopLeft']['Latitude'] = parseFloat(params['TopLeftLatitude']);
    }
    if (array_key_exists('TopLeftLongitude', params)) {
        _.merge(post_params, {
            Viewport: {
                TopLeft: {
                    Longitude: parseFloat(params['TopLeftLongitude'])
                }
            }
        } );
        //post_params['Viewport']['TopLeft']['Longitude'] = parseFloat(params['TopLeftLongitude']);
    }
    if (array_key_exists('BookmarkListIDs', params) && _.isArray(params['BookmarkListIDs'])) {
        _.merge(post_params, {
            BookmarksExclude: {
                BookmarkListIDs: params['BookmarkListIDs']
            }
        } );
        //post_params['BookmarksExclude']['BookmarkListIDs'] = params['BookmarkListIDs'];
    }
    if (array_key_exists('ExcludeIgnoreList', params)) {
        _.merge(post_params, {
            BookmarksExclude: {
                ExcludeIgnoreList: parseBoolean( params['ExcludeIgnoreList'])
            }
        } );
        //post_params['BookmarksExclude']['ExcludeIgnoreList'] = parseBoolean( params['ExcludeIgnoreList'];
    }
    if (array_key_exists('MinTrackables', params)) {
        _.merge(post_params, {
            TrackableCount: {
                MinTrackables: parseInt(params['MinTrackables'])
            }
        } );
        //post_params['TrackableCount']['MinTrackables'] = parseInt(params['MinTrackables']);
    }
    if (array_key_exists('MaxTrackables', params)) {
        _.merge(post_params, {
            TrackableCount: {
                MaxTrackables: parseInt(params['MaxTrackables'])
            }
        } );
        //post_params['TrackableCount']['MaxTrackables'] = parseInt(params['MaxTrackables']);
    }
    if (array_key_exists('UserNameFieldNotesFinds', params)) {
        _.merge(post_params, {
            FieldNoteFinds: {
                UserName: params['UserNameFieldNotesFinds']
            }
        } );
        //post_params['FieldNoteFinds']['UserName'] = params['UserNameFieldNotesFinds'];
    }
    if (array_key_exists('StartDatePublished', params)) {
        _.merge(post_params, {
            CachePublishedDate: {
                Range: {
                    StartDate: formatDate(params['StartDatePublished'])
                }
            }
        } );
        //post_params['CachePublishedDate']['Range']['StartDate'] = formatDate(params['StartDatePublished'] );
    } // StartDatePublished is a timestamp
    if (array_key_exists('EndDatePublished', params)) {
        _.merge(post_params, {
            CachePublishedDate: {
                Range: {
                    EndDate: formatDate(params['EndDatePublished'])
                }
            }
        } );
        //post_params['CachePublishedDate']['Range']['EndDate'] = formatDate(params['EndDatePublished'] )';
    } // EndDatePublished is a timestamp
    if (array_key_exists('StateIds', params) && _.isArray(params['StateIds'])) {
        _.merge(post_params, {
            States: {
                StateIds: params['StateIds']
            }
        } );
        //post_params['States']['StateIds'] = params['StateIds'];
    }
    if (array_key_exists('CountryIds', params) && _.isArray(params['CountryIds'])) {
        _.merge(post_params, {
            Countries: {
                CountryIds: params['CountryIds']
            }
        } );
        //post_params['Countries']['CountryIds'] = params['CountryIds'];
    }
    if (array_key_exists('FoundByUser', params)) {
        _.merge(post_params, {
            FoundByUser: {
                UserName: params['FoundByUser']
            }
        } );
        //post_params['FoundByUser']['UserName'] = params['FoundByUser'];
    }
    if (array_key_exists('RecommendedOriginLatitude', params) && array_key_exists('RecommendedOriginLongitude', params)) {
        post_params['Recommended']= {
            Origin: {
                Latitude: parseFloat(params['RecommendedOriginLatitude']),
                Longitude: parseFloat(params['RecommendedOriginLongitude'])
            }
        };
    }
    if (array_key_exists('StartDateEvent', params)) {
        _.merge(post_params, {
            EventsDateRangeUtc: {
                Range: {
                    StartDate: formatDate(params['StartDateEvent'] )
                }
            }
        } );
        //post_params['EventsDateRangeUtc']['Range']['StartDate'] = formatDate(params['StartDateEvent'] );
    } // StartDateEvent is a timestamp
    if (array_key_exists('EndDateEvent', params)) {
        _.merge(post_params, {
            EventsDateRangeUtc: {
                Range: {
                    EndDate: formatDate(params['EndDateEvent'] )
                }
            }
        } );
        //post_params['EventsDateRangeUtc']['Range']['EndDate'] = formatDate((params['EndDateEvent'] );
    } // EndDateEvent is a timestamp
    if (array_key_exists('AscendingOrder', params)) {
        _.merge(post_params, {
            SortBys: {
                AscendingOrder: parseBoolean(params['AscendingOrder'])
            }
        } );
        //post_params['SortBys']['AscendingOrder'] = parseBoolean( params['AscendingOrder']);
    }
    if (array_key_exists('SortFilterId', params)) {
        _.merge(post_params, {
            SortBys: {
                SortFilterId: parseInt(params['SortFilterId'])
            }
        } );
        //post_params['SortBys']['SortFilterId'] = parseInt(params['SortFilterId']);
    }
    if (array_key_exists('IsSummaryOnly', params)) {
        post_params['IsSummaryOnly'] = parseBoolean( params['IsSummaryOnly']);
    }
    if (array_key_exists('SortPointLatitude', params) && array_key_exists('SortPointLongitude', params)) {
        post_params['SortPoint'] = {
            Latitude: parseFloat(params['SortPointLatitude']),
            Longitude: parseFloat(params['SortPointLongitude'])
        };
    }
    if (!array_key_exists('PointRadius', post_params) && !array_key_exists('CacheCode', post_params)) {
        throw new Exception('PointRadius or CacheCode is missing.');
    }
    if (!array_key_exists('MaxPerPage', post_params)) {
        throw new Exception('MaxPerPage is missing.');
    }
    return this.postRequest('searchForGeocaches', post_params, cb);
}
/**
 * Search For Souvenirs By Public Guid
 *
 * - required param: PublicGuid
 * - optional param: ExistingSouvenirIDs
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/SearchForSouvenirsByPublicGuid Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.searchForSouvenirsByPublicGuid= function(params, cb)
{
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
 * Update Cache Note
 *
 * - required params: CacheCode, Note
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/UpdateCacheNote Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.updateCacheNote= function(params, cb)
{
    if (!array_key_exists('CacheCode', params)) {
        throw new Exception('CacheCode is missing.');
    }
    if (!array_key_exists('Note', params)) {
        throw new Exception('Note is missing.');
    }
    var post_params = {
        CacheCode: params['CacheCode'],
        Note: params['Note']
    };
    return this.postRequest('updateCacheNote', post_params, cb);
}
/**
 * Upload Image To Geocache Log
 *
 * - required params: LogGuid, base64ImageData
 * - optional params: FileCaption, FileDescription, FileName
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/UploadImageToGeocacheLog Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.uploadImageToGeocacheLog= function(params, cb)
{
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
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/UploadImageToTrackableLog Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.uploadImageToTrackableLog= function(params, cb)
{
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
GeocachingApi.prototype.checkRequestStatus = function(content)
{
    if (!(content && content.Status && content.Status.StatusCode)) {
        throw new Exception(content.Status.StatusMessage, content.Status.StatusCode);
    }
}

GeocachingApi.prototype.getUrl = function(request){
    var qparams = {format: 'json', AccessToken: this.oauth_token};
    //var qparams = {format: 'json'};
    var query_string = '?'+querystring.stringify(qparams);
    var path = util.format(this.api_url, _.capitalize(request))+query_string;
    return path;
}
function parseResonse(err, body, res, done){
    if (err) { return done(new Exception('failed to fetch data', err)); }
    try {
        var json = JSON.parse(body);
      
        if (json.Status && json.Status.StatusCode>0){
            throw new Exception('Failed to access api : '+ json.Status.StatusMessage, json.Status);
        }
        done(null, json);
    } catch(e) {
        done(e);
    }
}

GeocachingApi.prototype.getRequest= function(request, params, done) {
    //optional params
    if (typeof done === 'undefined'){
        done = params;
        params = null;
    }
    //return this.request('GET', request, params, callback)
    var url = this.getUrl(request);
    //TODO : should I treat params into url ?
    this.strategy._oauth._performSecureRequest(this.oauth_token, this.oauth_token_secret, 'GET', url, null, "", 'application/json', function (err, body, res) {
    //this.strategy._oauth.get(url, this.oauth_token, this.oauth_token_secret, function (err, body, res) {
        parseResonse(err, body, res, done);
    });
}
GeocachingApi.prototype.postRequest= function(request, post_body, done) {
  //return this.request('POST', request, params, callback)
  var url = this.getUrl(request);
  post_body.AccessToken = this.oauth_token;
  this.strategy._oauth.post(url, this.oauth_token, this.oauth_token_secret, JSON.stringify(post_body), 'application/json', function (err, body, res) {
        parseResonse(err, body, res, done);
    });
}


/**
 * Enable or disable log messages
 *
 * @param  string directory
 * @return void
 */
GeocachingApi.prototype.setLogging = function(directory)
{
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
GeocachingApi.prototype.log = function($infos, obj)
{
    if (!this.logging) {
        return false;
    }
   //this.logger.addDebug($infos.": ".var_export(obj, true));
}

//
// Check that the required auth credentials are present in `config`.
// @param {Object}  config  Object containing credentials for REST API auth
//
GeocachingApi.prototype._validateConfigOrThrow= function(config) {
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