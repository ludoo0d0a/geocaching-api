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
import Geocache from '../model/Geocache';
import GeocacheLog from '../model/GeocacheLog';
import Image from '../model/Image';
import Trackable from '../model/Trackable';
import User from '../model/User';

/**
* Geocaches service.
* @module api/GeocachesApi
* @version 1.0.0-oas3
*/
export default class GeocachesApi {

    /**
    * Constructs a new GeocachesApi. 
    * @alias module:api/GeocachesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the geocachesGetFavoritedBy operation.
     * @callback module:api/GeocachesApi~geocachesGetFavoritedByCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of Users that have favorited a geocache
     * This method will return a list of users.
     * @param {String} referenceCode The reference code of the geocache (example: GC25)
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip how many users to skip (default to 0)
     * @param {Number} opts.take how many users to retrieve (default to 10)
     * @param {String} opts.fields fields you want to return, defaults to \"referenceCode\" (default to 'referenceCode')
     * @param {module:api/GeocachesApi~geocachesGetFavoritedByCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    geocachesGetFavoritedBy(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocachesGetFavoritedBy");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocachesGetFavoritedBy");
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [User];
      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/favoritedby', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocachesGetGeocache operation.
     * @callback module:api/GeocachesApi~geocachesGetGeocacheCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Geocache} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single Geocache
     * This method will return a single Geocache.
     * @param {String} referenceCode The reference code of the geocache (example: GC25).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.lite Select to return a geocache object without the description and hints (default to false)
     * @param {String} opts.expand fields to include with base geocache object (default to '')
     * @param {String} opts.fields fields you want to return, defaults to \"referenceCode\" (default to 'referenceCode')
     * @param {module:api/GeocachesApi~geocachesGetGeocacheCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Geocache}
     */
    geocachesGetGeocache(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocachesGetGeocache");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocachesGetGeocache");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'lite': opts['lite'],
        'expand': opts['expand'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = Geocache;
      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocachesGetGeocaches operation.
     * @callback module:api/GeocachesApi~geocachesGetGeocachesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Geocache>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of geocaches
     * This method will return a list of geocaches.
     * @param {String} referenceCodes comma delimited list of geocache reference codes to retrieve (example: GC25,GC26,GC27).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.lite Select to return a geocache object without the description and hints (default to false)
     * @param {String} opts.expand fields to include with base geocache object (default to '')
     * @param {String} opts.fields fields you want to return, defaults to \"referenceCode\" (default to 'referenceCode')
     * @param {module:api/GeocachesApi~geocachesGetGeocachesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Geocache>}
     */
    geocachesGetGeocaches(referenceCodes, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCodes' is set
      if (referenceCodes === undefined || referenceCodes === null) {
        throw new Error("Missing the required parameter 'referenceCodes' when calling geocachesGetGeocaches");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocachesGetGeocaches");
      }

      let pathParams = {
        'api-version': apiVersion
      };
      let queryParams = {
        'referenceCodes': referenceCodes,
        'lite': opts['lite'],
        'expand': opts['expand'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [Geocache];
      return this.apiClient.callApi(
        '/v{api-version}/geocaches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocachesGetImages operation.
     * @callback module:api/GeocachesApi~geocachesGetImagesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Image>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of images for a geocache
     * This method will return a list of images.
     * @param {String} referenceCode The reference code of the geocache (example: GC25).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip how many images to skip (default to 0)
     * @param {Number} opts.take how many images to retrieve (default to 10)
     * @param {String} opts.fields fields you want to return, defaults to \"url\" (default to 'url')
     * @param {module:api/GeocachesApi~geocachesGetImagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Image>}
     */
    geocachesGetImages(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocachesGetImages");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocachesGetImages");
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [Image];
      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocachesGetLogs operation.
     * @callback module:api/GeocachesApi~geocachesGetLogsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GeocacheLog>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of geocache logs for the specified geocache
     * This method will return a list of geocache logs.
     * @param {String} referenceCode The reference code of the geocache (example: GC25).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip how many logs to skip over (default to 0)
     * @param {Number} opts.take how many logs to retrieve (default to 10)
     * @param {String} opts.expand fields to include with base geocache object (default to '')
     * @param {String} opts.fields fields you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {module:api/GeocachesApi~geocachesGetLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GeocacheLog>}
     */
    geocachesGetLogs(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocachesGetLogs");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocachesGetLogs");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'expand': opts['expand'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [GeocacheLog];
      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/geocachelogs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocachesGetTrackables operation.
     * @callback module:api/GeocachesApi~geocachesGetTrackablesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Trackable>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of trackables in a geocache
     * This method will return a list of trackables.
     * @param {String} referenceCode The reference code of the geocache (example: GC25).
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip how many trackables to skip (default to 0)
     * @param {Number} opts.take how many trackables to retrieve (default to 10)
     * @param {String} opts.fields fields you want to return, defaults to referenceCode (default to 'referenceCode')
     * @param {String} opts.expand  (default to '')
     * @param {module:api/GeocachesApi~geocachesGetTrackablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Trackable>}
     */
    geocachesGetTrackables(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geocachesGetTrackables");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocachesGetTrackables");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [Trackable];
      return this.apiClient.callApi(
        '/v{api-version}/geocaches/{referenceCode}/trackables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geocachesSearch operation.
     * @callback module:api/GeocachesApi~geocachesSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Geocache>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for Geocaches
     * This method will return search results.
     * @param {String} q The query used on the geocaches
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.sort Defaults to distance if coords are provided otherwise favoritepoints (distance, favorites, cachename, size, difficulty, terrain, founddate, placeddate, id) (default to '')
     * @param {Boolean} opts.lite Return a lite version of geocache (no description, hint, or (default to true)
     * @param {Number} opts.skip Defaults to 0, how many geocaches to skip (default to 0)
     * @param {Number} opts.take Defaults to 20, how many geocaches to return (default to 50)
     * @param {String} opts.expand fields to include with base geocache object (default to '')
     * @param {String} opts.fields Properties you want to return, defaults to \"referencecode\" (default to 'referenceCode')
     * @param {module:api/GeocachesApi~geocachesSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Geocache>}
     */
    geocachesSearch(q, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'q' is set
      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling geocachesSearch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geocachesSearch");
      }

      let pathParams = {
        'api-version': apiVersion
      };
      let queryParams = {
        'q': q,
        'sort': opts['sort'],
        'lite': opts['lite'],
        'skip': opts['skip'],
        'take': opts['take'],
        'expand': opts['expand'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json', 'application/json-patch+json'];
      let returnType = [Geocache];
      return this.apiClient.callApi(
        '/v{api-version}/geocaches/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
