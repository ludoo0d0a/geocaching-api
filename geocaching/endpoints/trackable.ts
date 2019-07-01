import http, {utils} from '../utils/http';
import {HttpClient, InternalConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetGeocacheTrackables {
 referenceCode: string;
 fields: string;
 skip: string;
 take: string;
 expand: string;
}

export interface GetTrackable {
 referenceCode: string;
 fields: string;
 expand: string;
}

export interface GetUsersTrackables {
 referenceCodes: string;
 type: string;
 fields: string;
 skip: string;
 take: string;
 expand: string;
}

export interface GetTrackableImages {
 referenceCode: string;
 fields: string;
 skip: string;
 take: string;
}

export interface GetGeocoinTypes {
 fields: string;
 skip: string;
 take: string;
}


/*
* Returned api trackableMethodsApi
*/
export const trackableMethodsApi = (configuration: InternalConfiguration, httpClient: HttpClient): TrackableMethodsApi => {
    const {get, post, delete_} = httpClient;

    
    /**
    * Get Geocache&#39;s Trackables
    * This method will fetch a specified geocache&#39;s trackables
    *
    * @path: /v1/geocaches/{referenceCode}/trackables
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-geocache-trackables
    * @access public
    * @param referenceCode (path) [required] the identifier of the geocache - (gc25)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
* @param skip (query) [required] the number of resources to skip over 0 (skip=10)
* @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
* @param expand (query) [required] The fields of the trackable object to expand. The available options are trackablelogs, trackablelog.images, and images. - (expand=trackablelogs:5)
        * @return trackable[] 
    * @responseCodes 200, 400, 401, 403, 404, 429, 500
    * @restrictions Basic members restriction applies. See
    */
    const getGeocacheTrackables = (params: GetGeocacheTrackables, cb): trackable[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/geocaches/{referenceCode}/trackables', params, cb);
    };
    
    /**
    * Get Trackable
    * This method will fetch the specified trackable
    *
    * @path: /v1/trackables/{referenceCode}
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-trackable
    * @access public
    * @param referenceCode (path) [required] the identifier of the trackable (tb code or tracking number found on the physical object) - (tb100)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
* @param expand (query) [required] The fields of the trackable object to expand. The available options are trackablelogs, trackablelog.images, and images. - (expand=trackablelogs:5)
        * @return trackable 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions 
    */
    const getTrackable = (params: GetTrackable, cb): trackable => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/trackables/{referenceCode}', params, cb);
    };
    
    /**
    * Get Trackables
    * This method will fetch either the requested trackables or the calling user&#39;s trackables in their possession.
    *
    * @path: /v1/trackables
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-users-trackables
    * @access public
    * @param referenceCodes (query) [required] The reference code or tracking number of the trackables. Do not pass in this param if you want to return user trackables. - (TB1,TB2)
* @param type (query) [required] whether to return the trackables in the user&#39;s inventory (1), their collection (2), or their owned trackables (3) 1 (type=1)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
* @param skip (query) [required] the number of resources to skip over 0 (skip=10)
* @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
* @param expand (query) [required] The fields of the trackable object to expand. The available options are trackablelogs, trackablelog.images, and images. - (expand=trackablelogs:5)
        * @return trackable[] 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions 
    */
    const getUsersTrackables = (params: GetUsersTrackables, cb): trackable[] => {
        
        return this.getRequest('/v1/trackables', params, cb);
    };
    
    /**
    * Get Trackable Images
    * This method will fetch a specified trackable&#39;s images
    *
    * @path: /v1/trackables/{referenceCode}/images
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-trackable-images
    * @access public
    * @param referenceCode (path) [required] the identifier of the trackable - (tb100)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
* @param skip (query) [required] the number of resources to skip over 0 (skip=10)
* @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
        * @return image[] 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions 
    */
    const getTrackableImages = (params: GetTrackableImages, cb): image[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/trackables/{referenceCode}/images', params, cb);
    };
    
    /**
    * Get Geocoin Types
    * This method will fetch all valid geocoin types
    *
    * @path: /v1/trackables/geocointypes
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-geocoin-types
    * @access public
    * @param fields (query) [required] partial response fields to return id (fields=id,name)
* @param skip (query) [required] the number of resources to skip over 0 (skip=10)
* @param take (query) [required] how many resources to return. maximum value of 100 10 (take=0)
        * @return type[] 
    * @responseCodes 200, 400, 401, 500
    * @restrictions 
    */
    const getGeocoinTypes = (params: GetGeocoinTypes, cb): type[] => {
        
        return this.getRequest('/v1/trackables/geocointypes', params, cb);
    };
    

    // Returns all methods in a single object API
    return {
        getGeocacheTrackables,
        getTrackable,
        getUsersTrackables,
        getTrackableImages,
        getGeocoinTypes,
        
    };

}; //end export const


export default (configuration: InternalConfiguration): TrackableMethodsApi => {
    return trackableMethodsApi(configuration, http);
};