import http, {utils} from '../utils/http';
import {HttpClient, InternalConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetLogdrafts {
 fields: string;
 skip: string;
 take: string;
}

export interface GetLogdraft {
 referenceCode: string;
 fields: string;
}

export interface CreateLogdraft {
 log: string;
 fields: string;
}

export interface UpdateLogdraft {
 referenceCode: string;
 log: string;
 fields: string;
}

export interface DeleteLogdraft {
 referenceCode: string;
}

export interface PromoteLogdraft {
 referenceCode: string;
 draft: string;
}

export interface CreateLogdraftImage {
 referenceCode: string;
 image: string;
 fields: string;
}


/*
* Returned api logdraftMethodsApi
*/
export const logdraftMethodsApi = (configuration: InternalConfiguration, httpClient: HttpClient): LogdraftMethodsApi => {
    const {get, post, delete_} = httpClient;

    
    /**
    * Get Log Drafts
    * This method will fetch the log drafts for the calling user sorted by date logged descending.
    *
    * @path: /v1/logdrafts
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-logdrafts
    * @access public
    * @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
* @param skip (query) [required] the number of resources to skip over 0 (skip=10)
* @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
        * @return logDraft[] 
    * @responseCodes 200, 400, 401, 404, 429, 500
    * @restrictions 
    */
    const getLogdrafts = (params: GetLogdrafts, cb): logDraft[] => {
        
        return this.getRequest('/v1/logdrafts', params, cb);
    };
    
    /**
    * Get Log Draft
    * This method will fetch the specified log draft
    *
    * @path: /v1/logdrafts/{referenceCode}
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-logdraft
    * @access public
    * @param referenceCode (path) [required] the identifiers of the log draft - (ld100)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
        * @return logDraft 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions Only owner of log drafts may fetch it.
    */
    const getLogdraft = (params: GetLogdraft, cb): logDraft => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/logdrafts/{referenceCode}', params, cb);
    };
    
    /**
    * Create Log Draft
    * This method will create a new log draft. It will return the created log draft.
    *
    * @path: /v1/logdrafts
    * @method: post
    * @link https://api.groundspeak.com/documentation#create-logdraft
    * @access public
    * @param log (body) [required] log draft to create - (LogDraft)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
        * @return logDraft 
    * @responseCodes 201, 400, 401, 404, 409, 500
    * @restrictions 
    */
    const createLogdraft = (params: CreateLogdraft, cb): logDraft => {
        
        // check required params
        
        if (!array_key_exists('log', params)) {
                throw new Exception('log is missing.');
        }
        
        return this.postRequest('/v1/logdrafts', params, cb);
    };
    
    /**
    * Update Log Draft
    * This method will update a specified log draft. It will return the updated log draft.
    *
    * @path: /v1/logdrafts/{referenceCode}
    * @method: put
    * @link https://api.groundspeak.com/documentation#update-logdraft
    * @access public
    * @param referenceCode (path) [required] the identifier of the log draft - (ld100)
* @param log (body) [required] log draft to update - (LogDraft)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
        * @return logDraft 
    * @responseCodes 200, 400, 401, 403, 404, 409, 500
    * @restrictions Only owner of log draft may update the log draft.
    */
    const updateLogdraft = (params: UpdateLogdraft, cb): logDraft => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('log', params)) {
                throw new Exception('log is missing.');
        }
        
        return this.putRequest('/v1/logdrafts/{referenceCode}', params, cb);
    };
    
    /**
    * Delete Log Draft
    * This method will delete a specified log draft
    *
    * @path: /v1/logdrafts/{referenceCode}
    * @method: delete
    * @link https://api.groundspeak.com/documentation#delete-logdraft
    * @access public
    * @param referenceCode (path) [required] the identifier of the log draft - (ld100)
        * @return  
    * @responseCodes 204, 400, 401, 409, 500
    * @restrictions Only owner of log draft may delete the log draft.
    */
    const deleteLogdraft = (params: DeleteLogdraft, cb) => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.deleteRequest('/v1/logdrafts/{referenceCode}', params, cb);
    };
    
    /**
    * Promote Log Draft
    * This method will promote a specified log draft to a geocache log
    *
    * @path: /v1/logdrafts/{referenceCode}/promote
    * @method: post
    * @link https://api.groundspeak.com/documentation#promote-logdraft
    * @access public
    * @param referenceCode (path) [required] the identifier of the log draft - (ld100)
* @param draft (body) [required] the log draft to promote to geocache log - (LogDraft)
        * @return promotedLogDraft 
    * @responseCodes 201, 400, 401, 409, 500
    * @restrictions Only owner of log draft may promote the log draft.
    */
    const promoteLogdraft = (params: PromoteLogdraft, cb): promotedLogDraft => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('draft', params)) {
                throw new Exception('draft is missing.');
        }
        
        return this.postRequest('/v1/logdrafts/{referenceCode}/promote', params, cb);
    };
    
    /**
    * Add Log Draft Image
    * This method will add an image to a specified log draft
    *
    * @path: /v1/logdrafts/{referenceCode}/images
    * @method: post
    * @link https://api.groundspeak.com/documentation#create-logdraft-image
    * @access public
    * @param referenceCode (path) [required] the identifier of the log draft - (ld100)
* @param image (body) [required] the iamge to upload - (PostImage)
* @param fields (query) [required] partial response fields to return url (fields=url,guid)
        * @return image 
    * @responseCodes 201, 400, 401, 403, 409, 500
    * @restrictions Only owner of log draft may add images to the log draft.
    */
    const createLogdraftImage = (params: CreateLogdraftImage, cb): image => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('image', params)) {
                throw new Exception('image is missing.');
        }
        
        return this.postRequest('/v1/logdrafts/{referenceCode}/images', params, cb);
    };
    

    // Returns all methods in a single object API
    return {
        getLogdrafts,
        getLogdraft,
        createLogdraft,
        updateLogdraft,
        deleteLogdraft,
        promoteLogdraft,
        createLogdraftImage,
        
    };

}; //end export const


export default (configuration: InternalConfiguration): LogdraftMethodsApi => {
    return logdraftMethodsApi(configuration, http);
};