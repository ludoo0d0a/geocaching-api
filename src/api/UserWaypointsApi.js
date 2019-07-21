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
    define(['ApiClient', 'model/Coordinates', 'model/PostUserWaypoint', 'model/UserWaypoint'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Coordinates'), require('../model/PostUserWaypoint'), require('../model/UserWaypoint'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.UserWaypointsApi = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.Coordinates, root.GeocachingApiV10.PostUserWaypoint, root.GeocachingApiV10.UserWaypoint);
  }
}(this, function(ApiClient, Coordinates, PostUserWaypoint, UserWaypoint) {
  'use strict';

  /**
   * UserWaypoints service.
   * @module api/UserWaypointsApi
   * @version v1
   */

  /**
   * Constructs a new UserWaypointsApi. 
   * @alias module:api/UserWaypointsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the userWaypointsCreateUserWaypoint operation.
     * @callback module:api/UserWaypointsApi~userWaypointsCreateUserWaypointCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserWaypoint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user waypoint
     * This method will return the user waypoint created.
     * @param {module:model/PostUserWaypoint} userWaypoint The user waypoint to create.
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return (default &#x3D; referenceCode) (default to referencecode)
     * @param {module:api/UserWaypointsApi~userWaypointsCreateUserWaypointCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserWaypoint}
     */
    this.userWaypointsCreateUserWaypoint = function(userWaypoint, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = userWaypoint;

      // verify the required parameter 'userWaypoint' is set
      if (userWaypoint === undefined || userWaypoint === null) {
        throw new Error("Missing the required parameter 'userWaypoint' when calling userWaypointsCreateUserWaypoint");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsCreateUserWaypoint");
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
      var returnType = UserWaypoint;

      return this.apiClient.callApi(
        '/v{api-version}/userwaypoints', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userWaypointsDeleteCorrectedCoordinates operation.
     * @callback module:api/UserWaypointsApi~userWaypointsDeleteCorrectedCoordinatesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a corrected coordinate for the calling user
     * @param {String} referenceCode geocache identifier
     * @param {String} apiVersion The requested API version
     * @param {module:api/UserWaypointsApi~userWaypointsDeleteCorrectedCoordinatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.userWaypointsDeleteCorrectedCoordinates = function(referenceCode, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsDeleteCorrectedCoordinates");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsDeleteCorrectedCoordinates");
      }


      var pathParams = {
        'referenceCode': referenceCode,
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
        '/v{api-version}/geocaches/{referenceCode}/correctedcoordinates', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userWaypointsDeleteUserWaypoint operation.
     * @callback module:api/UserWaypointsApi~userWaypointsDeleteUserWaypointCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user waypoint
     * This method will return no content.
     * @param {String} referenceCode The identifier of the user waypoint
     * @param {String} apiVersion The requested API version
     * @param {module:api/UserWaypointsApi~userWaypointsDeleteUserWaypointCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.userWaypointsDeleteUserWaypoint = function(referenceCode, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsDeleteUserWaypoint");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsDeleteUserWaypoint");
      }


      var pathParams = {
        'referenceCode': referenceCode,
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
        '/v{api-version}/userwaypoints/{referenceCode}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userWaypointsGetGeocacheUserWaypoints operation.
     * @callback module:api/UserWaypointsApi~userWaypointsGetGeocacheUserWaypointsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserWaypoint>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the user waypoints for a geocache
     * This method will return a paged list of userwaypoints
     * @param {String} referenceCode The reference code of the geocache (example: GC25).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip How many user waypoints to skip. default &#x3D; 0 (default to 0)
     * @param {Number} opts.take How many user waypoints to include in result set. default &#x3D; 10 (default to 10)
     * @param {Boolean} opts.includeCorrectedCoordinates Include corrected coordinates in the results. default &#x3D; false (default to false)
     * @param {String} opts.fields Properties you want to return. default &#x3D; referencecode (default to referencecode)
     * @param {module:api/UserWaypointsApi~userWaypointsGetGeocacheUserWaypointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserWaypoint>}
     */
    this.userWaypointsGetGeocacheUserWaypoints = function(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsGetGeocacheUserWaypoints");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsGetGeocacheUserWaypoints");
      }


      var pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'includeCorrectedCoordinates': opts['includeCorrectedCoordinates'],
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
      var returnType = [UserWaypoint];

      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/userwaypoints', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userWaypointsGetUserWaypoints operation.
     * @callback module:api/UserWaypointsApi~userWaypointsGetUserWaypointsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserWaypoint>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of user waypoints for the calling user
     * This method will return an array of user waypoints.
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip How many waypoints to skip (default &#x3D; 0) (default to 0)
     * @param {Number} opts.take How many drafts to return (default &#x3D; 10) (default to 10)
     * @param {Boolean} opts.includeCorrectedCoordinates Include corrected coordinates in the results. default &#x3D; false (default to false)
     * @param {String} opts.fields Properties you want to return (default &#x3D; referenceCode) (default to referencecode)
     * @param {module:api/UserWaypointsApi~userWaypointsGetUserWaypointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserWaypoint>}
     */
    this.userWaypointsGetUserWaypoints = function(apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsGetUserWaypoints");
      }


      var pathParams = {
        'api-version': apiVersion
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'includeCorrectedCoordinates': opts['includeCorrectedCoordinates'],
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
      var returnType = [UserWaypoint];

      return this.apiClient.callApi(
        '/v{api-version}/userwaypoints', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userWaypointsUpdateUserWaypoint operation.
     * @callback module:api/UserWaypointsApi~userWaypointsUpdateUserWaypointCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserWaypoint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user waypoint
     * This method will return the updated user waypoint.
     * @param {String} referenceCode The identifier of the user waypoint
     * @param {module:model/UserWaypoint} userWaypoint The user waypoint to update.
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return (default &#x3D; referenceCode) (default to referencecode)
     * @param {module:api/UserWaypointsApi~userWaypointsUpdateUserWaypointCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserWaypoint}
     */
    this.userWaypointsUpdateUserWaypoint = function(referenceCode, userWaypoint, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = userWaypoint;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsUpdateUserWaypoint");
      }

      // verify the required parameter 'userWaypoint' is set
      if (userWaypoint === undefined || userWaypoint === null) {
        throw new Error("Missing the required parameter 'userWaypoint' when calling userWaypointsUpdateUserWaypoint");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsUpdateUserWaypoint");
      }


      var pathParams = {
        'referenceCode': referenceCode,
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
      var returnType = UserWaypoint;

      return this.apiClient.callApi(
        '/v{api-version}/userwaypoints/{referenceCode}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userWaypointsUpsertCorrectedCoordinates operation.
     * @callback module:api/UserWaypointsApi~userWaypointsUpsertCorrectedCoordinatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserWaypoint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upsert a corrected coordinate for the calling user
     * This method will return the created or updated corrected coordinate.
     * @param {String} referenceCode the geocache identifier
     * @param {module:model/Coordinates} coordinates The corrected coordinates to upsert
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return (default &#x3D; referenceCode) (default to referencecode)
     * @param {module:api/UserWaypointsApi~userWaypointsUpsertCorrectedCoordinatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserWaypoint}
     */
    this.userWaypointsUpsertCorrectedCoordinates = function(referenceCode, coordinates, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = coordinates;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsUpsertCorrectedCoordinates");
      }

      // verify the required parameter 'coordinates' is set
      if (coordinates === undefined || coordinates === null) {
        throw new Error("Missing the required parameter 'coordinates' when calling userWaypointsUpsertCorrectedCoordinates");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsUpsertCorrectedCoordinates");
      }


      var pathParams = {
        'referenceCode': referenceCode,
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
      var returnType = UserWaypoint;

      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/correctedcoordinates', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));