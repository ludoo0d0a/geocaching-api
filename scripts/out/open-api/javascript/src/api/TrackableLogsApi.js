/**
 * API v1.0
 * API version 1.0.
 *
 * The version of the OpenAPI document: v1
 * Contact: apihelp@geocaching.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Image from '../model/Image';
import PostImage from '../model/PostImage';
import PostTrackableLog from '../model/PostTrackableLog';
import TrackableLog from '../model/TrackableLog';

/**
* TrackableLogs service.
* @module api/TrackableLogsApi
* @version v1
*/
export default class TrackableLogsApi {

    /**
    * Constructs a new TrackableLogsApi. 
    * @alias module:api/TrackableLogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


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
     * @param {String} apiVersion The requested API version
     * @param {module:model/PostImage} postImage image to add
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to url (default to 'url')
     * @param {module:api/TrackableLogsApi~trackableLogsAddImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Image}
     */
    trackableLogsAddImage(referenceCode, apiVersion, postImage, opts, callback) {
      opts = opts || {};
      let postBody = postImage;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsAddImage");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsAddImage");
      }
      // verify the required parameter 'postImage' is set
      if (postImage === undefined || postImage === null) {
        throw new Error("Missing the required parameter 'postImage' when calling trackableLogsAddImage");
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
      let contentTypes = ['application/json', 'application/json-patch+json', 'application/x-www-form-urlencoded', 'text/json'];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = Image;
      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs/{referenceCode}/images', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} apiVersion The requested API version
     * @param {module:model/PostTrackableLog} postTrackableLog The log to add
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referencecode (default to 'referenceCode')
     * @param {module:api/TrackableLogsApi~trackableLogsCreateTrackableLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackableLog}
     */
    trackableLogsCreateTrackableLog(apiVersion, postTrackableLog, opts, callback) {
      opts = opts || {};
      let postBody = postTrackableLog;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsCreateTrackableLog");
      }
      // verify the required parameter 'postTrackableLog' is set
      if (postTrackableLog === undefined || postTrackableLog === null) {
        throw new Error("Missing the required parameter 'postTrackableLog' when calling trackableLogsCreateTrackableLog");
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
      let contentTypes = ['application/json', 'application/json-patch+json', 'application/x-www-form-urlencoded', 'text/json'];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = TrackableLog;
      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    trackableLogsDeleteTrackableLog(referenceCode, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsDeleteTrackableLog");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsDeleteTrackableLog");
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
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs/{referenceCode}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    trackableLogsDeleteTrackableLogImages(referenceCode, imageGuid, apiVersion, callback) {
      let postBody = null;
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
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs/{referenceCode}/images/{imageGuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} opts.fields Properties you want to return. Defaults to referencecode. (default to 'referencecode')
     * @param {module:api/TrackableLogsApi~trackableLogsGetImagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Image>}
     */
    trackableLogsGetImages(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsGetImages");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsGetImages");
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
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [Image];
      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs/{referenceCode}/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} opts.fields Property fields you want to return, defaults to referencecode (default to 'referencecode')
     * @param {String} opts.expand  (default to '')
     * @param {module:api/TrackableLogsApi~trackableLogsGetTrackableLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackableLog}
     */
    trackableLogsGetTrackableLog(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsGetTrackableLog");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsGetTrackableLog");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'fields': opts['fields'],
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = TrackableLog;
      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs/{referenceCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} apiVersion The requested API version
     * @param {module:model/TrackableLog} trackableLog An instance of the log that is being modified. Text is the only modified parameter
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referencecode (default to 'referencecode')
     * @param {module:api/TrackableLogsApi~trackableLogsUpdateTrackableLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrackableLog}
     */
    trackableLogsUpdateTrackableLog(referenceCode, apiVersion, trackableLog, opts, callback) {
      opts = opts || {};
      let postBody = trackableLog;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackableLogsUpdateTrackableLog");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackableLogsUpdateTrackableLog");
      }
      // verify the required parameter 'trackableLog' is set
      if (trackableLog === undefined || trackableLog === null) {
        throw new Error("Missing the required parameter 'trackableLog' when calling trackableLogsUpdateTrackableLog");
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
      let contentTypes = ['application/json', 'application/json-patch+json', 'application/x-www-form-urlencoded', 'text/json'];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = TrackableLog;
      return this.apiClient.callApi(
        '/v{api-version}/trackablelogs/{referenceCode}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
