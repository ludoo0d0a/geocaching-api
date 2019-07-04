import http, {utils} from '../utils/http';
import {HttpClient, APIConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetReferenceCode {
  // [query] the id to convert default:- ex:id=1
  id: string;
  // [query] the type of reference code to return default:- ex:codePrefix=GC
  codePrefix: string; 
}

export interface GetCountries { 
}

export interface GetStates { 
}

export interface GetCountryStates {
  // [path] the id of the country default:- ex:countryId=1
  countryId: string; 
}

export interface GetMembershipLevels { 
}


/*
* Returned api utilityMethodsApi
*/
export const utilityMethodsApi = (configuration: APIConfiguration, httpClient: HttpClient): UtilityMethodsApi => {
    const {get, post, delete_} = httpClient;

    
    /**
    * Get Reference Code
    * This method will fetch the reference code from an id.
    *
    * @path: /v1/utilities/referencecode
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-reference-code
    * @access public
    * @param id (query) [required] the id to convert - (id=1)
* @param codePrefix (query) [required] the type of reference code to return - (codePrefix=GC)
        * @return void 
    * @responseCodes 200, 400, 401, 429, 500
    * @restrictions 
    */
    const getReferenceCode = (params: GetReferenceCode, cb): void => {
        
        // check required params
        
        if (!array_key_exists('id', params)) {
                throw new Exception('id is missing.');
        }
        
        if (!array_key_exists('codePrefix', params)) {
                throw new Exception('codePrefix is missing.');
        }
        
        return this.getRequest('/v1/utilities/referencecode', params, cb);
    };
    
    /**
    * Get Countries
    * This method will fetch all valid countries
    *
    * @path: /v1/countries
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-countries
    * @access public
            * @return void 
    * @responseCodes 200, 401, 500
    * @restrictions 
    */
    const getCountries = (params: GetCountries, cb): void => {
        
        return this.getRequest('/v1/countries', params, cb);
    };
    
    /**
    * Get States
    * This method will fetch all valid states
    *
    * @path: /v1/states
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-states
    * @access public
            * @return void 
    * @responseCodes 
    * @restrictions 
    */
    const getStates = (params: GetStates, cb): void => {
        
        return this.getRequest('/v1/states', params, cb);
    };
    
    /**
    * Get States By Country
    * This method will fetch all valid states of a provided country
    *
    * @path: /v1/countries/{countryId}/states
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-country-states
    * @access public
    * @param countryId (path) [required] the id of the country - (countryId=1)
        * @return void 
    * @responseCodes 200, 401, 500
    * @restrictions 
    */
    const getCountryStates = (params: GetCountryStates, cb): void => {
        
        // check required params
        
        if (!array_key_exists('countryId', params)) {
                throw new Exception('countryId is missing.');
        }
        
        return this.getRequest('/v1/countries/{countryId}/states', params, cb);
    };
    
    /**
    * Get Membership Levels
    * This method will fetch all valid membership levels
    *
    * @path: /v1/membershiplevels
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-membership-levels
    * @access public
            * @return void 
    * @responseCodes 200, 401, 500
    * @restrictions 
    */
    const getMembershipLevels = (params: GetMembershipLevels, cb): void => {
        
        return this.getRequest('/v1/membershiplevels', params, cb);
    };
    

    // Returns all methods in a single object API
    return {
        getReferenceCode,
        getCountries,
        getStates,
        getCountryStates,
        getMembershipLevels,
        
    };

}; //end export const


export default (configuration: APIConfiguration): UtilityMethodsApi => {
    return utilityMethodsApi(configuration, http);
};