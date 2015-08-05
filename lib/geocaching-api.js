
/**
 * Geocaching API client for Node.js
 * Author: LudoO
 * 
 * 
 * Node.js port of the Geocaching API client from the very good PHP implementation by Surfoo
 * https://github.com/Surfoo/geocaching-api/blob/master/src/Geocaching/Api/GeocachingApi.php
 * 
 * */
var assert = require('assert'),
    request = require('request'),
    util = require('util'),
    querystring = require('querystring'),
    helpers= require('./helpers'),
    _ = require('lodash'),
    base64_encode = require('base64').encode;;

function Exception(msg, e){
    this.msg = msg;
    this.e = e;
}

// config values required for app-only auth
var required_for_app_auth = [
  'consumer_key',
  'consumer_secret'
  //,'oauth_token'
];

/**
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
        consumer_key       : config.consumer_key,
        consumer_secret    : config.consumer_secret
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
    
    this.strategy = this.config.strategy;
    
    /**
     * OAuth token sent by the client
     *
     * @access var
     * @var string $oauth_token
     */
    this.oauth_token   = this.config.oauth_token;
    this.oauth_token_secret   = this.config.oauth_token_secret;
    
    this.http_headers  = {'Content-Type': 'application/json'};
    if (this.config.live) {
        this.api_url = live_api_url;
    } else {
        this.api_url = staging_api_url;
    }
}

function array_key_exists(key, o){
    return o && o[key];
}

function parseDate(d){
    //return '/Date('+(parseInt(d) * 1000)+')/';
    return new Date(parseInt(d) * 1000);
}
function parseBoolean(v){
    return (v === 'true');
}

GeocachingApi.prototype.setAuth = function(params)
{
    _.assign(this.config, params);
};


