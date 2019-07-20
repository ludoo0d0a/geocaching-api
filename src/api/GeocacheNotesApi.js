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
    define(['ApiClient', 'model/GeocacheNote'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GeocacheNote'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.GeocacheNotesApi = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.GeocacheNote);
  }
}(this, function(ApiClient, GeocacheNote) {
  'use strict';

  /**
   * GeocacheNotes service.
   * @module api/GeocacheNotesApi
   * @version v1
   */

  /**
   * Constructs a new GeocacheNotesApi. 
   * @alias module:api/GeocacheNotesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the geocacheNotesDeleteNote operation.
     * @callback module:api/GeocacheNotesApi~geocacheNotesDeleteNoteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a geocache note for the calling user
     * This method will return no content.
     * @param {String} referenceCode The identifier of the geocache (ex: GC25)
     * @param {String} apiVersion The requested API version
     * @param {module:api/GeocacheNotesApi~geocacheNotesDeleteNoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.geocacheNotesDeleteNote = function(referenceCode, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocacheNotesDeleteNote");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocacheNotesDeleteNote");
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
        '/v{api-version}/geocaches/{referenceCode}/notes', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the geocacheNotesUpsertNote operation.
     * @callback module:api/GeocacheNotesApi~geocacheNotesUpsertNoteCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upsert a geocache note for the calling user
     * This method will return the upserted text.
     * @param {String} referenceCode The identifier of the geocache (ex: GC25)
     * @param {module:model/GeocacheNote} geocacheNote The geocache note text.
     * @param {String} apiVersion The requested API version
     * @param {module:api/GeocacheNotesApi~geocacheNotesUpsertNoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.geocacheNotesUpsertNote = function(referenceCode, geocacheNote, apiVersion, callback) {
      var postBody = geocacheNote;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocacheNotesUpsertNote");
      }

      // verify the required parameter 'geocacheNote' is set
      if (geocacheNote === undefined || geocacheNote === null) {
        throw new Error("Missing the required parameter 'geocacheNote' when calling geocacheNotesUpsertNote");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocacheNotesUpsertNote");
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
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/notes', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
