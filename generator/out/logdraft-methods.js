

/**
 * Get Log Drafts
 * This method will fetch the log drafts for the calling user sorted by date logged descending.
 *
 * @path: /v1/logdrafts
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)

 * @return Log Drafts 
 * @responseCodes 200, 400, 401, 404, 429, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetLogdrafts = function (params, cb) {
    
    return this.GETRequest(/v1/logdrafts, params, cb);
}



/**
 * Get Log Draft
 * This method will fetch the specified log draft
 *
 * @path: /v1/logdrafts/{referenceCode}
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifiers of the log draft - (ld100)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)

 * @return Log Draft 
 * @responseCodes 200, 400, 401, 404, 500
 * @restrictions Only owner of log drafts may fetch it.
 */
GeocachingApi.prototype.getGetLogdraft = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/logdrafts/{referenceCode}, params, cb);
}



/**
 * Create Log Draft
 * This method will create a new log draft. It will return the created log draft.
 *
 * @path: /v1/logdrafts
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param log body required log draft to create - (LogDraft)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)

 * @return Log Draft 
 * @responseCodes 201, 400, 401, 404, 409, 500
 * @restrictions 
 */
GeocachingApi.prototype.postCreateLogdraft = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/logdrafts, params, cb);
}



/**
 * Update Log Draft
 * This method will update a specified log draft. It will return the updated log draft.
 *
 * @path: /v1/logdrafts/{referenceCode}
 * @method: PUT
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the log draft - (ld100)
 * @param log body required log draft to update - (LogDraft)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)

 * @return LogDraft 
 * @responseCodes 200, 400, 401, 403, 404, 409, 500
 * @restrictions Only owner of log draft may update the log draft.
 */
GeocachingApi.prototype.putUpdateLogdraft = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.PUTRequest(/v1/logdrafts/{referenceCode}, params, cb);
}



/**
 * Delete Log Draft
 * This method will delete a specified log draft
 *
 * @path: /v1/logdrafts/{referenceCode}
 * @method: DELETE
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the log draft - (ld100)

 * @return  
 * @responseCodes 204, 400, 401, 409, 500
 * @restrictions Only owner of log draft may delete the log draft.
 */
GeocachingApi.prototype.deleteDeleteLogdraft = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.DELETERequest(/v1/logdrafts/{referenceCode}, params, cb);
}



/**
 * Promote Log Draft
 * This method will promote a specified log draft to a geocache log
 *
 * @path: /v1/logdrafts/{referenceCode}/promote
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the log draft - (ld100)
 * @param draft body required the log draft to promote to geocache log - (LogDraft)

 * @return PromotedLogDraft 
 * @responseCodes 201, 400, 401, 409, 500
 * @restrictions Only owner of log draft may promote the log draft.
 */
GeocachingApi.prototype.postPromoteLogdraft = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/logdrafts/{referenceCode}/promote, params, cb);
}



/**
 * Add Log Draft Image
 * This method will add an image to a specified log draft
 *
 * @path: /v1/logdrafts/{referenceCode}/images
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the log draft - (ld100)
 * @param image body required the iamge to upload - (PostImage)
 * @param fields query required partial response fields to return url (fields=url,guid)

 * @return Image 
 * @responseCodes 201, 400, 401, 403, 409, 500
 * @restrictions Only owner of log draft may add images to the log draft.
 */
GeocachingApi.prototype.postCreateLogdraftImage = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/logdrafts/{referenceCode}/images, params, cb);
}

