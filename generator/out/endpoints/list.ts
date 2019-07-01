import http, {utils} from '../utils/http';
import {HttpClient, InternalConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetList {
 referenceCode: string;
 fields: string;
}

export interface CreateList {
 list: string;
 fields: string;
}

export interface UpdateList {
 referenceCode: string;
 list: string;
 fields: string;
}

export interface RemoveList {
 referenceCode: string;
}

export interface GetListGeocaches {
 referenceCode: string;
 fields: string;
 skip: string;
 take: string;
 lite: string;
 expand: string;
}

export interface GetPqZip {
 referenceCode: string;
}

export interface AddGeocacheList {
 referenceCode: string;
 geocache: string;
 fields: string;
}

export interface AddGeocachesList {
 referenceCode: string;
 geocacheCodes: string;
}

export interface DeleteGeocacheList {
 referenceCode: string;
 geocacheCode: string;
}


/*
* Returned api listMethodsApi
*/
export const listMethodsApi = (configuration: InternalConfiguration, httpClient: HttpClient): ListMethodsApi => {
    const {get, post, delete_} = httpClient;

    
    /**
    * Get List
    * This method will fetch the specified list.
    *
    * @path: /v1/lists/{referenceCode}
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-list
    * @access public
    * @param referenceCode (path) [required] identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
        * @return list 
    * @responseCodes 200, 400, 401, 404, 429, 500
    * @restrictions Basic members restriction applies. See
    */
    const getList = (params: GetList, cb): list => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/lists/{referenceCode}', params, cb);
    };
    
    /**
    * Create List
    * This method will create a new list. It will return the created list.
    *
    * @path: /v1/lists
    * @method: post
    * @link https://api.groundspeak.com/documentation#create-list
    * @access public
    * @param list (body) [required] list to create - (List)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
        * @return list 
    * @responseCodes 201, 400, 401, 403, 404, 409, 422, 500
    * @restrictions Basic members restriction applies. See
    */
    const createList = (params: CreateList, cb): list => {
        
        // check required params
        
        if (!array_key_exists('list', params)) {
                throw new Exception('list is missing.');
        }
        
        return this.postRequest('/v1/lists', params, cb);
    };
    
    /**
    * Update List
    * This method will update a specified list. It will return the updated list.
    *
    * @path: /v1/lists/{referenceCode}
    * @method: put
    * @link https://api.groundspeak.com/documentation#update-list
    * @access public
    * @param referenceCode (path) [required] the identifier of the list - (BM1234)
* @param list (body) [required] list to update - (List)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
        * @return list 
    * @responseCodes 200, 400, 401, 403, 404, 409, 500
    * @restrictions Only owner may update the list.
    */
    const updateList = (params: UpdateList, cb): list => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('list', params)) {
                throw new Exception('list is missing.');
        }
        
        return this.putRequest('/v1/lists/{referenceCode}', params, cb);
    };
    
    /**
    * Delete List
    * This method will delete a specified list.
    *
    * @path: /v1/lists/{referenceCode}
    * @method: delete
    * @link https://api.groundspeak.com/documentation#remove-list
    * @access public
    * @param referenceCode (path) [required] the identifier of the list - (BM1234)
        * @return  
    * @responseCodes 200, 400, 401, 403, 404, 409, 500
    * @restrictions Only owner may delete the list.
    */
    const removeList = (params: RemoveList, cb) => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.deleteRequest('/v1/lists/{referenceCode}', params, cb);
    };
    
    /**
    * Get List&#39;s Geocaches
    * This method will fetch the geocaches from the specified list.
    *
    * @path: /v1/lists/{referenceCode}/geocaches
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-list-geocaches
    * @access public
    * @param referenceCode (path) [required] identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
* @param fields (query) [required] partial response fields to return all fields (fields=name,referenceCode)
* @param skip (query) [required] the number of resources to skip over 0 (skip=10)
* @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
* @param lite (query) [required] whether the response should be a lite geocaches or not true (lite=true)
* @param expand (query) [required] The fields of the geocache object to expand. Cannot be used with lite geocaches. The available options are geocachelogs, trackables, geocachelog.images, userwaypoints, and images. - (expand=geocachelogs:5,trackables:5)
        * @return listGeocache[] | liteGeocache[] 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions Basic members restriction applies. See
    */
    const getListGeocaches = (params: GetListGeocaches, cb): listGeocache[] | liteGeocache[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/lists/{referenceCode}/geocaches', params, cb);
    };
    
    /**
    * Get Zipped Pocket Query
    * This method will fetch a zipped file of the requested pocket query.
    *
    * @path: /v1/lists/{referenceCode}/geocaches/zipped
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-pq-zip
    * @access public
    * @param referenceCode (path) [required] identifier of the pocket query - (PQ1234)
        * @return  
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions Only Read for Download pocket queries from the web may be fetched. Pocket queries are a premium member feature.
    */
    const getPqZip = (params: GetPqZip, cb) => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/lists/{referenceCode}/geocaches/zipped', params, cb);
    };
    
    /**
    * Add Geocache to List
    * This method will add the geocache to the specified list.
    *
    * @path: /v1/lists/{referenceCode}/geocaches
    * @method: post
    * @link https://api.groundspeak.com/documentation#add-geocache-list
    * @access public
    * @param referenceCode (path) [required] identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
* @param geocache (body) [required] geocache to add to the list - (Geocache)
* @param fields (query) [required] partial response fields to return referenceCode (fields=name,referenceCode)
        * @return listItem 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions Basic members restriction applies. See
    */
    const addGeocacheList = (params: AddGeocacheList, cb): listItem => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('geocache', params)) {
                throw new Exception('geocache is missing.');
        }
        
        return this.postRequest('/v1/lists/{referenceCode}/geocaches', params, cb);
    };
    
    /**
    * Add Geocaches to List
    * This method will add multiple geocaches to the specified list.
    *
    * @path: /v1/lists/{referenceCode}/bulkgeocaches
    * @method: post
    * @link https://api.groundspeak.com/documentation#add-geocaches-list
    * @access public
    * @param referenceCode (path) [required] identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
* @param geocacheCodes (body) [required] The reference codes of the geocaches to add. - (Array of strings)
        * @return bulkResponse 
    * @responseCodes 200, 400, 401, 403, 404, 409, 500
    * @restrictions Basic members restriction applies. See
    */
    const addGeocachesList = (params: AddGeocachesList, cb): bulkResponse => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('geocacheCodes', params)) {
                throw new Exception('geocacheCodes is missing.');
        }
        
        return this.postRequest('/v1/lists/{referenceCode}/bulkgeocaches', params, cb);
    };
    
    /**
    * Remove Geocache from List
    * This method will remove a specified geocache from the list
    *
    * @path: /v1/lists/{referenceCode}/geocaches/{geocacheCode}
    * @method: delete
    * @link https://api.groundspeak.com/documentation#delete-geocache-list
    * @access public
    * @param referenceCode (path) [required] identifier of the list (ignore, favorites, or watch can be used as aliases in place of the reference codes to get the calling user&#39;s ignore list and watch list). - (BM1234)
* @param geocacheCode (query) [required] identifier of the geocache - (geocacheCode=GC1234)
        * @return  
    * @responseCodes 204, 400, 401, 409, 500
    * @restrictions Basic members restriction applies. See
    */
    const deleteGeocacheList = (params: DeleteGeocacheList, cb) => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('geocacheCode', params)) {
                throw new Exception('geocacheCode is missing.');
        }
        
        return this.deleteRequest('/v1/lists/{referenceCode}/geocaches/{geocacheCode}', params, cb);
    };
    

    // Returns all methods in a single object API
    return {
        getList,
        createList,
        updateList,
        removeList,
        getListGeocaches,
        getPqZip,
        addGeocacheList,
        addGeocachesList,
        deleteGeocacheList,
        
    };

}; //end export const


export default (configuration: InternalConfiguration): ListMethodsApi => {
    return listMethodsApi(configuration, http);
};