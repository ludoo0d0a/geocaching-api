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
import GeocacheLog from '../model/GeocacheLog';
import Image from '../model/Image';
import PostGeocacheLog from '../model/PostGeocacheLog';
import PostImage from '../model/PostImage';

/**
* GeocacheLogs service.
* @module api/GeocacheLogsApi
* @version 1.0.0-oas3
*/
export default class GeocacheLogsApi {

    /**
    * Constructs a new GeocacheLogsApi. 
    * @alias module:api/GeocacheLogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the geocacheLogsAddImage operation.
     * @callback module:api/GeocacheLogsApi~geocacheLogsAddImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Image} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an image to a geocache log
     * This method will return a single Geocache.
     * @param {String} referenceCode The reference code of the geocache log (example: GL100).
     * @param {String} apiVersion The requested API version
     * @param {module:model/PostImage} postImage 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields fields to return on the response object, defaults to \"url\" (default to 'url')
     * @param {module:api/GeocacheLogsApi~geocacheLogsAddImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Image}
     */
    geocacheLogsAddImage(referenceCode, apiVersion, postImage, opts, callback) {
      opts = opts || {};
      let postBody = postImage;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocacheLogsAddImage");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocacheLogsAddImage");
      }
      // verify the required parameter 'postImage' is set
      if (postImage === undefined || postImage === null) {
        throw new Error("Missing the required parameter 'postImage' when calling geocacheLogsAddImage");
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
      let returnType = Image;
      return this.apiClient.callApi(
        '/v{api-version}/geocachelogs/{referenceCode}/images', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocacheLogsCreateGeocacheLog operation.
     * @callback module:api/GeocacheLogsApi~geocacheLogsCreateGeocacheLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeocacheLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a log to a geocache
     * This method will return the created geocache log.
     * @param {String} apiVersion The requested API version
     * @param {module:model/PostGeocacheLog} postGeocacheLog The log to add
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields the fields to return in the response body, defaults to referencecode (default to 'referencecode')
     * @param {module:api/GeocacheLogsApi~geocacheLogsCreateGeocacheLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeocacheLog}
     */
    geocacheLogsCreateGeocacheLog(apiVersion, postGeocacheLog, opts, callback) {
      opts = opts || {};
      let postBody = postGeocacheLog;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocacheLogsCreateGeocacheLog");
      }
      // verify the required parameter 'postGeocacheLog' is set
      if (postGeocacheLog === undefined || postGeocacheLog === null) {
        throw new Error("Missing the required parameter 'postGeocacheLog' when calling geocacheLogsCreateGeocacheLog");
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
      let returnType = GeocacheLog;
      return this.apiClient.callApi(
        '/v{api-version}/geocachelogs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocacheLogsDeleteGeocacheLog operation.
     * @callback module:api/GeocacheLogsApi~geocacheLogsDeleteGeocacheLogCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a geocache log
     * This method will not have a response body.
     * @param {String} referenceCode The reference code of the geocache log (example: GL100).
     * @param {String} apiVersion The requested API version
     * @param {module:api/GeocacheLogsApi~geocacheLogsDeleteGeocacheLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    geocacheLogsDeleteGeocacheLog(referenceCode, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocacheLogsDeleteGeocacheLog");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocacheLogsDeleteGeocacheLog");
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
        '/v{api-version}/geocachelogs/{referenceCode}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocacheLogsDeleteGeocacheLogImages operation.
     * @callback module:api/GeocacheLogsApi~geocacheLogsDeleteGeocacheLogImagesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a geocache log image
     * This method will not return anything in the body.
     * @param {String} referenceCode The reference code of the geocache log (example: GL100).
     * @param {String} imageGuid the guid of the image
     * @param {String} apiVersion The requested API version
     * @param {module:api/GeocacheLogsApi~geocacheLogsDeleteGeocacheLogImagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    geocacheLogsDeleteGeocacheLogImages(referenceCode, imageGuid, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocacheLogsDeleteGeocacheLogImages");
      }
      // verify the required parameter 'imageGuid' is set
      if (imageGuid === undefined || imageGuid === null) {
        throw new Error("Missing the required parameter 'imageGuid' when calling geocacheLogsDeleteGeocacheLogImages");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocacheLogsDeleteGeocacheLogImages");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'imageGuid': imageGuid,
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
        '/v{api-version}/geocachelogs/{referenceCode}/images/{imageGuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocacheLogsGetGeocacheLog operation.
     * @callback module:api/GeocacheLogsApi~geocacheLogsGetGeocacheLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeocacheLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single geocache log
     * This method will return a single geocache log.
     * @param {String} referenceCode The reference code of the geocache log (example: GL100).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand fields to include with base geocache log object (default to '')
     * @param {String} opts.fields Property fields you want to return, defaults to referencecode (default to 'referencecode')
     * @param {module:api/GeocacheLogsApi~geocacheLogsGetGeocacheLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeocacheLog}
     */
    geocacheLogsGetGeocacheLog(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocacheLogsGetGeocacheLog");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocacheLogsGetGeocacheLog");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'expand': opts['expand'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = GeocacheLog;
      return this.apiClient.callApi(
        '/v{api-version}/geocachelogs/{referenceCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocacheLogsGetImages operation.
     * @callback module:api/GeocacheLogsApi~geocacheLogsGetImagesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Image>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a the images attached to a geocache log
     * This method will return a list of images.
     * @param {String} referenceCode The reference code of the geocache log (example: GL100).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of images to skip over used for pagination. Defaults to 0. (default to 0)
     * @param {Number} opts.take Amount of images to include in results. Defaults to 10. (default to 10)
     * @param {String} opts.fields Properties you want to return. Defaults to \"url\". (default to 'url')
     * @param {module:api/GeocacheLogsApi~geocacheLogsGetImagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Image>}
     */
    geocacheLogsGetImages(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocacheLogsGetImages");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocacheLogsGetImages");
      }

      let pathParams = {
        'referenceCode': referenceCode,
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [Image];
      return this.apiClient.callApi(
        '/v{api-version}/geocachelogs/{referenceCode}/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocacheLogsUpdateGeocacheLog operation.
     * @callback module:api/GeocacheLogsApi~geocacheLogsUpdateGeocacheLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeocacheLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a geocache log
     * This method will return a geocache log.
     * @param {String} referenceCode The log reference code (example: GL100).
     * @param {String} apiVersion The requested API version
     * @param {module:model/GeocacheLog} geocacheLog An instance of the log that is being modified
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referencecode (default to 'referencecode')
     * @param {module:api/GeocacheLogsApi~geocacheLogsUpdateGeocacheLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeocacheLog}
     */
    geocacheLogsUpdateGeocacheLog(referenceCode, apiVersion, geocacheLog, opts, callback) {
      opts = opts || {};
      let postBody = geocacheLog;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocacheLogsUpdateGeocacheLog");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocacheLogsUpdateGeocacheLog");
      }
      // verify the required parameter 'geocacheLog' is set
      if (geocacheLog === undefined || geocacheLog === null) {
        throw new Error("Missing the required parameter 'geocacheLog' when calling geocacheLogsUpdateGeocacheLog");
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
      let returnType = GeocacheLog;
      return this.apiClient.callApi(
        '/v{api-version}/geocachelogs/{referenceCode}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