GeocachingApi.prototype.getYourUserProfile = function(params, cb)
{
    return this.getUserProfile('getYourUserProfile', params, cb);
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
GeocachingApi.prototype.addGeocachesToBookmarkList= function(params)
{
    if (!array_key_exists('BookmarkListGuid', params)) {
        throw new Exception('BookmarkListGuid is missing.');
    }
    if (!array_key_exists('CacheCodes', params)) {
        throw new Exception('CacheCodes is missing.');
    }
    if (!is_array(params['CacheCodes'])) {
        throw new Exception('CacheCodes must be an array.');
    }
    var post_params = {
        BookmarkListGuid: params['BookmarkListGuid'],
        CacheCodes: params['CacheCodes']
    };
    return this.postRequest('addGeocachesToBookmarkList', post_params);
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
GeocachingApi.prototype.createFieldNoteAndPublish= function(params)
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
        UTCDateLogged: parseDate( params['UTCDateLogged']) , //UTCDateLogged is a timestamp
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
    return this.postRequest('createFieldNoteAndPublish', post_params);
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
GeocachingApi.prototype.createTrackableLog= function(params)
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
        UTCDateLogged: parseDate(params['UTCDateLogged']),
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
    return this.postRequest('createTrackableLog', post_params);
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
GeocachingApi.prototype.deleteCacheNote= function(params)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('deleteCacheNote', get_params);
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
GeocachingApi.prototype.deleteUserWaypoint= function(params)
{
    if (!array_key_exists('waypointID', params)) {
        throw new Exception('waypointID is missing.');
    }
    var get_params = {
        waypointID: parseInt(params['waypointID'])
    };
    return this.getRequest('deleteUserWaypoint', get_params);
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
GeocachingApi.prototype.geocodeString= function(params)
{
    if (!array_key_exists('GeocodeString', params)) {
        throw new Exception('GeocodeString is missing.');
    }
    var post_params = {
        GeocodeString: params['GeocodeString']
    };
    return this.postRequest('geocodeString', post_params);
}
/**
 * Get Another Users Profile
 *
 * - required param: UserID
 * - optional params: ChallengesData, FavoritePointsData, GeocacheData, PublicProfileData, SouvenirData, TrackableData
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetAnotherUsersProfile Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getAnotherUsersProfile= function(params)
{
    return this.getUserProfile('getAnotherUsersProfile', params);
}
/**
 * Get API Limits
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetAPILimits Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getAPILimits= function()
{
    return this.getRequest('getAPILimits');
}
/**
 * Get Attribute Types Data
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetAttributeTypesData Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getAttributeTypesData= function()
{
    return this.getRequest('getAttributeTypesData');
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
GeocachingApi.prototype.getBookmarkListByGuid= function(params)
{
    if (!array_key_exists('BookmarkListGuid', params)) {
        throw new Exception('BookmarkListGuid is missing.');
    }
    var post_params = {
        BookmarkListGuid: params['BookmarkListGuid']
    };
    return this.postRequest('getBookmarkListByGuid', post_params);
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
GeocachingApi.prototype.getBookmarkListsByUserID= function(params)
{
    if (!array_key_exists('userID', params)) {
        throw new Exception('userID is missing.');
    }
    var get_params = {
        userID: parseInt(params['userID'])
    };
    return this.getRequest('getBookmarkListsByUserID', get_params);
}
/**
 * Get Bookmark Lists For User
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetBookmarkListsForUser Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getBookmarkListsForUser= function()
{
    return this.getRequest('getBookmarkListsForUser');
}
/**
 * Get Cache Ids Favorited By User
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetCacheIdsFavoritedByUser Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getCacheIdsFavoritedByUser= function()
{
    return this.getRequest('getCacheIdsFavoritedByUser');
}
/**
 * Get Caches Favorited By User
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetCachesFavoritedByUser Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getCachesFavoritedByUser= function()
{
    return this.getRequest('getCachesFavoritedByUser');
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
GeocachingApi.prototype.getFullPocketQueryData= function(params)
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
    return this.getRequest('getFullPocketQueryData', get_params);
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
GeocachingApi.prototype.getGeocacheDataTypes= function(params)
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
    return this.getRequest('getGeocacheDataTypes', get_params);
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
GeocachingApi.prototype.getGeocacheLogsByCacheCode= function(params)
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
    return this.getRequest('getGeocacheLogsByCacheCode', get_params);
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
GeocachingApi.prototype.getGeocacheStatus= function(params)
{
    if (!array_key_exists('CacheCodes', params)) {
        throw new Exception('CacheCodes is missing.');
    }
    var post_params = {
        CacheCodes: params['CacheCodes']
    };
    return this.postRequest('getGeocacheStatus', post_params);
}
/**
 * Get Geocache Types
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetGeocacheTypes Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getGeocacheTypes= function()
{
    return this.getRequest('getGeocacheTypes');
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
GeocachingApi.prototype.getImagesForGeocache= function(params)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('getImagesForGeocache', get_params);
}
/**
 * Get Membership Types
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetMembershipTypes Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getMembershipTypes= function()
{
    return this.getRequest('getMembershipTypes');
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
GeocachingApi.prototype.getMoreGeocaches= function(params)
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
    return this.postRequest('getMoreGeocaches', post_params);
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
GeocachingApi.prototype.getOwnedTrackables= function(params)
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
    return this.postRequest('getOwnedTrackables', post_params);
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
GeocachingApi.prototype.getPocketQueryData= function(params)
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
    return this.getRequest('getPocketQueryData', get_params);
}
/**
 * Get Pocket Query List
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetPocketQueryList Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getPocketQueryList= function()
{
    return this.getRequest('getPocketQueryList');
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
GeocachingApi.prototype.getPocketQueryZippedFile= function(params)
{
    if (!array_key_exists('pocketQueryGuid', params)) {
        throw new Exception('pocketQueryGuid is missing.');
    }
    var get_params = {
        pocketQueryGuid: params['pocketQueryGuid']
    };
    return this.getRequest('getPocketQueryZippedFile', get_params);
}
/**
 * Get Site Stats
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetSiteStats Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getSiteStats= function()
{
    return this.getRequest('getSiteStats');
}
/**
 * Get Status Messages
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetStatusMessages Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getStatusMessages= function()
{
    return this.getRequest('getStatusMessages');
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
GeocachingApi.prototype.getTrackableLogsByTBCode= function(params)
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
    return this.getRequest('getTrackableLogsByTBCode', get_params);
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
GeocachingApi.prototype.getTrackablesByTBCode= function(params)
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
    return this.getRequest('getTrackablesByTBCode', get_params);
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
GeocachingApi.prototype.getTrackablesByTrackingNumber= function(params)
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
    return this.getRequest('getTrackablesByTrackingNumber', get_params);
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
GeocachingApi.prototype.getTrackablesInCache= function(params)
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
    return this.getRequest('getTrackablesInCache', get_params);
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
GeocachingApi.prototype.getTrackableTravelList= function(params)
{
    if (!array_key_exists('tbCode', params)) {
        throw new Exception('tbCode is missing.');
    }
    var get_params = {
        tbCode: params['tbCode']
    };
    return this.getRequest('getTrackableTravelList', get_params);
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
GeocachingApi.prototype.getUserGallery= function(params)
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
    return this.postRequest('getUserGallery', post_params);
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
GeocachingApi.prototype.getUsersCacheCounts= function(params)
{
    if (!array_key_exists('Usernames', params)) {
        throw new Exception('Usernames is missing.');
    }
    if (!is_array(params['Usernames'])) {
        throw new Exception('Usernames must be an array.');
    }
    var post_params = {
        Usernames: params['Usernames']
    };
    return this.postRequest('getUsersCacheCounts', post_params);
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
GeocachingApi.prototype.getUsersCacheNotes= function(params)
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
    return this.getRequest('getUsersCacheNotes', get_params);
}
/**
 * Get Users Favorite Points
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetUsersFavoritePoints Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getUsersFavoritePoints= function()
{
    return this.getRequest('getUsersFavoritePoints');
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
GeocachingApi.prototype.getUsersGeocacheLogs= function(params)
{
    if (!array_key_exists('Username', params)) {
        throw new Exception('Username is missing.');
    }
    if (!array_key_exists('LogTypes', params)) {
        throw new Exception('LogTypes is missing.');
    }
    if (!is_array(params['LogTypes'])) {
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
                EndDate: parseDate(params['EndDate'] )
            }
        } );
        //post_params['Range']['EndDate'] = parseDate(params['EndDate'] );
    } //EndDate is a timestamp
    if (array_key_exists('StartDate', params)) {
         _.merge(post_params, {
            Range: {
                StartDate: parseDate(params['StartDate'] )
            }
        } );
        //post_params['Range']['StartDate'] = parseDate(params['StartDate'] );
    } //StartDate is a timestamp
    if (array_key_exists('ExcludeArchived', params)) {
        post_params['ExcludeArchived'] = parseBoolean( params['ExcludeArchived']);
    }
    return this.postRequest('getUsersGeocacheLogs', post_params);
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
GeocachingApi.prototype.getUsersTrackables= function(params)
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
    return this.postRequest('getUsersTrackables', post_params);
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
GeocachingApi.prototype.getUsersWhoFavoritedCache= function(params)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('getUsersWhoFavoritedCache', get_params);
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
GeocachingApi.prototype.getUserWaypoints= function(params)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('getUserWaypoints', get_params);
}
/**
 * Get Wpt Log Types
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetWptLogTypes Documentation by Groundspeak
 * @access public
 * @return object
 */
GeocachingApi.prototype.getWptLogTypes= function()
{
    return this.getRequest('getWptLogTypes');
}
/**
 * Get Your User Profile
 *
 * - optional params: ChallengesData, FavoritePointsData, GeocacheData, PublicProfileData, SouvenirData, TrackableData, EmailData,
 * ApplicationCurrentMemoryUsage, ApplicationPeakMemoryUsage, ApplicationSoftwareVersion DeviceManufacturer, DeviceName, DeviceOperatingSystem,
 * DeviceTotalMemoryInMB, DeviceUniqueId, MobileHardwareVersion, WebBrowserVersion
 *
 * @link https://staging.api.groundspeak.com/Live/v6beta/geocaching.svc/help/operations/GetYourUserProfile Documentation by Groundspeak
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getYourUserProfile = function(params, cb)
{
    return this.getUserProfile('getYourUserProfile', params, cb);
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
GeocachingApi.prototype.removeFavoritePointFromCache= function(params)
{
    if (!array_key_exists('cacheCode', params)) {
        throw new Exception('cacheCode is missing.');
    }
    var get_params = {
        cacheCode: params['cacheCode']
    };
    return this.getRequest('removeFavoritePointFromCache', get_params);
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
GeocachingApi.prototype.saveUserWaypoint= function(params)
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
    return this.postRequest('saveUserWaypoint', post_params);
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
GeocachingApi.prototype.searchForGeocaches= function(params)
{
    var UserNamespost_params = {};
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
    if (array_key_exists('NotFoundByUsers', params) && is_array(params['NotFoundByUsers'])) {
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
    if (array_key_exists('CacheCodes', params) && is_array(params['CacheCodes'])) {
        _.merge(post_params, {
            CacheCode: {
                CacheCodes: params['CacheCodes']
            }
        } );
        //post_params['CacheCode']['CacheCodes'] = params['CacheCodes'];
    }
    if (array_key_exists('GeocacheTypeIds', params) && is_array(params['GeocacheTypeIds'])) {
        _.merge(post_params, {
            GeocacheType: {
                GeocacheTypeIds: params['GeocacheTypeIds']
            }
        } );
        //post_params['GeocacheType']['GeocacheTypeIds'] = params['GeocacheTypeIds'];
    }
    if (array_key_exists('GeocacheContainerSizeIds', params) && is_array(params['GeocacheContainerSizeIds'])) {
        _.merge(post_params, {
            GeocacheContainerSize: {
                GeocacheContainerSizeIds: params['GeocacheContainerSizeIds']
            }
        } );
        //post_params['GeocacheContainerSize']['GeocacheContainerSizeIds'] = params['GeocacheContainerSizeIds'];
    }
    if (array_key_exists('Archived', params)) {
        _.merge(post_params, {
            xx: {
                xx: params['xx']
            }
        } );
        //post_params['GeocacheExclusions']['Archived'] = parseBoolean( params['Archived']);
    }
    if (array_key_exists('Available', params)) {
        _.merge(post_params, {
            xx: {
                xx: params['xx']
            }
        } );
        //post_params['GeocacheExclusions']['Available'] = parseBoolean( params['Available']);
    }
    if (array_key_exists('HasCorrectedCoordinates', params)) {
        _.merge(post_params, {
            xx: {
                xx: params['xx']
            }
        } );
        //post_params['GeocacheExclusions']['HasCorrectedCoordinates'] = parseBoolean( params['HasCorrectedCoordinates']);
    }
    if (array_key_exists('HasPersonalCacheNote', params)) {
        _.merge(post_params, {
            xx: {
                xx: params['xx']
            }
        } );
        //post_params['GeocacheExclusions']['HasPersonalCacheNote'] = parseBoolean( params['HasPersonalCacheNote']);
    }
    if (array_key_exists('Premium', params)) {
        _.merge(post_params, {
            xx: {
                xx: params['xx']
            }
        } );
        //post_params['GeocacheExclusions']['Premium'] = parseBoolean( params['Premium']);
    }
    if (array_key_exists('Published', params)) {
        _.merge(post_params, {
            xx: {
                xx: params['xx']
            }
        } );
        //post_params['GeocacheExclusions']['Published'] = parseBoolean( params['Published']);
    }
    if (array_key_exists('MinFavoritePoints', params)) {
        _.merge(post_params, {
            xx: {
                xx: params['xx']
            }
        } );
        //post_params['FavoritePoints']['MinFavoritePoints'] = parseInt(params['MinFavoritePoints']);
    }
    if (array_key_exists('MaxFavoritePoints', params)) {
        _.merge(post_params, {
            xx: {
                xx: params['xx']
            }
        } );
        //post_params['FavoritePoints']['MaxFavoritePoints'] = parseInt(params['MaxFavoritePoints']);
    }
    if (array_key_exists('HiddenByUsers', params) && is_array(params['HiddenByUsers'])) {
        _.merge(post_params, {
            xx: {
                xx: params['xx']
            }
        } );
        //post_params['HiddenByUsers']['UserNames'] = params['HiddenByUsers'];
    }
    if (array_key_exists('NotHiddenByUsers', params) && is_array(params['NotHiddenByUsers'])) {
        _.merge(post_params, {
            NotHiddenByUsers: {
                UserNames: params['xx']
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
    if (array_key_exists('BookmarkListIDs', params) && is_array(params['BookmarkListIDs'])) {
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
                    StartDate: parseDate(params['StartDatePublished'])
                }
            }
        } );
        //post_params['CachePublishedDate']['Range']['StartDate'] = parseDate(params['StartDatePublished'] );
    } // StartDatePublished is a timestamp
    if (array_key_exists('EndDatePublished', params)) {
        _.merge(post_params, {
            CachePublishedDate: {
                Range: {
                    EndDate: parseDate(params['EndDatePublished'])
                }
            }
        } );
        //post_params['CachePublishedDate']['Range']['EndDate'] = parseDate(params['EndDatePublished'] )';
    } // EndDatePublished is a timestamp
    if (array_key_exists('StateIds', params) && is_array(params['StateIds'])) {
        _.merge(post_params, {
            States: {
                StateIds: params['StateIds']
            }
        } );
        //post_params['States']['StateIds'] = params['StateIds'];
    }
    if (array_key_exists('CountryIds', params) && is_array(params['CountryIds'])) {
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
                    StartDate: parseDate(params['StartDateEvent'] )
                }
            }
        } );
        //post_params['EventsDateRangeUtc']['Range']['StartDate'] = parseDate(params['StartDateEvent'] );
    } // StartDateEvent is a timestamp
    if (array_key_exists('EndDateEvent', params)) {
        _.merge(post_params, {
            EventsDateRangeUtc: {
                Range: {
                    EndDate: parseDate(params['EndDateEvent'] )
                }
            }
        } );
        //post_params['EventsDateRangeUtc']['Range']['EndDate'] = parseDate((params['EndDateEvent'] );
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
    return this.postRequest('searchForGeocaches', post_params);
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
GeocachingApi.prototype.searchForSouvenirsByPublicGuid= function(params)
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
    return this.postRequest('searchForSouvenirsByPublicGuid', post_params);
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
GeocachingApi.prototype.updateCacheNote= function(params)
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
    return this.postRequest('updateCacheNote', post_params);
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
GeocachingApi.prototype.uploadImageToGeocacheLog= function(params)
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
    return this.postRequest('uploadImageToGeocacheLog', post_params);
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
GeocachingApi.prototype.uploadImageToTrackableLog= function(params)
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
    return this.postRequest('uploadImageToTrackableLog', post_params);
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
    //var qparams = {format: 'json', AccessToken: this.oauth_token};
    var qparams = {format: 'json'};
    var query_string = '?'+querystring.stringify(qparams);
    var path = util.format(this.api_url, _.capitalize(request))+query_string;
    return path;
}
function parseResonse(err, body, res, done){
    if (err) { return done(new Exception('failed to fetch data', err)); }
    try {
        var json = JSON.parse(body);
      
        if (json.Status && json.Status.StatusCode===141){
            throw new Exception('failed to fetch user profile', json.Status.StatusMessage);
        }
        done(null, json);
    } catch(e) {
        done(e);
    }
}
GeocachingApi.prototype.getRequest= function(request, params, done) {
    //return this.request('GET', request, params, callback)
    var url = this.getUrl(request);
    this.strategy._oauth.get(url, this.oauth_token, this.oauth_token_secret, params, function (err, body, res) {
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

// GeocachingApi.prototype.request= function(method, request, params, callback) {
//     var self = this

//     //var qparams = _.assign(params, {format: 'json', AccessToken: this.oauth_token});
//     //var qparams = {format: 'json', AccessToken: this.oauth_token};
//     var qparams = {format: 'json'};
//     var query_string = '?'+querystring.stringify(qparams);
//     var path = util.format(this.api_url, _.capitalize(request))+query_string;
    
//     assert(method == 'GET' || method == 'POST')
//     // if no `params` is specified but a callback is, use default params
//     if (typeof params === 'function') {
//         callback = params
//         params = {}
//     }

//     self._buildReqOpts(method, path, params, false,function(err, reqOpts) {
//         if (err) {
//             callback(err, null, null)
//             return
//         }
        
//         var opts = (params && params.options) || {}
        
//         process.nextTick(function () {
//             // ensure all HTTP i/o occurs after the user has a chance to bind their event handlers
//             self._doRestApiRequest(reqOpts, opts, method, callback)
//         })
//     })
    
//     return self;
// }

// /**
//  * Make HTTP request to Geocaching REST API.
//  * @param  {Object}   reqOpts     options object passed to `request()`
//  * @param  {Object}   twitOptions
//  * @param  {String}   method      "GET" or "POST"
//  * @param  {Function} callback    user's callback
//  * @return {Undefined}
//  */
// GeocachingApi.prototype._doRestApiRequest= function(reqOpts, opts, method, callback) {
//   var request_method = request[method.toLowerCase()];
//   var req = request_method(reqOpts);

//   var body = '';
//   var response = null;

//   var onRequestComplete= function() {
//     try {
//       body = JSON.parse(body)
//     } catch (jsonDecodeError) {
//       // there was no transport-level error, but a JSON object could not be decoded from the request body
//       // surface this to the caller
//       var err = helpers.makeTwitError('JSON decode error: Geocaching HTTP response body was not valid JSON')
//       err.statusCode = response ? response.statusCode: null;
//       err.allErrors.concat({error: jsonDecodeError.toString()})
//       callback(err, body, response);
//       return
//     }

//     if (body.error || body.errors) {
//       // we got a Geocaching API-level error response
//       // place the errors in the HTTP response body into the Error object and pass control to caller
//       var err = helpers.makeTwitError('Geocaching API Error')
//       err.statusCode = response ? response.statusCode: null;
//       helpers.attachBodyInfoToError(err, body);
//       callback(err, body, response);
//       return
//     }

//     // success case - no errors in HTTP response body
//     callback(err, body, response)
//   }

//   req.on('response',function(res) {
//     response = res
//     // read data from `request` object which contains the decompressed HTTP response body,
//     // `response` is the unmodified http.IncomingMessage object which may contain compressed data
//     req.on('data',function(chunk) {
//       body += chunk.toString('utf8')
//     })
//     // we're done reading the response
//     req.on('end',function() {
//       onRequestComplete()
//     })
//   })

//   req.on('error',function(err) {
//     // transport-level error occurred - likely a socket error
//     if (opts.retry &&
//         STATUS_CODES_TO_ABORT_ON.indexOf(err.statusCode) !== -1
//     ) {
//       // retry the request since retries were specified and we got a status code we should retry on
//       self.request(method, path, params, callback);
//       return;
//     } else {
//       // pass the transport-level error to the caller
//       err.statusCode = null
//       err.code = null
//       err.allErrors = [];
//       helpers.attachBodyInfoToError(err, body)
//       callback(err, body, response);
//       return;
//     }
//   })
// }

/**
 * Make a GET request (from PHP surfoo API)
 *
 * @access protected
 * @param  string request
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.getRequestPHP = function(request, params)
{
    this.log(request, params);
    var output = '';
    params = _.merge(params, {format: 'json', AccessToken: this.oauth_token});
    var query_string = '?'+querystring.stringify(params);
    var url = util.format(this.api_url, _.capitalize(request))+query_string;
    this.log('curl_params', params);
    this.log('curl_url', url);
    // $ch = curl_init();
    // curl_setopt($ch, CURLOPT_HTTPHEADER, this.http_headers);
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    // curl_setopt($ch, CURLOPT_URL, url);
    // output = curl_exec($ch);
    // this.log('curl_exec', output);
    // $status = curl_getinfo($ch);
    // this.log('curl_getinfo', $status);
    // curl_close($ch);
    // if ($status['http_code'] != 200) {
    //     throw new Exception('HTTP error: '.$status['http_code']);
    // }
    // output = json_decode(output);
    // this.checkRequestStatus(output);
    return output;
}
/**
 * Make a POST request (from PHP surfoo API)
 *
 * @access protected
 * @param  string request
 * @param  array  $data
 * @return object
 */
GeocachingApi.prototype.postRequestPHP = function(request, data)
{
    this.log(request);
    var output = '';
    // params = array('format: 'json');
    // query_string = '?'.querystring.stringify(params);
    // url = format(this.api_url, ucfirst(request)).query_string;
    // $data = array_merge(array('AccessToken: this.oauth_token), data);
    // $data = json_encode($data);
    // this.log('curl_params', params);
    // this.log('curl_url', url);
    // this.log('curl_data', data);
    // $ch = curl_init();
    // curl_setopt($ch, CURLOPT_HTTPHEADER, this.http_headers);
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // curl_setopt($ch, CURLOPT_POSTFIELDS, data);
    // curl_setopt($ch, CURLOPT_POST, true);
    // curl_setopt($ch, CURLOPT_SSLVERSION, 4);
    // curl_setopt($ch, CURLOPT_URL, url);
    // output = curl_exec($ch);
    // this.log('curl_exec', output);
    // $status = curl_getinfo($ch);
    // this.log('curl_getinfo', $status);
    // curl_close($ch);
    // if ($status['http_code'] != 200) {
    //     throw new Exception('HTTP error: '.$status['http_code']);
    // }
    // output = json_decode(output);
    // this.checkRequestStatus(output);
    return output;
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