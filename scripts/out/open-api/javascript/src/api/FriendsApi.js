/**
 * API v1.0
 * API version 1.0.
 *
 * The version of the OpenAPI document: 1.0.0-oas3
 * Contact: apihelp@geocaching.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import FriendRequest from '../model/FriendRequest';
import User from '../model/User';

/**
* Friends service.
* @module api/FriendsApi
* @version 1.0.0-oas3
*/
export default class FriendsApi {

    /**
    * Constructs a new FriendsApi. 
    * @alias module:api/FriendsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the friendsAcceptFriendRequest operation.
     * @callback module:api/FriendsApi~friendsAcceptFriendRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accept a friend request
     * @param {Number} requestId friend request identifier
     * @param {String} apiVersion The requested API version
     * @param {module:api/FriendsApi~friendsAcceptFriendRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    friendsAcceptFriendRequest(requestId, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling friendsAcceptFriendRequest");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsAcceptFriendRequest");
      }

      let pathParams = {
        'requestId': requestId,
        'api-version': apiVersion
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [{type:'oauth2'}];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v{api-version}/friendrequests/{requestId}/accept', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the friendsCreateFriendRequest operation.
     * @callback module:api/FriendsApi~friendsCreateFriendRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FriendRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a friend request
     * This method will return the friend request created.
     * @param {String} apiVersion The requested API version
     * @param {module:model/FriendRequest} friendRequest The friend request to create.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return, defaults to id (default to 'id')
     * @param {module:api/FriendsApi~friendsCreateFriendRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FriendRequest}
     */
    friendsCreateFriendRequest(apiVersion, friendRequest, opts, callback) {
      opts = opts || {};
      let postBody = friendRequest;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsCreateFriendRequest");
      }
      // verify the required parameter 'friendRequest' is set
      if (friendRequest === undefined || friendRequest === null) {
        throw new Error("Missing the required parameter 'friendRequest' when calling friendsCreateFriendRequest");
      }

      let pathParams = {
        'api-version': apiVersion
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [{type:'oauth2'}];
      let contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = FriendRequest;
      return this.apiClient.callApi(
        '/v{api-version}/friendrequests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the friendsDeleteFriendRequest operation.
     * @callback module:api/FriendsApi~friendsDeleteFriendRequestCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a friend request
     * This method will return no content.
     * @param {Number} requestId The identifier of the friend request
     * @param {String} apiVersion The requested API version
     * @param {module:api/FriendsApi~friendsDeleteFriendRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    friendsDeleteFriendRequest(requestId, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling friendsDeleteFriendRequest");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsDeleteFriendRequest");
      }

      let pathParams = {
        'requestId': requestId,
        'api-version': apiVersion
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [{type:'oauth2'}];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v{api-version}/friendrequests/{requestId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the friendsGetFriendRequests operation.
     * @callback module:api/FriendsApi~friendsGetFriendRequestsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FriendRequest>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of friend requests for the calling user
     * This method will return a list of requests including both inbound and outbound requests.
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip How many requests to skip (default = 0) (default to 0)
     * @param {Number} opts.take How many requests to return (default = 10, max = 50) (default to 10)
     * @param {String} opts.fields Properties you want to return, defaults to id (default to 'id')
     * @param {module:api/FriendsApi~friendsGetFriendRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FriendRequest>}
     */
    friendsGetFriendRequests(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsGetFriendRequests");
      }

      let pathParams = {
        'api-version': apiVersion
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [{type:'oauth2'}];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [FriendRequest];
      return this.apiClient.callApi(
        '/v{api-version}/friendrequests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the friendsGetFriends operation.
     * @callback module:api/FriendsApi~friendsGetFriendsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of friends for the calling user
     * This method will return a list of Users.
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip How many friends to skip (default = 0) (default to 0)
     * @param {Number} opts.take How many friends to return (default = 10, max = 50) (default to 10)
     * @param {String} opts.fields Properties you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/FriendsApi~friendsGetFriendsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    friendsGetFriends(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsGetFriends");
      }

      let pathParams = {
        'api-version': apiVersion
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [{type:'oauth2'}];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [User];
      return this.apiClient.callApi(
        '/v{api-version}/friends', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the friendsRemoveFriend operation.
     * @callback module:api/FriendsApi~friendsRemoveFriendCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a friend
     * This method will return no content.
     * @param {String} userCode The identifier of the friend (their user reference code)
     * @param {String} apiVersion The requested API version
     * @param {module:api/FriendsApi~friendsRemoveFriendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    friendsRemoveFriend(userCode, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'userCode' is set
      if (userCode === undefined || userCode === null) {
        throw new Error("Missing the required parameter 'userCode' when calling friendsRemoveFriend");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsRemoveFriend");
      }

      let pathParams = {
        'userCode': userCode,
        'api-version': apiVersion
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [{type:'oauth2'}];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v{api-version}/friends/{userCode}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}