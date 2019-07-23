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
import BulkResponse from '../model/BulkResponse';
import Geocache from '../model/Geocache';
import GeocacheList from '../model/GeocacheList';
import ListGeocache from '../model/ListGeocache';
import PostGeocacheList from '../model/PostGeocacheList';
import PostListGeocache from '../model/PostListGeocache';

/**
* Lists service.
* @module api/ListsApi
* @version 1.0.0-oas3
*/
export default class ListsApi {

    /**
    * Constructs a new ListsApi. 
    * @alias module:api/ListsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


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
     * @param {String} apiVersion The requested API version
     * @param {module:model/PostListGeocache} postListGeocache geocache to add to the list
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/ListsApi~listsAddGeocacheCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Geocache}
     */
    listsAddGeocache(referenceCode, apiVersion, postListGeocache, opts, callback) {
      opts = opts || {};
      let postBody = postListGeocache;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsAddGeocache");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsAddGeocache");
      }
      // verify the required parameter 'postListGeocache' is set
      if (postListGeocache === undefined || postListGeocache === null) {
        throw new Error("Missing the required parameter 'postListGeocache' when calling listsAddGeocache");
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
      let returnType = Geocache;
      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}/geocaches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} apiVersion The requested API version
     * @param {Array.<String>} requestBody geocache reference codes to add to the list
     * @param {module:api/ListsApi~listsAddGeocachesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkResponse}
     */
    listsAddGeocaches(referenceCode, apiVersion, requestBody, callback) {
      let postBody = requestBody;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsAddGeocaches");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsAddGeocaches");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling listsAddGeocaches");
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
      let contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = BulkResponse;
      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}/bulkgeocaches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} apiVersion The requested API version
     * @param {module:model/PostGeocacheList} postGeocacheList The list to add
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/ListsApi~listsCreateListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeocacheList}
     */
    listsCreateList(apiVersion, postGeocacheList, opts, callback) {
      opts = opts || {};
      let postBody = postGeocacheList;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsCreateList");
      }
      // verify the required parameter 'postGeocacheList' is set
      if (postGeocacheList === undefined || postGeocacheList === null) {
        throw new Error("Missing the required parameter 'postGeocacheList' when calling listsCreateList");
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
      let returnType = GeocacheList;
      return this.apiClient.callApi(
        '/v{api-version}/lists', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    listsDeleteGeocache(referenceCode, geocacheReferenceCode, apiVersion, callback) {
      let postBody = null;
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

      let pathParams = {
        'referenceCode': referenceCode,
        'geocacheReferenceCode': geocacheReferenceCode,
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
        '/v{api-version}/lists/{referenceCode}/geocaches/{geocacheReferenceCode}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    listsDeleteList(referenceCode, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsDeleteList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsDeleteList");
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
        '/v{api-version}/lists/{referenceCode}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} opts.fields fields you want to return, defaults to \"referenceCode\" (default to 'referenceCode')
     * @param {String} opts.expand fields to include with base geocache object (default to '')
     * @param {module:api/ListsApi~listsGetGeocachesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ListGeocache>}
     */
    listsGetGeocaches(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsGetGeocaches");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsGetGeocaches");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'lite': opts['lite'],
        'fields': opts['fields'],
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [ListGeocache];
      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}/geocaches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} opts.fields Property fields you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/ListsApi~listsGetListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeocacheList}
     */
    listsGetList(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsGetList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsGetList");
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
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = GeocacheList;
      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listsGetZippedPocketQuery operation.
     * @callback module:api/ListsApi~listsGetZippedPocketQueryCallback
     * @param {String} error Error message, if any.
     * @param {Blob} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a zipped file for a pocket query
     * This method will return a zipped file.
     * @param {String} referenceCode identifier of the pocket query
     * @param {String} apiVersion The requested API version
     * @param {module:api/ListsApi~listsGetZippedPocketQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Blob}
     */
    listsGetZippedPocketQuery(referenceCode, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsGetZippedPocketQuery");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsGetZippedPocketQuery");
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
      let returnType = 'Blob';
      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}/geocaches/zipped', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {String} apiVersion The requested API version
     * @param {module:model/GeocacheList} geocacheList The list to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Property fields you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/ListsApi~listsUpdateListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeocacheList}
     */
    listsUpdateList(referenceCode, apiVersion, geocacheList, opts, callback) {
      opts = opts || {};
      let postBody = geocacheList;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling listsUpdateList");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling listsUpdateList");
      }
      // verify the required parameter 'geocacheList' is set
      if (geocacheList === undefined || geocacheList === null) {
        throw new Error("Missing the required parameter 'geocacheList' when calling listsUpdateList");
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
      let returnType = GeocacheList;
      return this.apiClient.callApi(
        '/v{api-version}/lists/{referenceCode}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}