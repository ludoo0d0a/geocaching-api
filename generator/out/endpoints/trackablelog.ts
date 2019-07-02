import http, {utils} from '../utils/http';
import {HttpClient, InternalConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetTrackableLogs {
  // [path] the identifier of the trackable default:- ex:tb25
  referenceCode: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string;
  // [query] The fields of the trackable log object to expand. The available options are images. default:- ex:expand=images:5
  expand?: string;
  // [query] comma delimited list of log types to include in results default:all types ex:logTypes=14,75
  logTypes?: string; 
}

export interface GetTrackablelog {
  // [path] the identifiers of the trackable log default:- ex:tl100
  referenceCode: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string;
  // [query] The fields of the trackable log object to expand. The available options are images. default:- ex:expand=images:5
  expand?: string; 
}

export interface CreateTrackablelog {
  // [body] trackable log to create default:- ex:TrackableLog
  log: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string; 
}

export interface UpdateTrackablelog {
  // [path] the identifier of the trackable log default:- ex:tl100
  referenceCode: string;
  // [body] trackable log to update default:- ex:TrackableLog
  log: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string; 
}

export interface DeleteTrackablelog {
  // [path] the identifier of the trackable log default:- ex:tl100
  referenceCode: string; 
}

export interface GetTrackablelogImages {
  // [path] the identifier of the trackable log default:- ex:tl100
  referenceCode: string;
  // [query] partial response fields to return default:url ex:fields=name,referenceCode
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string; 
}

export interface CreateTrackablelogImage {
  // [path] the identifier of the trackable default:- ex:tl25
  referenceCode: string;
  // [body] image to add to log default:- ex:ImageToUpload
  image: string;
  // [query] partial response fields to return default:url ex:fields=url
  fields?: string; 
}

export interface DeleteTrackablelogImage {
  // [path] the identifier of the trackable log default:- ex:tl1
  referenceCode: string;
  // [path] the identifier of the image default:- ex:fed3b84a-414e-469b-8b84-d731d62a2f9e
  imageGuid: string; 
}

export interface GetTrackablelogTypes { 
}


/*
* Returned api trackablelogMethodsApi
*/
export const trackablelogMethodsApi = (configuration: InternalConfiguration, httpClient: HttpClient): TrackablelogMethodsApi => {
    const {get, post, delete_} = httpClient;

    
    /**
    * Get Trackable&#39;s Logs
    * This method will fetch a specified trackable&#39;s logs
    *
    * @path: /v1/trackables/{referenceCode}/trackablelogs
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-trackable-logs
    * @access public
    * @param referenceCode (path) [required] the identifier of the trackable - (tb25)
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
* @param expand (query)  The fields of the trackable log object to expand. The available options are images. - (expand=images:5)
* @param logTypes (query)  comma delimited list of log types to include in results all types (logTypes=14,75)
        * @return trackableLog[] 
    * @responseCodes 200, 400, 401, 404, 429, 500
    * @restrictions 
    */
    const getTrackableLogs = (params: GetTrackableLogs, cb): trackableLog[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/trackables/{referenceCode}/trackablelogs', params, cb);
    };
    
    /**
    * Get Trackable Log
    * This method will fetch the specified trackable log
    *
    * @path: /v1/trackablelogs/{referenceCode}
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-trackablelog
    * @access public
    * @param referenceCode (path) [required] the identifiers of the trackable log - (tl100)
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
* @param expand (query)  The fields of the trackable log object to expand. The available options are images. - (expand=images:5)
        * @return trackableLog 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions 
    */
    const getTrackablelog = (params: GetTrackablelog, cb): trackableLog => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/trackablelogs/{referenceCode}', params, cb);
    };
    
    /**
    * Create Trackable Log
    * This method will create a new log to the specified trackable. It will return the created trackable log.
    *
    * @path: /v1/trackablelogs
    * @method: post
    * @link https://api.groundspeak.com/documentation#create-trackablelog
    * @access public
    * @param log (body) [required] trackable log to create - (TrackableLog)
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
        * @return trackableLog 
    * @responseCodes 201, 400, 401, 404, 409, 500
    * @restrictions 
    */
    const createTrackablelog = (params: CreateTrackablelog, cb): trackableLog => {
        
        // check required params
        
        if (!array_key_exists('log', params)) {
                throw new Exception('log is missing.');
        }
        
        return this.postRequest('/v1/trackablelogs', params, cb);
    };
    
    /**
    * Update Trackable Log
    * This method will update a specified trackable log. It will return the updated trackable log.
    *
    * @path: /v1/trackablelogs/{referenceCode}
    * @method: put
    * @link https://api.groundspeak.com/documentation#update-trackablelog
    * @access public
    * @param referenceCode (path) [required] the identifier of the trackable log - (tl100)
* @param log (body) [required] trackable log to update - (TrackableLog)
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
        * @return trackableLog 
    * @responseCodes 200, 400, 401, 403, 404, 409, 500
    * @restrictions Only owner of trackable log may update the log.
    */
    const updateTrackablelog = (params: UpdateTrackablelog, cb): trackableLog => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('log', params)) {
                throw new Exception('log is missing.');
        }
        
        return this.putRequest('/v1/trackablelogs/{referenceCode}', params, cb);
    };
    
    /**
    * Delete Trackable Log
    * This method will delete a specified trackable log.
    *
    * @path: /v1/trackablelogs/{referenceCode}
    * @method: delete
    * @link https://api.groundspeak.com/documentation#delete-trackablelog
    * @access public
    * @param referenceCode (path) [required] the identifier of the trackable log - (tl100)
        * @return void 
    * @responseCodes 204, 400, 401, 403, 409, 500
    * @restrictions Only owner of trackable log may delete the log.
    */
    const deleteTrackablelog = (params: DeleteTrackablelog, cb): void => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.deleteRequest('/v1/trackablelogs/{referenceCode}', params, cb);
    };
    
    /**
    * Get Trackable Log Images
    * This method will fetch a specified trackable log&#39;s images
    *
    * @path: /v1/trackablelogs/{referenceCode}/images
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-trackablelog-images
    * @access public
    * @param referenceCode (path) [required] the identifier of the trackable log - (tl100)
* @param fields (query)  partial response fields to return url (fields=name,referenceCode)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
        * @return image[] 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions 
    */
    const getTrackablelogImages = (params: GetTrackablelogImages, cb): image[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/trackablelogs/{referenceCode}/images', params, cb);
    };
    
    /**
    * Add Trackable Log Image
    * This method will add a new image to the specified trackable log. It will return the added image.
    *
    * @path: /v1/trackablelogs/{referenceCode}/images
    * @method: post
    * @link https://api.groundspeak.com/documentation#create-trackablelog-image
    * @access public
    * @param referenceCode (path) [required] the identifier of the trackable - (tl25)
* @param image (body) [required] image to add to log - (ImageToUpload)
* @param fields (query)  partial response fields to return url (fields=url)
        * @return image 
    * @responseCodes 201, 400, 401, 403, 404, 409, 500
    * @restrictions Only owner of trackable log may add an image.
    */
    const createTrackablelogImage = (params: CreateTrackablelogImage, cb): image => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('image', params)) {
                throw new Exception('image is missing.');
        }
        
        return this.postRequest('/v1/trackablelogs/{referenceCode}/images', params, cb);
    };
    
    /**
    * Delete Trackable Log Image
    * This method will delete an image to the specified trackable log.
    *
    * @path: /v1/trackablelogs/{referenceCode}/images/{imageGuid}
    * @method: delete
    * @link https://api.groundspeak.com/documentation#delete-trackablelog-image
    * @access public
    * @param referenceCode (path) [required] the identifier of the trackable log - (tl1)
* @param imageGuid (path) [required] the identifier of the image - (fed3b84a-414e-469b-8b84-d731d62a2f9e)
        * @return void 
    * @responseCodes 201, 400, 401, 403, 409, 500
    * @restrictions Only owner of trackable log may delete an image.
    */
    const deleteTrackablelogImage = (params: DeleteTrackablelogImage, cb): void => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('imageGuid', params)) {
                throw new Exception('imageGuid is missing.');
        }
        
        return this.deleteRequest('/v1/trackablelogs/{referenceCode}/images/{imageGuid}', params, cb);
    };
    
    /**
    * Get Trackable Log Types
    * This method will fetch all valid trackable log types
    *
    * @path: /v1/trackablelogtypes
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-trackablelog-types
    * @access public
            * @return type[] 
    * @responseCodes 200, 401, 500
    * @restrictions 
    */
    const getTrackablelogTypes = (params: GetTrackablelogTypes, cb): type[] => {
        
        return this.getRequest('/v1/trackablelogtypes', params, cb);
    };
    

    // Returns all methods in a single object API
    return {
        getTrackableLogs,
        getTrackablelog,
        createTrackablelog,
        updateTrackablelog,
        deleteTrackablelog,
        getTrackablelogImages,
        createTrackablelogImage,
        deleteTrackablelogImage,
        getTrackablelogTypes,
        
    };

}; //end export const


export default (configuration: InternalConfiguration): TrackablelogMethodsApi => {
    return trackablelogMethodsApi(configuration, http);
};