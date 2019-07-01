import * as urljoin from 'url-join';

import http, {utils} from '../utils/http';
import {HttpClient, InternalConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetGeocacheUserwaypoints {
 referenceCode: string;
 includeCorrectedCoordinates: string;
 fields: string;
 skip: string;
 take: string;
}

export interface GetUserwaypoints {
 includeCorrectedCoordinates: string;
 fields: string;
 skip: string;
 take: string;
}

export interface CreateUserwaypoint {
 referenceCode: string;
 userWaypoint: string;
}

export interface UpdateUserwaypoint {
 referenceCode: string;
 log: string;
}

export interface DeleteUserwaypoint {
 referenceCode: string;
}

export interface UpsertCorrectedcoordinates {
 referenceCode: string;
 coordinates: string;
}

export interface DeleteCorrectedcoordinates {
 referenceCode: string;
}


/*
* Returned api userwaypointMethodsApi
*/
export const userwaypointMethodsApi = (configuration: InternalConfiguration, httpClient: HttpClient): UserwaypointMethodsApi => {
    const {get, post, delete_} = httpClient;

    
    /**
    * Get Geocache&#39;s User Waypoints
    * This method will fetch a specified geocache&#39;s user waypoints for the calling user.
    *
    * @path: /v1/geocaches/{referenceCode}/userwaypoints
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-geocache-userwaypoints
    * @access public
     * @param referenceCode (path) [required] the identifier of the geocache - (gc25)
     * @param includeCorrectedCoordinates (query) [required] bool to include corrected coordinates in the response false (includeCorrectedCoordinates=false)
     * @param fields (query) [required] partial response fields to return all fields (fields=name,referenceCode)
     * @param skip (query) [required] the number of resources to skip over 0 (skip=10)
     * @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
    
    * @return User Waypoints 
    * @responseCodes 200, 400, 401, 404, 429, 500
    * @restrictions Basic members restriction applies. See
    */
    const getGeocacheUserwaypoints = (params: GetGeocacheUserwaypoints, cb): User Waypoints => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/geocaches/{referenceCode}/userwaypoints', params, cb);
    };
    
    /**
    * Get User Waypoints
    * This method will fetch the user waypoints for the calling user.
    *
    * @path: /v1/userwaypoints
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-userwaypoints
    * @access public
     * @param includeCorrectedCoordinates (query) [required] bool to include corrected coordinates in the response false (includeCorrectedCoordinates=false)
     * @param fields (query) [required] partial response fields to return all fields (fields=name,referenceCode)
     * @param skip (query) [required] the number of resources to skip over 0 (skip=10)
     * @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
    
    * @return User Waypoints 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions Only owner of user waypoints can fetch them.
    */
    const getUserwaypoints = (params: GetUserwaypoints, cb): User Waypoints => {
        
        return this.getRequest('/v1/userwaypoints', params, cb);
    };
    
    /**
    * Create User Waypoint
    * This method will create a new user waypoint. It will return the created user waypoint.
    *
    * @path: /v1/userwaypoints
    * @method: post
    * @link https://api.groundspeak.com/documentation#create-userwaypoint
    * @access public
     * @param referenceCode (path) [required] the identifier of the geocache - (gc25)
     * @param userWaypoint (body) [required] user waypoint to create - (UserWaypoint)
    
    * @return User Waypoint 
    * @responseCodes 201, 400, 401, 404, 409, 500
    * @restrictions 
    */
    const createUserwaypoint = (params: CreateUserwaypoint, cb): User Waypoint => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('userWaypoint', params)) {
                throw new Exception('userWaypoint is missing.');
        }
        
        return this.postRequest('/v1/userwaypoints', params, cb);
    };
    
    /**
    * Update User Waypoint
    * This method will update a specified user waypoint. It will return the updated user waypoint.
    *
    * @path: /v1/userwaypoints/{id}
    * @method: put
    * @link https://api.groundspeak.com/documentation#update-userwaypoint
    * @access public
     * @param referenceCode (path) [required] the identifier of the user waypoint - (UW123)
     * @param log (body) [required] user waypoint to update - (UserWaypoint)
    
    * @return User Waypoint 
    * @responseCodes 200, 400, 401, 403, 404, 409, 500
    * @restrictions Only owner may update the user waypoint.
    */
    const updateUserwaypoint = (params: UpdateUserwaypoint, cb): User Waypoint => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('log', params)) {
                throw new Exception('log is missing.');
        }
        
        return this.putRequest('/v1/userwaypoints/{id}', params, cb);
    };
    
    /**
    * Delete User Waypoint
    * This method will delete a specified user waypoint
    *
    * @path: /v1/userwaypoints/{id}
    * @method: delete
    * @link https://api.groundspeak.com/documentation#delete-userwaypoint
    * @access public
     * @param referenceCode (path) [required] the identifier of the user waypoint - (UW123)
    
    * @return  
    * @responseCodes 204, 400, 401, 409, 500
    * @restrictions Only owner may delete the user waypoint.
    */
    const deleteUserwaypoint = (params: DeleteUserwaypoint, cb):  => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.deleteRequest('/v1/userwaypoints/{id}', params, cb);
    };
    
    /**
    * Upsert Corrected Coordinates
    * This method will insert or update corrected coordinates for the specified geocache. It will return the updated user waypoint.
    *
    * @path: /v1/geocaches/{referenceCode}/correctedcoordinates
    * @method: put
    * @link https://api.groundspeak.com/documentation#upsert-correctedcoordinates
    * @access public
     * @param referenceCode (path) [required] the identifier of the geocache - (GCK25B)
     * @param coordinates (body) [required] the corrected coordinates to upsert - (Coordinates)
    
    * @return User Waypoint 
    * @responseCodes 200, 400, 401, 403, 404, 409, 429, 500
    * @restrictions 
    */
    const upsertCorrectedcoordinates = (params: UpsertCorrectedcoordinates, cb): User Waypoint => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        if (!array_key_exists('coordinates', params)) {
                throw new Exception('coordinates is missing.');
        }
        
        return this.putRequest('/v1/geocaches/{referenceCode}/correctedcoordinates', params, cb);
    };
    
    /**
    * Delete CorrectedCoordinates
    * This method will delete the calling user&#39;s coordinates for the specified geocache
    *
    * @path: /v1/geocaches/{referenceCode}/correctedcoordinates
    * @method: delete
    * @link https://api.groundspeak.com/documentation#delete-correctedcoordinates
    * @access public
     * @param referenceCode (path) [required] the identifier of the geocache - (GCK25B)
    
    * @return  
    * @responseCodes 204, 400, 401, 409, 429, 500
    * @restrictions Only owner may delete the corrected coordinate.
    */
    const deleteCorrectedcoordinates = (params: DeleteCorrectedcoordinates, cb):  => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.deleteRequest('/v1/geocaches/{referenceCode}/correctedcoordinates', params, cb);
    };
    

    // Returns all methods in a single object API
    return {
        getGeocacheUserwaypoints,
        getUserwaypoints,
        createUserwaypoint,
        updateUserwaypoint,
        deleteUserwaypoint,
        upsertCorrectedcoordinates,
        deleteCorrectedcoordinates,
        
    };

}; //end export const


export default (configuration: InternalConfiguration): UserwaypointMethodsApi => {
    return userwaypointMethodsApi(configuration, http);
};