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
* @version v1
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
     * Returns the available attributes
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AttributeType>} and HTTP response
     */
    referenceDataGetAttributesWithHttpInfo(apiVersion) {
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [AttributeType];
      return this.apiClient.callApi(
        '/v{api-version}/attributes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the available attributes
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AttributeType>}
     */
    referenceDataGetAttributes(apiVersion) {
      return this.referenceDataGetAttributesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns current list of country ids and names
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Country>} and HTTP response
     */
    referenceDataGetCountriesWithHttpInfo(apiVersion) {
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [Country];
      return this.apiClient.callApi(
        '/v{api-version}/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns current list of country ids and names
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Country>}
     */
    referenceDataGetCountries(apiVersion) {
      return this.referenceDataGetCountriesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the geocache log types
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GeocacheLogType>} and HTTP response
     */
    referenceDataGetGeocacheLogTypesWithHttpInfo(apiVersion) {
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [GeocacheLogType];
      return this.apiClient.callApi(
        '/v{api-version}/geocachelogtypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the geocache log types
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GeocacheLogType>}
     */
    referenceDataGetGeocacheLogTypes(apiVersion) {
      return this.referenceDataGetGeocacheLogTypesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the available geocache types
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GeocacheType>} and HTTP response
     */
    referenceDataGetGeocacheTypesWithHttpInfo(apiVersion) {
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [GeocacheType];
      return this.apiClient.callApi(
        '/v{api-version}/geocachetypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the available geocache types
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GeocacheType>}
     */
    referenceDataGetGeocacheTypes(apiVersion) {
      return this.referenceDataGetGeocacheTypesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the membership levels
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MembershipLevel>} and HTTP response
     */
    referenceDataGetMembershipLevelsWithHttpInfo(apiVersion) {
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [MembershipLevel];
      return this.apiClient.callApi(
        '/v{api-version}/membershiplevels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the membership levels
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MembershipLevel>}
     */
    referenceDataGetMembershipLevels(apiVersion) {
      return this.referenceDataGetMembershipLevelsWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the state (aka region) names and ids
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/State>} and HTTP response
     */
    referenceDataGetStatesWithHttpInfo(apiVersion) {
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [State];
      return this.apiClient.callApi(
        '/v{api-version}/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the state (aka region) names and ids
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/State>}
     */
    referenceDataGetStates(apiVersion) {
      return this.referenceDataGetStatesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the state (aka region) names and ids
     * @param {Number} countryId 
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/State>} and HTTP response
     */
    referenceDataGetStatesByCountryWithHttpInfo(countryId, apiVersion) {
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [State];
      return this.apiClient.callApi(
        '/v{api-version}/countries/{countryId}/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the state (aka region) names and ids
     * @param {Number} countryId 
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/State>}
     */
    referenceDataGetStatesByCountry(countryId, apiVersion) {
      return this.referenceDataGetStatesByCountryWithHttpInfo(countryId, apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the trackable log types
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TrackableLogType>} and HTTP response
     */
    referenceDataGetTrackableLogTypesWithHttpInfo(apiVersion) {
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

      let authNames = ['AccessToken'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/json-patch+json', 'text/json'];
      let returnType = [TrackableLogType];
      return this.apiClient.callApi(
        '/v{api-version}/trackablelogtypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the trackable log types
     * @param {String} apiVersion The requested API version
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TrackableLogType>}
     */
    referenceDataGetTrackableLogTypes(apiVersion) {
      return this.referenceDataGetTrackableLogTypesWithHttpInfo(apiVersion)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
