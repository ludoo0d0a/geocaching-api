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
    define(['ApiClient', 'model/Image', 'model/Trackable', 'model/TrackableLog', 'model/TrackableType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Image'), require('../model/Trackable'), require('../model/TrackableLog'), require('../model/TrackableType'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.TrackablesApi = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.Image, root.GeocachingApiV10.Trackable, root.GeocachingApiV10.TrackableLog, root.GeocachingApiV10.TrackableType);
  }
}(this, function(ApiClient, Image, Trackable, TrackableLog, TrackableType) {
  'use strict';

  /**
   * Trackables service.
   * @module api/TrackablesApi
   * @version v1
   */

  /**
   * Constructs a new TrackablesApi. 
   * @alias module:api/TrackablesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the trackablesGetGeocoinTypes operation.
     * @callback module:api/TrackablesApi~trackablesGetGeocoinTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TrackableType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get paged geocoin types
     * This method will return a list of geocoin types.
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of types to skip over used for pagination. Defaults to 0. (default to 0)
     * @param {Number} opts.take Amount of types to include in results. Defaults to 10. (default to 10)
     * @param {String} opts.fields Properties you want to return. Defaults to id. (default to id)
     * @param {module:api/TrackablesApi~trackablesGetGeocoinTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TrackableType>}
     */
    this.trackablesGetGeocoinTypes = function(apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetGeocoinTypes");
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
      var returnType = [TrackableType];

      return this.apiClient.callApi(
        '/v{api-version}/trackables/geocointypes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackablesGetImages operation.
     * @callback module:api/TrackablesApi~trackablesGetImagesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Image>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the images attached to a trackable
     * This method will return a list of images.
     * @param {String} referenceCode The reference code of the trackable (example: TB100).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of images to skip over used for pagination. Defaults to 0. (default to 0)
     * @param {Number} opts.take Amount of images to include in results. Defaults to 10. (default to 10)
     * @param {String} opts.fields Properties you want to return. Defaults to url. (default to url)
     * @param {module:api/TrackablesApi~trackablesGetImagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Image>}
     */
    this.trackablesGetImages = function(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackablesGetImages");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetImages");
      }


      var pathParams = {
        'referenceCode': referenceCode,
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
      var returnType = [Image];

      return this.apiClient.callApi(
        '/v{api-version}/trackables/{referenceCode}/Images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackablesGetTrackable operation.
     * @callback module:api/TrackablesApi~trackablesGetTrackableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trackable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single trackable
     * This method will return a single trackable.
     * @param {String} referenceCode The reference code or tracking number of the trackable (example: TB100).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields fields you want to return, defaults to referenceCode (default to referenceCode)
     * @param {String} opts.expand  (default to )
     * @param {module:api/TrackablesApi~trackablesGetTrackableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trackable}
     */
    this.trackablesGetTrackable = function(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackablesGetTrackable");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetTrackable");
      }


      var pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      var queryParams = {
        'fields': opts['fields'],
        'expand': opts['expand'],
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
      var returnType = Trackable;

      return this.apiClient.callApi(
        '/v{api-version}/trackables/{referenceCode}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackablesGetTrackableLogs operation.
     * @callback module:api/TrackablesApi~trackablesGetTrackableLogsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TrackableLog>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of trackable logs for the specified trackable
     * This method will return a list of trackable logs.
     * @param {String} referenceCode The reference code of the trackable (example: TB100).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip how many logs to skip over (default to 0)
     * @param {Number} opts.take how many logs to retrieve (default to 10)
     * @param {String} opts.fields fields you want to return, defaults to referenceCode (default to referenceCode)
     * @param {String} opts.expand  (default to )
     * @param {String} opts.logTypes what log types to include with results. defaults to all
     * @param {module:api/TrackablesApi~trackablesGetTrackableLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TrackableLog>}
     */
    this.trackablesGetTrackableLogs = function(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackablesGetTrackableLogs");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetTrackableLogs");
      }


      var pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'expand': opts['expand'],
        'logTypes': opts['logTypes'],
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
      var returnType = [TrackableLog];

      return this.apiClient.callApi(
        '/v{api-version}/trackables/{referenceCode}/trackablelogs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackablesGetUserTrackables operation.
     * @callback module:api/TrackablesApi~trackablesGetUserTrackablesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Trackable>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of trackables
     * This method will return a list of trackables, either by specified codes or get user trackables if you leave referenceCodes null
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.referenceCodes The reference code or tracking number of the trackables (example: TB100). Don&#39;t pass in this param if you want to return user trackables
     * @param {module:model/String} opts.type 1&#x3D; inventory, 2 &#x3D; collection, 3 &#x3D; owned (default: 1) (default to 1)
     * @param {Number} opts.skip default &#x3D; 0 (default to 0)
     * @param {Number} opts.take default &#x3D; 10 (default to 10)
     * @param {String} opts.fields fields you want to return, defaults to referenceCode (default to referenceCode)
     * @param {String} opts.expand  (default to )
     * @param {module:api/TrackablesApi~trackablesGetUserTrackablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Trackable>}
     */
    this.trackablesGetUserTrackables = function(apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetUserTrackables");
      }


      var pathParams = {
        'api-version': apiVersion
      };
      var queryParams = {
        'referenceCodes': opts['referenceCodes'],
        'type': opts['type'],
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'expand': opts['expand'],
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
      var returnType = [Trackable];

      return this.apiClient.callApi(
        '/v{api-version}/trackables', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
