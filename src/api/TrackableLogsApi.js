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
    define(['ApiClient', 'model/Image', 'model/PostImage', 'model/PostTrackableLog', 'model/TrackableLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Image'), require('../model/PostImage'), require('../model/PostTrackableLog'), require('../model/TrackableLog'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.TrackableLogsApi = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.Image, root.GeocachingApiV10.PostImage, root.GeocachingApiV10.PostTrackableLog, root.GeocachingApiV10.TrackableLog);
  }
}(this, function(ApiClient, Image, PostImage, PostTrackableLog, TrackableLog) {
  'use strict';

  /**
   * TrackableLogs service.
   * @module api/TrackableLogsApi
   * @version v1
   */

  /**
   * Constructs a new TrackableLogsApi. 
   * @alias module:api/TrackableLogsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the trackableLogsAddImage operation.
     * @callback module:api/TrackableLogsApi~trackableLogsAddImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Image} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an image to a trackable log
     * This method will return a single image.
     * @param {String} referenceCode The reference code of the trackable log (example: TL100).
     * @param {module:model/PostImage} image image to add
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to url (default to url)
     * @param {module:api/TrackableLogsApi~trackableLogsAddImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Image}
     */
    this.trackableLogsAddImage = function(referenceCode, image, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = image;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsAddImage");
      }

      // verify the required parameter 'image' is set
      if (image === undefined || image === null) {
        throw new Error("Missing the required parameter 'image' when calling trackableLogsAddImage");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsAddImage");
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs/{referenceCode}/images', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackableLogsCreateTrackableLog operation.
     * @callback module:api/TrackableLogsApi~trackableLogsCreateTrackableLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackableLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a log to a trackable
     * This method will return the created trackable log.
     * @param {module:model/PostTrackableLog} log The log to add
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referencecode (default to referenceCode)
     * @param {module:api/TrackableLogsApi~trackableLogsCreateTrackableLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackableLog}
     */
    this.trackableLogsCreateTrackableLog = function(log, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = log;

      // verify the required parameter 'log' is set
      if (log === undefined || log === null) {
        throw new Error("Missing the required parameter 'log' when calling trackableLogsCreateTrackableLog");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsCreateTrackableLog");
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
      var returnType = TrackableLog;

      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackableLogsDeleteTrackableLog operation.
     * @callback module:api/TrackableLogsApi~trackableLogsDeleteTrackableLogCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a trackable log
     * This method will not return anything in the body.
     * @param {String} referenceCode The reference code of the trackable log (example: TL100).
     * @param {String} apiVersion The requested API version
     * @param {module:api/TrackableLogsApi~trackableLogsDeleteTrackableLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.trackableLogsDeleteTrackableLog = function(referenceCode, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsDeleteTrackableLog");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsDeleteTrackableLog");
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
        '/v{api-version}/trackablelogs/{referenceCode}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackableLogsDeleteTrackableLogImages operation.
     * @callback module:api/TrackableLogsApi~trackableLogsDeleteTrackableLogImagesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a trackable log image
     * This method will not return anything in the body.
     * @param {String} referenceCode The reference code of the trackable log (example: TL100).
     * @param {String} imageGuid the guid of the image
     * @param {String} apiVersion The requested API version
     * @param {module:api/TrackableLogsApi~trackableLogsDeleteTrackableLogImagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.trackableLogsDeleteTrackableLogImages = function(referenceCode, imageGuid, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsDeleteTrackableLogImages");
      }

      // verify the required parameter 'imageGuid' is set
      if (imageGuid === undefined || imageGuid === null) {
        throw new Error("Missing the required parameter 'imageGuid' when calling trackableLogsDeleteTrackableLogImages");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsDeleteTrackableLogImages");
      }


      var pathParams = {
        'referenceCode': referenceCode,
        'imageGuid': imageGuid,
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
        '/v{api-version}/trackablelogs/{referenceCode}/images/{imageGuid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackableLogsGetImages operation.
     * @callback module:api/TrackableLogsApi~trackableLogsGetImagesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Image>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a the images attached to a trackable log
     * This method will return a list of images.
     * @param {String} referenceCode The reference code of the trackable log (example: TL100).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of images to skip over used for pagination. Defaults to 0. (default to 0)
     * @param {Number} opts.take Amount of images to include in results. Defaults to 10. (default to 10)
     * @param {String} opts.fields Properties you want to return. Defaults to referencecode. (default to referencecode)
     * @param {module:api/TrackableLogsApi~trackableLogsGetImagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Image>}
     */
    this.trackableLogsGetImages = function(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsGetImages");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsGetImages");
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
        '/v{api-version}/trackablelogs/{referenceCode}/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackableLogsGetTrackableLog operation.
     * @callback module:api/TrackableLogsApi~trackableLogsGetTrackableLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackableLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single trackable log
     * This method will return a single trackable log.
     * @param {String} referenceCode The reference code of the trackable log (example: TL100).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referencecode (default to referencecode)
     * @param {String} opts.expand  (default to )
     * @param {module:api/TrackableLogsApi~trackableLogsGetTrackableLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackableLog}
     */
    this.trackableLogsGetTrackableLog = function(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsGetTrackableLog");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsGetTrackableLog");
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
      var returnType = TrackableLog;

      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs/{referenceCode}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the trackableLogsUpdateTrackableLog operation.
     * @callback module:api/TrackableLogsApi~trackableLogsUpdateTrackableLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackableLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a trackable log
     * This method will return a trackable log.
     * @param {String} referenceCode The log reference code (example: TL100).
     * @param {module:model/TrackableLog} log An instance of the log that is being modified. Text is the only modified parameter
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referencecode (default to referencecode)
     * @param {module:api/TrackableLogsApi~trackableLogsUpdateTrackableLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackableLog}
     */
    this.trackableLogsUpdateTrackableLog = function(referenceCode, log, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = log;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsUpdateTrackableLog");
      }

      // verify the required parameter 'log' is set
      if (log === undefined || log === null) {
        throw new Error("Missing the required parameter 'log' when calling trackableLogsUpdateTrackableLog");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsUpdateTrackableLog");
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
      var returnType = TrackableLog;

      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs/{referenceCode}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));