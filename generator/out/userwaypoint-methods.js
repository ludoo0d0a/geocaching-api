

/**
 * Get Geocache&#39;s User Waypoints
 * This method will fetch a specified geocache&#39;s user waypoints for the calling user.
 *
 * @path: /v1/geocaches/{referenceCode}/userwaypoints
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the geocache - (gc25)
 * @param includeCorrectedCoordinates query required bool to include corrected coordinates in the response false (includeCorrectedCoordinates=false)
 * @param fields query required partial response fields to return all fields (fields=name,referenceCode)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)

 * @return User Waypoints 
 * @responseCodes 200, 400, 401, 404, 429, 500
 * @restrictions Basic members restriction applies. See
 */
GeocachingApi.prototype.getGetGeocacheUserwaypoints = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/geocaches/{referenceCode}/userwaypoints, params, cb);
}



/**
 * Get User Waypoints
 * This method will fetch the user waypoints for the calling user.
 *
 * @path: /v1/userwaypoints
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param includeCorrectedCoordinates query required bool to include corrected coordinates in the response false (includeCorrectedCoordinates=false)
 * @param fields query required partial response fields to return all fields (fields=name,referenceCode)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)

 * @return User Waypoints 
 * @responseCodes 200, 400, 401, 404, 500
 * @restrictions Only owner of user waypoints can fetch them.
 */
GeocachingApi.prototype.getGetUserwaypoints = function (params, cb) {
    
    return this.GETRequest(/v1/userwaypoints, params, cb);
}



/**
 * Create User Waypoint
 * This method will create a new user waypoint. It will return the created user waypoint.
 *
 * @path: /v1/userwaypoints
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the geocache - (gc25)
 * @param userWaypoint body required user waypoint to create - (UserWaypoint)

 * @return User Waypoint 
 * @responseCodes 201, 400, 401, 404, 409, 500
 * @restrictions 
 */
GeocachingApi.prototype.postCreateUserwaypoint = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/userwaypoints, params, cb);
}



/**
 * Update User Waypoint
 * This method will update a specified user waypoint. It will return the updated user waypoint.
 *
 * @path: /v1/userwaypoints/{id}
 * @method: PUT
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the user waypoint - (UW123)
 * @param log body required user waypoint to update - (UserWaypoint)

 * @return User Waypoint 
 * @responseCodes 200, 400, 401, 403, 404, 409, 500
 * @restrictions Only owner may update the user waypoint.
 */
GeocachingApi.prototype.putUpdateUserwaypoint = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.PUTRequest(/v1/userwaypoints/{id}, params, cb);
}



/**
 * Delete User Waypoint
 * This method will delete a specified user waypoint
 *
 * @path: /v1/userwaypoints/{id}
 * @method: DELETE
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the user waypoint - (UW123)

 * @return  
 * @responseCodes 204, 400, 401, 409, 500
 * @restrictions Only owner may delete the user waypoint.
 */
GeocachingApi.prototype.deleteDeleteUserwaypoint = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.DELETERequest(/v1/userwaypoints/{id}, params, cb);
}



/**
 * Upsert Corrected Coordinates
 * This method will insert or update corrected coordinates for the specified geocache. It will return the updated user waypoint.
 *
 * @path: /v1/geocaches/{referenceCode}/correctedcoordinates
 * @method: PUT
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the geocache - (GCK25B)
 * @param coordinates body required the corrected coordinates to upsert - (Coordinates)

 * @return User Waypoint 
 * @responseCodes 200, 400, 401, 403, 404, 409, 429, 500
 * @restrictions 
 */
GeocachingApi.prototype.putUpsertCorrectedcoordinates = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.PUTRequest(/v1/geocaches/{referenceCode}/correctedcoordinates, params, cb);
}



/**
 * Delete CorrectedCoordinates
 * This method will delete the calling user&#39;s coordinates for the specified geocache
 *
 * @path: /v1/geocaches/{referenceCode}/correctedcoordinates
 * @method: DELETE
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the geocache - (GCK25B)

 * @return  
 * @responseCodes 204, 400, 401, 409, 429, 500
 * @restrictions Only owner may delete the corrected coordinate.
 */
GeocachingApi.prototype.deleteDeleteCorrectedcoordinates = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.DELETERequest(/v1/geocaches/{referenceCode}/correctedcoordinates, params, cb);
}

