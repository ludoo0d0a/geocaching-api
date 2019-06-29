

/**
 * Get Reference Code
 * This method will fetch the reference code from an id.
 *
 * @path: /v1/utilities/referencecode
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param id query required the id to convert - (id=1)
 * @param codePrefix query required the type of reference code to return - (codePrefix=GC)

 * @return  
 * @responseCodes 200, 400, 401, 429, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetReferenceCode = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/utilities/referencecode, params, cb);
}



/**
 * Get Countries
 * This method will fetch all valid countries
 *
 * @path: /v1/countries
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public

 * @return  
 * @responseCodes 200, 401, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetCountries = function (params, cb) {
    
    return this.GETRequest(/v1/countries, params, cb);
}



/**
 * Get States
 * This method will fetch all valid states
 *
 * @path: /v1/states
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public

 * @return  
 * @responseCodes 
 * @restrictions 
 */
GeocachingApi.prototype.getGetStates = function (params, cb) {
    
    return this.GETRequest(/v1/states, params, cb);
}



/**
 * Get States By Country
 * This method will fetch all valid states of a provided country
 *
 * @path: /v1/countries/{countryId}/states
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param countryId path required the id of the country - (countryId=1)

 * @return  
 * @responseCodes 200, 401, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetCountryStates = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.GETRequest(/v1/countries/{countryId}/states, params, cb);
}



/**
 * Get Membership Levels
 * This method will fetch all valid membership levels
 *
 * @path: /v1/membershiplevels
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public

 * @return  
 * @responseCodes 200, 401, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetMembershipLevels = function (params, cb) {
    
    return this.GETRequest(/v1/membershiplevels, params, cb);
}

