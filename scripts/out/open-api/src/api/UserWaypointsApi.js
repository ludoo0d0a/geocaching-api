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
import Coordinates from '../model/Coordinates';
import PostUserWaypoint from '../model/PostUserWaypoint';
import UserWaypoint from '../model/UserWaypoint';

/**
* UserWaypoints service.
* @module api/UserWaypointsApi
* @version 1.0.0-oas3
*/
export default class UserWaypointsApi {

    /**
    * Constructs a new UserWaypointsApi. 
    * @alias module:api/UserWaypointsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


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
     * @param {String} apiVersion The requested API version
     * @param {module:model/PostUserWaypoint} postUserWaypoint The user waypoint to create.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return (default = referenceCode) (default to 'referencecode')
     * @param {module:api/UserWaypointsApi~userWaypointsCreateUserWaypointCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserWaypoint}
     */
    userWaypointsCreateUserWaypoint(apiVersion, postUserWaypoint, opts, callback) {
      opts = opts || {};
      let postBody = postUserWaypoint;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsCreateUserWaypoint");
      }
      // verify the required parameter 'postUserWaypoint' is set
      if (postUserWaypoint === undefined || postUserWaypoint === null) {
        throw new Error("Missing the required parameter 'postUserWaypoint' when calling userWaypointsCreateUserWaypoint");
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

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = UserWaypoint;
      return this.apiClient.callApi(
        '/v{api-version}/userwaypoints', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    userWaypointsDeleteCorrectedCoordinates(referenceCode, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsDeleteCorrectedCoordinates");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsDeleteCorrectedCoordinates");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/correctedcoordinates', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    userWaypointsDeleteUserWaypoint(referenceCode, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsDeleteUserWaypoint");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsDeleteUserWaypoint");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v{api-version}/userwaypoints/{referenceCode}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {Number} opts.skip How many user waypoints to skip. default = 0 (default to 0)
     * @param {Number} opts.take How many user waypoints to include in result set. default = 10 (default to 10)
     * @param {Boolean} opts.includeCorrectedCoordinates Include corrected coordinates in the results. default = false (default to false)
     * @param {String} opts.fields Properties you want to return. default = referencecode (default to 'referencecode')
     * @param {module:api/UserWaypointsApi~userWaypointsGetGeocacheUserWaypointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserWaypoint>}
     */
    userWaypointsGetGeocacheUserWaypoints(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsGetGeocacheUserWaypoints");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsGetGeocacheUserWaypoints");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'includeCorrectedCoordinates': opts['includeCorrectedCoordinates'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [UserWaypoint];
      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/userwaypoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {Number} opts.skip How many waypoints to skip (default = 0) (default to 0)
     * @param {Number} opts.take How many drafts to return (default = 10) (default to 10)
     * @param {Boolean} opts.includeCorrectedCoordinates Include corrected coordinates in the results. default = false (default to false)
     * @param {String} opts.fields Properties you want to return (default = referenceCode) (default to 'referencecode')
     * @param {module:api/UserWaypointsApi~userWaypointsGetUserWaypointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserWaypoint>}
     */
    userWaypointsGetUserWaypoints(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsGetUserWaypoints");
      }

      let pathParams = {
        'api-version': apiVersion
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'includeCorrectedCoordinates': opts['includeCorrectedCoordinates'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [UserWaypoint];
      return this.apiClient.callApi(
        '/v{api-version}/userwaypoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} apiVersion The requested API version
     * @param {module:model/UserWaypoint} userWaypoint The user waypoint to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return (default = referenceCode) (default to 'referencecode')
     * @param {module:api/UserWaypointsApi~userWaypointsUpdateUserWaypointCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserWaypoint}
     */
    userWaypointsUpdateUserWaypoint(referenceCode, apiVersion, userWaypoint, opts, callback) {
      opts = opts || {};
      let postBody = userWaypoint;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsUpdateUserWaypoint");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsUpdateUserWaypoint");
      }
      // verify the required parameter 'userWaypoint' is set
      if (userWaypoint === undefined || userWaypoint === null) {
        throw new Error("Missing the required parameter 'userWaypoint' when calling userWaypointsUpdateUserWaypoint");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = UserWaypoint;
      return this.apiClient.callApi(
        '/v{api-version}/userwaypoints/{referenceCode}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} apiVersion The requested API version
     * @param {module:model/Coordinates} coordinates The corrected coordinates to upsert
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return (default = referenceCode) (default to 'referencecode')
     * @param {module:api/UserWaypointsApi~userWaypointsUpsertCorrectedCoordinatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserWaypoint}
     */
    userWaypointsUpsertCorrectedCoordinates(referenceCode, apiVersion, coordinates, opts, callback) {
      opts = opts || {};
      let postBody = coordinates;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling userWaypointsUpsertCorrectedCoordinates");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling userWaypointsUpsertCorrectedCoordinates");
      }
      // verify the required parameter 'coordinates' is set
      if (coordinates === undefined || coordinates === null) {
        throw new Error("Missing the required parameter 'coordinates' when calling userWaypointsUpsertCorrectedCoordinates");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = UserWaypoint;
      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/correctedcoordinates', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}