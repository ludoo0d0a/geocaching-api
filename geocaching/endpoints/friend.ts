import http, {utils} from '../utils/http';
import {HttpClient, APIConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetFriends {
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string;
  // [query] partial response fields to return default:referenceCode ex:fields=username,referenceCode
  fields?: string;
}

export interface GetFriendrequests {
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string;
  // [query] partial response fields to return default:id ex:fields=requested.username,id
  fields?: string;
}

export interface CreateFriendrequest {
  // [body] friend request to create default:- ex:FriendRequest
  friendRequest: string;
  // [query] partial response fields to return default:id ex:fields=message
  fields?: string;
}

export interface AcceptFriendrequest {
  // [path] the identifier of the friend request default:- ex:12345
  requestId: string;
}

export interface DeleteFriendrequest {
  // [path] the identifier of the friend request default:- ex:12345
  requestId: string;
}

export interface DeleteFriend {
  // [path] the identifier of the user to remove as a friend default:- ex:PR18
  userCode: string;
}

/*
 * Returned api friendMethodsApi
 */
export const friendMethodsApi = (configuration: APIConfiguration, httpClient: HttpClient): FriendMethodsApi => {
  const {get, post, delete_} = httpClient;

  /**
   * Get Friends
   * This method will fetch the friends of the user.
   *
   * @path: /v1/friends
   * @method: get
   * @link https://api.groundspeak.com/documentation#get-friends
   * @access public
   * @param skip (query)  the number of resources to skip over 0 (skip=10)
   * @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
   * @param fields (query)  partial response fields to return referenceCode (fields=username,referenceCode)
   * @return user[]
   * @responseCodes 200, 400, 401, 429, 500
   * @restrictions Users may opt out of sharing personal data. See
   */
  const getFriends = (params: GetFriends, cb): user[] => {
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
   * @param skip (query)  the number of resources to skip over 0 (skip=10)
   * @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
   * @param fields (query)  partial response fields to return id (fields=requested.username,id)
   * @return friendrequest[]
   * @responseCodes 200, 400, 401, 500
   * @restrictions
   */
  const getFriendrequests = (params: GetFriendrequests, cb): friendrequest[] => {
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
   * @param fields (query)  partial response fields to return id (fields=message)
   * @return friendrequest
   * @responseCodes 200, 400, 401, 403, 404, 409, 500
   * @restrictions
   */
  const createFriendrequest = (params: CreateFriendrequest, cb): friendrequest => {
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
   * @return void
   * @responseCodes 204, 400, 401, 403, 404, 500
   * @restrictions Only the requested user can accept a friend request.
   */
  const acceptFriendrequest = (params: AcceptFriendrequest, cb): void => {
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
   * @return void
   * @responseCodes 204, 400, 401, 403, 404, 500
   * @restrictions
   */
  const deleteFriendrequest = (params: DeleteFriendrequest, cb): void => {
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
   * @return void
   * @responseCodes 204, 400, 401, 403, 404, 500
   * @restrictions
   */
  const deleteFriend = (params: DeleteFriend, cb): void => {
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
    deleteFriend
  };
}; //end export const

export default (configuration: APIConfiguration): FriendMethodsApi => {
  return friendMethodsApi(configuration, http);
};
