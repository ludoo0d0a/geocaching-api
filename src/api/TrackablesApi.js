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
import Trackable from '../model/Trackable';
import TrackableLog from '../model/TrackableLog';
import TrackableType from '../model/TrackableType';

/**
* Trackables service.
* @module api/TrackablesApi
* @version v1
*/
export default class TrackablesApi {

    /**
    * Constructs a new TrackablesApi. 
    * @alias module:api/TrackablesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


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
     * @param {String} opts.fields Properties you want to return. Defaults to id. (default to 'id')
     * @param {module:api/TrackablesApi~trackablesGetGeocoinTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TrackableType>}
     */
    trackablesGetGeocoinTypes(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetGeocoinTypes");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [TrackableType];
      return this.apiClient.callApi(
        '/v{api-version}/trackables/geocointypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} opts.fields Properties you want to return. Defaults to url. (default to 'url')
     * @param {module:api/TrackablesApi~trackablesGetImagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Image>}
     */
    trackablesGetImages(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackablesGetImages");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetImages");
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
        '/v{api-version}/trackables/{referenceCode}/Images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} opts.fields fields you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {String} opts.expand  (default to '')
     * @param {module:api/TrackablesApi~trackablesGetTrackableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trackable}
     */
    trackablesGetTrackable(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackablesGetTrackable");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetTrackable");
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
      let returnType = Trackable;
      return this.apiClient.callApi(
        '/v{api-version}/trackables/{referenceCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} opts.fields fields you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {String} opts.expand  (default to '')
     * @param {String} opts.logTypes what log types to include with results. defaults to all
     * @param {module:api/TrackablesApi~trackablesGetTrackableLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TrackableLog>}
     */
    trackablesGetTrackableLogs(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling trackablesGetTrackableLogs");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetTrackableLogs");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'expand': opts['expand'],
        'logTypes': opts['logTypes']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [TrackableLog];
      return this.apiClient.callApi(
        '/v{api-version}/trackables/{referenceCode}/trackablelogs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} opts.referenceCodes The reference code or tracking number of the trackables (example: TB100). Don't pass in this param if you want to return user trackables
     * @param {module:model/String} opts.type 1= inventory, 2 = collection, 3 = owned (default: 1) (default to '1')
     * @param {Number} opts.skip default = 0 (default to 0)
     * @param {Number} opts.take default = 10 (default to 10)
     * @param {String} opts.fields fields you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {String} opts.expand  (default to '')
     * @param {module:api/TrackablesApi~trackablesGetUserTrackablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Trackable>}
     */
    trackablesGetUserTrackables(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling trackablesGetUserTrackables");
      }

      let pathParams = {
        'api-version': apiVersion
      };
      let queryParams = {
        'referenceCodes': opts['referenceCodes'],
        'type': opts['type'],
        'skip': opts['skip'],
        'take': opts['take'],
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
      let returnType = [Trackable];
      return this.apiClient.callApi(
        '/v{api-version}/trackables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
