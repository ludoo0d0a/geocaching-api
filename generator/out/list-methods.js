

/**
 * Get List
 * This method will fetch the specified list.
 *
 * @path: /v1/lists/{referenceCode}
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)

 * @return List 
 * @responseCodes 200, 400, 401, 404, 429, 500
 * @restrictions Basic members restriction applies. See
 */
GeocachingApi.prototype.getGetList = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/lists/{referenceCode}, params, cb);
}



/**
 * Create List
 * This method will create a new list. It will return the created list.
 *
 * @path: /v1/lists
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param list body required list to create - (List)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)

 * @return List 
 * @responseCodes 201, 400, 401, 403, 404, 409, 422, 500
 * @restrictions Basic members restriction applies. See
 */
GeocachingApi.prototype.postCreateList = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/lists, params, cb);
}



/**
 * Update List
 * This method will update a specified list. It will return the updated list.
 *
 * @path: /v1/lists/{referenceCode}
 * @method: PUT
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the list - (BM1234)
 * @param list body required list to update - (List)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)

 * @return List 
 * @responseCodes 200, 400, 401, 403, 404, 409, 500
 * @restrictions Only owner may update the list.
 */
GeocachingApi.prototype.putUpdateList = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.PUTRequest(/v1/lists/{referenceCode}, params, cb);
}



/**
 * Delete List
 * This method will delete a specified list.
 *
 * @path: /v1/lists/{referenceCode}
 * @method: DELETE
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required the identifier of the list - (BM1234)

 * @return  
 * @responseCodes 200, 400, 401, 403, 404, 409, 500
 * @restrictions Only owner may delete the list.
 */
GeocachingApi.prototype.deleteRemoveList = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.DELETERequest(/v1/lists/{referenceCode}, params, cb);
}



/**
 * Get List&#39;s Geocaches
 * This method will fetch the geocaches from the specified list.
 *
 * @path: /v1/lists/{referenceCode}/geocaches
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
 * @param fields query required partial response fields to return all fields (fields=name,referenceCode)
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)
 * @param lite query required whether the response should be a lite geocaches or not true (lite=true)
 * @param expand query required The fields of the geocache object to expand. Cannot be used with lite geocaches. The available options are geocachelogs, trackables, geocachelog.images, userwaypoints, and images. - (expand=geocachelogs:5,trackables:5)

 * @return List Geocaches 
 * @responseCodes 200, 400, 401, 404, 500
 * @restrictions Basic members restriction applies. See
 */
GeocachingApi.prototype.getGetListGeocaches = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/lists/{referenceCode}/geocaches, params, cb);
}



/**
 * Get Zipped Pocket Query
 * This method will fetch a zipped file of the requested pocket query.
 *
 * @path: /v1/lists/{referenceCode}/geocaches/zipped
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required identifier of the pocket query - (PQ1234)

 * @return  
 * @responseCodes 200, 400, 401, 404, 500
 * @restrictions Only Read for Download pocket queries from the web may be fetched. Pocket queries are a premium member feature.
 */
GeocachingApi.prototype.getGetPqZip = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/lists/{referenceCode}/geocaches/zipped, params, cb);
}



/**
 * Add Geocache to List
 * This method will add the geocache to the specified list.
 *
 * @path: /v1/lists/{referenceCode}/geocaches
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
 * @param geocache body required geocache to add to the list - (Geocache)
 * @param fields query required partial response fields to return referenceCode (fields=name,referenceCode)

 * @return List Item 
 * @responseCodes 200, 400, 401, 404, 500
 * @restrictions Basic members restriction applies. See
 */
GeocachingApi.prototype.postAddGeocacheList = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/lists/{referenceCode}/geocaches, params, cb);
}



/**
 * Add Geocaches to List
 * This method will add multiple geocaches to the specified list.
 *
 * @path: /v1/lists/{referenceCode}/bulkgeocaches
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
 * @param geocacheCodes body required The reference codes of the geocaches to add. - (Array of strings)

 * @return BulkResponse 
 * @responseCodes 200, 400, 401, 403, 404, 409, 500
 * @restrictions Basic members restriction applies. See
 */
GeocachingApi.prototype.postAddGeocachesList = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/lists/{referenceCode}/bulkgeocaches, params, cb);
}



/**
 * Remove Geocache from List
 * This method will remove a specified geocache from the list
 *
 * @path: /v1/lists/{referenceCode}/geocaches/{geocacheCode}
 * @method: DELETE
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param referenceCode path required identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
 * @param geocacheCode query required identifier of the geocache - (geocacheCode=GC1234)

 * @return  
 * @responseCodes 204, 400, 401, 409, 500
 * @restrictions Basic members restriction applies. See
 */
GeocachingApi.prototype.deleteDeleteGeocacheList = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.DELETERequest(/v1/lists/{referenceCode}/geocaches/{geocacheCode}, params, cb);
}

