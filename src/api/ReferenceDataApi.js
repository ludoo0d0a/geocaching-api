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
import AttributeType from '../model/AttributeType';
import Country from '../model/Country';
import GeocacheLogType from '../model/GeocacheLogType';
import GeocacheType from '../model/GeocacheType';
import MembershipLevel from '../model/MembershipLevel';
import State from '../model/State';
import TrackableLogType from '../model/TrackableLogType';

/**
* ReferenceData service.
* @module api/ReferenceDataApi
* @version 1.0.0-oas3
*/
export default class ReferenceDataApi {

    /**
    * Constructs a new ReferenceDataApi. 
    * @alias module:api/ReferenceDataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the referenceDataGetAttributes operation.
     * @callback module:api/ReferenceDataApi~referenceDataGetAttributesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AttributeType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the available attributes
     * @param {String} apiVersion The requested API version
     * @param {module:api/ReferenceDataApi~referenceDataGetAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AttributeType>}
     */
    referenceDataGetAttributes(apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling referenceDataGetAttributes");
      }

      let pathParams = {
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
      let returnType = [AttributeType];
      return this.apiClient.callApi(
        '/v{api-version}/attributes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the referenceDataGetCountries operation.
     * @callback module:api/ReferenceDataApi~referenceDataGetCountriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Country>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns current list of country ids and names
     * @param {String} apiVersion The requested API version
     * @param {module:api/ReferenceDataApi~referenceDataGetCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Country>}
     */
    referenceDataGetCountries(apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling referenceDataGetCountries");
      }

      let pathParams = {
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
      let returnType = [Country];
      return this.apiClient.callApi(
        '/v{api-version}/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the referenceDataGetGeocacheLogTypes operation.
     * @callback module:api/ReferenceDataApi~referenceDataGetGeocacheLogTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GeocacheLogType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the geocache log types
     * @param {String} apiVersion The requested API version
     * @param {module:api/ReferenceDataApi~referenceDataGetGeocacheLogTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GeocacheLogType>}
     */
    referenceDataGetGeocacheLogTypes(apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling referenceDataGetGeocacheLogTypes");
      }

      let pathParams = {
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
      let returnType = [GeocacheLogType];
      return this.apiClient.callApi(
        '/v{api-version}/geocachelogtypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the referenceDataGetGeocacheTypes operation.
     * @callback module:api/ReferenceDataApi~referenceDataGetGeocacheTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GeocacheType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the available geocache types
     * @param {String} apiVersion The requested API version
     * @param {module:api/ReferenceDataApi~referenceDataGetGeocacheTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GeocacheType>}
     */
    referenceDataGetGeocacheTypes(apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling referenceDataGetGeocacheTypes");
      }

      let pathParams = {
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
      let returnType = [GeocacheType];
      return this.apiClient.callApi(
        '/v{api-version}/geocachetypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the referenceDataGetMembershipLevels operation.
     * @callback module:api/ReferenceDataApi~referenceDataGetMembershipLevelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MembershipLevel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the membership levels
     * @param {String} apiVersion The requested API version
     * @param {module:api/ReferenceDataApi~referenceDataGetMembershipLevelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MembershipLevel>}
     */
    referenceDataGetMembershipLevels(apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling referenceDataGetMembershipLevels");
      }

      let pathParams = {
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
      let returnType = [MembershipLevel];
      return this.apiClient.callApi(
        '/v{api-version}/membershiplevels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the referenceDataGetStates operation.
     * @callback module:api/ReferenceDataApi~referenceDataGetStatesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/State>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the state (aka region) names and ids
     * @param {String} apiVersion The requested API version
     * @param {module:api/ReferenceDataApi~referenceDataGetStatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/State>}
     */
    referenceDataGetStates(apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling referenceDataGetStates");
      }

      let pathParams = {
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
      let returnType = [State];
      return this.apiClient.callApi(
        '/v{api-version}/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the referenceDataGetStatesByCountry operation.
     * @callback module:api/ReferenceDataApi~referenceDataGetStatesByCountryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/State>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the state (aka region) names and ids
     * @param {Number} countryId 
     * @param {String} apiVersion The requested API version
     * @param {module:api/ReferenceDataApi~referenceDataGetStatesByCountryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/State>}
     */
    referenceDataGetStatesByCountry(countryId, apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'countryId' is set
      if (countryId === undefined || countryId === null) {
        throw new Error("Missing the required parameter 'countryId' when calling referenceDataGetStatesByCountry");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling referenceDataGetStatesByCountry");
      }

      let pathParams = {
        'countryId': countryId,
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
      let returnType = [State];
      return this.apiClient.callApi(
        '/v{api-version}/countries/{countryId}/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the referenceDataGetTrackableLogTypes operation.
     * @callback module:api/ReferenceDataApi~referenceDataGetTrackableLogTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TrackableLogType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the trackable log types
     * @param {String} apiVersion The requested API version
     * @param {module:api/ReferenceDataApi~referenceDataGetTrackableLogTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TrackableLogType>}
     */
    referenceDataGetTrackableLogTypes(apiVersion, callback) {
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling referenceDataGetTrackableLogTypes");
      }

      let pathParams = {
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
      let returnType = [TrackableLogType];
      return this.apiClient.callApi(
        '/v{api-version}/trackablelogtypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
