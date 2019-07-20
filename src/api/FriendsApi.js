/**
 * Geocaching API v1.0
 * Geocaching API version 1.0.
 *
 * OpenAPI spec version: v1
 * Contact: apihelp@geocaching.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FriendRequest', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FriendRequest'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.FriendsApi = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.FriendRequest, root.GeocachingApiV10.User);
  }
}(this, function(ApiClient, FriendRequest, User) {
  'use strict';

  /**
   * Friends service.
   * @module api/FriendsApi
   * @version v1
   */

  /**
   * Constructs a new FriendsApi. 
   * @alias module:api/FriendsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the friendsAcceptFriendRequest operation.
     * @callback module:api/FriendsApi~friendsAcceptFriendRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accept a friend request
     * 
     * @param {Number} requestId friend request identifier
     * @param {String} apiVersion The requested API version
     * @param {module:api/FriendsApi~friendsAcceptFriendRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.friendsAcceptFriendRequest = function(requestId, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling friendsAcceptFriendRequest");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsAcceptFriendRequest");
      }


      var pathParams = {
        'requestId': requestId,
        'api-version': apiVersion
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AccessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/v{api-version}/friendrequests/{requestId}/accept', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {module:model/FriendRequest} friendRequest The friend request to create.
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return, defaults to id (default to id)
     * @param {module:api/FriendsApi~friendsCreateFriendRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FriendRequest}
     */
    this.friendsCreateFriendRequest = function(friendRequest, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = friendRequest;

      // verify the required parameter 'friendRequest' is set
      if (friendRequest === undefined || friendRequest === null) {
        throw new Error("Missing the required parameter 'friendRequest' when calling friendsCreateFriendRequest");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsCreateFriendRequest");
      }


      var pathParams = {
        'api-version': apiVersion
      };
      var queryParams = {
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AccessToken'];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      var returnType = FriendRequest;

      return this.apiClient.callApi(
        '/v{api-version}/friendrequests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.friendsDeleteFriendRequest = function(requestId, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling friendsDeleteFriendRequest");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsDeleteFriendRequest");
      }


      var pathParams = {
        'requestId': requestId,
        'api-version': apiVersion
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AccessToken'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v{api-version}/friendrequests/{requestId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {Number} opts.skip How many requests to skip (default &#x3D; 0) (default to 0)
     * @param {Number} opts.take How many requests to return (default &#x3D; 10, max &#x3D; 50) (default to 10)
     * @param {String} opts.fields Properties you want to return, defaults to id (default to id)
     * @param {module:api/FriendsApi~friendsGetFriendRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FriendRequest>}
     */
    this.friendsGetFriendRequests = function(apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsGetFriendRequests");
      }


      var pathParams = {
        'api-version': apiVersion
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AccessToken'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      var returnType = [FriendRequest];

      return this.apiClient.callApi(
        '/v{api-version}/friendrequests', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {Number} opts.skip How many friends to skip (default &#x3D; 0) (default to 0)
     * @param {Number} opts.take How many friends to return (default &#x3D; 10, max &#x3D; 50) (default to 10)
     * @param {String} opts.fields Properties you want to return, defaults to referenceCode (default to referenceCode)
     * @param {module:api/FriendsApi~friendsGetFriendsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    this.friendsGetFriends = function(apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsGetFriends");
      }


      var pathParams = {
        'api-version': apiVersion
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AccessToken'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      var returnType = [User];

      return this.apiClient.callApi(
        '/v{api-version}/friends', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
    this.friendsRemoveFriend = function(userCode, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'userCode' is set
      if (userCode === undefined || userCode === null) {
        throw new Error("Missing the required parameter 'userCode' when calling friendsRemoveFriend");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling friendsRemoveFriend");
      }


      var pathParams = {
        'userCode': userCode,
        'api-version': apiVersion
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AccessToken'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/v{api-version}/friends/{userCode}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
