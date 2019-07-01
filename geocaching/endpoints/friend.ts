import * as urljoin from 'url-join';

import http, {utils} from '../utils/http';
import {HttpClient, InternalConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetFriends {
 skip: string;
 take: string;
 fields: string;
}

export interface GetFriendrequests {
 skip: string;
 take: string;
 fields: string;
}

export interface CreateFriendrequest {
 friendRequest: string;
 fields: string;
}

export interface AcceptFriendrequest {
 requestId: string;
}

export interface DeleteFriendrequest {
 requestId: string;
}

export interface DeleteFriend {
 userCode: string;
}


/*
* Returned api friendMethodsApi
*/
export const friendMethodsApi = (configuration: InternalConfiguration, httpClient: HttpClient): FriendMethodsApi => {
    const {get, post, delete_} = httpClient;

    
    /**
    * Get Friends
    * This method will fetch the friends of the user.
    *
    * @path: /v1/friends
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-friends
    * @access public
     * @param skip (query) [required] the number of resources to skip over 0 (skip=10)
     * @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
     * @param fields (query) [required] partial response fields to return referenceCode (fields=username,referenceCode)
    
    * @return Users 
    * @responseCodes 200, 400, 401, 429, 500
    * @restrictions Users may opt out of sharing personal data. See
    */
    const getFriends = (params: GetFriends, cb): Users => {
        
        return this.getRequest('/v1/friends', params, cb);
    };
    
    /**
    * Get Friend Requests
    * This method will fetch friend requests for the user.
    *
    * @path: /v1/friendrequests
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-friendrequests
    * @access public
     * @param skip (query) [required] the number of resources to skip over 0 (skip=10)
     * @param take (query) [required] how many resources to return. maximum value of 50 10 (take=0)
     * @param fields (query) [required] partial response fields to return id (fields=requested.username,id)
    
    * @return FriendRequests 
    * @responseCodes 200, 400, 401, 500
    * @restrictions 
    */
    const getFriendrequests = (params: GetFriendrequests, cb): FriendRequests => {
        
        return this.getRequest('/v1/friendrequests', params, cb);
    };
    
    /**
    * Create Friend Request
    * This method will create a friend request for the user.
    *
    * @path: /v1/friendrequests
    * @method: post
    * @link https://api.groundspeak.com/documentation#create-friendrequest
    * @access public
     * @param friendRequest (body) [required] friend request to create - (FriendRequest)
     * @param fields (query) [required] partial response fields to return id (fields=message)
    
    * @return FriendRequest 
    * @responseCodes 200, 400, 401, 403, 404, 409, 500
    * @restrictions 
    */
    const createFriendrequest = (params: CreateFriendrequest, cb): FriendRequest => {
        
        // check required params
        
        if (!array_key_exists('friendRequest', params)) {
                throw new Exception('friendRequest is missing.');
        }
        
        return this.postRequest('/v1/friendrequests', params, cb);
    };
    
    /**
    * Accept Friend Request
    * This method will accept a friend request.
    *
    * @path: /v1/friendrequests/{requestId}/accept
    * @method: post
    * @link https://api.groundspeak.com/documentation#accept-friendrequest
    * @access public
     * @param requestId (path) [required] the identifier of the friend request - (12345)
    
    * @return  
    * @responseCodes 204, 400, 401, 403, 404, 500
    * @restrictions Only the requested user can accept a friend request.
    */
    const acceptFriendrequest = (params: AcceptFriendrequest, cb):  => {
        
        // check required params
        
        if (!array_key_exists('requestId', params)) {
                throw new Exception('requestId is missing.');
        }
        
        return this.postRequest('/v1/friendrequests/{requestId}/accept', params, cb);
    };
    
    /**
    * Delete Friend Request
    * This method will deny a friend request and remove the request.
    *
    * @path: /v1/friendrequests/{requestId}
    * @method: delete
    * @link https://api.groundspeak.com/documentation#delete-friendrequest
    * @access public
     * @param requestId (path) [required] the identifier of the friend request - (12345)
    
    * @return  
    * @responseCodes 204, 400, 401, 403, 404, 500
    * @restrictions 
    */
    const deleteFriendrequest = (params: DeleteFriendrequest, cb):  => {
        
        // check required params
        
        if (!array_key_exists('requestId', params)) {
                throw new Exception('requestId is missing.');
        }
        
        return this.deleteRequest('/v1/friendrequests/{requestId}', params, cb);
    };
    
    /**
    * Delete Friend
    * This method will remove a user as a friend.
    *
    * @path: /v1/friends/{userCode}
    * @method: delete
    * @link https://api.groundspeak.com/documentation#delete-friend
    * @access public
     * @param userCode (path) [required] the identifier of the user to remove as a friend - (PR18)
    
    * @return  
    * @responseCodes 204, 400, 401, 403, 404, 500
    * @restrictions 
    */
    const deleteFriend = (params: DeleteFriend, cb):  => {
        
        // check required params
        
        if (!array_key_exists('userCode', params)) {
                throw new Exception('userCode is missing.');
        }
        
        return this.deleteRequest('/v1/friends/{userCode}', params, cb);
    };
    

    // Returns all methods in a single object API
    return {
        getFriends,
        getFriendrequests,
        createFriendrequest,
        acceptFriendrequest,
        deleteFriendrequest,
        deleteFriend,
        
    };

}; //end export const


export default (configuration: InternalConfiguration): FriendMethodsApi => {
    return friendMethodsApi(configuration, http);
};