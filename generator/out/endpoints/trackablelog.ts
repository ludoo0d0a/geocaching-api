import * as urljoin from 'url-join';

import http, {utils} from '../utils/http';
import {HttpClient, InternalConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetTrackableLogs {
 referenceCode: string;
 fields: string;
 skip: string;
 take: string;
 expand: string;
 logTypes: string;
}

export interface GetTrackablelog {
 referenceCode: string;
 fields: string;
 expand: string;
}

export interface CreateTrackablelog {
 log: string;
 fields: string;
}

export interface UpdateTrackablelog {
 referenceCode: string;
 log: string;
 fields: string;
}

export interface DeleteTrackablelog {
 referenceCode: string;
}

export interface GetTrackablelogImages {
 referenceCode: string;
 fields: string;
 skip: string;
 take: string;
}

export interface CreateTrackablelogImage {
 referenceCode: string;
 image: string;
 fields: string;
}

export interface DeleteTrackablelogImage {
 referenceCode: string;
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
     * @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
     * @param skip (query) [required] the number of resources to skip over 0 (skip=10)
     * @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
     * @param expand (query) [required] The fields of the trackable log object to expand. The available options are images. - (expand=images:5)
     * @param logTypes (query) [required] comma delimited list of log types to include in results all types (logTypes=14,75)
    
    * @return Trackable Logs 
    * @responseCodes 200, 400, 401, 404, 429, 500
    * @restrictions 
    */
    const getTrackableLogs = (params: GetTrackableLogs, cb): Trackable Logs => {
        
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
     * @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
     * @param expand (query) [required] The fields of the trackable log object to expand. The available options are images. - (expand=images:5)
    
    * @return Trackable Log 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions 
    */
    const getTrackablelog = (params: GetTrackablelog, cb): Trackable Log => {
        
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
     * @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
    
    * @return Trackable Log 
    * @responseCodes 201, 400, 401, 404, 409, 500
    * @restrictions 
    */
    const createTrackablelog = (params: CreateTrackablelog, cb): Trackable Log => {
        
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
     * @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
    
    * @return TrackableLog 
    * @responseCodes 200, 400, 401, 403, 404, 409, 500
    * @restrictions Only owner of trackable log may update the log.
    */
    const updateTrackablelog = (params: UpdateTrackablelog, cb): TrackableLog => {
        
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
    
    * @return  
    * @responseCodes 204, 400, 401, 403, 409, 500
    * @restrictions Only owner of trackable log may delete the log.
    */
    const deleteTrackablelog = (params: DeleteTrackablelog, cb):  => {
        
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
     * @param fields (query) [required] partial response fields to return url (fields=name,referenceCode)
     * @param skip (query) [required] the number of resources to skip over 0 (skip=10)
     * @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
    
    * @return Images 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions 
    */
    const getTrackablelogImages = (params: GetTrackablelogImages, cb): Images => {
        
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
     * @param fields (query) [required] partial response fields to return url (fields=url)
    
    * @return Image 
    * @responseCodes 201, 400, 401, 403, 404, 409, 500
    * @restrictions Only owner of trackable log may add an image.
    */
    const createTrackablelogImage = (params: CreateTrackablelogImage, cb): Image => {
        
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
    
    * @return  
    * @responseCodes 201, 400, 401, 403, 409, 500
    * @restrictions Only owner of trackable log may delete an image.
    */
    const deleteTrackablelogImage = (params: DeleteTrackablelogImage, cb):  => {
        
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
    
    * @return Trackable Log Types 
    * @responseCodes 200, 401, 500
    * @restrictions 
    */
    const getTrackablelogTypes = (params: GetTrackablelogTypes, cb): Trackable Log Types => {
        
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