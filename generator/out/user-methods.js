

/**
 * Get User
 * This method will fetch the information about the user.
 *
 * @path: /v1/users/{referenceCode}
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
 * @param fields query required partial response fields to return referenceCode (fields=username,referenceCode)

 * @return User 
 * @responseCodes 200, 400, 401, 403, 404, 429, 500
 * @restrictions Users may opt out of sharing personal data. See
 */
GeocachingApi.prototype.getGetUser = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/users/{referenceCode}, params, cb);
}



/**
 * Get Users
 * This method will fetch the information about the specified users.
 *
 * @path: /v1/users
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCodes query required the identifiers of the users. The max amount of codes allowed is 50. - (referenceCodes=PR1,PR2,PR3)
 * @param usernames query required the username of the users. The max amount of usernames allowed is 50. - (usernames=test1,test2)
 * @param fields query required partial response fields to return referenceCode (fields=username,referenceCode)

 * @return Users 
 * @responseCodes 200, 400, 401, 404, 500
 * @restrictions Only referenceCodes will be respected if both are passed in. Users may opt out of sharing personal data. See
 */
GeocachingApi.prototype.getGetUsers = function (params, cb) {
    
    return this.GETRequest(/v1/users, params, cb);
}



/**
 * Get User Geocache Logs
 * This method will fetch the geocache logs for the user.
 *
 * @path: /v1/users/{referenceCode}/geocachelogs
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)
 * @param expand query required The fields of the geocache log object to expand. The available option is images. - (expand=images:5)
 * @param includeArchived query required includes archived logs in the results (see restrictions) false (includeArchived=false)
 * @param logTypes query required the log types to include in the results (see restrictions) all types (logTypes=2,10,11)
 * @param afterDate query required filters results to loggedDates after this date (inclusive) all dates included (afterDate=2018-01-01)
 * @param beforeDate query required filters results to loggedDates before this date (inclusive) all dates included (beforeDate=2018-01-01)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)

 * @return GeocacheLogs 
 * @responseCodes 200, 400, 401, 403, 404, 500
 * @restrictions Can only use includeArchived parameter for the calling user. Users may opt out of sharing personal data. See
 */
GeocachingApi.prototype.getGetUserLogs = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/users/{referenceCode}/geocachelogs, params, cb);
}



/**
 * Get User Lists
 * This method will fetch the lists for the user.
 *
 * @path: /v1/users/{referenceCode}/lists
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
 * @param types query required the type of lists to return. options are fl (favorites list), wl (watch list), il (ignore list), bm (bookmark list), pq (pocket query) bm (types=bm,wl)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)

 * @return Lists 
 * @responseCodes 200, 400, 401, 403, 404, 500
 * @restrictions Basic members restriction applies. See
 */
GeocachingApi.prototype.getGetLists = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/users/{referenceCode}/lists, params, cb);
}



/**
 * Get User Souvenirs
 * This method will fetch the awarded souvenirs for the specified user.
 *
 * @path: /v1/users/{referenceCode}/souvenirs
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
 * @param fields query required partial response fields to return title (fields=title)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)

 * @return Souvenirs 
 * @responseCodes 200, 400, 401, 403, 404, 500
 * @restrictions Users may opt out of sharing personal data. See
 */
GeocachingApi.prototype.getGetSouvenirs = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/users/{referenceCode}/souvenirs, params, cb);
}



/**
 * Get User Images
 * This method will fetch the images for the specified user.
 *
 * @path: /v1/users/{referenceCode}/images
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
 * @param fields query required partial response fields to return url (fields=name,referenceCode)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)

 * @return Images 
 * @responseCodes 200, 400, 401, 403, 404, 500
 * @restrictions Users may opt out of sharing personal data. See
 */
GeocachingApi.prototype.getGetUserImages = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/users/{referenceCode}/images, params, cb);
}



/**
 * Get Favorited Users by Geocache
 * This method will fetch the users that have favorited the specified geocache.
 *
 * @path: /v1/geocaches/{referenceCode}/favoritedby
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the geocache - (GCK25B)
 * @param fields query required partial response fields to return referenceCode (fields=username,referenceCode)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)

 * @return Users 
 * @responseCodes 200, 400, 401, 403, 404, 429, 500
 * @restrictions Users may opt out of sharing personal data. See
 */
GeocachingApi.prototype.getGetGeocacheFavoritedby = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/geocaches/{referenceCode}/favoritedby, params, cb);
}

