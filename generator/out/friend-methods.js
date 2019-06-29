

/**
 * Get Friends
 * This method will fetch the friends of the user.
 *
 * @path: /v1/friends
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)
 * @param fields query required partial response fields to return referenceCode (fields=username,referenceCode)

 * @return Users 
 * @responseCodes 200, 400, 401, 429, 500
 * @restrictions Users may opt out of sharing personal data. See
 */
GeocachingApi.prototype.getGetFriends = function (params, cb) {
    
    return this.GETRequest(/v1/friends, params, cb);
}



/**
 * Get Friend Requests
 * This method will fetch friend requests for the user.
 *
 * @path: /v1/friendrequests
 * @method: GET
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param skip query required the number of resources to skip over 0 (skip=10)
 * @param take query required how many resources to return. maximum value of 50 10 (take=0)
 * @param fields query required partial response fields to return id (fields=requested.username,id)

 * @return FriendRequests 
 * @responseCodes 200, 400, 401, 500
 * @restrictions 
 */
GeocachingApi.prototype.getGetFriendrequests = function (params, cb) {
    
    return this.GETRequest(/v1/friendrequests, params, cb);
}



/**
 * Create Friend Request
 * This method will create a friend request for the user.
 *
 * @path: /v1/friendrequests
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param friendRequest body required friend request to create - (FriendRequest)
 * @param fields query required partial response fields to return id (fields=message)

 * @return FriendRequest 
 * @responseCodes 200, 400, 401, 403, 404, 409, 500
 * @restrictions 
 */
GeocachingApi.prototype.postCreateFriendrequest = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/friendrequests, params, cb);
}



/**
 * Accept Friend Request
 * This method will accept a friend request.
 *
 * @path: /v1/friendrequests/{requestId}/accept
 * @method: POST
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param requestId path required the identifier of the friend request - (12345)

 * @return  
 * @responseCodes 204, 400, 401, 403, 404, 500
 * @restrictions Only the requested user can accept a friend request.
 */
GeocachingApi.prototype.postAcceptFriendrequest = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.POSTRequest(/v1/friendrequests/{requestId}/accept, params, cb);
}



/**
 * Delete Friend Request
 * This method will deny a friend request and remove the request.
 *
 * @path: /v1/friendrequests/{requestId}
 * @method: DELETE
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param requestId path required the identifier of the friend request - (12345)

 * @return  
 * @responseCodes 204, 400, 401, 403, 404, 500
 * @restrictions 
 */
GeocachingApi.prototype.deleteDeleteFriendrequest = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.DELETERequest(/v1/friendrequests/{requestId}, params, cb);
}



/**
 * Delete Friend
 * This method will remove a user as a friend.
 *
 * @path: /v1/friends/{userCode}
 * @method: DELETE
 * @link https://api.groundspeak.com/documentation#[object Object]
 * @access public
 * @param userCode path required the identifier of the user to remove as a friend - (PR18)

 * @return  
 * @responseCodes 204, 400, 401, 403, 404, 500
 * @restrictions 
 */
GeocachingApi.prototype.deleteDeleteFriend = function (params, cb) {
    
    // check required params
    
    if (!array_key_exists('[object Object]', params)) {
            throw new Exception('[object Object] is missing.');
    }
    
    return this.DELETERequest(/v1/friends/{userCode}, params, cb);
}

