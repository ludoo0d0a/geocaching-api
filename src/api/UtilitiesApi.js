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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.UtilitiesApi = factory(root.GeocachingApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Utilities service.
   * @module api/UtilitiesApi
   * @version v1
   */

  /**
   * Constructs a new UtilitiesApi. 
   * @alias module:api/UtilitiesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the utilitiesGetReferenceCode operation.
     * @callback module:api/UtilitiesApi~utilitiesGetReferenceCodeCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the reference code from an id
     * 
     * @param {Number} id the id to get the reference code for
     * @param {String} codePrefix the prefix of the reference code (e.g. GC)
     * @param {String} apiVersion The requested API version
     * @param {module:api/UtilitiesApi~utilitiesGetReferenceCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.utilitiesGetReferenceCode = function(id, codePrefix, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling utilitiesGetReferenceCode");
      }

      // verify the required parameter 'codePrefix' is set
      if (codePrefix === undefined || codePrefix === null) {
        throw new Error("Missing the required parameter 'codePrefix' when calling utilitiesGetReferenceCode");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling utilitiesGetReferenceCode");
      }


      var pathParams = {
        'api-version': apiVersion
      };
      var queryParams = {
        'id': id,
        'codePrefix': codePrefix,
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/v{api-version}/utilities/referencecode', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));