

/**
 * Get Trackable&#39;s Logs
 * This method will fetch a specified trackable&#39;s logs
 *
 * @path: /v1/trackables/{referenceCode}/trackablelogs
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the trackable - (tb25)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)
 * @param expand query required The fields of the trackable log object to expand. The available options are images. - (expand=images:5)
 * @param logTypes query required comma delimited list of log types to include in results all types (logTypes=14,75)

 * @return Trackable Logs 
 * @responseCodes 200, 400, 401, 404, 429, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetTrackableLogs = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/trackables/{referenceCode}/trackablelogs, params, cb);
}



/**
 * Get Trackable Log
 * This method will fetch the specified trackable log
 *
 * @path: /v1/trackablelogs/{referenceCode}
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifiers of the trackable log - (tl100)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)
 * @param expand query required The fields of the trackable log object to expand. The available options are images. - (expand=images:5)

 * @return Trackable Log 
 * @responseCodes 200, 400, 401, 404, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetTrackablelog = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/trackablelogs/{referenceCode}, params, cb);
}



/**
 * Create Trackable Log
 * This method will create a new log to the specified trackable. It will return the created trackable log.
 *
 * @path: /v1/trackablelogs
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param log body required trackable log to create - (TrackableLog)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)

 * @return Trackable Log 
 * @responseCodes 201, 400, 401, 404, 409, 500
 * @restrictions 
 */
GeocachingApi.prototype.postCreateTrackablelog = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/trackablelogs, params, cb);
}



/**
 * Update Trackable Log
 * This method will update a specified trackable log. It will return the updated trackable log.
 *
 * @path: /v1/trackablelogs/{referenceCode}
 * @method: PUT
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the trackable log - (tl100)
 * @param log body required trackable log to update - (TrackableLog)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)

 * @return TrackableLog 
 * @responseCodes 200, 400, 401, 403, 404, 409, 500
 * @restrictions Only owner of trackable log may update the log.
 */
GeocachingApi.prototype.putUpdateTrackablelog = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.PUTRequest(/v1/trackablelogs/{referenceCode}, params, cb);
}



/**
 * Delete Trackable Log
 * This method will delete a specified trackable log.
 *
 * @path: /v1/trackablelogs/{referenceCode}
 * @method: DELETE
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the trackable log - (tl100)

 * @return  
 * @responseCodes 204, 400, 401, 403, 409, 500
 * @restrictions Only owner of trackable log may delete the log.
 */
GeocachingApi.prototype.deleteDeleteTrackablelog = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.DELETERequest(/v1/trackablelogs/{referenceCode}, params, cb);
}



/**
 * Get Trackable Log Images
 * This method will fetch a specified trackable log&#39;s images
 *
 * @path: /v1/trackablelogs/{referenceCode}/images
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the trackable log - (tl100)
 * @param fields query required partial response fields to return url (fields=name,referenceCode)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)

 * @return Images 
 * @responseCodes 200, 400, 401, 404, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetTrackablelogImages = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/trackablelogs/{referenceCode}/images, params, cb);
}



/**
 * Add Trackable Log Image
 * This method will add a new image to the specified trackable log. It will return the added image.
 *
 * @path: /v1/trackablelogs/{referenceCode}/images
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the trackable - (tl25)
 * @param image body required image to add to log - (ImageToUpload)
 * @param fields query required partial response fields to return url (fields=url)

 * @return Image 
 * @responseCodes 201, 400, 401, 403, 404, 409, 500
 * @restrictions Only owner of trackable log may add an image.
 */
GeocachingApi.prototype.postCreateTrackablelogImage = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/trackablelogs/{referenceCode}/images, params, cb);
}



/**
 * Delete Trackable Log Image
 * This method will delete an image to the specified trackable log.
 *
 * @path: /v1/trackablelogs/{referenceCode}/images/{imageGuid}
 * @method: DELETE
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the trackable log - (tl1)
 * @param imageGuid path required the identifier of the image - (fed3b84a-414e-469b-8b84-d731d62a2f9e)

 * @return  
 * @responseCodes 201, 400, 401, 403, 409, 500
 * @restrictions Only owner of trackable log may delete an image.
 */
GeocachingApi.prototype.deleteDeleteTrackablelogImage = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.DELETERequest(/v1/trackablelogs/{referenceCode}/images/{imageGuid}, params, cb);
}



/**
 * Get Trackable Log Types
 * This method will fetch all valid trackable log types
 *
 * @path: /v1/trackablelogtypes
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public

 * @return Trackable Log Types 
 * @responseCodes 200, 401, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetTrackablelogTypes = function (params, cb) {
    
    return this.GETRequest(/v1/trackablelogtypes, params, cb);
}

