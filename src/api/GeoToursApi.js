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
import GeoTour from '../model/GeoTour';
import Geocache from '../model/Geocache';

/**
* GeoTours service.
* @module api/GeoToursApi
* @version v1
*/
export default class GeoToursApi {

    /**
    * Constructs a new GeoToursApi. 
    * @alias module:api/GeoToursApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the geoToursGetGeoTour operation.
     * @callback module:api/GeoToursApi~geoToursGetGeoTourCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GeoTour>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a GeoTour
     * @param {String} referenceCode Identifier of the GeoTour (e.g. GT7)
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Properties you want to return, defaults to \"referencecode\" (default to 'referenceCode')
     * @param {module:api/GeoToursApi~geoToursGetGeoTourCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GeoTour>}
     */
    geoToursGetGeoTour(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geoToursGetGeoTour");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geoToursGetGeoTour");
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
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [GeoTour];
      return this.apiClient.callApi(
        '/v{api-version}/geotours/{referenceCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geoToursGetGeoTours operation.
     * @callback module:api/GeoToursApi~geoToursGetGeoToursCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GeoTour>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get GeoTours
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {String} opts.sort Defaults to unsorted (distance, name). If using distance sorting, must provide latitude and longitude (e.g. dist+:[47,-122]) (default to '')
     * @param {Number} opts.skip Defaults to 0, how many geocaches to skip (default to 0)
     * @param {Number} opts.take Defaults to 20, how many geocaches to return (default to 20)
     * @param {String} opts.fields Properties you want to return, defaults to \"referencecode\" (default to 'referenceCode')
     * @param {module:api/GeoToursApi~geoToursGetGeoToursCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GeoTour>}
     */
    geoToursGetGeoTours(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geoToursGetGeoTours");
      }

      let pathParams = {
        'api-version': apiVersion
      };
      let queryParams = {
        'sort': opts['sort'],
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
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [GeoTour];
      return this.apiClient.callApi(
        '/v{api-version}/geotours', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geoToursGetGeocachesByGeoTour operation.
     * @callback module:api/GeoToursApi~geoToursGetGeocachesByGeoTourCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Geocache>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the geocaches on the GeoTour
     * This method will return a list of geocaches.
     * @param {String} referenceCode Identifier of the GeoTour (e.g. GT7)
     * @param {String} apiVersion The requested API version
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.lite Select to return a geocache object without the description and hints (default to false)
     * @param {Number} opts.skip Defaults to 0, how many geocaches to skip (default to 0)
     * @param {Number} opts.take Defaults to 20, how many geocaches to return (default to 20)
     * @param {String} opts.sort Options are distance (must provide lat/lng), name (of the geocache), favorites, and geotour (order defined by GeoTour). Defaults to geotour. (default to 'gt+')
     * @param {String} opts.expand fields to include with base geocache object (default to '')
     * @param {String} opts.fields fields you want to return, defaults to \"referencecode\" (default to 'referenceCode')
     * @param {module:api/GeoToursApi~geoToursGetGeocachesByGeoTourCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Geocache>}
     */
    geoToursGetGeocachesByGeoTour(referenceCode, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'referenceCode' is set
      if (referenceCode === undefined || referenceCode === null) {
        throw new Error("Missing the required parameter 'referenceCode' when calling geoToursGetGeocachesByGeoTour");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling geoToursGetGeocachesByGeoTour");
      }

      let pathParams = {
        'referenceCode': referenceCode,
        'api-version': apiVersion
      };
      let queryParams = {
        'lite': opts['lite'],
        'skip': opts['skip'],
        'take': opts['take'],
        'sort': opts['sort'],
        'expand': opts['expand'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [Geocache];
      return this.apiClient.callApi(
        '/v{api-version}/geotours/{referenceCode}/geocaches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
