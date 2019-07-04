import http, {utils} from '../utils/http';
import {HttpClient, APIConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetGeocacheTrackables {
  // [path] the identifier of the geocache default:- ex:gc25
  referenceCode: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string;
  // [query] The fields of the trackable object to expand. The available options are trackablelogs, trackablelog.images, and images. default:- ex:expand=trackablelogs:5
  expand?: string; 
}

export interface GetTrackable {
  // [path] the identifier of the trackable (tb code or tracking number found on the physical object) default:- ex:tb100
  referenceCode: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string;
  // [query] The fields of the trackable object to expand. The available options are trackablelogs, trackablelog.images, and images. default:- ex:expand=trackablelogs:5
  expand?: string; 
}

export interface GetUsersTrackables {
  // [query] The reference code or tracking number of the trackables. Do not pass in this param if you want to return user trackables. default:- ex:TB1,TB2
  referenceCodes?: string;
  // [query] whether to return the trackables in the user&#39;s inventory (1), their collection (2), or their owned trackables (3) default:1 ex:type=1
  type?: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string;
  // [query] The fields of the trackable object to expand. The available options are trackablelogs, trackablelog.images, and images. default:- ex:expand=trackablelogs:5
  expand?: string; 
}

export interface GetTrackableImages {
  // [path] the identifier of the trackable default:- ex:tb100
  referenceCode: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string; 
}

export interface GetGeocoinTypes {
  // [query] partial response fields to return default:id ex:fields=id,name
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 100 default:10 ex:take=0
  take?: string; 
}


/*
* Returned api trackableMethodsApi
*/
export const trackableMethodsApi = (configuration: APIConfiguration, httpClient: HttpClient): TrackableMethodsApi => {
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
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
* @param expand (query)  The fields of the trackable object to expand. The available options are trackablelogs, trackablelog.images, and images. - (expand=trackablelogs:5)
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
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
* @param expand (query)  The fields of the trackable object to expand. The available options are trackablelogs, trackablelog.images, and images. - (expand=trackablelogs:5)
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
    * @param referenceCodes (query)  The reference code or tracking number of the trackables. Do not pass in this param if you want to return user trackables. - (TB1,TB2)
* @param type (query)  whether to return the trackables in the user&#39;s inventory (1), their collection (2), or their owned trackables (3) 1 (type=1)
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
* @param expand (query)  The fields of the trackable object to expand. The available options are trackablelogs, trackablelog.images, and images. - (expand=trackablelogs:5)
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
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
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
    * @param fields (query)  partial response fields to return id (fields=id,name)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 100 10 (take=0)
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


export default (configuration: APIConfiguration): TrackableMethodsApi => {
    return trackableMethodsApi(configuration, http);
};