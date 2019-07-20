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
    define(['ApiClient', 'model/HQPromotionMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HQPromotionMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.HQPromotionsApi = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.HQPromotionMetadata);
  }
}(this, function(ApiClient, HQPromotionMetadata) {
  'use strict';

  /**
   * HQPromotions service.
   * @module api/HQPromotionsApi
   * @version v1
   */

  /**
   * Constructs a new HQPromotionsApi. 
   * @alias module:api/HQPromotionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the hQPromotionsGet operation.
     * @callback module:api/HQPromotionsApi~hQPromotionsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HQPromotionMetadata>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of metadata for currently visible and upcoming Geocaching HQ promotions
     * @param {String} apiVersion The requested API version
     * @param {module:api/HQPromotionsApi~hQPromotionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/HQPromotionMetadata>}
     */
    this.hQPromotionsGet = function(apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling hQPromotionsGet");
      }


      var pathParams = {
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
      var returnType = [HQPromotionMetadata];

      return this.apiClient.callApi(
        '/v{api-version}/HQPromotions/metadata', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
