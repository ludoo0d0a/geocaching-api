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
    define(['ApiClient', 'model/BulkResponse', 'model/Geocache', 'model/GeocacheList', 'model/ListGeocache', 'model/PostGeocacheList', 'model/PostListGeocache'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BulkResponse'), require('../model/Geocache'), require('../model/GeocacheList'), require('../model/ListGeocache'), require('../model/PostGeocacheList'), require('../model/PostListGeocache'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.ListsApi = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.BulkResponse, root.GeocachingApiV10.Geocache, root.GeocachingApiV10.GeocacheList, root.GeocachingApiV10.ListGeocache, root.GeocachingApiV10.PostGeocacheList, root.GeocachingApiV10.PostListGeocache);
  }
}(this, function(ApiClient, BulkResponse, Geocache, GeocacheList, ListGeocache, PostGeocacheList, PostListGeocache) {
  'use strict';

  /**
   * Lists service.
   * @module api/ListsApi
   * @version v1
   */

  /**
   * Constructs a new ListsApi. 
   * @alias module:api/ListsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listsAddGeocache operation.
     * @callback module:api/ListsApi~listsAddGeocacheCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Geocache} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a geocache to a list
     * This method will return the geocache added.
     * @param {String} referenceCode unique identifier of the list
     * @param {module:model/PostListGeocache} geocache geocache to add to the list
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referenceCode (default to referenceCode)
     * @param {module:api/ListsApi~listsAddGeocacheCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Geocache}
     */
    this.listsAddGeocache = function(referenceCode, geocache, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = geocache;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsAddGeocache");
      }

      // verify the required parameter 'geocache' is set
      if (geocache === undefined || geocache === null) {
        throw new Error("Missing the required parameter 'geocache' when calling listsAddGeocache");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsAddGeocache");
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
      var returnType = Geocache;

      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}/geocaches', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsAddGeocaches operation.
     * @callback module:api/ListsApi~listsAddGeocachesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add multiple geocaches to a list
     * This method will return the successful and failed geocache codes.
     * @param {String} referenceCode unique identifier of the list
     * @param {Array.<module:model/String>} geocacheCodes geocache reference codes to add to the list
     * @param {String} apiVersion The requested API version
     * @param {module:api/ListsApi~listsAddGeocachesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkResponse}
     */
    this.listsAddGeocaches = function(referenceCode, geocacheCodes, apiVersion, callback) {
      var postBody = geocacheCodes;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsAddGeocaches");
      }

      // verify the required parameter 'geocacheCodes' is set
      if (geocacheCodes === undefined || geocacheCodes === null) {
        throw new Error("Missing the required parameter 'geocacheCodes' when calling listsAddGeocaches");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsAddGeocaches");
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
      var returnType = BulkResponse;

      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}/bulkgeocaches', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsCreateList operation.
     * @callback module:api/ListsApi~listsCreateListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeocacheList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a list
     * This method will return the created geocache list.
     * @param {module:model/PostGeocacheList} list The list to add
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referenceCode (default to referenceCode)
     * @param {module:api/ListsApi~listsCreateListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeocacheList}
     */
    this.listsCreateList = function(list, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = list;

      // verify the required parameter 'list' is set
      if (list === undefined || list === null) {
        throw new Error("Missing the required parameter 'list' when calling listsCreateList");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsCreateList");
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
      var returnType = GeocacheList;

      return this.apiClient.callApi(
        '/v{api-version}/lists', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsDeleteGeocache operation.
     * @callback module:api/ListsApi~listsDeleteGeocacheCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a geocache from a list
     * This method will not return anything.
     * @param {String} referenceCode unique identifier of the list
     * @param {String} geocacheReferenceCode unique identifier of the geocache to remove
     * @param {String} apiVersion The requested API version
     * @param {module:api/ListsApi~listsDeleteGeocacheCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.listsDeleteGeocache = function(referenceCode, geocacheReferenceCode, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsDeleteGeocache");
      }

      // verify the required parameter 'geocacheReferenceCode' is set
      if (geocacheReferenceCode === undefined || geocacheReferenceCode === null) {
        throw new Error("Missing the required parameter 'geocacheReferenceCode' when calling listsDeleteGeocache");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsDeleteGeocache");
      }


      var pathParams = {
        'referenceCode': referenceCode,
        'geocacheReferenceCode': geocacheReferenceCode,
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
        '/v{api-version}/lists/{referenceCode}/geocaches/{geocacheReferenceCode}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsDeleteList operation.
     * @callback module:api/ListsApi~listsDeleteListCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a list
     * This method will not return anything.
     * @param {String} referenceCode unique identifier of the list
     * @param {String} apiVersion The requested API version
     * @param {module:api/ListsApi~listsDeleteListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.listsDeleteList = function(referenceCode, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsDeleteList");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsDeleteList");
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
        '/v{api-version}/lists/{referenceCode}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsGetGeocaches operation.
     * @callback module:api/ListsApi~listsGetGeocachesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ListGeocache>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of geocaches for a specified list
     * This method will return a list of geocaches.
     * @param {String} referenceCode identifier of the list
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip how many geocaches to skip over (default to 0)
     * @param {Number} opts.take how many geocaches to retrieve (default to 10)
     * @param {Boolean} opts.lite whether to return lite geocaches or not (default to true)
     * @param {String} opts.fields fields you want to return, defaults to \&quot;referenceCode\&quot; (default to referenceCode)
     * @param {String} opts.expand fields to include with base geocache object (default to )
     * @param {module:api/ListsApi~listsGetGeocachesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListGeocache>}
     */
    this.listsGetGeocaches = function(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsGetGeocaches");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsGetGeocaches");
      }


      var pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'lite': opts['lite'],
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
      var returnType = [ListGeocache];

      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}/geocaches', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsGetList operation.
     * @callback module:api/ListsApi~listsGetListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeocacheList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list
     * This method will return a list.
     * @param {String} referenceCode The reference code of the list (example: BM25).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referenceCode (default to referenceCode)
     * @param {module:api/ListsApi~listsGetListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeocacheList}
     */
    this.listsGetList = function(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsGetList");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsGetList");
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      var returnType = GeocacheList;

      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsGetZippedPocketQuery operation.
     * @callback module:api/ListsApi~listsGetZippedPocketQueryCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a zipped file for a pocket query
     * This method will return a zipped file.
     * @param {String} referenceCode identifier of the pocket query
     * @param {String} apiVersion The requested API version
     * @param {module:api/ListsApi~listsGetZippedPocketQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.listsGetZippedPocketQuery = function(referenceCode, apiVersion, callback) {
      var postBody = null;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsGetZippedPocketQuery");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsGetZippedPocketQuery");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}/geocaches/zipped', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsUpdateList operation.
     * @callback module:api/ListsApi~listsUpdateListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeocacheList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a list
     * This method will return the updated geocache list.
     * @param {String} referenceCode the unique identifier of the list (ex: BM100)
     * @param {module:model/GeocacheList} list The list to update
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referenceCode (default to referenceCode)
     * @param {module:api/ListsApi~listsUpdateListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeocacheList}
     */
    this.listsUpdateList = function(referenceCode, list, apiVersion, opts, callback) {
      opts = opts || {};
      var postBody = list;

      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsUpdateList");
      }

      // verify the required parameter 'list' is set
      if (list === undefined || list === null) {
        throw new Error("Missing the required parameter 'list' when calling listsUpdateList");
      }

      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsUpdateList");
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
      var returnType = GeocacheList;

      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
