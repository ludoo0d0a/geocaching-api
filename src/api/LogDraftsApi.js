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
import Image from '../model/Image';
import LogDraft from '../model/LogDraft';
import PostImage from '../model/PostImage';
import PostLogDraft from '../model/PostLogDraft';
import PromotedDraft from '../model/PromotedDraft';

/**
* LogDrafts service.
* @module api/LogDraftsApi
* @version 1.0.0-oas3
*/
export default class LogDraftsApi {

    /**
    * Constructs a new LogDraftsApi. 
    * @alias module:api/LogDraftsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the logDraftsAddImage operation.
     * @callback module:api/LogDraftsApi~logDraftsAddImageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Image} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add image to log draft
     * This method will return the image created.
     * @param {String} referenceCode identifier of the log draft
     * @param {String} apiVersion The requested API version
     * @param {module:model/PostImage} postImage The image to upload and add
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return, defaults to url (default to 'url')
     * @param {module:api/LogDraftsApi~logDraftsAddImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Image}
     */
    logDraftsAddImage(referenceCode, apiVersion, postImage, opts, callback) {
      opts = opts || {};
      let postBody = postImage;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling logDraftsAddImage");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling logDraftsAddImage");
      }
      // verify the required parameter 'postImage' is set
      if (postImage === undefined || postImage === null) {
        throw new Error("Missing the required parameter 'postImage' when calling logDraftsAddImage");
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

      let authNames = ['AccessToken'];
      let contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = Image;
      return this.apiClient.callApi(
        '/v{api-version}/logdrafts/{referenceCode}/images', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logDraftsCreateDraft operation.
     * @callback module:api/LogDraftsApi~logDraftsCreateDraftCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogDraft} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a log draft
     * This method will return the log draft created.
     * @param {String} apiVersion The requested API version
     * @param {module:model/PostLogDraft} postLogDraft The log draft to create.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/LogDraftsApi~logDraftsCreateDraftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogDraft}
     */
    logDraftsCreateDraft(apiVersion, postLogDraft, opts, callback) {
      opts = opts || {};
      let postBody = postLogDraft;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling logDraftsCreateDraft");
      }
      // verify the required parameter 'postLogDraft' is set
      if (postLogDraft === undefined || postLogDraft === null) {
        throw new Error("Missing the required parameter 'postLogDraft' when calling logDraftsCreateDraft");
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

      let authNames = ['AccessToken'];
      let contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = LogDraft;
      return this.apiClient.callApi(
        '/v{api-version}/logdrafts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logDraftsDeleteDraft operation.
     * @callback module:api/LogDraftsApi~logDraftsDeleteDraftCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a log draft
     * This method will return no content.
     * @param {String} referenceCode The identifier of the log draft (ex: LD25)
     * @param {String} apiVersion The requested API version
     * @param {module:api/LogDraftsApi~logDraftsDeleteDraftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    logDraftsDeleteDraft(referenceCode, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling logDraftsDeleteDraft");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling logDraftsDeleteDraft");
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v{api-version}/logdrafts/{referenceCode}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logDraftsGetDraft operation.
     * @callback module:api/LogDraftsApi~logDraftsGetDraftCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogDraft} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single log draft for the calling user
     * This method will return a single draft log.
     * @param {String} referenceCode The reference code of the log draft (example: LD25).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/LogDraftsApi~logDraftsGetDraftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogDraft}
     */
    logDraftsGetDraft(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling logDraftsGetDraft");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling logDraftsGetDraft");
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = LogDraft;
      return this.apiClient.callApi(
        '/v{api-version}/logdrafts/{referenceCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logDraftsGetUserDrafts operation.
     * @callback module:api/LogDraftsApi~logDraftsGetUserDraftsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LogDraft>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of log drafts for the calling user
     * This method will return a page (list + total) of log drafts.
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip How many drafts to skip (default = 0) (default to 0)
     * @param {Number} opts.take How many drafts to return (default = 10) (default to 10)
     * @param {String} opts.sort How to sort the drafts (default = loggeddateutc) (default to 'dateloggedutc')
     * @param {String} opts.fields Properties you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/LogDraftsApi~logDraftsGetUserDraftsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LogDraft>}
     */
    logDraftsGetUserDrafts(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling logDraftsGetUserDrafts");
      }

      let pathParams = {
        'api-version': apiVersion
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'sort': opts['sort'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [LogDraft];
      return this.apiClient.callApi(
        '/v{api-version}/logdrafts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logDraftsPromoteToGeocacheLog operation.
     * @callback module:api/LogDraftsApi~logDraftsPromoteToGeocacheLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PromotedDraft} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Promote Log Draft to Geocache Log
     * This method will return the promoted draft info.
     * @param {String} referenceCode identifier of the log draft
     * @param {String} apiVersion The requested API version
     * @param {module:model/LogDraft} logDraft The draft to promote to log
     * @param {module:api/LogDraftsApi~logDraftsPromoteToGeocacheLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PromotedDraft}
     */
    logDraftsPromoteToGeocacheLog(referenceCode, apiVersion, logDraft, callback) {
      let postBody = logDraft;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling logDraftsPromoteToGeocacheLog");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling logDraftsPromoteToGeocacheLog");
      }
      // verify the required parameter 'logDraft' is set
      if (logDraft === undefined || logDraft === null) {
        throw new Error("Missing the required parameter 'logDraft' when calling logDraftsPromoteToGeocacheLog");
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

      let authNames = ['AccessToken'];
      let contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = PromotedDraft;
      return this.apiClient.callApi(
        '/v{api-version}/logdrafts/{referenceCode}/promote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logDraftsUpdateDraft operation.
     * @callback module:api/LogDraftsApi~logDraftsUpdateDraftCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogDraft} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a log draft
     * This method will return the log draft edited.
     * @param {String} referenceCode The identifier of the log draft (ex: LD25)
     * @param {String} apiVersion The requested API version
     * @param {module:model/LogDraft} logDraft The log draft to edit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/LogDraftsApi~logDraftsUpdateDraftCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogDraft}
     */
    logDraftsUpdateDraft(referenceCode, apiVersion, logDraft, opts, callback) {
      opts = opts || {};
      let postBody = logDraft;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling logDraftsUpdateDraft");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling logDraftsUpdateDraft");
      }
      // verify the required parameter 'logDraft' is set
      if (logDraft === undefined || logDraft === null) {
        throw new Error("Missing the required parameter 'logDraft' when calling logDraftsUpdateDraft");
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

      let authNames = ['AccessToken'];
      let contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = LogDraft;
      return this.apiClient.callApi(
        '/v{api-version}/logdrafts/{referenceCode}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
